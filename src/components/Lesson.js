import React from 'react'
import {Link} from "react-router-dom";
import '../css/AllCss.css'
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
                <Link to={`/course-editor/${courseId}/${moduleId}/${lesson.id}`}
                      onClick={() => deleteLesson(courseId, moduleId, lesson.id)}
                        className="fa fa-trash float-right button"></Link>
        </div>
    </li>

</div>

export default Lesson