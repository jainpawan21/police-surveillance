import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ac482598.ngrok.io/'
})

export default instance