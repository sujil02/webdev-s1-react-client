import React from 'react'
import {Link} from "react-router-dom";

const Topic = ({courseId, moduleId, lessonId, topic, updateTopic, deleteTopic}) =>


    <div>
        <li className="nav-item">

                <Link className="nav-link" to={`/course-editor/${courseId}/${moduleId}/${lessonId}/${topic.id}/w1`}>
                    {topic.title}
                </Link>
            <button onClick={() => updateTopic(courseId, moduleId, lessonId,topic.id)}
                    className="fa fa-pencil float-right"></button>
                <button onClick={() => deleteTopic(courseId, moduleId, lessonId,topic.id)}
                        className="fa fa-trash float-right"></button>

        </li>

    </div>

export default Topic