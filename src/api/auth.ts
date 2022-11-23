import axios from "axios"

const baseUrl = 'https://auth-g5ep.onrender.com/api'

export const authApi = {
  login: (credentials: any) => {
    return axios(baseUrl + '/login')
  }
}