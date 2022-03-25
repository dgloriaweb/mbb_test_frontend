import axios from 'axios'

class weatherService {
  getWeather() {
    const headers = {
      'X-CSRF-TOKEN': 'mBIlQgyz8pSSa913vYYu1K51QwcU7qCq84Ylplkn',
    }
    return axios
      .post('http://127.0.0.1:8000/weather', headers)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
}
