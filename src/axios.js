import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-by-amit.herokuapp.com'
})

export default instance;