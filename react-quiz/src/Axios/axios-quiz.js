import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-cf069-default-rtdb.firebaseio.com'
})