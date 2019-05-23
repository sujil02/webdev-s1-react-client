import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";

export default class CourseEditor
    extends React.Component {
  constructor(props) {
    super(props)
    const pathname = window.location.pathname
    const paths = pathname.split('/')
    const courseId = paths[2]
    const moduleId = paths[3]
    const lessonId = paths[4]
    console.log(courseId)
    this.courses = props.courses
    this.state = {
      courseId: courseId,
      course: this.courses.find(course => course.id == courseId),
      moduleId:moduleId,
      lessonId:lessonId
     // modules: course.find(modules => modules.id==moduleId)
    }

  }
  render() {
    return(
        <div>
          <h2>{this.state.course.title} {this.state.course.id}</h2>
          <div className="row">
            <div className="col-4 left">
              <ModuleList courseId={this.state.courseId} modules={this.state.course.modules}/>
            </div>
            <div className="col-8 right">
              <LessonTabs courseId={this.state.courseId} lessonId={this.state.moduleId}
                          lessons={this.state.course.modules[this.props.match.params.moduleId].lessons}/>
              <br/>
              <TopicPills courseId={this.state.courseId} lessonId={this.state.moduleId}
                          topics={this.state.course.modules[this.props.match.params.moduleId].lessons}/>
            </div>
          </div>
        </div>
    )
  }
}