<template>
    <transition name="slide">

        <div class="synopsis-container article-container">

            <div class="synopsis article">
                <div class="synopsis-header article-title">
                    <h1 class="synopsis-title">{{synopsis.title}}</h1>
                </div>
                <div class="synopsis-content" v-html="synopsis.content"
                     style="font-size: .9rem;overflow-x:hidden "></div>

                <div class="synopsis-footer">
                    <label class="date"><i
                            class="fa fa-calendar"></i>&nbsp;&nbsp;<span>{{synopsis.createTime}}</span></label>
                    <label class="tags"><i class="fa fa-tags"></i>&nbsp;&nbsp;<span
                            v-for="tag in synopsis.tags">{{tag}}</span></label>

                    <label class="comments"><i class="fa fa-comments"></i>&nbsp;&nbsp;{{synopsis.viewNumber}}</label>
                    <label class="views"><i class="fa fa-eye"></i>&nbsp;&nbsp;{{synopsis.viewNumber}}</label>
                </div>
            </div>
        </div>

    </transition>

</template>

<script>
    import Api from '../api/index'

    export default {
        name: 'ArticleDetail',
        components: {},
        data() {
            return {
                synopsis: {},
                blogData: {}
            }
        },
        mounted() {
            let id = this.$route.params.id;
            Api.queryBlogDetail(id).then(response => {
                this.synopsis = response.data;
            }).catch(error => {
                console.log(error);
                alert(error.message);
            })
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/global.scss';

    .article-container {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #f6f6f6;
        overflow: auto;

        .article {
            width: 60%;
            margin: 5rem auto;
            /*border-radius: 1rem;*/

            .article-title {
                text-align: center;
                h1 {
                    font-size: x-large !important;
                    cursor: text;
                    &:hover {
                        text-decoration: none;
                    }
                }
            }

        }

        /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
        &::-webkit-scrollbar {
            width: 16px;
            height: 10px;
            background-color: #f5f5f5;
        }
        /*定义滚动条的轨道，内阴影及圆角*/
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .5);
            border-radius: 10px;
            background-color: #f5f5f5;
        }
        /*定义滑块，内阴影及圆角*/
        &::-webkit-scrollbar-thumb {
            /*width: 10px;*/
            height: 10px;
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, .2);
            background-color: #999;
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .3s;
    }

    .slide-enter, .slide-leave-to {
        transform: translate3d(100%, 0, 0);
    }


</style>
