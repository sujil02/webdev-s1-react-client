import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseService from "../services/CourseService";
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
                <h1>Course Grid</h1>
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
