// import module axios
import axios from 'axios'

// create instance axios
const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api