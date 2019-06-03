import React from 'react'
import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const WidgetListContainer = connect(
    stateToPropertyMapper
)(WidgetList)

export default WidgetListContainer