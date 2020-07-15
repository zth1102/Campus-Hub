<template>
    <div class="box">
        <div class="box-son1" style="float: left">
            <el-carousel :interval="4000" style="width: 800px;">
                <el-carousel-item v-for="item in items" :key="item.id">
                    <img :src="item.url" class="image" style="width: 800px;">
                </el-carousel-item>
            </el-carousel>
            <!--<el-tabs v-model="activeName"  type="border-card">
                <el-tab-pane label="" name="first">
                    <ul>
                        <li class="list" v-for="msg in msgs">{{msg}}</li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="" name="second">学习</el-tab-pane>
                <el-tab-pane label="" name="third">饮食</el-tab-pane>
                <el-tab-pane label="" name="fourth">其他</el-tab-pane>
            </el-tabs>-->
            <div class="tags">
                <el-tag>学习</el-tag>
                <el-tag type="success">社团</el-tag>
                <el-tag type="info">饮食</el-tag>
                <el-tag type="warning">技术宅</el-tag>
                <el-tag type="danger">互联网+</el-tag>
                <el-tag type="success">生活</el-tag>
                <el-tag type="warning">体育赛事</el-tag>
                <el-tag type="danger">迎新</el-tag>
            </div>
            <el-card class="box-card">
                <li class="list" v-for="msg in msgs">{{msg}}</li>
            </el-card>
        </div>
        <div class="box-son2">
            <el-card class="box-card ranking">
                <div slot="header" class="clearfix">
                    <h2>今日排行</h2>
                </div>
                <ol>
                    <b><li v-for="top in tops" class="top">{{top}}</li></b>
                </ol>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data: function () {
            return {
                items:[{id:0,url:require('../../public/轮播图1.jpg')},
                    {id:1,url:require('../../public/轮播图2.jpg')},
                    {id:2,url:require('../../public/轮播图3.jpg')}
                ],
                activeName: 'first',
                msgs: ['关于学习贯彻教学科研和学科工作暨一流大学建设推进会精神的通知',
                       '关于公布相关部门2020年暑假值班工作安排的通知',
                       '2020年大学生创新创业训练计划中期检查结果公示',
                       '关于开展2020届毕业生创业扶持工作的通知',
                        '关于学习贯彻教学科研和学科工作暨一流大学建设推进会精神的通知',
                        '关于公布相关部门2020年暑假值班工作安排的通知',
                        '2020年大学生创新创业训练计划中期检查结果公示',
                        '关于开展2020届毕业生创业扶持工作的通知'
                ],
                tops: [
                    '百草味',
                    '绝味鸭脖',
                    '晨光文具',
                    '自热小火锅',
                    '电动牙刷',
                    '老八秘制小汉堡',
                    '无线耳机',
                    '毛绒玩具',
                    '零食大礼包',
                ]
            }
        }
    }
</script>

<style scoped>
    .box{
        position: absolute;
        width: 1236px;
        height: 694px;
        left: 500px;
        top: 60px;
    }
    .tags{
        width: 800px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .list{
        line-height: 60px;
        border-bottom: 1px solid #333;
        color: #333333;
        font-size: 20px;
    }
    .box-son2{
        float: left;
        width: 100px;
        height: 100px;
    }
    .ranking{
        width: 390px;
        margin-left: 46px;
    }
    .top{
        line-height: 40px;
        font-size: 17px;
    }
</style>