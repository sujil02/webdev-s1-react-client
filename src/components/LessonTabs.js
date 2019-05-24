import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ModuleItem from "./ModuleItem";
import Lesson from "./Lesson";
import CourseService from "../services/CourseService";
let courseService =
    CourseService.getInstance();
export default class LessonTabs extends React.Component {
    constructor(props) {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        const moduleId = paths[3]
        console.log(courseId)
        super(props);
        console.log('deleteModule ' +  props.modules)
        this.state = {
            lesson: {
                id: -1,
                title: 'New Lesson',
                topics:[]
            },
            moduleId: moduleId,
            modules: props.modules,
            courseId: props.courseId,
            lessons: props.lessons

        }
    }  createLesson = () => {
        // this.state.module.push()
        this.state.lesson.id = (new Date()).getTime()
        this.setState({
            lessons:  courseService.addLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
        })

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
    }
    render() {
        return(
            <div>
                <h3>Lesson Tabs</h3>
                <ul className="nav nav-tabs">
                    {
                        this.props.lessons.map(
                            lesson =>
                                <Lesson
                                    courseId={this.props.courseId}
                                    deleteModule={this.deleteModule}
                                    moduleId = {this.props.moduleId}
                                    lesson={lesson}
                                    key={module.id}/>
                        )
                    }
                    <li >
                        <div>
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.lesson.title}
                            className="form-control"/>
                        <button onClick={this.createLesson} className="fa fa-plus">
                        </button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}