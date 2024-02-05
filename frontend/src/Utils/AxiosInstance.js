import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4200',
    withCredentials: true
})

export default axiosInstance