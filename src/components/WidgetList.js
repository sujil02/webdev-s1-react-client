import React from 'react'

const WidgetList = ({widgets}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
        <ul>
            {
                widgets.map(widget =>
                    <li>{widget.name}</li>
                )
            }
        </ul>
    </div>

export default WidgetList