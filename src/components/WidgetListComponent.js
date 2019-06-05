import React from 'react'
import WidgetListItemComponent from './WidgetListItemComponent'

class WidgetListComponent extends React.Component {//({widgets}) =>
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }

    render() {
        return (
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <ul>
                    {
                        this.props.widgets.map(
                            widget =>
                                <WidgetListItemComponent
                                    key={widget.id}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}/>
                        )
                    }
                </ul>
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