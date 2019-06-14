export default class WidgetService {
    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    saveAllWidgets = (widgets,topicId) =>
        fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/topic/${topicId}/widgets`, {
            method: 'PUT',
            body: JSON.stringify(widgets),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    createWidget = (widget,topicId) =>
        fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/topic/${topicId}/widgets`, {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    findAllWidgets = (topicId) =>
        fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/topic/${topicId}/widgets/`)
            .then(response => response.json())

    findWidgetById = widgetId => {
        return this.findAllWidgets.find(widget => widget.id == widgetId)
    }
    deleteWidget = widgetId =>
        fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/widgets/${widgetId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    updateWidget = (newWidget) =>
        fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/widgets/${newWidget.id}`, {
            method: 'PUT',
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
}