<template>
    <div>
        <md-button class="md-raised md-primary" @click="btnclick">登 录</md-button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "lbutton",
        methods:{
            btnclick(){
                axios.get('http://123.207.32.32:8000/home/multidata')
                    .then(res => {
                        console.log(res);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-raised{
        width:200px;
        background-color: blue;
        color:white;
        font-family: "Arial Black";
        font-size: 25px;
        border-radius: 10px;
        position: absolute;
        left:120px;
        top:236px;
        z-index: 999;
    }

</style>