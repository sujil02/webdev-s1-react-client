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
            courses : props.courses
        }
    }
    deleteCourse = (id) => {
        this.setState({
            courses: this.state.courses.filter(course => course.id !== id)
        })
        courseService.deleteCourse(this.state.courses.filter(course => course.id !== id))
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
