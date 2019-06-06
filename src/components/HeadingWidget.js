import React from 'react'
import OrderingWidget from "./OrderingWidget";
import {If, Else} from 'react-if'

const HeadingWidget = ({widget, changeWidget, changeWidgetOrder, deleteWidget, editMode}) =>
    <div>
        <div className="card widgetCss">
            <If condition={editMode}>
                <div>
                    <div className="card-header">
                        <div className="row justify-content-end ml-auto mr-1">
                            <OrderingWidget
                                widget={widget}
                                changeWidgetOrder={changeWidgetOrder}
                                changeWidget = {changeWidget}
                                editMode={editMode}
                                deleteWidget={deleteWidget}
                            />
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Heading Widget"
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
                                            ...widget, cssClass: event.target.value
                                        })
                                    )}
                                    defaultValue={widget.cssClass}>
                                <option value="H1">Heading 1</option>
                                <option value="H2">Heading 2</option>
                                <option value="H3">Heading 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                   defaultValue={widget.name}
                                   placeholder="Widget Name"
                                   onChange={(event) => changeWidget(
                                       widget = ({
                                           ...widget, name: event.target.value
                                       })
                                   )}/>
                        </div>
                    </form>
                    <h4><strong>Preview</strong></h4>
                </div>
            </If>
            <div>
                <If condition={widget.cssClass === "H2"}>
                    <h2>{widget.text}</h2>
                    <Else>
                        <h1>{widget.text}</h1>
                    </Else>
                </If>
            </div>
        </div>
    </div>

export default HeadingWidget