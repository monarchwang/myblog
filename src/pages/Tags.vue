<template>
    <div>
        <timeline :title="tag" icon="tag" :dataList="dataList" @on-tag-click="tagClick"></timeline>
        <!--分页组件-->
        <div class="pagination" v-show="totalNum > pageSize ">
            <pagination :current-page="currentPage" :total-page="totalPage"
                        :page-size="pageSize"
                        :set-page="setPage"></pagination>
        </div>
    </div>
</template>

<script>
    import Timeline from '../components/Timeline.vue'
    import Pagination from '../components/Pagination.vue'
    import Api from '../api/index'

    export default {
        components: {Timeline, Pagination},
        data() {
            return {
                tag: '',
                totalNum: 0,
                currentPage: 1,
                pageSize: 10,
                dataList: []
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.totalNum / this.pageSize)
            },

        },
        created() {
            //监听RightSlide.vue组件触发的事件
            Api.Bus.$on('on-click-tag', tag => {
                this.tag = tag;
                this.queryBlogList();
            })
        },
        mounted() {
            this.tag = this.$route.params.tag;
            this.queryBlogList();
        },
        methods: {
            // 设置分页
            setPage(page) {
                this.currentPage = page;
                this.queryBlogList();
            },
            queryBlogList() {
                Api.queryBlogList(this.currentPage, this.pageSize, this.tag).then(response => {
                    this.dataList = response.data.rows ? response.data.rows : [];
                    this.totalNum = response.data.total;
                }).catch(error => {
                    console.log(error);
                    alert(error.message)
                })
            },
            tagClick(tag) {
                this.tag = tag;
                this.queryBlogList();
            }
        }
    }
</script>
<style scoped>

</style>