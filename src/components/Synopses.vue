<template>
    <div class="synopsis-container">
        <div class="synopsis" v-for="(synopsis, item) in synopses">
            <div class="synopsis-header">
                <h2 class="synopsis-title" @click="toArticleDetail(synopsis.id)">{{synopsis.title}}</h2>
                <div class="synopsis-subtitle">
                    <label class="date"><i
                            class="fa fa-calendar"></i>&nbsp;&nbsp;<span>{{synopsis.createTime}}</span></label>
                    <label class="tags"><i class="fa fa-tags"></i>&nbsp;&nbsp;<span
                            v-for="tag in synopsis.tags">{{tag}}</span></label>
                </div>
            </div>
            <div class="synopsis-content">
                {{synopsis.brief}}
            </div>
            <div class="synopsis-footer">
                <label class="comments"><i class="fa fa-eye"></i>&nbsp;&nbsp;{{synopsis.viewNumber}}</label>
            </div>
        </div>

        <pagination v-show="totalPage>1" :current-page="currentPage" :total-page="totalPage" :page-size="pageSize"
                    :set-page="setPage"></pagination>
    </div>
</template>

<script>
    import Pagination from '../components/Pagination.vue'
    import Api from '../api/index'
    export default {
        name: 'synopses',
        data () {
            return {
                currentPage: 1,
                totalPage: 0,
                pageSize: 2,
                synopses: []
            }
        },
        mounted(){
            this.queryBlogList();
        },
        methods: {
            // 设置分页
            setPage (page) {
                this.currentPage = page;
                this.queryBlogList();
            },
            toArticleDetail(articleId){
                this.$router.push(`/code/article/${articleId}`);
            },
            queryBlogList(){
                Api.queryBlogList(this.currentPage - 1, this.pageSize).then(response => {
                    this.synopses = response.data.rows;
                    this.totalPage = response.data.pages;
                }).catch(error => {
                    console.log(error);
                    alert(error.message)
                })
            }

        },
        components: {
            Pagination
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/global.scss';

    .synopsis-container {
        width: 100%;
        float: left;
        .synopsis {
            font-size: 85%;

            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
            padding: 1.8rem;
            margin-bottom: 1.8rem;
            background-color: #fff;
            .synopsis-header {
                width: 100%;
                .synopsis-title {
                    font-size: 20px;
                    cursor: pointer;
                    color: $brightColor;
                    &:hover {
                        color: $infoColor;
                    }
                }
                .synopsis-subtitle {
                    margin: 1rem 0;
                    label {
                        display: inline-block;
                    }
                    label.date > span {
                        cursor: pointer;
                        &:hover {
                            color: $brightColor;
                        }
                    }
                    label.tags {
                        margin-left: 20px;
                        span {
                            cursor: pointer;
                            &:hover {
                                color: $brightColor;
                            }
                        }
                        span + span {
                            margin-left: 10px;
                        }
                    }
                }
                margin-bottom: 0.5rem;
            }
            .synopsis-content {
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
                text-indent: 2em;
                line-height: 1.7em;
            }
            .synopsis-footer {
                border-top: 1px solid $gray4;
                height: 20px;
                line-height: 50px;
                .comments {
                    float: right;
                    cursor: pointer;
                    &:hover {
                        color: $checkedColor;
                    }
                }
            }
        }
    }
</style>
