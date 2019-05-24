import React from 'react'
import CourseCard from '../components/CourseCard'

const CourseGrid = ({courses}) =>
    <div>
      <h1>Course Grid</h1>
      <div className="card-group">
        {
          courses.map((course) =>
              <CourseCard course={course}
                          title={course.title}/>)
        }
      </div>
    </div>

export default CourseGrid