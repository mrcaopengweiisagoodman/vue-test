<template>
  <div class="a">
    <!--
     表单数据初始值、
     对更改的值进行保存

     -->
    <a-table :dataSource="tableData" :columns="columns">
     <template slot="operation" slot-scope="text, record">
       <a href="javascript:;" @click="onEditAll(record)">编辑</a>
       <a href="">下载</a>
     </template>

    </a-table>
    <!-- 表单组 -->
    <a-form
      :form="form"
      @submit="handleSubmit"
      v-show="layerFlag"
    >
      <a-form-item
        label="名字"
      >
        <a-input
          v-decorator="[
            'name',
            {
              rules: [{ required: true, message: 'name输入' }] ,
              initialValue: '999'
            }
          ]"
        ></a-input>
      </a-form-item>
      <a-form-item
        label="keyName"
      >
        <a-input
          v-decorator="[
            'keyName',
            {
              rules: [{ required: true, message: 'keyName输入' }] ,
              initialValue: 'keyName值'
            }
          ]"
        ></a-input>
      </a-form-item>
      <a-button type="primary" htmlType="submit">获取</a-button>
    </a-form>
  </div>
</template>
<script>

import axios from 'axios';
export default {
  name: 'InputCom',
  data () {
    return {
      layerFlag: false,
      form: this.$form.createForm(this),
      columns: [
        {
          title: '成员姓名',
          dataIndex: 'name',
          keyName: 'name',
          width: '20%',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '工号',
          dataIndex: 'workId',
          keyName: 'workId',
          width: '20%',
          scopedSlots: { customRender: 'workId' }
        },
        {
          title: '所属部门',
          dataIndex: 'department',
          keyName: 'department',
          width: '40%',
          scopedSlots: { customRender: 'department' }
        },
        {
          title: '操作',
          keyName: 'action',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      tableData: [
        {
          keyName: '1',
          name: '小明',
          workId: '001',
          editable: false,
          department: '行政部'
        },
        {
          keyName: '2',
          name: '李莉',
          workId: '002',
          editable: false,
          department: 'IT部'
        },
        {
          keyName: '3',
          name: '王小帅',
          workId: '003',
          editable: false,
          department: '财务部'
        }
      ],
    }
  },
  watch: {

  },
	
  mounted() {

  },
  methods: {
    handleSubmit: function (vals) {
      const {
        form: { validateFields , setFieldsValue }
      } = this
      const _this = this
     /* // 拿取key为name的值
      const validateFieldsKey = ['name']
      validateFields(validateFieldsKey,{ force: true }, (err, values) => { */
      validateFields((err, values) => {
        // 拿取当前表单所有的值
        if (!err) {
          console.log('Received values of form: ', values);
          // 动态改变
          _this.layerFlag = false
          setFieldsValue(values);
        }
      });
    },
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      if (target) {
        // target[column] = value
        console.log('target');
        this.data = newData
      }
    },
    onEditAll: function (text) {
      this.layerFlag = true
      console.log(text)
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
