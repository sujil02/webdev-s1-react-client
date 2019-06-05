import React from 'react'

export default class ListWidget extends React.Component {

    render() {
        return (
            <div>
                <div className="card widgetCss">
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
                                    value={this.props.widget.type}>
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
                                        () => this.props.deleteWidget(this.props.widget.id)
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
                                   defaultValue={this.props.widget.name}/>
                        </div>
                    </form>
                    <h4>Preview</h4>
                    <ul>
                        <li>{this.props.widget.name}</li>
                        <li>{this.props.widget.id}</li>
                        <li>{this.props.widget.type}</li>
                    </ul>
                </div>
            </div>

        )
    }

}