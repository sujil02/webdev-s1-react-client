import React from 'react'
import {Link} from "react-router-dom";

const Lesson = ({courseId, moduleId,lesson, updateLesson,deleteLesson}) =>

<div>
    <li className="nav-item">
        <div >
        <Link className="nav-link" to={`/course-editor/${courseId}/${moduleId}/${lesson.id}/t1`}>
            {lesson.title}
        </Link>
            <button onClick={() => updateLesson(courseId, moduleId, lesson.id)}
                    className="fa fa-pencil float-right"></button>
        <button onClick={() => deleteLesson(courseId, moduleId, lesson.id)}
                className="fa fa-trash float-right"></button>
        </div>
    </li>

</div>

export default Lesson