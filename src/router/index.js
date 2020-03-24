import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InputCom from '@/components/InputCom'
import ImgUpload from '@/components/ImgUpload'
import AlertModal from '@/components/AlertModal'
import VueCityPicker from '@/components/VueCityPicker'
import CreateRender from '@/components/createRender'
import Situation from '@/components/situation'

import ZhuzhuangTu from '@/components/antv-g2/antv-g2'
import Zhexian from '@/components/antv-g2/zhexian'
import Bing from '@/components/antv-g2/bingtu'
import MapOfHot from '@/components/antv-g2/mapofhot'

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
    {
      path: '/imgUpload',
      name: 'ImgUpload',
      component: ImgUpload
    },
    {
      path: '/alertModal',
      name: 'AlertModal',
      component: AlertModal
    },
    {
      path: '/vueCityPicker',
      name: 'VueCityPicker',
      component: VueCityPicker
    },
    {
      path: '/createRender',
      name: 'CreateRender',
      component: CreateRender
    },
    {
      path: '/situation',
      name: 'Situation',
      component: Situation
    },
    {
      path: '/zhuzhuang',
      name: 'ZhuzhuangTu',
      component: ZhuzhuangTu
    },
    {
      path: '/zhexian',
      name: 'Zhexian',
      component: Zhexian
    },
    {
      path: '/bing',
      name: 'Bing',
      component: Bing
    },
    {
      path: '/mapofhot',
      name: 'MapOfHot',
      component: MapOfHot
    },
  ]
})
