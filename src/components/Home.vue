<template>
<div><ul><li v-for="(user,index) in users" :key="index">{{user.name}}</li></ul>
<button @click="goback">点击返回上一次浏览的目录</button></div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      users: [],
      title: 'hello world'
    }
  },
  methods: {
    goback: function () {
      this.$router.go(-1)
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) => {
      this.users = data.body
    })
  }
}
</script>

<style scoped>
ul {
}
li {
    list-style: none;
    height: 40px;
    line-height: 40px;
    width: 500px;
    border: 1px solid #b3d7ff;
    text-align: center;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
li:nth-child(odd) {
    background-color: #20c997;
}
</style>
