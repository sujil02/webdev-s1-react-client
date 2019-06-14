import React from 'react'
import Topic from "./Topic";
import CourseService from "../services/CourseService";
import '../css/SharedCSS.css'
import WidgetListContainer from "../containers/WidgetListContainer";
let courseService =
    CourseService.getInstance();
export default class TopicPills extends React.Component {
    constructor(props) {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        const moduleId = paths[3]
        const lessonId = paths[4]
        const topicId = paths[5]
        super(props);
        this.lessons = props.lessons
        this.state = {
            topic: {
                id: -1,
                title: 'New Topic'
            },
            lesson: this.lessons.find(topics => topics.id === lessonId),
            courseId: props.courseId,
            moduleId: moduleId,
            lessonId : lessonId

        }
    }
    createTopic = () => {
        // this.state.module.push()
        this.state.topic.id = (new Date()).getTime()
        this.setState({
            topics:  courseService.addTopic(this.props.courseId, this.props.moduleId, this.state.lessonId,this.state.topic)
        })

    }
    titleChanged = (event) => {
        this.setState({
            topic: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }
    findLesson = (moduleId, lessonId) => {
        let mod = this.state.course.modules.find(modules => modules.id === moduleId)
        let lesson = mod.lessons.find(lesson=>lesson.id == lessonId);
        return lesson;
    }
    deleteTopic = (courseId, moduleId, lessonId,topicId) => {
        this.setState({
            topics: this.state.lesson.topics.filter(topic => topic.id !== topicId)
        })
        courseService.deleteTopic(courseId,moduleId,lessonId,
            this.state.lesson.topics.filter(topics => topics.id != topicId))
    }
    updateTopic = (courseId, moduleId, lessonId,topicId) => {
        this.setState({
            topics: courseService.updateTopic(courseId,moduleId,lessonId, topicId,
                window.prompt("Please enter new topic title"))
        })
    }
    componentUpdate =()=> {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        this.courseId = paths[2]
        this.state.moduleId = paths[3]
        this.state.lessonId = paths[4]
        this.state.topicId = paths[5]
        this.state.widgetId = paths[6]
    }
  render() {
      return(
          <div>
              {this.componentUpdate()}
              <ul className="nav nav-pills">
                  {
                      this.props.lesson.topics.map(
                          topic =>
                              <Topic
                                  courseId={this.state.courseId}
                                  moduleId={this.state.moduleId}
                                  lessonId={this.state.lessonId}
                                  topicId={this.state.topicId}
                                  deleteTopic={this.deleteTopic}
                                  updateTopic={this.updateTopic}
                                  topic={topic}
                                  key={topic.id}/>
                      )
                  }
                  <li >
                      <div>
                          <input
                              onChange={this.titleChanged}
                              defaultValue={this.state.topic.title}
                              className="form-control"/>
                          <button onClick={this.createTopic} className="fa fa-plus"/>
                      </div>
                  </li>
              </ul>
                  {this.renderWidget()}
          </div>
      )
  }

    renderWidget =() =>{
        if(this.state.widgetId){
            return (
                <div className="widgetTabCss">
                <WidgetListContainer
                topicId={this.state.topicId}/>
                </div>
            )
        }
    }
}