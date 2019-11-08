<template>
  <!-- 富文本编辑器 -->
  <!--
   1、若图片是base64形式时，变价完成之后如何将富文本信息上传
   2、若图片是正常的图片，那么则会如何进行优化；是生成本地路径还是上传服务器拿到地址进行图片回显



   -->


   <div><!--上传图片时得加载画面-->
    <a-card title="Inner card title">
      <a href="#" slot="extra">More</a>
      Inner Card content
    </a-card>
      <!--
        useCustomImageHandler
        与之相对应的处理事件为image-added
        处理图像上传，而不是使用默认转换为Base64 默认图片为base64路径 加上此属性后显示为正常路径-->
    <VueEditor style="width: 80%"
       @blur="onEditorBlur"
       @text-change="onTextChange"
       @selection-change="onEelectionChange"
       useCustomImageHandler
       @image-added="handleImageAdded"
       :editorToolbar="customToolbar"
       v-model="content"
    ></VueEditor>
   </div>
</template>

<script>
  // Uediter 另一个富文本编辑器
 import { VueEditor, Quill } from "vue2-editor";
 import axios from 'axios';
 import qs from 'qs';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content:'',
      loading:false,
      customToolbar: [
          ['bold', 'italic', 'underline'],
          [{'align':''},{'align':'center'},{'align':'right'}],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
          [{'background':[]},{'color':[]}],
          ['image','link'],
          ['strike'],
          ['clean'],
          [{ 'header': '2' }],
          ['code'],
          ['video'],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'size': ['small', false, 'large', 'huge'] }]
          ],
          //更多工具栏选项在下面
      }
  },
  components:{
      VueEditor
  },
  watch: {

  },
  mounted(){
      let parameter = qs.stringify({
        username: 'admin',
        password: '123456'
      })
      axios({
        url: 'http://39.106.98.195:9900/api-uaa/oauth/user/token',
        method: 'post',
        data: parameter,
        headers: {
          // 判断是那个端
          'Authorization': 'Basic d2ViQXBwOndlYkFwcA==',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;'
        },
        timeout: 5000
      })
			.then(function (res) {
				console.log('请求成功---',res);
			})
			.catch(function (err) {
				 console.log('请求失败！',err);
			})
  },
  methods: {
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      //上传图片操作
      console.log('图片操作',file)
      console.log('Editor',Editor)
      console.log('cursorLocation',cursorLocation)
      console.log('resetUploader',resetUploader)
        var formData = new FormData();
        formData.append("image", file);

        axios({
          url: "https://fakeapi.yoursite.com/images",
          method: "POST",
          data: formData
        })
        .then(result => {
          console.log('图片操作',result)
          let url = result.data.url; // Get url from response
          //把获取到的图片url 插入到鼠标所在位置 回显图片
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },
    onEditorBlur: function (e) {
      console.log('离开焦点',e)
    },
    onEelectionChange: function (range, oldRange, source) {
      console.log('富文本框内有变化',source)
    },
    onTextChange: function (delta, oldDelta, source) {
      console.log(delta, oldDelta, source);
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
