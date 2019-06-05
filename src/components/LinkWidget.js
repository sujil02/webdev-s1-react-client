import React from 'react'

export default class LinkWidget extends React.Component {
    constructor(props) {
        super(props);
    }

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
                            <input className="form-control" placeholder="Link Widget"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Link text"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Widget Name"/>
                        </div>
                    </form>
                    <div className="row">
                        <div className="d-flex">
                            <h4><strong>Preview</strong></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex">
                            <a className="card-img-top" href="https://picsum.photos/300/200" alt="Card image cap"/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}