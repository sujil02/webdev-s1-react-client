import React from 'react'
import ModuleItem from './ModuleItem'
import CourseService from "../services/CourseService";
let courseService =
    CourseService.getInstance();
export default class ModuleList
    extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      module: {
        id: -1,
        title: 'New Module',
        lessons:[]
      },
      modules: props.modules,
      courseId: props.courseId
    }
  }
  createModule = () => {
    // this.state.module.push()
    this.state.module.id = (new Date()).getTime()
    this.setState({
      modules: [this.state.module, ...this.state.modules]
    })
    courseService.addModule(this.state.courseId, this.state.module)
  }
  titleChanged = (event) => {
    console.log(event.target.value)
    this.setState({
      module: {
        title: event.target.value,
        id: (new Date()).getTime()
      }
    })
  }
  deleteModule = (id) => {
    console.log('deleteModule ' + id)
    this.setState({
      modules: this.state.modules.filter(module => module.id !== id)
    })
    courseService.deleteModule(this.state.courseId,id)
  }

  render() {
    return(
        <div>
          <h3>Module List</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <input
                  onChange={this.titleChanged}
                  defaultValue={this.state.module.title}
                  className="form-control"/>
              <button onClick={this.createModule} className="btn btn-primary btn-block">
                Add Module
              </button>
            </li>
            {
                this.state.modules.map(
                  module =>
                      <ModuleItem
                          courseId={this.state.courseId}
                          deleteModule={this.deleteModule}
                          module={module}
                          key={module.id}/>
              )
            }
          </ul>
        </div>
    )
  }
}