import React from 'react'
import {If} from "react-if";
import OrderingWidget from "./OrderingWidget";

const ListWidget = ({widget, changeWidget, changeWidgetOrder, deleteWidget, editMode}) =>
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
                            />
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="List Widget"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option>Unordered list</option>
                                <option>Ordered list</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Widget Name"
                                   defaultValue={widget.name}/>
                        </div>
                    </form>
                    <h4><strong>Preview</strong></h4>
                </div>
            </If>
            <ul>
                <li>{widget.name}</li>
                <li>{widget.id}</li>
                <li>{widget.type}</li>
            </ul>
        </div>
    </div>
export default ListWidget