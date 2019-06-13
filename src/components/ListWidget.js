import React from 'react'
import {If} from "react-if";
import OrderingWidget from "./OrderingWidget";

const ListWidget = ({widget, changeWidget,maxWidgetOrder, changeWidgetOrder, deleteWidget, editMode}) =>
    <div>
        <div className="card widgetCss">
            <If condition={editMode}>
                <div>
                    <div className="card-header">
                        <div className="row justify-content-end ml-auto mr-1">
                            <OrderingWidget
                                widget={widget}
                                changeWidgetOrder={changeWidgetOrder}
                                editMode={editMode}
                                changeWidget={changeWidget}
                                deleteWidget={deleteWidget}
                                maxWidgetOrder={maxWidgetOrder}
                            />
                        </div>
                        <h3>List Widget</h3>
                    </div>
                    <form>
                        <div className="form-group">
                            <textarea className="form-control"
                                      placeholder="List Widget"
                                      defaultValue={widget.text}
                                      onChange={(event) => changeWidget(
                                          widget = ({
                                              ...widget, text: event.target.value
                                          })
                                      )}
                            />
                        </div>
                        <div className="form-group">
                            <select className="form-control"
                                    onChange={(event) => changeWidget(
                                        widget = ({
                                            ...widget, choice: event.target.value
                                        })
                                    )}>
                                <option value="1">Unordered list</option>
                                <option value="2">Ordered list</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Widget Name"
                                   defaultValue={widget.name}
                                   onChange={(event) => changeWidget(
                                       widget = ({
                                           ...widget, name: event.target.value
                                       })
                                   )}
                            />
                        </div>
                    </form>
                    <h4><strong>Preview</strong></h4>
                </div>
            </If>
            <div>
                {getList(widget)}
            </div>
        </div>
    </div>
export default ListWidget

const getList = (widget) => {
    var arrayText = widget.text.split("\n");
    switch (widget.choice) {
        case 1:
            return (
                <ul>
                    {arrayText
                        .map((list_item, index) => {
                            return <li className="nav-item" key={index}>
                                {list_item}
                            </li>
                        })}
                </ul>)
        break
        case 2:
            return (
                <ol>
                    {arrayText
                        .map((list_item, index) => {
                            return <li className="nav-item" key={index}>
                                {list_item}
                            </li>
                        })}
                </ol>)
    }
}