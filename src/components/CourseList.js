import React from 'react'
import CourseListItem from './CourseListItem'

const CourseList = ({courses}) =>
    <div>
      <h1>Course List</h1>
      <div className="list-group">

        {
          courses.map(course =>
              <CourseListItem course={course}/>
          )
        }

      </div>
    </div>
export default CourseList