<template>
  <div class="out1">
    <div style="font-weight: bold; font-size: 100px; position:absolute; left:140px; top:150px;">
      <i>Campus Hub</i>
    </div>
    <div style="font-weight: bold; font-size: 40px; position:absolute; left:190px; top:320px;">
      ---------汇集校园中所有的不可思议...
    </div>
    <div style="font-weight: bold; font-size: 40px; position:absolute; left:490px; top:390px;">
      I‘m Waiting for you!
    </div>
    <div class="out2">
      <div style="font-family: 'Arial Black';font-size: 30px; margin-top:35px; margin-left: 170px; color:white">Login</div>
      <i class="iconfont + icon01" ></i>
      <i class="iconfont + iconmima"></i>
      <linput></linput>
      <lbutton></lbutton>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import linput from "./linput";
  import lbutton from "./lbutton";



  export default {
    name: "login",
    components:{
      linput,
      lbutton
    }
  }
</script>

<style scoped>
  .out1{
    float:left;
    position: relative;
    width:1600px;
    height:600px;
    background-color: rgba(64,64,255,0.1);
    border-radius: 10px;
    left: 320px;
    top:-450px;

  }
  .out1 .out2{
    position: absolute;
    width:450px;
    height:350px;
    border:1px solid black;
    font-size:20px;
    top:100px;
    z-index:999;
    left:950px;
  }
  .icon01{
    position:absolute;
    color:black;
    font-size: 30px;
    top:105px;
    left: 50px;
  }
  .iconmima{
    position:absolute;
    color:black;
    font-size: 30px;
    top:177px;
    left: 50px;
  }


</style>

