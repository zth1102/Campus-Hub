<template>
    <div class="background">
        <div class="bg1">
            <div style="height:60px;">
                <b style="font-size: 30px; font-family: 'Arial Black';">个人信息</b>
            </div>
            <hr/>
            <i class="iconfont + icon01"></i>
            <div class="bg2">
                <div style="font-size: 18px;height:160px;">
                    ID: 2784536871<br/><br/>
                    诚信等级: B<br/><br/>
                    完成单数: 12<br/><br/>
                    发帖量: 3 <span> | </span> <a style="cursor: pointer;text-decoration: none; color: blue">充值</a>
                </div>
                <hr/>
                <div class="bg3" style="font-size: 18px;">
                    昵称: WX_26594266<br/><br/>
                    性别: 男<br/><br/>
                    年龄: 21<br/><br/>
                    邀请码: <br/><br/>
                    签名: <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="textarea"
                        style="margin-top: 10px; margin-left: 50px;">
                </el-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Information",
        data() {
            return {
                textarea: ''
            }
        }
    }
</script>

<style scoped>
    .background{
        float:left;
        width:1500px;
        height:700px;
        position: relative;
        left:350px;
        top:-480px;
    }
    .bg1{
        position: absolute;
        width:1300px;
        height:600px;
        left:50px;
        top:30px;
    }
    .icon01{
        font-size: 130px;
        position: absolute;
        top:137px;
    }
     .background .bg1 .bg2{
        position: absolute;
        width:1100px;
        height:500px;
        left:160px;
        top:92px;
    }
    .background .bg1 .bg2 .bg3{
        position:absolute;
        width:900px;
        height:400px;
        top:190px;
    }

</style>