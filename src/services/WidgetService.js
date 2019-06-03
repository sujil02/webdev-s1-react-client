import widgets from './widgets.json'

export default class WidgetService {
    static myInstance = null;
    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget => {
        widgets.push(widget)
    }
    findAllWidgets = () =>
        widgets

    findWidgetById = widgetId => {
        return widgets.find(widget => widget.id == widgetId)
    }
    deleteWidget = widgetId => {
        widgets = widgets.filter(widget => widget.id !== widgetId)
    }
    udpateWidget = (widgetId, newwidget) => {
        widgets = widgets.map(widget => {
            if(widget.id != widgetId)
                return widget;
            else
                return newwidget;
        })
    }
}