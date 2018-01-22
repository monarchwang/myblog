<template>
    <div id="app">
        <div class="header">
            <div class="main-content clearfix">
                <div class="logo">
                    <i class="icon"></i>wglliang
                </div>
                <ul class="nav">
                    <li v-for="item in items" :class="{active:item.isShow}" @click="goto(item)">
                        {{item.text}}
                    </li>
                </ul>

                <!--搜索框-->
                <div class="search">
                    <label>
                        <input class="input" @click="searchFocus()"/>
                        <i class="fa fa-search"></i>
                    </label>
                </div>
            </div>
        </div>

        <div class="main-content content clearfix">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <div class="footer">
            <div id="footer-info" class="main-content">
                © 2018 wangguoliang <a href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备17070653号</a>
                <br>
                本站总访问量<span class="view-num">{{viewNum}}</span>次 <br>
            </div>
        </div>

        <modal v-show="showSearchModal" :show="showSearchModal" @close="closeModal" borderRadius="0" padding="0 0"
               :maskClosable="modal.maskClosable" width="600">
            <span slot="header"></span>
            <div slot="body" class="ins-search-container">
                <div class="ins-input-wrapper">
                    <input type="text" class="ins-search-input" v-model="keywords" placeholder="想要查找什么...">
                    <span class="ins-close ins-selectable" @click.stop.prevent="closeModal()"><i class="fa fa-times-circle"></i></span>
                </div>

                <div class="ins-section-wrapper">
                    <div class="ins-section-container">
                        <section class="ins-section"
                                 v-show="dataSummary.articleDtos && dataSummary.articleDtos.length>0">
                            <header class="ins-section-header">文章</header>
                            <div class="ins-selectable ins-search-item" @click="gotToArticleDetail(summary.id)"
                                 v-for="summary in dataSummary.articleDtos">
                                <header><i class="fa fa-file"></i>{{summary.title}}</header>
                                <p class="ins-search-preview">
                                    {{summary.brief}}
                                </p></div>
                        </section>
                        <section class="ins-section" v-show="dataSummary.tags && dataSummary.tags.length>0">
                            <header class="ins-section-header">标签</header>
                            <div class="ins-selectable ins-search-item" @click="goToTagPage(tag)"
                                 v-for="tag in dataSummary.tags">
                                <header>
                                    <i class="fa fa-tag"></i>{{tag}}
                                </header>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div slot="footer"></div>
        </modal>
    </div>
</template>

