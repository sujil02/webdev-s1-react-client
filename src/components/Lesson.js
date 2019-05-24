import React from 'react'
import {Link} from "react-router-dom";

const Lesson = ({courseId, moduleId,lesson, deleteModule}) =>

<div>
    <li className="nav-item">
        <div className="navBarCss">
        <Link className="nav-link" to={`/course-editor/${courseId}/${moduleId}/${lesson.id}/t1`}>
            {lesson.title}
        </Link>
        <button onClick={() => deleteModule(module.id)}
                className="fa fa-trash float-right"></button>
        </div>
    </li>

</div>

export default Lesson