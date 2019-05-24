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

    addModule = (courseId, module) =>{
        let index1
        let course
        this.courses.forEach(function (c,index){
            if(c.id == courseId){
                index1 =index
                course = c
            }
        })
        const myArrayString = JSON.stringify(course.modules)
        let m = JSON.parse(myArrayString)
        m.push(module)
        this.courses[index1].modules=m;
        return m;
    }
    addLesson = (courseId, moduleId, lesson) =>{
        let courseIndex
        let moduleIndex
        let course
        let module
        this.courses.forEach(function (c,index){
            if(c.id == courseId){
                course = c
                c.modules.forEach(function (m,i) {
                    if(m.id == moduleId){
                        moduleIndex = i
                        module = m
                    }
                })
            }
        })
        const myArrayString = JSON.stringify(course.modules[moduleIndex].lessons)
        let m = JSON.parse(myArrayString)
        m.push(lesson)
        course.modules[moduleIndex].lessons=m;
        return m;
    }

}
