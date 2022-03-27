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
      .post(process.env.VUE_APP_API_URL+'/weather')
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
