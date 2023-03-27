import axios from 'axios'
const AxiosClient = axios.create({
  baseURL: `http://127.0.0.1:90/api/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default AxiosClient
