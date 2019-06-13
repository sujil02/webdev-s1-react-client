import React from 'react'
import {If, Else} from 'react-if'

const orderingWidget = ({widget, changeWidgetOrder, maxWidgetOrder,changeWidget, deleteWidget}) =>
    <div>
        <If condition={widget.widgetOrder != 1}>
            <button className="btn btn-warning" onClick={
                () => changeWidgetOrder(widget, 'INC')
            }>
                <i className="fa fa-arrow-up"></i>
            </button>
        </If>
        <If condition={widget.widgetOrder != maxWidgetOrder}>
        <button className="btn btn-warning" onClick={
            () => changeWidgetOrder(widget, 'DEC')
        }>
            <i className="fa fa-arrow-down"></i>
        </button>
        </If>
        <span>
            <select
                onChange={(event) => changeWidget({
                    ...widget,
                    type: event.target.value
                })}
                value={widget.type}>
                <option value="HEADING">Heading</option>
                <option value="PARAGRAPH">Paragraph</option>
                <option value="LIST">List</option>
                <option value="LINK">Link</option>
                <option value="IMAGE">Image</option>
            </select>
        </span>
        <button className="btn btn-danger" style={{'margin': '0.1em'}}
                onClick={
                    () => deleteWidget(widget.id)
                }>
            <i className="fa fa-close"></i>
        </button>
    </div>
export default orderingWidget