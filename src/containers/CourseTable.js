import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from "../services/CourseService";
import '../css/SharedCSS.css'
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
                title: 'New Course',
                modules: []
            },
            courses : []
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
        courseService.addCourse(this.state.course).then(result =>this.setState({
            courses : result
        }))
    }
    deleteCourse = (id) => {
        this.setState({
            courses: this.state.courses.filter(course => course.id !== id.id)
        })
        courseService.deleteCourse(this.state.courses.filter(course => course.id !== id.id))
    }
    updateCourse = (course) => {
        this.setState({
            courses: courseService.updateCourse(course.id,  window.prompt("Please enter new course title"))
        })
    }
    componentWillMount() {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        courseService.findAllCourses().then(result =>this.setState({
            courses : result,
            moduleId : paths[1]
        }))
    }


    render() {
        return(
                <div className="main">
                    {/*{this.componentUpdate()}*/}
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

