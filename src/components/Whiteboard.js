import React from 'react'
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseList from './CourseList'
import CourseGrid from './CourseGrid'
import CourseService from '../services/CourseService';

export default class Whiteboard extends React.Component {
  constructor(props) {
    super(props)
    let courseService =
        CourseService.getInstance();
    this.courses =
        courseService.findAllCourses()

  }



  render() {
    return (
        <Router>
          <div className="container">
            <h1>WhiteBoard</h1>
            <Link to="/course-list">List -</Link>-
            <Link to="/course-grid">- Grid -</Link>-
            <Link to="/course-editor">- Editor</Link>

            <Route
                exact path="/course-grid"
                render={() => <CourseGrid courses={this.courses}/>}/>
            <Route
                path="/course-list"
                render={() => <CourseList courses={this.courses}/>}/>
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
        </Router>
    )
  }
}