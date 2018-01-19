<template>
    <div class="right-slide">
        <div class="slide-item">
            <h2 class="slide-item-title">公告</h2>
            <div class="slide-item-box">
                <h3>您好，您是小站第 <strong>{{viewerSum}}</strong> 位访客</h3>
                <ul>
                    <li v-for="notice in notices">
                        <span v-html="notice"></span>
                    </li>
                </ul>
                <h3>欢迎分享交流经验！</h3>
            </div>
        </div>
        <div class="slide-item" v-show="archiveList.length > 0">
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
            <div class="widget tagcloud">
                <span :style="{fontSize: tagFontSize[Math.floor(Math.random()*tagFontSize.length)]}"
                      @click="clickTag(tag)"
                      v-for="tag in tagList">
                    {{tag}}
                </span>
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
    </div>
</template>

<script>
    export default {
        props: {
            tagList: {
                type: Array,
                default: []
            },
            viewerSum: {
                type: Number,
                default: 0
            }
        },
        name: 'RightSlide',
        data() {
            return {
                tagFontSize: ['8px', '14px', '16px', '20px'],
                notices: ["Q Q: 1786374738", "微信: wangguoliang3152", "邮箱：wglliang@126.com", "源码：<a target='_blank' href='http://www.github.com/monarchwang/myblog' style='color: #1E9FFF; text-decoration: none'>传送门</a>"],
                archiveList: [
                    /*{
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
                    }*/
                ],
                tagsNum: 0,
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
            clickTag(tag) {
                this.$emit('on-click-tag', tag);
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
                padding: 0.8rem;
                font-size: 80%;
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
                font-size: 80%;
                padding: 1rem;
                line-height: 1.6em;
                word-wrap: break-word;
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
                            &:after {
                                content: ')';
                            }
                        }
                    }
                }
            }
            .tagcloud {
                span {
                    padding-right: 10px;
                    cursor: pointer;
                    color: #777;
                    &:hover {
                        color: $dangerColor;
                    }
                }
            }
        }

    }
</style>
