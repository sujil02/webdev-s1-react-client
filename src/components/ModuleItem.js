import React from 'react'
import { Link, Route} from 'react-router-dom'
const ModuleItem = ({courseId, module, updateModule,deleteModule}) =>
    <li className="list-group-item">
        <Link className to={`/course-editor/${courseId}/${module.id}/l1`}>{module.title}</Link>
        <button onClick={() => updateModule(module.id)}
                className="fa fa-pencil float-right"></button>
        <button onClick={() => deleteModule(module.id)}
                className="fa fa-trash float-right"></button>
    </li>

export default ModuleItem