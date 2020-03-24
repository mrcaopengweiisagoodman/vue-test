<template>
  <!-- 通过jsx语法动态render模板 -->
  <div class="">

  </div>
</template>

<script>
export default {
  name: 'createRender',
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    change: function (data) {
      console.log('变换---', data.province)
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
