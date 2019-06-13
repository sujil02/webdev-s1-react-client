import React from 'react'
import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
import service from '../services/WidgetService'

const widgetService = service.getInstance()

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const propertyToDispatchMapper = dispatch => ({

    saveAllWidgets: widgets => {
        Array.from(widgets)
        widgetService
            .saveAllWidgets(widgets)
            .then(widgets =>
                dispatch({
                    type: 'SAVE_ALL_WIDGETS',
                    widgets: widgets
                }))
    },
    updateWidget: newWidget =>
        widgetService
            .updateWidget(newWidget)
            .then(widgets =>
                dispatch({
                    type: 'UPDATE_WIDGET',
                    widgets: widgets
                })),
    changeWidget: (widgets, widget) => {
        widgets = widgets.filter(w => w.id != widget.id)
        widgets.push(widget)
        dispatch({
            type: 'CHANGE_WIDGET',
            widgets: widgets
        })
    },
    changeWidgetOrder: (widgets, widget, type) => {
        let currentIndex
        widgets.forEach(function (w, index) {
            if (w.id == widget.id) {
                currentIndex = index
            }
        })
        if (type === 'INC') {
            let currentOrder = widgets[currentIndex].widgetOrder
            widgets[currentIndex].widgetOrder = widgets[currentIndex - 1].widgetOrder
            widgets[currentIndex - 1].widgetOrder = currentOrder

        } else if (type === 'DEC' && currentIndex != widgets.length - 1) {
            let currentOrder = widgets[currentIndex].widgetOrder
            widgets[currentIndex].widgetOrder = widgets[currentIndex + 1].widgetOrder
            widgets[currentIndex + 1].widgetOrder = currentOrder
        }
        widgets = widgets.filter(w => w.id != widget.id)
        widgets.push(widget)
        dispatch({
            type: 'ORDER_WIDGET',
            widgets: widgets
        })
    },
    deleteWidget: widgetId =>
        widgetService
            .deleteWidget(widgetId)
            .then(widgets =>
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgets: widgets
                })),
    createWidget: (widgets, widgetMaxOrder) => {
        widgetService
            .createWidget({
                name: 'New Widget',
                type: 'HEADING',
                text: 'New Widget',
                size: '1',
                widgetOrder: widgetMaxOrder+1
            })
            .then(widgets =>
                dispatch({
                    type: 'CREATE_WIDGET',
                    widgets: widgets
                }))
    },
    findAllWidgets: () =>
        widgetService
            .findAllWidgets()
            .then(widgets =>
                dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                }))
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(WidgetList)

export default WidgetListContainer