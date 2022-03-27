import axios from 'axios'

class weatherService {
  getWeather() {
    return axios
      .post(process.env.VUE_APP_API_URL+ '/weather')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
}
export default new weatherService()
