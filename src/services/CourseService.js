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
    findAllCourses = () =>
        fetch("http://localhost:8080/api/courses")
            .then(response => response.json())
    findCourseById = (courseID) =>
        fetch(`http://localhost:8080/api/courses/${courseID}`)
            .then(response => response.json())
    // findAllCourses = () => {
    //     return this.courses;
    // }

    findLesson = (courseId, moduleId, lessonId) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        let module = course.modules.find(module => module.id == moduleId)
        let lesson = module.lessons.find(lesson => lesson.id == lessonId)
        return lesson
    }
    /*
        Following are the add methods used to edit the course object.
     */
    addCourse = (course) => {
        // const myArrayString = JSON.stringify(this.courses)
        // let m = JSON.parse(myArrayString)
        // m.push(course)
        // this.courses = m;
        // return m;
        return fetch("http://localhost:8080/api/course", {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }
    addModule = (courseId, module) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        const myArrayString = JSON.stringify(course.modules)
        let m = JSON.parse(myArrayString)
        m.push(module)
        this.courses[index1].modules = m;
        return m;
    }
    addLesson = (courseId, moduleId, lesson) => {
        let courseIndex
        let moduleIndex
        let course
        let module
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                course = c
                c.modules.forEach(function (m, i) {
                    if (m.id == moduleId) {
                        moduleIndex = i
                        module = m
                    }
                })
            }
        })
        const myArrayString = JSON.stringify(course.modules[moduleIndex].lessons)
        let m = JSON.parse(myArrayString)
        m.push(lesson)
        course.modules[moduleIndex].lessons = m;
        return m;
    }
    addTopic = (courseId, moduleId, lessonId, topic) => {
        let courseIndex
        let moduleIndex
        let lessonIndex
        let course
        let module
        let lesson
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                course = c
                c.modules.forEach(function (m, i) {
                    if (m.id == moduleId) {
                        moduleIndex = i
                        module = m
                        m.lessons.forEach(function (l, i) {
                            if (l.id == lessonId) {
                                lessonIndex = i
                                lesson = l
                            }
                        })
                    }
                })
            }
        })
        const myArrayString = JSON.stringify(course.modules[moduleIndex].lessons[lessonIndex].topics)
        let m = JSON.parse(myArrayString)
        m.push(topic)
        course.modules[moduleIndex].lessons[lessonIndex].topics = m;
        return m;
    }
    /*
        Following are the add methods used to edit the course object.
    */
    deleteCourse = (courses) => {
        this.courses = courses
    }

    deleteModule = (courseId, moduleId) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })

        let modules = course.modules.filter(module => module.id !== moduleId)
        course.modules = modules
        return modules
    }
    deleteCourse = (courses) => {
        this.courses = courses
    }
    deleteLesson = (courseId, moduleId, lessonId, lesson) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        let module = course.modules.find(module => module.id == moduleId)
        module.lessons = lesson
        return course
    }
    deleteTopic = (courseId, moduleId, lessonId, topics) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        let module = course.modules.find(module => module.id == moduleId)
        let l = module.lessons.find(lesson => lesson.id == lessonId)
        l.topics = topics
        return course
    }
    /*
        Following are the update methods used to alter the course object.
    */
    updateCourse = (courseId, title) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        course.title = title
        return courses;
    }

    updateModule = (courseId, moduleId, title) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        let module = course.modules.find(module => module.id == moduleId)
        module.title = title
        return course.modules;
    }

    updateLesson = (courseId, moduleId, lessonId, title) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        let module = course.modules.find(module => module.id == moduleId)
        let l = module.lessons.find(lesson => lesson.id == lessonId)
        l.title = title
        return module.lessons
    }

    updateTopic = (courseId, moduleId, lessonId, topicId, title) => {
        let index1
        let course
        this.courses.forEach(function (c, index) {
            if (c.id == courseId) {
                index1 = index
                course = c
            }
        })
        let module = course.modules.find(module => module.id == moduleId)
        let l = module.lessons.find(lesson => lesson.id == lessonId)
        let t = l.topics.find(topic => topic.id == topicId)
        t.title = title
        return l.topics
    }
}
