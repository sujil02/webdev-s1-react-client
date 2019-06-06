import React from 'react'
import {If} from "react-if";

const ListWidget = ({widgets, widget, changeWidget, deleteWidget, editMode}) =>
    <div>
        <div className="card widgetCss">
            <If condition={editMode}>
                <div>
                    <div className="card-header">
                        <div className="row justify-content-end ml-auto mr-1">
                            <If condition={widget.order != 0}>
                                <button className="btn btn-warning" style={{'margin': '0.1em'}}>
                                    <i className="fa fa-arrow-up"></i>
                                </button>
                            </If>
                            <button className="btn btn-warning" style={{'margin': '0.1em'}}>
                                <i className="fa fa-arrow-down"></i>
                            </button>
                            <span>
                                <select
                                    defaultValue={widget.type}>
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