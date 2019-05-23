import React from 'react'

const ModuleItem = ({courseId, module, deleteModule}) =>
    <li className="list-group-item">
        <a href={`/course-editor/${courseId}/${module.id}`}>{module.title}</a>

        <button onClick={() => deleteModule(module.id)}>Delete</button>
    </li>

export default ModuleItem