<template>
    <transition name="fade">
        <div class="synopsis-container">
            <div class="synopsis" v-for="(synopsis, item) in synopses">
                <div class="synopsis-header">
                    <h2 class="synopsis-title" @click="toArticleDetail(synopsis.id)">{{synopsis.title}}</h2>
                    <div class="synopsis-subtitle">
                    </div>
                </div>
                <div class="synopsis-content">
                    {{synopsis.brief + "..."}}
                </div>
                <div class="synopsis-footer">
                    <label class="date"><i
                            class="fa fa-calendar"></i>&nbsp;&nbsp;<span>{{synopsis.createTime}}</span></label>
                    <label class="tags"><i class="fa fa-tags"></i>&nbsp;&nbsp;<a :href="'#/code/tags/' + tag"
                            v-for="tag in synopsis.tags">{{tag}}</a></label>

                    <label class="comments"><i class="fa fa-comments"></i>&nbsp;&nbsp;{{synopsis.commentsNumber}}</label>
                    <label class="thumbs"><i class="fa fa-thumbs-up"></i>&nbsp;&nbsp;{{synopsis.agreeNumber}}</label>
                    <label class="views"><i class="fa fa-eye"></i>&nbsp;&nbsp;{{synopsis.viewNumber}}</label>
                </div>
            </div>
            <!--分页组件-->
            <div class="pagination" v-show="totalNum > pageSize ">
                <pagination :current-page="currentPage" :total-page="totalPage"
                            :page-size="pageSize"
                            :set-page="setPage"/>
            </div>
        </div>
    </transition>
</template>

<script>
    import Pagination from '../components/Pagination.vue'
    import Api from '../api/index'

    export default {
        name: 'synopses',
        data() {
            return {
                totalNum: 0,
                currentPage: 1,
                pageSize: 5,
                synopses: []
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.totalNum / this.pageSize)
            },

        },
        mounted() {
            this.queryBlogList();
        },
        methods: {
            // 设置分页
            setPage(page) {
                this.currentPage = page;
                this.queryBlogList();
            },
            toArticleDetail(articleId) {
                // this.$router.push(`/code/article/${articleId}`);
                window.open(`/#/code/article/${articleId}`)
            },
            queryBlogList() {
                Api.queryBlogList(this.currentPage, this.pageSize).then(response => {
                    this.synopses = response.data.rows;
                    this.totalNum = response.data.total;
                }).catch(error => {
                    console.log(error);
                    alert(error.message)
                })
            }

        },
        components: {Pagination}
    }
</script>

<style lang="scss">
    @import '../assets/css/global.scss';

    .fade {
        &.normal-enter-active, &.normal-leave-active {
            transition: all 0.4s;
            .top, .bottom {
                transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
            }
        }

        &.normal-enter, &.normal-leave-to {
            opacity: 0;
            .top {
                transform: translate3d(0, -100px, 0)
            }
            .bottom {
                transform: translate3d(0, 100px, 0)
            }
        }

    }

    .synopsis-container {
        width: 100%;
        float: left;
        .synopsis {
            min-height: 180px;
            font-size: 85%;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
            padding: 1.8rem;
            margin-bottom: 1.8rem;
            background-color: #fff;
            box-sizing: border-box;
            .synopsis-header {
                width: 100%;
                .synopsis-title {
                    font-size: 1.1rem;
                    cursor: pointer;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            .synopsis-content {
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
                min-height: 2rem;
                text-indent: 2em;
                line-height: 1.7em;
            }
            .synopsis-footer {
                font-size: 90%;
                margin-top: 20px;
                border-top: 1px solid $gray4;
                height: 20px;
                line-height: 50px;
                .tags {
                    margin-left: 20px;

                    a {
                        &:visited {
                        }
                        cursor: pointer;
                        &:hover {
                            color: $brightColor;
                        }
                    }
                    a + a {
                        margin-left: 10px;
                    }
                }

                .views, .comments, .thumbs {
                    float: right;
                }
                .views, .thumbs {
                    margin-right: 15px;
                }
            }
        }
    }
</style>
