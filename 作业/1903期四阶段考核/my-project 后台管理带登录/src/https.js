import axios from 'axios'
import router from './router';

const service = axios.create({
    baseURL: "/api",
    timeout: 5000,

})

service.interceptors.request.use(config => {

    config.headers.token = localStorage.getItem('token'),
        config.headers.t = new Date().getTime()


    return config
})

service.interceptors.response.use(response => {

    return response
})

export default service