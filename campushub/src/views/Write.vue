<template>
    <div class="out1">
        <vue-simplemde v-model="content" ref="markdownEditor" />
    </div>
</template>

<script>
    import VueSimplemde from 'vue-simplemde'

    export default {
        name: "Write",
        components:{
            VueSimplemde
        }
    }
</script>

<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
    .out1 {
        float: left;
        position: relative;
        width: 1600px;
        height: 600px;
        background-color: rgba(64, 64, 255, 0.1);
        border-radius: 10px;
        left: 320px;
        top: -450px;

    }

    .out1 .out2 {
        position: absolute;
        width: 450px;
        height: 350px;
        border: 1px solid black;
        font-size: 20px;
        top: 100px;
        z-index: 999;
        left: 950px;
    }

    .icon01 {
        position: absolute;
        color: black;
        font-size: 30px;
        top: 105px;
        left: 50px;
    }

    .iconmima {
        position: absolute;
        color: black;
        font-size: 30px;
        top: 177px;
        left: 50px;
    }


</style>