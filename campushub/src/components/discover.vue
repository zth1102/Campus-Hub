<template>
    <div class="box">
        <div class="con">
            <el-row style="display: flex;justify-content: flex-start">
                <el-col :span="8" v-for="person in persons1">
                    <el-card :body-style="{ padding: '0px' }" style="height: 200px; margin-right: 20px;">
                        <div style="padding: 14px;height: 160px; position: relative; font-size: 18px;">
                            <b>{{person.col}}</b>  <br/>
                            <b>{{person.cla}}</b>
                            <p>{{person.msg}}</p>
                            <div class="bottom clearfix" style="position: absolute;right: 20px;bottom: -20px">
                                <el-button type="text" class="button">查看详情</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="display: flex;justify-content: flex-start;margin-top: 40px;">
                <el-col :span="8" v-for="person in persons2">
                    <el-card :body-style="{ padding: '0px' }" style="height: 200px; margin-right: 20px;">
                        <div style=";font-size: 18px;padding: 14px;height: 160px; position: relative">
                            <b>{{person.col}}</b>  <br/>
                            <b>{{person.cla}}</b>
                            <p>{{person.msg}}</p>
                            <div class="bottom clearfix" style="position: absolute;right: 20px;bottom: -20px">
                                <el-button type="text" class="button">查看详情</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="display: flex;justify-content: flex-start; margin-top: 40px">
                <el-col :span="8" v-for="person in persons3">
                    <el-card :body-style="{ padding: '0px' }" style="height: 200px; margin-right: 20px;">
                        <div style="padding: 14px;height: 160px; position: relative; font-size: 18px;">
                            <b>{{person.col}}</b>  <br/>
                            <b>{{person.cla}}</b>
                            <p>{{person.msg}}</p>
                            <div class="bottom clearfix" style="position: absolute;right: 20px;bottom: -20px">
                                <el-button type="text" class="button">查看详情</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "discover",
        data: function () {
            return {
                persons1: [
                    {col: '软件学院',cla: '软件工程1805 XXX',msg: '表白某学院某专业的...'},
                    {col: '电气学院',cla: '电气工程1603 XXX',msg: '低价出售书本'},
                    {col: '信息学院',cla: '计算机1802 XXX',msg: '互联网+大赛组队'}

                ],
                persons2: [
                    {col: '机械学院',cla: '机自1706 XXX',msg: '西服租赁'},
                    {col: '软件学院',cla: '数据科学1803 XXX',msg: '收大三教材'},
                    {col: '经济学院',cla: '市场营销1801 XXX',msg: '市场调研组队'},
                ],
                persons3: [
                    {col: '机械学院',cla: '车辆1703 XXX',msg: '暑假兼职'}
                ]
            }
        }
    }
</script>

<style scoped>
    .box{
        position: absolute;
        width: 1500px;
        height: 694px;
        left: 300px;
        top: 50px;
    }
    .con{
        width: 1200px;
        height: 694px;
        margin-left: 190px;
        margin-top: 50px;
    }
</style>