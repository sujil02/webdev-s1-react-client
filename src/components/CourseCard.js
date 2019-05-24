import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse,course}) =>
    <div>

            <div className="card">
                <img className="card-img-top"  src="https://picsum.photos/300/200" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title"> {course.title}</h5>
                <p className="card-text">Card text.</p>
            </div>
                <Link className=" btn btn-primary float-right" to={`/course-editor/${course.id}/`}>
                    More..
                </Link>
                <button onClick={() => deleteCourse(course.id)}
                        className="fa fa-trash float-right"></button>
            </div>
    </div>

export default CourseCard