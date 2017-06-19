<template>
    <div class="right-slide">
        <div class="slide-item">
            <h2 class="slide-item-title">公告</h2>
            <div class="slide-item-box">
                <h3>您好，您是小站第 <strong>{{viewNum}}</strong> 位访客</h3>
                <ul>
                    <li v-for="notice in notices">
                        <span v-html="notice"></span>
                    </li>
                </ul>
                <h3>欢迎分享交流经验！</h3>
            </div>
        </div>
        <div class="slide-item">
            <h3 class="slide-item-title">归档</h3>
            <div class="widget">
                <ul class="archive-list">
                    <li class="archive-list-item" v-for="archive in archiveList">
                        <a class="archive-list-link" :href="archive.url">{{archive.date}}</a>
                        <span class="archive-list-count">{{archive.number}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="slide-item">
            <h3 class="slide-item-title">标签</h3>
            <div class="widget">
                <a href="/tags/CQRS/" style="font-size:20px">CQRS</a>
                <a href="/tags/DDD/" style="font-size:20px">DDD</a>
                <a href="/tags/akka/" style="font-size:10px">akka</a>
                <a href="/tags/axon/" style="font-size:20px">axon</a>
                <a href="/tags/eventsourcing/" style="font-size:20px">eventsourcing</a>
                <a href="/tags/eventuate/" style="font-size:10px">eventuate</a>
                <a href="/tags/多线程/" style="font-size:10px">多线程</a>
                <a href="/tags/感悟/" style="font-size:10px">感悟</a>
                <a href="/tags/杂项/" style="font-size:10px">杂项</a></div>
        </div>
        <div class="slide-item">
            <h3 class="slide-item-title">链接</h3>
            <div class="widget">
                <ul>
                    <li v-for="links in linkList">
                        <a :href="links.url">{{links.text}}</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'RightSlide',
        data () {
            return {
                msg: 'Welcome to Vue.js App',
                viewNum: 6666,
                notices: ["Q Q: 1786374738", "微信: wangguoliang3152", "邮箱：wglliang@126.com", "源码：<a target='_blank' href='http://www.github.com/monarchwang/myblog' style='color: #1E9FFF; text-decoration: none'>传送门</a>"],
                archiveList: [
                    {
                        url: "/archives/2017/04/",
                        date: "四月 2017",
                        number: 2
                    },
                    {
                        url: "/archives/2017/03/",
                        date: "三月 2017",
                        number: 8
                    },
                    {
                        url: "/archives/2017/02/",
                        date: "二月 2017",
                        number: 6
                    }
                ],
                tagList: [
                    {
                        url: '',
                        text: '',

                    },
                ],
                linkList: [
                    {
                        url: 'http://bbs.springcloud.cn',
                        text: 'SpringCloud中文社区'
                    },
                    {
                        url: 'http://itmuch.com',
                        text: '周立|Spring Cloud'
                    },
                    {
                        url: 'http://blog.didispace.com',
                        text: '程序猿DD'
                    },
                    {
                        url: 'http://blog.xujin.org',
                        text: '许进|沉思录'
                    },
                    {
                        url: 'http://edisonxu.org',
                        text: 'EdisonXu'
                    }
                ]
            }
        },
        methods: {
            hello () {
                console.log('Hello');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/global.scss";

    .right-slide {
        width: 100%;
        padding: 0 1rem;
        .slide-item:first-child {
            margin-left: 10px;
            .slide-item-title {
                color: rgba(0, 0, 0, 0.6);
            }
            .slide-item-box {
                margin-top: 10px;
                padding: 1rem;
                line-height: 1.5rem;
                background-color: #fff9c4;
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
                h3 {
                    font-weight: 500;
                    strong {
                        color: $brightColor;
                    }
                }
                ul {
                    margin: 1rem 0;
                    list-style: none;
                }
            }
        }
        .slide-item:not(:first-child) {
            padding-top: 20px;
            margin: 20px 10px 10px;
            border-top: 1px dashed $gray5;
            &:first-child {
                border-top: none;
            }
            .slide-item-title {
                color: rgba(0, 0, 0, 0.6);
            }
            .widget {
                padding: 1rem;
                line-height: 1.6em;
                word-wrap: break-word;
                font-size: .9em;
                a {
                    text-decoration: none;
                    color: #777;
                    &:hover {
                        color: #333;
                    }
                }
                ul {
                    line-height: 1.6em;
                    list-style: none;
                    li {
                        padding: 10px 0;
                        font-size: 14px;
                        a {
                            &:before {
                                color: #ccc;
                                content: "\f0da";
                                font-family: FontAwesome;
                                font-size: 12px;
                                margin-right: 6px;
                                -webkit-transition: .2s ease;
                                -moz-transition: .2s ease;
                                transition: .2s ease;
                            }
                        }
                        span {
                            &:before {
                                content: '(';
                            }
                            padding-left: 5px;
                            color: #999;
                            font-size: .85em;
                            &:after {
                                content: ')';
                            }
                        }
                    }
                }
            }
        }
        #tagcloud {
            a {
                &:hover {
                    color: $dangerColor;
                }
            }
        }
    }
</style>
