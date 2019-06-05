import React from 'react'
import {Link} from "react-router-dom";
import '../css/SharedCSS.css'

const Topic = ({courseId, moduleId, lessonId, topic, topicId, updateTopic, deleteTopic}) =>


    <div>
        <li className="nav-item">
            {topic.id===topicId ? (
                <Link className="nav-link active" to={`/course-editor/${courseId}/${moduleId}/${lessonId}/${topic.id}/dummy`}>
                    {topic.title}
                </Link>
            ) : (
                <Link className="nav-link " to={`/course-editor/${courseId}/${moduleId}/${lessonId}/${topic.id}/dummy`}>
                    {topic.title}
                </Link>
            )}
            <button onClick={() => updateTopic(courseId, moduleId, lessonId,topic.id)}
                    className="fa fa-pencil float-right"></button>
                <Link onClick={() => deleteTopic(courseId, moduleId, lessonId,topic.id)}
                      to={`/course-editor/${courseId}/${moduleId}/${lessonId}/${topic.id}`}
                        className="fa fa-trash float-right button"></Link>

        </li>

    </div>

export default Topic