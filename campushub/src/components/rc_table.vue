<template>
    <div id="rc_table">
        <el-table
                :data="tableData"
                style="width: 1600px;height:650px; position: absolute; left:320px; top:60px;">
            <el-table-column
                    prop="num"
                    label="序号"
                    sortable
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="pro"
                    label="产品"
                    width="350">
            </el-table-column>
            <el-table-column
                    prop="com"
                    label="企业"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="href"
                    label="链接"
                    :formatter="formatter">
            </el-table-column>
            <el-table-column
                    prop="star"
                    label="推荐指数"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="标签"
                    width="100"
                    :filters="[{ text: '日常', value: '日常' }, { text: '美食', value: '没事' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.tag === '家' ? 'primary' : 'success'"
                            close-transition>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
        </el-table>
        <div class="block" style="position: absolute; left:950px; top:770px;">
            <el-pagination
                    layout="prev, pager, next"
                    :total="50"
            style="">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rc_table",
        data() {
            return {
                tableData: [{
                    num: '1',
                    pro: '晨光文具',
                    com: '大河',
                    href: 'http://www.dwjicd.com',
                    star: '4',
                    tag: '日常'
                }, {
                    num: '2',
                    pro: '鸭脖',
                    com: '大河',
                    href: 'http://www.dwijjc.com',
                    star: '5',
                    tag: '美食'
                }, {
                    num: '3',
                    pro: '可拆页式笔记本',
                    com: '大河',
                    href: 'http://www.dwdjiemvd.com',
                    star: '5',
                    tag: '日常'
                },{
                    num: '5',
                    pro: '拖鞋',
                    com: '大河',
                    href: 'http://www.dajdhcui.com',
                    star: '3',
                    tag: '日常'
                },{
                    num: '6',
                    pro: '电动牙刷',
                    com: '大河',
                    href: 'http://www.dajdhcui.com',
                    star: '5',
                    tag: '日常'
                },{
                    num: '7',
                    pro: '香辣鸡翅',
                    com: '大河',
                    href: 'http://www.daddwcui.com',
                    star: '5',
                    tag: '美食'
                },{
                    num: '8',
                    pro: '水杯',
                    com: '大河',
                    href: 'http://www.dajdhcui.com',
                    star: '4',
                    tag: '日常'
                },{
                    num: '9',
                    pro: '自热小火锅',
                    com: '大河',
                    href: 'http://www.ffrrehcui.com',
                    star: '4',
                    tag: '美食'
                }]
            }
        },
        methods: {
            formatter(row, column) {
                return row.href;
            },
            filterTag(value, row) {
                return row.tag === value;
            }
        }
    }
</script>

<style scoped>

</style>