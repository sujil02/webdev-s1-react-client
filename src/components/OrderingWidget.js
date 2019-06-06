import React from 'react'
import {If, Else} from 'react-if'

const orderingWidget = ({widget, changeWidgetOrder, changeWidget, deleteWidget}) =>
    <div>
        <If condition={widget.order != 0}>
            <button className="btn btn-warning" onClick={
                () => changeWidgetOrder(widget, 'INC')
            }>
                <i className="fa fa-arrow-up"></i>
            </button>
        </If>
        <button className="btn btn-warning" onClick={
            () => changeWidgetOrder(widget, 'DEC')
        }>
            <i className="fa fa-arrow-down"></i>
        </button>
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