import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://78e55970.ngrok.io/'
})

export default instance