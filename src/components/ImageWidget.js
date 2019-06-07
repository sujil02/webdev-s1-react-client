import React from 'react'
import {If} from "react-if";
import OrderingWidget from "./OrderingWidget";

const imageWidget = ({widget, changeWidget, changeWidgetOrder, deleteWidget, editMode}) =>
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
                    <h3>Image Widget</h3>
                </div>
                <form style={{'padding': '1.1em'}}>
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Image Widget"
                               defaultValue={widget.srcUrl}
                               onChange={(event) => changeWidget(
                                   widget = ({
                                       ...widget, srcUrl: event.target.value
                                   })
                               )}
                        />
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
        <img src={widget.srcUrl} width={500}/>
    </div>
export default imageWidget