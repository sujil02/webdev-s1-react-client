import widgetService from '../services/WidgetService'

const service = widgetService.getInstance();
let widgets = service.findAllWidgets();

const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "SAVE_ALL_WIDGETS":
        case "DELETE_WIDGET":
        case "UPDATE_WIDGET":
        case "CHANGE_WIDGET":
        case "ORDER_WIDGET":
            return {
                widgets: action.widgets.sort(function (a, b) {
                    return a.order - b.order
                })
            }
        default:
            return state;
    }
}

export default widgetReducer;