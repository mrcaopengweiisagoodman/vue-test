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
    this.baseBing()
  },
  methods: {
    baseBing: function () {
      const data = [
        {item: '分类一', count: 56, percent: 0.3},
        {item: '分类二', count: 36, percent: 0.1},
        {item: '分类三', count: 26, percent: 0.2},
        {item: '分类四', count: 66, percent: 0.35},
        {item: '分类五', count: 16, percent: 0.25},
        {item: '分类六', count: 76, percent: 0.5}
      ]
      // 1、创建图标实例
      const chart = new Chart({
        container: `box`,
        autoFit: true,
        height: 400
      })
      // 配置坐标系
      chart.coordinate('theta', {
        radius: 0.75
      })
      // 2、载入数据
      chart.data(data)
      // 度量配置
      chart.scale({
        percent: {
          formatter: (val) => {
            val = val * 100 + '%'
            return val
          }
        }
      })
      // chart.axis('item', { title: {} })
      // 展示框内容调整
      chart.tooltip({
        // shared: true,
        // showCrosshairs: true,
        showCrosshairs: false,
        showContent: true,
        showMarkers: false
      })
      chart
        .interval()
        .position('percent')
        .color('item')
        .label('percent', {
          content: (data) => {
            return `${data.item}: ${data.percent * 100}%`;
          }
        })
        .adjust('stack')
      // 图标交互信息，鼠标在图标上的的显示信息
      // element-active鼠标移动，对应的图形高亮
      chart.interaction('element-active')
      // chart.interaction('tooltip')
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
