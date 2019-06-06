import React from 'react'
import {If} from "react-if";

const ParagraphWidget = ({widgets, widget, changeWidget, deleteWidget, editMode}) =>
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
                            <textarea className="form-control"
                                      placeholder="Paragraph Widget"
                                      defaultValue={widget.text}/>
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
            <p>{widget.text}</p>
        </div>
    </div>
export default ParagraphWidget