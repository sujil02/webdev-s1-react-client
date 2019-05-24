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
    }
    createLesson = () => {
        // this.state.module.push()
        this.state.lesson.id = (new Date()).getTime()
        this.setState({
            lessons:  courseService.addLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
        })

    }
    findLesson = (moduleId, lessonId) => {
        let mod = this.state.course.modules.find(modules => modules.id == moduleId)
        let lesson = mod.lessons.find(lesson=>lesson.id == lessonId);
        return lesson;
    }
    findModule = (moduleId)=>{
        let mod = this.state.course.modules.find(modules => modules.id == moduleId)
        return mod;
    }
    componentUpdate =()=> {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        this.courseId = paths[2]
        this.state.moduleId = paths[3]
        this.state.lessonId = paths[4]
        this.state.topicId = paths[5]
        this.state.course = courseService.findAllCourses().find(course => course.id == this.courseId)
        this.state.modules = this.findModule(this.state.moduleId)
        this.state.lessons = this.findLesson(this.state.moduleId, this.state.lessonId)
        console.log(this.moduleId)
    }
    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            lesson: {
                title: event.target.value,
                id: (new Date()).getTime(),
                topics:[]
            }
        })
    }
    deleteLesson = (courseId,moduleId,id) => {
        this.setState({
            lessons: this.state.modules.lessons.filter(lesson => lesson.id !== id)
        })
        courseService.deleteLesson(courseId,moduleId,id,  this.state.modules.lessons.filter(lesson => lesson.id !== id))
    }
    updateLesson = (courseId,moduleId,id) => {
        this.setState({
            lessons: courseService.updateLesson(courseId,moduleId,id,  window.prompt())
        })
    }
    render() {
        return(
            <div>
                {this.componentUpdate()}
                <h3>Lesson Tabs</h3>
                <ul className="nav nav-tabs">
                    {
                        this.state.modules.lessons.map(
                            lesson =>
                                <Lesson
                                    courseId={this.props.courseId}
                                    deleteLesson={this.deleteLesson}
                                    updateLesson={this.updateLesson}
                                    moduleId = {this.props.moduleId}
                                    lesson={lesson}
                                    key={lesson.id}/>
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