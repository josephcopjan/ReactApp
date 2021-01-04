import axios from 'axios'

const INSTRUCTOR = 'student'
const PASSWORD = 'dummy'
const COURSE_API_URL = 'http://localhost:8000'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/admin/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/new`,
            { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }
}

export default new CourseDataService()