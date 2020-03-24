<!-- 各种图形绘制 -->
<template>
  <div id="box"></div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'antvG2',
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      const data = [
        { name: '自强', num: 666 },
        { name: '行健', num: 888 },
        { name: '厚德', num: 999 },
        { name: '源长', num: 555 },
        { name: '鲲行', num: 666 },
      ]
      // 1、创建图标实例
      const chart = new Chart({
        container: 'box',
        autoFit: true,
        height: 200
      })
      // 2、载入数据
      chart.data(data)
      // 3、创建图形语法，绘制柱状图
      // chart.interval().position('name*num')
      chart.interval().position('name*num')
      // 4、渲染
      chart.render()
    }
  }
}
</script>


<style scoped>
#box{
  width: 600px;
  margin: 0 auto;
}
</style>
