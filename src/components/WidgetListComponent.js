import React from 'react'
import HeadingWidget from "./HeadingWidget";
import {Switch, Case, If, Else} from 'react-if'
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
        editing: true
    }
    toggleEditing = () =>
        this.setState({
            editing: !this.state.editing
        })
    changeWidgetOrder = (widget, type) => {
        this.props.changeWidgetOrder(this.props.widgets, widget, type)
    }
    changeWidget = (widget) => {
        this.props.changeWidget(this.props.widgets, widget)
    }

    render() {
        return (
            <div style={{'padding': '10px'}}>
                <h1>Widget List {this.props.widgets.length}
                    <div className="float-right">
                        <button className="btn btn-success"
                                onClick={(event) => this.props.saveAllWidgets({
                                    ...this.props.widgets,
                                })}>
                            Save
                        </button>
                        <If condition={this.state.editing}>
                            <button className="btn btn-primary" onClick={this.toggleEditing}>
                                Preview
                            </button>
                            <Else>
                                <button className="btn btn-primary" onClick={this.toggleEditing}>
                                    Edit
                                </button>
                            </Else>
                        </If>
                    </div>
                </h1>
                {
                    this.props.widgets.map(
                        widget =>
                            <Switch>
                                <Case condition={widget.type === 'HEADING'}>
                                    <HeadingWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        changeWidget={this.changeWidget}
                                        changeWidgetOrder={this.changeWidgetOrder}
                                        widget={widget}
                                        editMode={this.state.editing}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'LIST'}>
                                    <ListWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        changeWidget={this.changeWidget}
                                        changeWidgetOrder={this.changeWidgetOrder}
                                        widget={widget}
                                        editMode={this.state.editing}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'PARAGRAPH'}>
                                    <ParagraphWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        changeWidget={this.changeWidget}
                                        changeWidgetOrder={this.changeWidgetOrder}
                                        widget={widget}
                                        editMode={this.state.editing}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'IMAGE'}>
                                    <ImageWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        changeWidget={this.changeWidget}
                                        changeWidgetOrder={this.changeWidgetOrder}
                                        widget={widget}
                                        editMode={this.state.editing}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                                <Case condition={widget.type === 'LINK'}>
                                    <LinkWidget
                                        key={widget.id}
                                        updateWidget={this.props.updateWidget}
                                        changeWidget={this.changeWidget}
                                        changeWidgetOrder={this.changeWidgetOrder}
                                        widget={widget}
                                        editMode={this.state.editing}
                                        deleteWidget={this.props.deleteWidget}/>
                                </Case>
                            </Switch>
                    )
                }
                <div className="row justify-content-end">
                    <button className="btn btn-danger" onClick={
                        () => {
                            var last_element = this.props.widgets[this.props.widgets.length - 1];
                            this.props.createWidget(last_element.order)
                        }
                    }>
                        <i className="fa fa-plus-circle"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default WidgetListComponent