<!-- 各种图形绘制 -->
<template>
  <div id="box"></div>
</template>

<script>
import { Chart } from '@antv/g2'
import { Data } from './zhexianData'
export default {
  name: 'antvG2',
  data () {
    return {
      data: Data()
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
      const colors = ['#d9363e', 'green', 'black', 'purple', '#d8ac28', '#b72c85', '#5c86ef']
      // 1、创建图标实例
      const chart = new Chart({
        container: `box`,
        autoFit: true,
        height: 400
      })
      // 2、载入数据
      chart.data(Data())
      // 列定义项
      chart.scale({
        inx: {
          range: [0, 1],
          // inx值的中文展示，配合axis使用
          alias: '期数',
          sync: true,
          nice: true
        },
        num: {
          alias: '数值',
          formatter: (value) => {
            return value
          },
          min: 0,
          sync: true,
          nice: true
        }
      })

      chart.axis('num', { title: {} })
      chart.axis('inx', { title: {} })
      // 展示框内容调整
      chart.tooltip({
        showCrosshairs: true,
        shared: true,
        title: 'inx',
        showContent: true
      })
      // 3、绘制折线图
      chart.line()
           .adjust()
           .position('inx*num')
           .label('num')
           .color('type', colors)
      // 点图
      chart.point()
          .adjust()
          .position('inx*num')
          .color('type', colors)
          .shape('circle')
      // 域图
      /* chart.area()
          .adjust()
          .position('inx*num')
          .color('type', colors) */
      // 4、渲染
      chart.render()
    }
  }
}
</script>
<style scoped>
div{
  margin: 0 auto 50px;
}
</style>
