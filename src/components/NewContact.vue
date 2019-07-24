<template>
  <el-row>
    姓名：{{info.name}}
    <el-input v-model="info.name" placeholder="请输入姓名"></el-input>
    年龄：{{info.age}}
    <el-input v-model="info.age" placeholder="请输入年龄"></el-input>
    性别：{{info.sex}}
    <el-select v-model="info.sex" placeholder="请选择">
      <el-option v-for="item in options" :key="item" :value="item"></el-option><!-- 这里的key官方推荐在v-for时使用，不然会警告，但不影响使用 -->
    </el-select>
    <el-button @click="create">创建</el-button>
    <template>
      <el-table :data="tabledata" align="left">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="a">
            <el-button size="mini" type="danger" @click="del(a.$index)">删除</el-button>
          </template>
        </el-table-column>
        </el-table>
    </template>
  </el-row>
</template>
<script>
  import Storage from '../store/store' //新添加，把刚写的localStorage导入
  export default {
    name: "NewContact",
    data(){
      return {
        info: {
          name: '',
          age: null,
          sex: ''
        },
        options: [
          '女','男','保密'
        ],
   tabledata: Storage.fecth()  //把之前的删除，写入这个获取数据的方法 fetch()得到的是数组
  }
    },
    methods:{
      create(){
        this.tabledata.push(this.info)
        this.info = {name: '',age: null,sex: ''}
      },
      del(index){
        this.tabledata.splice(index,1)//删除点击的对象，index是lot-scope="a" a.$index传过来的
      }
    },
    watch:{//新添加，watch是vue的监听，一旦监听对象有变化就会执行相应操作
     // tabledata :{//新添加，被监听的对象
      //  handler(items) {
       //   Storage.save(items)
      //  },//新添加，监听对象变化后所做的操作，一个函数，保存数据
       // deep: true//深度监听，避免数据的嵌套层数太多，要使用深度监听，防止数据层级过多监听不到
    //  }
     tabledata:{
       handler(items){
         Storage.save(items)
       },
       deep:true


     }
    }
  }
</script>
<style>
  #main{
    float: none;
    margin: 0 auto;
  }
  .el-input{
    padding-bottom: 5px;
  }
  .el-select{
    display:block;
  }
  .btn-auto{
    width:100%;
    margin-top: 12px;
  }

</style>
