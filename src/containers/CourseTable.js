import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from "../services/CourseService";
import '../css/AllCss.css'
import {Link} from "react-router-dom";
let courseService =
    CourseService.getInstance();
export default class CourseTable
    extends React.Component{
    constructor(props) {
        super(props);
        const courses = props.courses
        this.state= {
            course:{
                id: -1,
                title: 'New Course',
                modules: []
            },
            courses : props.courses
        }
    }
    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            course: {
                title: event.target.value,
                id: (new Date()).getTime(),
                modules: []
            }
        })
    }
    createCourse = () => {
        this.state.course.id = (new Date()).getTime()
        this.setState({
            courses: [this.state.course, ...this.state.courses]
        })
        courseService.addCourse(this.state.course)
    }
    deleteCourse = (id) => {
        this.setState({
            courses: this.state.courses.filter(course => course.id !== id.id)
        })
        courseService.deleteCourse(this.state.courses.filter(course => course.id !== id.id))
    }
    updateCourse = (course) => {
        this.setState({
            courses: courseService.updateCourse(course.id,  window.prompt())
        })

    }
    render() {
        return(
                <div className="main">
                    <div className="course-manger-tag">
                        <div className="row align-items-center">
                            <div className="col d-none d-md-inline-block">
                                <h2>Course List</h2>
                            </div>
                            <div className="col-6">
                                <input className="form-control"
                                       onChange={this.titleChanged}
                                       placeholder="New Course Title"/>
                            </div>
                            <div className="col">
                                <button onClick={this.createCourse} className="fa fa-plus">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container ">
                        <table className="table">
                            <thead>
                            <tr className="table-Header">
                                <th>Title</th>
                                <th className="d-none d-md-inline-block">Owned By</th>
                                <th className="d-none d-md-inline-block">Last modified by me</th>
                                <th>
                                    <Link className="fa fa-reorder float-left reorderIconCSS" to={'/course-grid'}></Link>
                                    Modify</th>
                            </tr>
                            </thead>
                            <tbody className="wbdv-tbody">
                            {
                                this.state.courses.map(course =>
                                    <CourseRow
                                        course={course}
                                        deleteCourse={this.deleteCourse}
                                        updateCourse={this.updateCourse}
                                        key={course.id}
                                    />
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

