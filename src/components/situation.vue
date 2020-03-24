<template>
  <div ref="mapbox" style="width:660px;height:466px"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import beijing from  'echarts/map/js/province/beijing'
console.log('biejing', beijing)
import jsonp from 'jsonp'

 const option = {
    title: {
      text: '疫情信息地图'
    },
    // 确定图标类型
    series: [{
      name: '确诊人数',
      type: 'map', //告诉echarts要去渲染一个地图
      map: '北京',
      mapType: 'province',
      // map: 'china',
      // map: 'world',
      label: {
        show: true, // 控制对应地区的汉字
        color: '#333',
        fontSize: 10,
        align: 'center'
      },
      // 鼠标缩放和平移漫游
      // roam: true,
      // 地图缩放比例
      // zoom:1.2 ,
      // 地图信息展示数据  { name:xx, value:xxx }
      data: [] ,
      // 控制地图板块的颜色和边框
      itemStyle: {
        areaColor: 'rgb(255, 255, 255)',
        // 边框颜色
        borderColor: '#aaa',
        position: 'insideBottom'

      },
      // 控制鼠标滑过之后的背景色和字体颜色
      emphasis: {
        label: {
          color: '#925d48',
          fontsize: 12
        },
        itemStyle: {
          // 地图选中区域颜色
          areaColor: '#c7fffd'
        }
      }
    }],
    // 分段信息
    visualMap: [{
      type: 'piecewise',
      show: true,
      // splitNumber: 6,
      pieces: [
          // 具体分段
        { min: 10000 },
        { min: 1000, max: 9990 },
        { min: 100, max:999 },
        { min: 10, max:99 },
        { min: 1, max:9 },
      ],
      // align: 'center',
      //orient:'horizontal' 默认竖直
      //textStyle() 分段大小
      // 选中范围视觉效果
      inRange: {
        symbol: 'rect',
        // symbol: 'circle',
        // symbol: 'diamond',
        // 不同分段的颜色
        color: ['#ffc0b1', '#ffaa85', '#9c0505', ]
      },
      itemWidth: 20,
      itemHeight: 10
    }],
    tooltip:{
      // 鼠标移入后显示人数
      trigger: 'item'
    }
  }
export default {
  name: 'situation',
  data () {
    return {}
  },
  mounted () {
    this.getData()
    this.mychart = echarts.init(this.$refs.mapbox)
    this.mychart.setOption(option)
  },
  methods: {
    getData: function (html) {
      const url = 'https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1583891599242'
      jsonp(url, {}, (err,data)=>{
        if(!err){
          console.log(data)
          // 使用map()函数，进行接口数据映射
          // let list = data.data.list.map(item => ({ name: item.name, value: item.econNum }))
          let list = data.data.list[0].city.map(item => ({ name: item.name, value: item.econNum }))
          option.series[0].data = list
          this.mychart.setOption(option)
        }
      })
    }
  }
}
</script>
