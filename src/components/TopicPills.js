import React from 'react'
import Topic from "./Topic";
import Lesson from "./Lesson";

export default class TopicPills extends React.Component {
    constructor(props) {
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        const moduleId = paths[3]
        const lessonId = paths[4]
        const topicId = paths[5]
        console.log(courseId)
        super(props);
        this.lessons = props.topics
        this.state = {

            topic: {
                id: -1,
                title: 'New Lesson'
            },
            lesson: this.lessons.find(topics => topics.id == lessonId),
            courseId: props.courseId,


        }
    }
  render() {
      return(
          <div>

              <div>

              </div>
              <h3>Topic Tabs</h3>
              <ul className="nav nav-pills">
                  {/*{this.state.topics.map((e, i) =>*/}
                  {/*    <Topic key={i} topic={e.title} />*/}
                  {/*)}*/}
                  {
                      this.state.lesson.topics.map(
                          topic =>
                              <Topic
                                  courseId={this.state.courseId}
                                  deleteModule={this.deleteModule}
                                  topic={topic}
                                  key={module.id}/>
                      )
                  }
              </ul>
          </div>
      )
  }
}