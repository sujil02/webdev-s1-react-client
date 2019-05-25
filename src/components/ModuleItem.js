import React from 'react'
import { Link, Route} from 'react-router-dom'
import '../css/SharedCSS.css'
const ModuleItem = ({courseId, module, moduleId,updateModule,deleteModule}) =>
    <div>
        {module.id==moduleId ? (
            <li className="list-group-item active">
                <Link className="active" to={`/course-editor/${courseId}/${module.id}/dummy`}>{module.title}</Link>
                <button onClick={() => updateModule(module.id)}
                        className="fa fa-pencil float-right"></button>
                <Link onClick={() => deleteModule(module.id)}
                      to={`/course-editor/${courseId}/${module.id}`}
                      className="fa fa-trash float-right button "></Link>
            </li>
        ) : (
            <li className="list-group-item">
                <Link to={`/course-editor/${courseId}/${module.id}/dummy`}>{module.title}</Link>
                <button onClick={() => updateModule(module.id)}
                        className="fa fa-pencil float-right"></button>
                <Link onClick={() => deleteModule(module.id)}
                      to={`/course-editor/${courseId}/${module.id}`}
                        className="fa fa-trash float-right button"></Link>
            </li>
        )}
    </div>
export default ModuleItem