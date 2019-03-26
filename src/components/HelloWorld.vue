<template>
    <div>
        <h2>{{msg}}</h2>
        <div>
            <a href="javascript:void(0)" @click="changeNum">-</a>
            <input type="text" v-model="number"/>
            <a href="javascript:void(0)" @click="increaseNum">+</a>
            <span>{{number*9 | formate}}</span>
        </div>
        <p>{{carts}}</p>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      number: 0
    }
  },
  filter: {
    formate: function (value) {
      return value.toFixed(2)
    }
  },
  methods: {
    changeNum () {
      this.number--
      if (this.number < 0) {
        this.number = 0
      }
    },
    increaseNum () {
      this.number++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
div a  {
    display: inline-block;
    width: 30px;
    text-align: center;
    background-color: #0b2e13;
}
</style>
