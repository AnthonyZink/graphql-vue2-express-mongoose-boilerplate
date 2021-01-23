<template>
  <div class="hello">
    <h1>Cats list</h1>
    <ul>
      <li v-for="cat in getCats" :key="cat.id">{{ cat.id }}  =  {{cat.name}}</li>
    </ul>
  </div>
</template>

<script>
import { ALL_CATS_QUERY } from '../../graphql'

export default {
  name: 'HelloWorld',

  data () {
    return {
      // 3
      getCats: [],
    }
  },
  props: {
    msg: String
  },

  apollo: {
    getCats: {
      query: ALL_CATS_QUERY
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
