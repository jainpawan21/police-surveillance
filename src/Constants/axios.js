import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://20fbf4d1.ngrok.io/'
})

export default instance