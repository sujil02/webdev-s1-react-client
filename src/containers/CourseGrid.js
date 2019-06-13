import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseService from "../services/CourseService";
import {Link} from "react-router-dom";
let courseService =
    CourseService.getInstance();
export default class CourseGrid
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
            courses: []
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
        courseService.addCourse(this.state.course).then(result => this.setState({
            courses: result
        }))
    }
    deleteCourse = (course) => {
        courseService.deleteCourse(course.id).then(result => this.setState({
            courses: result
        }))
    }
    updateCourse = (course) => {
        course.title = window.prompt("Please enter new course title")
        courseService.updateCourse(course.id, course).then(result => this.setState({
            courses: result
        }))
    }

    componentWillMount() {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        courseService.findAllCourses().then(result => this.setState({
            courses: result,
            moduleId: paths[1]
        }))
    }
    render() {
        return(
            <div>
                <div className="course-manger-tag">
                    <div className="row align-items-center">
                        <div className="col d-none d-md-inline-block">
                            <h2>Course Grid</h2>
                        </div>
                        <div className="col-6">
                            <input className="form-control"
                                   onChange={this.titleChanged}
                                   placeholder="New Course Title"/>
                        </div>
                        <div className="col">
                            <button onClick={this.createCourse} className="fa fa-plus">
                            </button>
                            <Link className="fa fa-reorder float-left reorderIconCSS" to={'/course-list'}></Link>
                        </div>
                    </div>
                </div>
                <div className="card-columns">
                    {
                        this.state.courses.map((course) =>
                            <CourseCard course={course}
                                        deleteCourse={this.deleteCourse}/>)
                    }
                </div>
            </div>
        )
    }
}
