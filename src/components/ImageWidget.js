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
                </div>
                <form style={{'padding': '10.1em'}}>
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Image Widget"
                               onChange={(event) => changeWidget(
                                   widget = ({
                                       ...widget, text: event.target.value
                                   })
                               )}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Widget Name"/>
                    </div>
                </form>
                <h4><strong>Preview</strong></h4>

            </div>
        </If>
        <img src="https://picsum.photos/300/200"/>
    </div>
export default imageWidget