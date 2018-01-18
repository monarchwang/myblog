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
                    <input type="text" class="ins-search-input" placeholder="想要查找什么...">
                    <span class="ins-close ins-selectable"><i class="fa fa-times-circle"></i></span>
                </div>

                <div class="ins-section-wrapper">
                    <div class="ins-section-container">
                        <section class="ins-section">
                            <header class="ins-section-header">文章</header>
                            <div class="ins-selectable ins-search-item" data-url="/2017/03/30/hello-axon.html">
                                <header><i class="fa fa-file"></i>CQRS和Event Sourcing系列（三）： Hello,Axon3</header>
                                <p class="ins-search-preview">
                                    AxonFramework是一个轻量级的CQRS框架，支持EventSourcing，本系列将开始通过例子，StepByStep学习AxonFramework。
                                    简介AxonFramework是一个基于事件驱动的轻量级CQRS框架，既支持直接持久化Aggreaget状态，也支持采用EventSour</p></div>
                            <div class="ins-selectable ins-search-item" data-url="/2017/04/24/axon-spring-cloud.html">
                                <header><i class="fa fa-file"></i>CQRS和Event Sourcing系列（九）：AxonFramework与SpringCloud的整合
                                </header>
                                <p class="ins-search-preview">
                                    上一篇里，我们在利用Axon3的DistributeCommand的JGroup支持，和DistributedEvent对AMQP的支持，实现了分布式环境下的CQRS和EventSourcing。在这一篇中，我们将把Axon3与当下比较火热的微服务框架——SpringCloud进行整合，并将其微服务</p>
                            </div>
                            <div class="ins-selectable ins-search-item" data-url="/2017/03/31/axon-saga.html">
                                <header><i class="fa fa-file"></i>CQRS和Event Sourcing系列（七）：Saga的使用</header>
                                <p class="ins-search-preview">
                                    在上一篇里面，我们正式的使用了CQRS模式完成了AXON的第一个真正的例子，但是细心的朋友会发现一个问题，创建订单时并没有检查商品库存。库存是否足够直接回导致订单状态的成功与否，在并发时可能还会出现超卖。当库存不足时还需要回滚订单，所以这里出现了复杂的跨Aggregate事务问题。Saga就是为解决</p>
                            </div>
                            <div class="ins-selectable ins-search-item" data-url="/2017/03/30/axon-cqrs-example.html">
                                <header><i class="fa fa-file"></i>CQRS和Event Sourcing系列（六）： 第一个正式Axon例子</header>
                                <p class="ins-search-preview">
                                    前面对Axon的基本概念和基本操作做了简介，从本章开始，我们将一步步使用AxonFramework完成一个真正CQRS&amp;amp;EventSourcing的例子。
                                    设计回顾一下使用AxonFramework应用的架构 Command端Repository和Query端的Database是解耦的，完全</p></div>
                            <div class="ins-selectable ins-search-item" data-url="/2017/03/30/axon-event-sourcing.html">
                                <header><i class="fa fa-file"></i>CQRS和Event Sourcing系列（五）：
                                    Axon使用EventSourcing和AutoConfigure
                                </header>
                                <p class="ins-search-preview">继上一篇集成SpringBoot后，本篇将继续完成小目标： 使用EventSourcing
                                    使用AutoConfigure配置Axon
                                    前一篇中看到配置Axon即便在Spring中也是比较麻烦的，好在Axon提供了spring-boot-autoconfigure，提供了Spring下的一些默认配置</p>
                            </div>
                        </section>
                        <section class="ins-section">
                            <header class="ins-section-header">标签</header>
                            <div class="ins-selectable ins-search-item"
                                 data-url="http://edisonxu.org/tags/eventsourcing/">
                                <header><i class="fa fa-tag"></i>eventsourcing<span
                                        class="ins-slug">eventsourcing</span></header>
                            </div>
                            <div class="ins-selectable ins-search-item" data-url="http://edisonxu.org/tags/CQRS/">
                                <header><i class="fa fa-tag"></i>CQRS<span class="ins-slug">CQRS</span></header>
                            </div>
                            <div class="ins-selectable ins-search-item" data-url="http://edisonxu.org/tags/axon/">
                                <header><i class="fa fa-tag"></i>axon<span class="ins-slug">axon</span></header>
                            </div>
                            <div class="ins-selectable ins-search-item" data-url="http://edisonxu.org/tags/DDD/">
                                <header><i class="fa fa-tag"></i>DDD<span class="ins-slug">DDD</span></header>
                            </div>
                            <div class="ins-selectable ins-search-item" data-url="http://edisonxu.org/tags/感悟/">
                                <header><i class="fa fa-tag"></i>感悟<span class="ins-slug">感悟</span></header>
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

    export default {
        name: 'app',
        components: {Modal},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                viewNum: 1234,
                items: [
                    {
                        text: '要填的坑',
                        router: '/code',
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
                }
            }
        },
        mounted() {
            let href = location.href;
            this.items.map(function (value) {
                if (href.indexOf(value.router) > 0) {
                    value.isShow = true;
                }
            });

        },
        methods: {
            goto(item) {
                this.items.map(function (val, index, arr) {
                    val.isShow = false;
                });
                item.isShow = true;
                this.$router.push(item.router)
            },
            searchFocus() {
                this.showSearchModal = true;
            },
            closeModal() {
                this.showSearchModal = false;

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
                    .ins-search-item{
                        padding: 8px 15px;
                        &:hover{
                            color: #fff;
                            background: #006bde;
                            .ins-search-preview{
                                color: #fff;
                            }
                        }
                        header{
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            .fa{
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
                    .ins-selectable{
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
