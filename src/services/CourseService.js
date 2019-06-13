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
        fetch("https://webdev-s1-sujil-server-java.herokuapp.com/api/courses")
            .then(response => response.json())
    findCourseById = (courseID) =>
        fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/courses/${courseID}`)
            .then(response => response.json())
    findAllModules = (courseId) =>
        fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/courses/${courseId}/modules`)
            .then(response => response.json())

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
        return fetch("https://webdev-s1-sujil-server-java.herokuapp.com/api/courses", {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }
    addModule = (courseId, module) => {
        return fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/courses/${courseId}/modules`, {
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
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
    deleteCourse = (courseId) => {
        return fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/courses/${courseId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
    }

    deleteModule = (courseId, moduleId) => {
        return fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/courses/${courseId}/modules/${moduleId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
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
    updateCourse = (courseId, course) => {
        return fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/courses/${courseId}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    updateModule = (courseId, moduleId, module) => {
        return fetch(`https://webdev-s1-sujil-server-java.herokuapp.com/api/courses/${courseId}/modules`, {
            method: 'PUT',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

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
