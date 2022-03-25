<template>
  <div v-for="id in mydata" :key="id">
    {{ id }}
  </div>
</template>

<script>
import weatherService from '/services/weatherService.js'

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
      weatherService.getWeather().then(
        (response) => {
          this.mydata = response
        })
        .catch(error => {
          console.log(error)
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
