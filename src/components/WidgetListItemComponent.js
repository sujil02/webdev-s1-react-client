import React from 'react'
import HeadingWidget from "./HeadingWidget";

export default class WidgetListItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false
    }
    toggleEditing = () =>
        this.setState({
            editing: !this.state.editing
        })

    render() {
        return (
            <div>
                <div className="card widgetCss">
                    <li>
                        {/*    <div className="card-header">*/}
                        {/*        <div className="row justify-content-end ml-auto mr-1">*/}
                        {/*            {!this.state.editing &&*/}
                        {/*            <button className="btn btn-primary" onClick={this.toggleEditing}>*/}
                        {/*                Edit*/}
                        {/*            </button>*/}
                        {/*            }*/}
                        {/*            {this.state.editing &&*/}
                        {/*            <button className="btn btn-success" onClick={this.toggleEditing}>*/}
                        {/*                Save*/}
                        {/*            </button>*/}
                        {/*            }*/}
                        {/*            {this.state.editing &&*/}
                        {/*            <span>*/}
                        {/*        <select*/}
                        {/*            onChange={(event) => this.props.updateWidget({*/}
                        {/*                ...this.props.widget,*/}
                        {/*                type: event.target.value*/}
                        {/*            })}*/}
                        {/*            value={this.props.widget.type}>*/}
                        {/*            <option value="HEADING">Heading</option>*/}
                        {/*            <option value="PARAGRAPH">Paragraph</option>*/}
                        {/*            <option value="YOUTUBE">YouTube</option>*/}
                        {/*            <option value="LIST">List</option>*/}
                        {/*            <option value="LINK">Link</option>*/}
                        {/*            <option value="IMAGE">Image</option>*/}
                        {/*        </select>*/}

                        {/*    </span>*/}
                        {/*            }*/}

                        {/*            <button className="btn btn-warning" style={{'margin': '0.1em'}}>*/}
                        {/*                <i className="fa fa-arrow-up"></i>*/}
                        {/*            </button>*/}
                        {/*            <button className="btn btn-warning" style={{'margin': '0.1em'}}>*/}
                        {/*                <i className="fa fa-arrow-down"></i>*/}
                        {/*            </button>*/}
                        {/*            <button className="btn btn-danger" style={{'margin': '0.1em'}}*/}
                        {/*                    onClick={*/}
                        {/*                        () => this.props.deleteWidget(this.props.widget.id)*/}
                        {/*                    }>*/}
                        {/*                <i className="fa fa-close"></i>*/}
                        {/*            </button>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <form>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <input className="form-control" placeholder="Heading Widget"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <select className="form-control"*/}
                        {/*                onChange={(event) => this.props.updateWidget({*/}
                        {/*                    ...this.props.widget,*/}
                        {/*                    type: event.target.value*/}
                        {/*                })}*/}
                        {/*                value={this.props.widget.type}>*/}
                        {/*                <option value="HEADING">Heading</option>*/}
                        {/*                <option value="PARAGRAPH">Paragraph</option>*/}
                        {/*                <option value="YOUTUBE">YouTube</option>*/}
                        {/*                <option value="LIST">List</option>*/}
                        {/*                <option value="LINK">Link</option>*/}
                        {/*                <option value="IMAGE">Image</option>*/}
                        {/*            </select>*/}
                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <input className="form-control" placeholder="Widget Name"/>*/}
                        {/*        </div>*/}
                        {/*    </form>*/}
                        {/*    {(() => {*/}
                        {/*        switch (this.props.widget.type) {*/}
                        {/*            case "HEADING":   return <WidgetListItemComponent></WidgetListItemComponent>;*/}
                        {/*            case "green": return "#00FF00";*/}
                        {/*            case "blue":  return "#0000FF";*/}
                        {/*            default:      return "#FFFFFF";*/}
                        {/*        }*/}
                        {/*    })()}*/}
                    </li>
                </div>
            </div>

        )
    }

}