import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InputCom from '@/components/InputCom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InputCom',
      component: InputCom
    },
    {
      path: '/edit',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
