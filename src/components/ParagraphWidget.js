import React from 'react'
import {If} from "react-if";
import OrderingWidget from "./OrderingWidget";

const ParagraphWidget = ({widget, changeWidget, changeWidgetOrder, deleteWidget, editMode}) =>
    <div className="card widgetCss">
        <If condition={editMode}>
            <div>
                <div className="card-header">
                    <div className="row justify-content-end ml-auto mr-1">
                        <OrderingWidget
                            widget={widget}
                            changeWidgetOrder={changeWidgetOrder}
                            changeWidget={changeWidget}
                            editMode={editMode}
                            deleteWidget={deleteWidget}
                        />
                    </div>
                    <h3>Paragraph Widget</h3>
                </div>
                <form>
                    <div className="form-group">
                            <textarea className="form-control"
                                      placeholder="Paragraph Widget"
                                      defaultValue={widget.text}
                                      onChange={(event) => changeWidget(
                                          widget = ({
                                              ...widget, text: event.target.value
                                          })
                                      )}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Widget Name"
                               defaultValue={widget.name}
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
            <p>{widget.text}</p>
        </div>
    </div>
export default ParagraphWidget