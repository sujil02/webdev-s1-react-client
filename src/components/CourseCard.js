import React from 'react'
import {Link} from "react-router-dom";
import '../css/CourseCard.css'

const CourseCard = ({deleteCourse,course}) =>
            <div className="card">
                <img className="card-img-top"  src="https://picsum.photos/300/200" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title"> {course.title}</h5>
                <p className="card-text">Card text.</p>
            </div>
                <Link className=" btn btn-primary float-right" to={`/course-editor/${course.id}/dummy`}>
                    More..
                </Link>
                <button onClick={() => deleteCourse(course.id)}
                        className="btn btn-danger float-left">Delete</button>
            </div>
export default CourseCard