import React from 'react'

export default class ImageWidget extends React.Component {
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
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
                    <form style={{'padding': '10.1em'}}>
                        <div className="form-group">
                            <input className="form-control" placeholder="Image Widget"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Widget Name"/>
                        </div>
                    </form>
                            <h4><strong>Preview</strong></h4>
                            <img  src="https://picsum.photos/300/200"/>
                </div>
        )
    }

}