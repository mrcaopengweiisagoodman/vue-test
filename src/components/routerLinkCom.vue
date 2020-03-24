<template>
  <div class="linkBox">
    <router-link to="/">表单</router-link>
    <router-link to="/situation">疫情信息地图</router-link>
    <router-link to="/edit">富文本编辑器</router-link>
    <router-link to="/imgUpload">图片上传</router-link>
    <router-link to="/alertModal">弹出框</router-link>
    <router-link to="/vueCityPicker">省市联动</router-link>
    <select @change="antvChange">
      <option value="">选择跳转的图形页面</option>
      <option value="/zhuzhuang">柱状图</option>
      <option value="/zhexian">折线图</option>
      <option value="/bing">饼图</option>
      <option value="/mapOfHot">带热力的地图</option>
    </select>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RouteCom',
  data () {
    return {

    }
  },
  watch: {

  },
  methods: {
    antvChange: function (e) {
      const val = e.target.value
      const router = this.$route.path
      console.log('选择的val', val, this.$route)
      if (!val || router === val) return
      this.$router.push({ path: val })
    }
  }
}
</script>
<style scoped>
.linkBox a{
  margin-right: 10px;
}
</style>
