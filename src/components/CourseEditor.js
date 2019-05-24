import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService";
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
    const topicId = paths[5]
    console.log(courseId)
    this.courses = props.courses
    this.state = {
      courseId: courseId,
      course: this.courses.find(course => course.id == courseId),
      moduleId:moduleId,
      lessonId:lessonId,

    }

  }
  findModule = (moduleId)=>{
    let mod = this.state.course.modules.find(modules => modules.id == moduleId)
  return mod;
  }

  findLesson = (moduleId, lessonId) => {
    let mod = this.state.course.modules.find(modules => modules.id == moduleId)
    let lesson = mod.lessons.find(lesson=>lesson.id == lessonId);
    return lesson;
  }
  componentUpdate =()=> {
    const pathname = window.location.pathname
    const paths = pathname.split('/')
    this.courseId = paths[2]
    this.state.moduleId = paths[3]
    this.state.lessonId = paths[4]
    this.state.topicId = paths[5]
    this.state.course = courseService.findAllCourses().find(course => course.id == this.courseId)
    console.log(this.moduleId)
  }

  render() {
    return(

        <div>
          {this.componentUpdate()}
          <h2>{this.state.course.title} {this.state.course.id}</h2>
          <div className="row">
            <div className="col-4 left">
              <ModuleList courseId={this.state.courseId} modules={this.state.course.modules}/>
            </div>
            <div className="col-8 right">

              {this.renderLessons()}
              {this.renderTopics()}
              {/*<br/>
              <TopicPills courseId={this.state.courseId} lessonId={this.state.moduleId}
                          lesson = {this.findLesson(this.state.moduleId,this.state.lessonId)}
                          topics={this.findModule(this.state.moduleId).lessons}/>*/}
            </div>
          </div>
        </div>
    )
  }

  renderLessons =() =>{
    if(this.state.lessonId){
      return (
        <LessonTabs courseId={this.state.courseId}
                    moduleId={this.state.moduleId}
                    lessonId={this.state.moduleId}
                    lessons={this.findModule(this.state.moduleId).lessons}
        />
      )
    }
  }

  renderTopics =() =>{
    if(this.state.topicId){
      return (
          <TopicPills courseId={this.state.courseId} lessonId={this.state.moduleId}
                      lesson = {this.findLesson(this.state.moduleId,this.state.lessonId)}
                      topics={this.findModule(this.state.moduleId).lessons}/>
      )
    }
  }
}