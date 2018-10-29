import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    {
      path: '/login',
      component: require('../components/auth/login').default
    },
    {
      path: '/userregister',
      component: require('../components/auth/userregister').default
    },
    {
      path: '/changeLoginPassword',
      component: require('../components/auth/changeLoginPassword').default
    },
    {
        path: '/forgotpassword',
        component: require('../components/auth/forgotpassword').default
    },
    {
        path: '*',
        component: require('../components/auth/login').default
    }
  ]
})
