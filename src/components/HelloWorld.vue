<template>
  <div>
    <!--上传图片时得加载画面-->
    <QuillEditor
      :value="content.text"
      status="syncing"
      @blur="getHtml"
      @fileChange="hasImgAndUpload"
    />
    <a-card title="Inner card title">
      <a href="#" slot="extra">More</a>
      Inner Card content
    </a-card>
    <div v-for="item in newData">筛选后的:{{item.name}}</div>
      <!--
        useCustomImageHandler
        与之相对应的处理事件为image-added
        处理图像上传，而不是使用默认转换为Base64 默认图片为base64路径 加上此属性后显示为正常路径-->
    <!-- <VueEditor style="width: 80%"
       @blur="onEditorBlur"
       @text-change="onTextChange"
       @selection-change="onEelectionChange"
       useCustomImageHandler
       @image-added="handleImageAdded"
       :editorToolbar="customToolbar"
       v-model="content"
    ></VueEditor> -->
  </div>
</template>

<script>
import QuillEditor from '@/coms/QuillEditor'
// Uediter 另一个富文本编辑器
import { VueEditor, Quill } from "vue2-editor";
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'HelloWorld',
  data () {
    return {
      oldData: [
        {
          id: 1,
          name: 111
        },
        {
          id: 2,
          name: 222
        },
        {
          id: 3,
          name: 333
        },
        {
          id: 4,
          name: 444
        },
        {
          id: 5,
          name: 555
        }
      ],
      msg: 'Welcome to Your Vue.js App',
      content: {
        text: ''
      },
      test: '',
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
    }
  },
  components:{
      VueEditor,
      QuillEditor
  },
  watch: {
    newData: function () {
      console.log('监听newData的变化')
    }
  },
  created: function () {
    console.log('实例已经创建')
  },
  computed: {
    // newData: function () {
    newData: (vm) => {
      return vm.oldData.filter(function (product) {
        return product.id > 2
      })
    }
  },
  beforeCreate () {
    console.log('beforeCreate---组件开始初始化')
  },
  mounted () {
    console.log('mounted---组件挂载完成')
      let parameter = qs.stringify({
        username: 'admin',
        password: '123456'
      })
  },
  methods: {
    hasImgAndUpload: function (e, editor) {
      var fileInput = e.target
      if (fileInput.files.length === 0) {
        return
      }
      editor.editor.focus()
      if (fileInput.files[0].size > editor.maxUploadSize) {
        editor.$alert('图片不能大于500MB', '图片尺寸过大', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      var data = new FormData()
      data.append(editor.fileName, fileInput.files[0])
      // 文件路径
      let testUrl = 'https://zhouguanyun01.oss-cn-beijing.aliyuncs.com/cms/article/20200218/test.1582018806467.png'
      editor.editor.insertEmbed(editor.editor.getSelection().index, 'image', testUrl)
    },
    getHtml: function (html) {
      console.log('html---', html)
      this.content.text = html
      // this.test = '<span>666</span>' + html
    },
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
  },
  beforeRouteEnter: function (to, from, next) {
    next(vm => {
      console.log('进入路由')
    })
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
