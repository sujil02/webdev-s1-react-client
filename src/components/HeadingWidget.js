import React from 'react'
import OrderingWidget from "./OrderingWidget";
import {If, Else} from 'react-if'

const getHeading = (widget) =>
{
    switch (widget.size.toString()) {
        case "1":
            return (<h1>{widget.text}</h1>)
        case "2":
            return (<h2>{widget.text}</h2>)
        case "3":
            return (<h3>{widget.text}</h3>)
        case "4":
            return (<h4>{widget.text}</h4>)
        case "5":
            return (<h5>{widget.text}</h5>)
        case "6":
            return (<h6>{widget.text}</h6>)

    }

}
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
                                changeWidget={changeWidget}
                                editMode={editMode}
                                deleteWidget={deleteWidget}
                            />
                        </div>
                        <h3>Heading Widget</h3>
                    </div>
                    <form>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Heading Widget"
                                   value={widget.text}
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
                                            ...widget, size: event.target.value
                                        })
                                    )}
                                    defaultValue={widget.size}>
                                <option value="1">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                                <option value="4">Heading 4</option>
                                <option value="5">Heading 5</option>
                                <option value="6">Heading 6</option>
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
                {getHeading(widget)}
            </div>
        </div>
        < /div>

            export default HeadingWidget