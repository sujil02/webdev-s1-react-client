import widgetService from '../services/WidgetService'
const service = widgetService.getInstance();
let widgets = service.findAllWidgets();

const widgetReducer = (state = {widgets: widgets}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            break;
        case "FIND_ALL_WIDGETS":
            break;
        case "DELETE_WIDGET":
            break;
        default:
            return state;
    }
}

export default widgetReducer;