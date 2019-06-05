import React from 'react'
import CourseEditor from "../containers/CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseTable from '../containers/CourseTable'
import CourseGrid from '../containers/CourseGrid'
import CourseService from '../services/CourseService';
import '../css/Whiteboard.css'
import {createStore} from 'redux'
import WidgetService from '../services/WidgetService'
import WidgetReducer from '../reducers/WidgetReducer'
import {Provider} from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'

let courseService =
    CourseService.getInstance();
const store = createStore(WidgetReducer)

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props)
        this.courses =
            courseService.findAllCourses()
        this.widgetService = WidgetService.getInstance()
        this.state = {
            widgets: this.widgetService.findAllWidgets()
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container-fluid containerCSS">
                        <div className="container-fluid">
                            <div className="whiteBoardHeader">
                                <h1>WhiteBoard</h1>
                                <div className="linksCss">
                                    <Link to="/course-list">List -</Link>
                                    <Link to="/course-grid">- Grid -</Link>
                                    <Link to="/widgets">- Widgets</Link>
                                </div>
                                <Route
                                    exact path="/course-grid"
                                    render={() => <CourseGrid courses={courseService.findAllCourses()}/>}/>
                                <Route
                                    exact path="/widgets"
                                    render={() => <WidgetListContainer/>}/>
                                <Route
                                    path="/course-list"
                                    render={() => <CourseTable courses={courseService.findAllCourses()}/>}/>
                                <Route
                                    path="/course-editor/:courseId/:moduleId/:lessonId"
                                    render={(props) => <CourseEditor {...props} courses={this.courses}/>}/>
                                <Route
                                    exact path="/course-editor/:courseId"
                                    render={props => <CourseEditor courses={this.courses}/>}/>
                                <Route
                                    exact path="/course-editor/:courseId/:moduleId"
                                    render={props => <CourseEditor courses={this.courses}/>}/>
                            </div>
                        </div>
                    </div>

                </Router>
            </Provider>
        )
    }
}