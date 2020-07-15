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
            <div style="font-family: 'Arial Black';font-size: 30px; margin-top:35px; margin-left: 220px; color:white">Register</div>
            <i class="iconfont + icon01" ></i>
            <i class="iconfont + iconmima"></i>
            <i class="iconfont + iconquerenmima"></i>
            <i class="iconfont + iconyouxiang"></i>
            <i class="iconfont + iconyaoqingma"></i>
            <rinput></rinput>
            <rbutton></rbutton>
        </div>
    </div>
</template>

<script>
    import rinput from "./rinput";
    import rbutton from "./rbutton";

    export default {
        name: "register",
        components:{
            rinput,
            rbutton
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
        left:320px;
        top:-450px;

    }
    .out1 .out2{
        position: absolute;
        width:550px;
        height:550px;
        font-size:20px;
        border:1px solid black;
        z-index:999;
        top:25px;
        left:950px;
    }
    .icon01{
        position:absolute;
        color:black;
        font-size: 30px;
        top:108px;
        left:100px;
    }
    .iconmima{
        position:absolute;
        color:black;
        font-size: 30px;
        top:183px;
        left:100px;
    }
    .iconquerenmima{
        position:absolute;
        color:black;
        font-size: 32px;
        top:253px;
        left:100px;
    }
    .iconyouxiang{
        position:absolute;
        color:black;
        font-size: 32px;
        top:327px;
        left:100px;
    }
    .iconyaoqingma{
        position:absolute;
        color:black;
        font-size: 37px;
        top:396px;
        left:95px;
    }


</style>
