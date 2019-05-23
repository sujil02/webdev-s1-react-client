import React from 'react'
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseList from './CourseList'
import CourseGrid from './CourseGrid'
import courses from './courses.json'

export default class Whiteboard extends React.Component {
  constructor(props) {
    super(props)
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
                render={() => <CourseGrid courses={courses}/>}/>
            <Route
                path="/course-list"
                render={() => <CourseList courses={courses}/>}/>
            <Route
                path="/course-editor/:courseId/:moduleId/:lessonId"
                render={(props) => <CourseEditor {...props} courses={courses}/>}/>
            <Route
                exact path="/course-editor/:courseId"
                render={props => <CourseEditor courses={courses}/>}/>

          </div>
        </Router>
    )
  }
}