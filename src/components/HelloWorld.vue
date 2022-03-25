<template>
  <div v-for="id in mydata" :key="id">
    {{ id }}
  </div>
</template>

<script>
// import weatherService from '/services/weatherService.js'
import axios from 'axios'

export default {
  name: 'HelloWorld',

  data() {
    return {
      mydata: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
       return axios
      .post('http://127.0.0.1:8000/weather', ['X-CSRF-TOKEN'='mBIlQgyz8pSSa913vYYu1K51QwcU7qCq84Ylplkn'])
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
