import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
