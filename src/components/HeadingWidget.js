import React from 'react'
import {If, Then} from 'react-if'

const HeadingWidget = ({widgets, widget, changeWidget, deleteWidget, editMode}) =>
    <div>
        <div className="card widgetCss">
            <If condition={editMode}>
                <div>
                    <div className="card-header">
                        <div className="row justify-content-end ml-auto mr-1">
                            <If condition={widget.order != 1}>
                                <button className="btn btn-warning" style={{'margin': '0.1em'}}>
                                    <i className="fa fa-arrow-up"></i>
                                </button>
                            </If>
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
                                   placeholder="Heading Widget"
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
                            <select className="form-control">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                   defaultValue={widget.name}
                                   placeholder="Widget Name"/>
                        </div>
                    </form>
                    <h4><strong>Preview</strong></h4>
                </div>
            </If>
            <div>
                <h2>{widget.text}</h2>
            </div>
        </div>
    </div>

export default HeadingWidget