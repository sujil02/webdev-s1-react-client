import React from 'react'
import CourseEditor from "../containers/CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseTable from '../containers/CourseTable'
import CourseGrid from '../containers/CourseGrid'
import CourseService from '../services/CourseService';
import '../css/Whiteboard.css'
let courseService =
    CourseService.getInstance();

export default class Whiteboard extends React.Component {
  constructor(props) {
    super(props)

    this.courses =
        courseService.findAllCourses()

  }

  render() {
    return (
        <Router>
          <div className="container-fluid containerCSS">
          <div className="container-fluid">
            <div className="whiteBoardHeader">
              <h1>WhiteBoard</h1>
            <div className="linksCss">
            <Link to="/course-list">List -</Link>-
            <Link to="/course-grid">- Grid</Link>
          </div>
            <Route
                exact path="/course-grid"
                render={() => <CourseGrid courses={courseService.findAllCourses()}/>}/>
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
    )
  }
}