<script>
    import Modal from './components/Modal.vue'
    import Api from './api/index'
    import {deepCopy} from './utils/assist'

    export default {
        name: 'app',
        components: {Modal},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                viewNum: 0,
                items: [
                    {
                        text: '博客',
                        router: '/blog',
                        isShow: false
                    },
                    {
                        text: '诗',
                        router: '/poetry',
                        isShow: false
                    },
                    {
                        text: '远方',
                        router: '/distance',
                        isShow: false
                    },
                    {
                        text: '自白',
                        router: '/readme',
                        isShow: false
                    },
                ],
                showSearchModal: false,
                modal: {
                    maskClosable: true,
                },
                dataSummary: {
                    articleDtos: [],
                    tags: []
                },
                keywords: ''
            }
        },
        mounted() {
            let href = location.href;
            this.items.map(function (value) {
                if (href.indexOf(value.router) > 0) {
                    value.isShow = true;
                }
            });
            this.getSummary();
        },
        watch: {
            keywords(val) {
                let articleDtos = [];
                let tags = [];
                console.log(this.$globalData.dataSummary);
                let dataSummary = deepCopy(this.$globalData.dataSummary);
                dataSummary.articleDtos.map(article => {
                    if (!val || article.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || article.brief.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        articleDtos.push(article)
                    }
                });
                dataSummary.tags.map(tag => {
                    if (!val || tag.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        tags.push(tag)
                    }
                });

                this.dataSummary.articleDtos = articleDtos.splice(0, 5);
                this.dataSummary.tags = tags.splice(0, 5);
            }
        },
        methods: {
            goto(item) {
                this.items.map((val, index, arr) => {
                    val.isShow = false;
                });
                item.isShow = true;
                this.$router.push(item.router)
            },
            searchFocus() {
                this.showSearchModal = true;
                this.keywords = "";
            },
            closeModal() {
                this.showSearchModal = false;
            },
            gotToArticleDetail(articleId) {
                window.open(`/#/blog/detail/${articleId}`)
            },
            goToTagPage(tag) {
                this.showSearchModal = false;
                this.$router.push(`/blog/tags/${tag}`);
                Api.Bus.$emit('on-click-tag', tag);
            },
            getSummary() {
                Api.getSummary().then(res => {
                    this.viewNum = res.viewerSum ? res.viewerSum : 0;
                    if (res.data) {
                        this.$globalData.dataSummary = deepCopy(res.data);
                        this.dataSummary.articleDtos = res.data.articleDtos.splice(0, 5);
                        this.dataSummary.tags = res.data.tags.splice(0, 5);
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>
<style lang="scss">
    /*全局css*/
    @import './assets/css/global.scss';

    .ins-search-container {
        box-sizing: border-box;
        color: #565a5f;
        padding-top: 10px;
        .ins-input-wrapper {
            position: relative;
            .ins-search-input {
                outline: 0;
                width: 100%;
                border: none;
                font-size: 14px;
                -webkit-box-shadow: none;
                box-shadow: none;
                font-weight: 200;
                border-radius: 0;
                background: #fff;
                line-height: 20px;
                box-sizing: border-box;
                padding: 12px 28px 12px 20px;
                border-bottom: 1px solid #e2e2e2;
                font-family: "Microsoft Yahei Light", "Microsoft Yahei", Helvetica, Arial, sans-serif;
            }
            .ins-close {
                top: 50%;
                right: 6px;
                width: 20px;
                height: 20px;
                font-size: 16px;
                margin-top: -11px;
                position: absolute;
                display: inline-block;
                text-align: center;
                cursor: pointer;
            }
        }
        .ins-section-wrapper {
            overflow-y: auto;
            position: relative;
            .ins-section-container {
                position: relative;
                background: #f7f7f7;
                .ins-section {
                    font-size: 14px;
                    line-height: 16px;
                    .ins-section-header {
                        color: #9a9a9a;
                        border-bottom: 1px solid #e2e2e2;
                    }
                    .ins-search-item {
                        padding: 8px 15px;
                        &:hover {
                            color: #fff;
                            background: #006bde;
                            .ins-search-preview {
                                color: #fff;
                            }
                        }
                        header {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            .fa {
                                margin-right: 8px;
                            }
                        }
                        .ins-search-preview {
                            height: 15px;
                            font-size: 12px;
                            color: #9a9a9a;
                            margin: 5px 0 0 20px;
                        }
                    }
                    .ins-selectable {
                        cursor: pointer;
                    }
                }
                .ins-section .ins-search-item, .ins-section .ins-section-header {
                    padding: 8px 15px;
                }
                .ins-section .ins-search-item .ins-search-preview, .ins-section .ins-search-item header {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

        }

    }

    .header {
        width: 100%;
        height: $headerHeight;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
        line-height: $headerHeight;
        .main-content {
            .logo {
                float: left;
                height: $headerHeight;
                line-height: $headerHeight;
                .icon {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    background: url("./assets/logo.png") no-repeat;
                    background-size: 40px 40px;
                    white-space: nowrap;
                    letter-spacing: -1em;
                    text-indent: -99em;
                    color: transparent;
                    vertical-align: middle;
                    margin-right: 10px;
                }
            }
            .nav {
                float: left;
                margin-left: 100px;
                li {
                    display: inline-block;
                    width: 80px;
                    text-align: center;
                    font-weight: 300;
                    cursor: pointer;
                    font-style: inherit;
                    font-family: inherit;
                    font-size: 100%;
                    &:hover {
                        color: $brightColor;
                    }
                }
                .active {
                    box-shadow: 0 -2px 0 $brightColor inset;
                    color: $infoColor;
                }
            }
            .search {
                float: right;
                height: $headerHeight;
                line-height: $headerHeight;
                margin-right: 115px;

                label {
                    .input {
                        border: 1px solid $gray5;
                        border-radius: 25px;
                        height: 32px;
                        line-height: 40px;
                        padding: 0 30px 0 15px;
                        outline: none;
                        background: 0;
                    }
                    i {
                        margin-top: -35px;
                        margin-right: 10px;
                        float: right;
                    }
                }
            }
        }
    }
</style>
