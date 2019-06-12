export default class WidgetService {
    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    saveAllWidgets = (widgets) =>
        fetch(`localhost/api/widgets`, {
            method: 'PUT',
            body: JSON.stringify(widgets),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    createWidget = widget =>
        fetch("http://localhost:8080/api/widgets", {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json())

    findWidgetById = widgetId => {
        return this.findAllWidgets.find(widget => widget.id == widgetId)
    }
    deleteWidget = widgetId =>
        fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    updateWidget = (newWidget) =>
        fetch(`http://localhost:8080/api/widgets/${newWidget.id}`, {
            method: 'PUT',
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
}