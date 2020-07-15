<template>
    <div class="inline">
            <md-field md-clearable>
                <label>用户名</label>
                <md-input v-model="initial" style="border-bottom: 1px solid black"></md-input>
            </md-field>

            <md-field>
                <label>密码</label>
                <md-input v-model="password" type="password" style="border-bottom: 1px solid black"></md-input>
            </md-field>
    </div>
</template>

<script>

    export default {
        name: 'linput',
        data: () => ({
            initial: '',
            password: ''
        })
    }
</script>

<style lang="scss" scoped>
    .md-field:last-child {
        margin-bottom: 40px;
    }
    .inline{
        width:300px;
        font-weight: bold;
        font-size: large;
        z-index: 999;
        position:absolute;
        left:100px;
        top:76px;
        float: left;
    }

</style>