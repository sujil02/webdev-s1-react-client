import React from 'react'

const Lesson = ({courseId, lesson, deleteModule}) =>

<div>
    <li className="nav-item">
        <a className="nav-link " href="#">{lesson.title}
            <a class="glyphicon-glyphicon-remove" onClick={() => deleteModule(lesson.id)}> x </a>
        </a>
    </li>

</div>

export default Lesson