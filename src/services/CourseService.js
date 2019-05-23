import courses from './courses.json'

export default class CourseService {
    static myInstance = null;
    courses = courses
    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }
    createCourse = course => {
        this.courses.push(course)
    }

    findAllCourses = () => {
        return this.courses;
    }

}
