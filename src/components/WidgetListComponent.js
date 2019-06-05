import React from 'react'
import WidgetListItemComponent from './WidgetListItemComponent'
import HeadingWidget from "./HeadingWidget";
import {If, Then} from 'react-if'
import {Switch, Case, Default} from 'react-if'
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

class WidgetListComponent extends React.Component {//({widgets}) =>
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
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
            <div style={{'padding': '10px'}}>
                <h1>Widget List {this.props.widgets.length}
                    {!this.state.editing &&
                    <button className="btn btn-primary" onClick={this.toggleEditing}>
                        Edit
                    </button>
                    }
                    {this.state.editing &&
                    <button className="btn btn-success" onClick={this.toggleEditing}>
                        Save
                    </button>
                    }
                </h1>
                {
                    this.props.widgets.map(
                        widget =>
                            <Switch>
                                <Case condition={widget.type === 'HEADING'}>
                                    <HeadingWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        widget={widget}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'LIST'}>
                                    <ListWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        widget={widget}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'PARAGRAPH'}>
                                    <ParagraphWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        widget={widget}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'IMAGE'}>
                                    <ImageWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        widget={widget}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'LINK'}>
                                    <LinkWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        widget={widget}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                            </Switch>
                    )
                }
                <div className="row justify-content-end">
                    <button className="btn btn-danger" onClick={this.props.createWidget}>
                        <i className="fa fa-plus-circle"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default WidgetListComponent