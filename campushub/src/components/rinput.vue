<template>
    <div class="inline">
        <md-field md-clearable>
            <label>用户名</label>
            <md-input></md-input>
        </md-field>

        <md-field>
            <label>密码</label>
            <md-input type="password"></md-input>
        </md-field>

        <md-field :md-toggle-password="false">
            <label>确认密码</label>
            <md-input type="password"></md-input>
        </md-field>

        <md-field md-clearable>
            <label>邮箱</label>
            <md-input></md-input>
        </md-field>

        <md-field md-clearable>
            <label>邀请码</label>
            <md-input></md-input>
        </md-field>


    </div>
</template>

<script>
    export default {
        name: "rinput",
    }
</script>

<style lang="scss" scoped>
    .md-field:last-child {
        margin-bottom: 40px;
    }
    .inline{
        width:320px;
        position:absolute;
        top:80px;
        left:160px;
        font-weight: bold;
    }
    .md-input{
        border-bottom: 1px solid black;
    }
</style>