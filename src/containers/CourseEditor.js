import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseService from "../services/CourseService";
import '../css/SharedCSS.css'
import '../css/CourseEditor.css'

let courseService =
    CourseService.getInstance();
export default class CourseEditor
    extends React.Component {
    constructor(props) {
        super(props)
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        const moduleId = paths[3]
        const lessonId = paths[4]
        this.courses = props.courses
        this.state = {
            courseId: courseId,
            moduleId: moduleId,
            lessonId: lessonId,
            course: {}
        }

    }

    findModule = (moduleId) => {
        let mod = this.state.course.modules.find(modules => modules.id == moduleId)
        return mod;
    }

    findLesson = (moduleId, lessonId) => {
        let mod = this.state.course.modules.find(modules => modules.id == moduleId)
        let les = mod.lessons.find(lesson => lesson.id === Number.parseInt(lessonId));
        return les;
    }

    componentWillMount() {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        this.courseId = paths[2]
        courseService.findCourseById(this.courseId).then(result => this.setState({
            course: result,
            moduleId: paths[3],
            lessonId: paths[4],
            topicId: paths[5],
        }))

    }

    componentUpdate = () => {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        this.courseId = paths[2]
        this.state.moduleId = paths[3]
        this.state.lessonId = paths[4]
        this.state.topicId = paths[5]
    }

    render() {
        return (

            <div className="container-fluid">
                {this.componentUpdate()}
                <h2>Course Name - {this.state.course.title}</h2>
                <h2>Course ID - {this.state.course.id}</h2>
                <div className="row">
                    <div className="col-3 left moduleTabCss">

                        {Object.keys(this.state.course).length !== 0 && this.renderModules()}
                    </div>
                    <div className="col-9 right">
                        <div className="lessonTabCss">
                            {Object.keys(this.state.course).length !== 0 && this.renderLessons()}
                        </div>
                        <div className="topicTabCss">
                            {Object.keys(this.state.course).length !== 0 && this.renderTopics()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderModules = () => {
        if (this.state.moduleId) {
            return (
                <ModuleList courseId={this.state.courseId} modules={this.state.course.modules}/>
            )
        }
    }
    renderLessons = () => {
        if (this.state.lessonId) {
            return (
                <LessonTabs courseId={this.state.courseId}
                            moduleId={this.state.moduleId}
                            lessonId={this.state.moduleId}
                            lessons={this.findModule(this.props.match.params.moduleId).lessons}
                />
            )
        }
    }

    renderTopics = () => {
        if (this.state.topicId) {
            return (
                <TopicPills courseId={this.state.courseId} moduleId={this.state.moduleId}
                            lesson={this.findLesson(this.state.moduleId, this.state.lessonId)}
                            lessons={this.findModule(this.state.moduleId).lessons}/>
            )
        }
    }
}