<template>
  <div class="a">
    <a-modal
      :visible="true"
      onOk="okFn"
      okText="哟哟"
    >

    </a-modal>
  </div>
</template>
<script>

import axios from 'axios';
export default {
  name: 'AlertModal',
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
    okFn: function (e) {
      console.log(e)
    }
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
