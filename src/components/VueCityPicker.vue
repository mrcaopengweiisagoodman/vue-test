<template>
  <div class="">
    <v-distpicker hide-area @selected="change"></v-distpicker>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
  name: 'VueCityPicker',
  components: {
    VDistpicker
  },
  data () {
    return {
      province: null,
      city: '',
      district: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    change: function (data) {
      console.log('变换---', data.province)
      /** 
       * 只拿取data.province的value
       * 北京：110000
       * 天津：120000
       * 上海：310000
       * 重庆：500000
       * 香港：810000
       * 澳门：820000
      */
    }
  }
}
</script>


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
