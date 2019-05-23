import React from 'react'
import { Link, Route} from 'react-router-dom'
const ModuleItem = ({courseId, module, deleteModule}) =>
    <li className="list-group-item">
        <Link className to={`/course-editor/${courseId}/${module.id}/l1/t1`}>{module.title}</Link>

        <button onClick={() => deleteModule(module.id)}
                className="fa fa-trash float-right"></button>
    </li>

export default ModuleItem