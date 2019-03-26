<template>
    <div>
        <ul class="nav nav-tabs nav-justified">
            <li><router-link to="/">欢迎welcome</router-link></li>
            <li><router-link to="home">主页</router-link></li>
            <li><router-link to="hello">菜单</router-link></li>
        </ul>
        <div>
            <!--<h2>{{students}}</h2>-->
            <table class="table table-bordered">
                <thead>
                    <tr><th>学号</th><th>姓名</th><th>邮箱</th><th>电话</th><th>网站</th>
                    <th>编辑</th></tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in students" :key="index"><td>{{item.id}}</td>
                        <td>{{item.username}}</td><td>{{item.email}}</td><td>{{item.phone}}</td>
                        <td>{{item.website}}</td><td><a @click="deleteSub(item)" href="javascript:void(0)">删除</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

export default {
  name: 'child',
  data () {
    return {
      students: []
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) => {
      this.students = data.body
    })
  },
  methods: {
    deleteSub: function (item) {
      var index = this.students.indexOf(item)
      this.students.splice(index, 1)
    }
  }
}
</script>

<style scoped>
ul{
    background-color: black;
    height: 40px;
    line-height: 40px;
    list-style: none;
    display: flex;
    flex-direction: row;
}
ul li {
    flex: 1;
}
ul li a  {
    text-decoration: none;
    color:lightblue;
    font-family: bold;
}
ul li a:hover {
    color:crimson;
}
</style>
