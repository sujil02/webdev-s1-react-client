import React from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({course,deleteCourse}) =>

        <tr>
        <td className="d-block-inline">
            <Link className="nav-link" to={`/course-editor/${course.id}/`}>
                {course.title}
            </Link>
        </td>
        <td className="d-none d-md-inline-block">Petey Cruiser</td>
        <td className="d-none d-md-inline-block">6.55 am</td>
        <td>
            <button onClick={() => deleteCourse(course)}
                    className="btn btn-primary float-left">Update</button>
            <button onClick={() => deleteCourse(course)}
                    className="btn btn-danger float-right">Delete</button>
        </td>
    </tr>
    {/*<a href="#" className="list-group-item">*/}
    {/*  {course.title}*/}
    {/*  <button className="btn btn-danger float-right">Delete</button>*/}
    {/*</a>*/}


export default CourseRow;