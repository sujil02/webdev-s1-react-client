import React from 'react'
import {Link} from "react-router-dom";

const Lesson = ({courseId, moduleId,lesson, lessonId,updateLesson,deleteLesson}) =>

<div>
    <li className="nav-item">
        <div >
            {lesson.id==lessonId ? (
                <Link className="nav-link active" to={`/course-editor/${courseId}/${moduleId}/${lesson.id}/dummy`}>
                    {lesson.title}
                </Link>
            ) : (
                <Link className="nav-link" to={`/course-editor/${courseId}/${moduleId}/${lesson.id}/dummy`}>
                    {lesson.title}
                </Link>
            )}
            <button onClick={() => updateLesson(courseId, moduleId, lesson.id)}
                    className="fa fa-pencil float-right"></button>
                <button onClick={() => deleteLesson(courseId, moduleId, lesson.id)}
                        className="fa fa-trash float-right"></button>
        </div>
    </li>

</div>

export default Lesson