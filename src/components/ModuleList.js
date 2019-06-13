import React from 'react'
import ModuleItem from './ModuleItem'
import CourseService from "../services/CourseService";

let courseService =
    CourseService.getInstance();
export default class ModuleList
    extends React.Component {
    constructor(props) {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        const moduleId = paths[3]
        super(props);
        this.state = {
            module: {
                title: 'New Module',
                lessons: []
            },
            modules: props.modules,
            moduleId: this.moduleId,
            courseId: props.courseId
        }
    }

    createModule = () => {
        courseService.addModule(this.state.courseId, this.state.module).then(result => this.setState({
            modules: result
        }))
    }
    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            module: {
                title: event.target.value,
                id: (new Date()).getTime(),
                lessons: []
            }
        })
    }
    deleteModule = (id) => {
        // this.setState({
        //     modules: this.state.modules.filter(module => module.id !== id)
        // })
        // courseService.deleteModule(this.state.courseId, id)
        courseService.deleteModule(this.state.courseId, id).then(result => this.setState({
            modules: result
        }))
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        courseService.findAllModules(paths[2]).then(result => this.setState({
            modules: result
        }))
    }
    updateModule = (id) => {
        let title = window.prompt("Please enter new module title");
        this.setState({
            modules: courseService.updateModule(this.state.courseId, id, title)
        })
    }
    componentUpdate = () => {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        this.state.moduleId = paths[3]
    }
    // componentDidMount() {
    //     const pathname = window.location.pathname
    //     const paths = pathname.split('/')
    //     courseService.findAllModules(paths[2]).then(result => this.setState({
    //         modules: result
    //     }))
    // }
    render() {
        return (
            <div className="container">
                <h3>Module List</h3>
                {this.componentUpdate()}
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
                                    updateModule={this.updateModule}
                                    moduleId={this.state.moduleId}
                                    module={module}
                                    key={module.id}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}