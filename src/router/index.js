import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Home from '@/components/Home'
import VueResource from 'vue-resource'
import Menu from '@/components/Menu'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {path: '/home',
      name: 'Home',
      component: Home
    },
    {path: '/menu',
      name: 'Mene',
      component: Menu
    },
    {path: '*',
      redirect: '/'}
  ],
  mode: 'history'
})
