<template>
  <div id="container">
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {child: Header},
  data: function () {
    return {
      title: 'my first error'
    }
  }
}
</script>

<style>
</style>
