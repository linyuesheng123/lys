import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import questionnaire from '@/components/questionnaire'
import mine from '@/components/mine'
import order from '@/components/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ques',
      name: 'questionnaire',
      component: questionnaire
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
  ]
})
