<template>
  <div class="a">
    <a-upload>
      图片
    </a-upload>
  </div>
</template>
<script>

import axios from 'axios';
export default {
  name: 'ImgUpload',
  data () {
    return {
      file: ''
    }
  },
  watch: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<!--
 1、注册表单
 2、控件包裹
 3、





 -->
