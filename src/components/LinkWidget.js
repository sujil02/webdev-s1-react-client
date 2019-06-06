import React from 'react'
import {If} from "react-if";

const linkWidget = ({widgets, widget, changeWidget, deleteWidget, editMode}) =>
    <div>
        <div className="card widgetCss">
            <If condition={editMode}>
            <div>
                <div className="card-header">
                    <div className="row justify-content-end ml-auto mr-1">
                        <button className="btn btn-warning" style={{'margin': '0.1em'}}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button className="btn btn-warning" style={{'margin': '0.1em'}}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <span>
                                <select
                                    onChange={(event) => this.props.updateWidget({
                                        ...this.props.widget,
                                        type: event.target.value
                                    })}
                                    value={widget.type}>
                                    <option value="HEADING">Heading</option>
                                    <option value="PARAGRAPH">Paragraph</option>
                                    <option value="YOUTUBE">YouTube</option>
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
                </div>
                <form>
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Link URL"
                               defaultValue={widget.srcUrl}
                               onChange={(event) => changeWidget(
                                   widgets = widgets,
                                   widget = ({
                                       ...widget, text: event.target.value
                                   })
                               )}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Link text"
                               defaultValue={widget.text}
                               onChange={(event) => changeWidget(
                                   widgets = widgets,
                                   widget = ({
                                       ...widget, text: event.target.value
                                   })
                               )}
                        />
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
            <div>
                <a href={widget.srcUrl}>Click here to checkout the Link</a>
            </div>
        </div>
    </div>
export default linkWidget