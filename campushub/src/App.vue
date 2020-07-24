<template>
  <div id="app">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <i style="font-size: 30px; color: white; font-weight: bold; line-height: 60px;
        position: absolute; margin-left:120px;">Campus Hub</i>

         <i class="iconfont + icon01" style="font-weight: bold; font-size: 50px; float:right;
        line-height: 50px; margin-right: 50px;" @click="informationclick"></i>

        <img src="../public/logo.jpg" style="width:60px; height:50px; margin-left:30px; margin-top: -3px;">

          <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入内容"
                  @select="handleSelect"
                  style="width:300px; margin-left: 650px; margin-top: 10px;"
          ></el-autocomplete>
        <el-button type="primary" icon="el-icon-search" style="margin-left: 10px;">搜索</el-button>
      </div>
      </el-col>
    </el-row>
    <el-row style="height:500px;">
      <el-col :span="4">
        <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :router="true">
        <el-menu-item index="home" >
          <i class="el-icon-menu" style="font-size: 22px; margin-left: 60px;"></i>
          <span slot="title" style="font-size: 22px; margin-left:20px;">首页</span>
        </el-menu-item>
        <el-menu-item index="login">
          <i class="el-icon-circle-check" style="font-size: 22px; margin-left: 60px;"></i>
          <span slot="title" style="font-size: 22px; margin-left:20px;">登录</span>
        </el-menu-item>
        <el-menu-item index="register">
          <i class="el-icon-remove" style="font-size: 22px; margin-left: 60px;"></i>
          <span slot="title" style="font-size: 22px; margin-left:20px;">注册</span>
        </el-menu-item>
        <el-menu-item index="discover">
          <i class="el-icon-star-off" style="font-size: 22px; margin-left: 60px;"></i>
          <span slot="title" style="font-size: 22px; margin-left:20px;">发现</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-bell" style="font-size: 22px; margin-left: 60px;"></i>
          <span slot="title" style="font-size: 22px; margin-left:20px;">代取服务</span>
        </el-menu-item>
          <el-menu-item index="recommend">
            <i class="el-icon-tickets" style="font-size: 22px; margin-left: 60px;"></i>
            <span slot="title" style="font-size: 22px; margin-left:20px;">好物推荐</span>
          </el-menu-item>
          <el-menu-item index="write">
            <i class="el-icon-tickets" style="font-size: 22px; margin-left: 60px;"></i>
            <span slot="title" style="font-size: 22px; margin-left:20px;">发表文章</span>
          </el-menu-item>
      </el-menu>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      homeclick() {
        this.$router.push('/home');
      },
      discoverclick() {
        this.$router.push('/discover');
      },
      loginclick() {
        this.$router.push('/login');
      },
      registerclick() {
        this.$router.push('/register');
      },
      informationclick(){
        this.$router.push('/information');
      },
      recommendclick(){
        this.$router.push('/recommend');
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
        { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>


<style>
  .el-row {
   &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: lightskyblue;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  }
  .row-bg {
    background-color: #f9fafc;
  }
</style>