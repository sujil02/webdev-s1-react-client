import React from 'react'

const Topic = ({lessonId, topic, deleteModule}) =>


    <li className="nav-item">
        <a className="nav-link " href="#">
            {topic.title}
        </a>
    </li>

export default Topic