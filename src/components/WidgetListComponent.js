import React from 'react'
import HeadingWidget from "./HeadingWidget";
import {Switch, Case, If, Else} from 'react-if'
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

const WidgetListComponent = ({widgets, createWidget, changeWidget, changeWidgetOrder, updateWidget, deleteWidget, editMode}) =>
    <div>
        {
        widgets.map(
            widget =>
                <Switch>
                    <Case condition={widget.type === 'HEADING'}>
                        <HeadingWidget
                            key={widget.id}
                            updateWidget={updateWidget}
                            changeWidget={changeWidget}
                            changeWidgetOrder={changeWidgetOrder}
                            widget={widget}
                            editMode={editMode}
                            deleteWidget={deleteWidget}/>
                    </Case>
                    <Case condition={widget.type === 'LIST'}>
                        <ListWidget
                            key={widget.id}
                            updateWidget={updateWidget}
                            changeWidget={changeWidget}
                            changeWidgetOrder={changeWidgetOrder}
                            widget={widget}
                            editMode={editMode}
                            deleteWidget={deleteWidget}/>
                    </Case>
                    <Case condition={widget.type === 'PARAGRAPH'}>
                        <ParagraphWidget
                            key={widget.id}
                            updateWidget={updateWidget}
                            changeWidget={changeWidget}
                            changeWidgetOrder={changeWidgetOrder}
                            widget={widget}
                            editMode={editMode}
                            deleteWidget={deleteWidget}/>
                    </Case>
                    <Case condition={widget.type === 'IMAGE'}>
                        <ImageWidget
                            key={widget.id}
                            updateWidget={updateWidget}
                            changeWidget={changeWidget}
                            changeWidgetOrder={changeWidgetOrder}
                            widget={widget}
                            editMode={editMode}
                            deleteWidget={deleteWidget}/>
                    </Case>
                    <Case condition={widget.type === 'LINK'}>
                        <LinkWidget
                            key={widget.id}
                            updateWidget={updateWidget}
                            changeWidget={changeWidget}
                            changeWidgetOrder={changeWidgetOrder}
                            widget={widget}
                            editMode={editMode}
                            deleteWidget={deleteWidget}/>
                    </Case>
                </Switch>
        )
    }
        <div className="row justify-content-end">
            <button className="btn btn-danger" onClick={
                () => {
                    var last_element = widgets[widgets.length - 1];
                    createWidget(widgets,last_element.order)
                }
            }>
                <i className="fa fa-plus-circle"></i>
            </button>
        </div>
    </div>

export default WidgetListComponent