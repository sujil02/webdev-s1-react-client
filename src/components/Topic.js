import React from 'react'
import {Link} from "react-router-dom";

const Topic = ({courseId, moduleId, lessonId, topic, deleteTopic}) =>


    <div>
        <li className="nav-item">
            <div className="navBarCss">
                <Link className="nav-link" to={`/course-editor/${courseId}/${moduleId}/${lessonId}/${topic.id}`}>
                    {topic.title}
                </Link>
                <button onClick={() => deleteTopic(courseId, moduleId, lessonId,topic.id)}
                        className="fa fa-trash float-right"></button>
            </div>
        </li>

    </div>

export default Topic