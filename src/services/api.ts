import axios from 'axios'

const api = axios.create({
    baseURL:'https://602da43096eaad00176dca9c.mockapi.io',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api