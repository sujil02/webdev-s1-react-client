import React from 'react'
import {Switch, Case, If, Else} from 'react-if'
import WidgetListComponent from "./WidgetListComponent";

class WidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets(this.props.topicId)
    }

    state = {
        editing: false
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
    findMaxWidgetOrder = (widgets) => {
        let maxWidgetOrder =0
        widgets.forEach(function (c, index) {
            if (c.widgetOrder > maxWidgetOrder) {
                maxWidgetOrder = c.widgetOrder
            }
        })
        return maxWidgetOrder
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId!==undefined && this.props.topicId!==undefined){
            if(prevProps.topicId !== this.props.topicId) {
                this.props.findAllWidgets();
            }
        }
    }

    render() {
        return (
            <div style={{'padding': '10px'}}>
                {/*{this.findMaxWidgetOrder(this.props.widgets)}*/}
                <h1>Widget List {this.props.widgets.length}
                    <div className="float-right">
                        <button className="btn btn-success"
                                onClick={(event) => {
                                    window.alert("Changes saved Successfully.")
                                    this.props.saveAllWidgets(
                                        this.props.widgets
                                    )
                                }}>
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
                <WidgetListComponent
                    updateWidget={this.props.updateWidget}
                    changeWidget={this.changeWidget}
                    changeWidgetOrder={this.changeWidgetOrder}
                    widgets={this.props.widgets}
                    editMode={this.state.editing}
                    maxWidgetOrder = {this.findMaxWidgetOrder(this.props.widgets)}
                    createWidget={this.props.createWidget}
                    deleteWidget={this.props.deleteWidget}
                />


            </div>
        )
    }
}

export default WidgetList