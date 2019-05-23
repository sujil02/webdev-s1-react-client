import React from 'react'
import ModuleItem from "./ModuleItem";
import Lesson from "./Lesson";

export default class LessonTabs extends React.Component {
    constructor(props) {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        console.log(courseId)
        super(props);
        console.log('deleteModule ' +  props.modules)
        this.state = {
            lesson: {
                id: -1,
                title: 'New Lesson'
            },
            modules: props.modules,
            courseId: props.courseId,
            lessons: props.lessons

        }
    }  createLesson = () => {
        // this.state.module.push()
        this.state.lesson.id = (new Date()).getTime()
        this.setState({
            lessons: [this.state.lesson, ...this.state.lessons]
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
                <ul className="nav nav-pills">
                    {
                        this.state.lessons.map(
                            lesson =>
                                <Lesson
                                    courseId={this.state.courseId}
                                    deleteModule={this.deleteModule}
                                    lesson={lesson}
                                    key={module.id}/>
                        )
                    }
                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.lesson.title}
                            className="form-control"/>
                        <button onClick={this.createLesson} className="btn btn-primary btn-block">
                            Add Lesson
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}