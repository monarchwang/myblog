<template>
    <section class="timeline-wrap">
        <div class="timeline">
            <div class="timeline-row timeline-row-major">
				<span class="node">
					<i class="fa" :class="iconClass"></i>
				</span>
                <h1 class="title"># {{title}}</h1>
            </div>
            <div class="timeline-row" v-for="item in dataList">
                <span class="node"></span>
                <div class="content">
                    <h1 itemprop="name">
                        <a target="_blank" class="timeline-article-title" :href="articleBaseUrl + item.id">{{item.title}}</a>
                    </h1>
                    <div class="article-meta">
                        <div class="article-date">
                            <i class="fa fa-calendar"></i>
                            <a target="_blank" :href="articleBaseUrl+item.id">
                                <time datetime="2017-01-12T09:42:14.000Z" itemprop="datePublished">{{item.createTime}}
                                </time>
                            </a>
                        </div>
                        <i class="fa fa-tag tags"></i>
                        <div class="tags-wrap">
                            <a class="tag-link" @click.stop.prevent="tagClick(tag)" v-for="tag in item.tags">{{tag}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Timeline',
        props: {
            dataList: {
                type: Array,
                default () {
                    return [];
                }
            },
            title: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: 'tag'
            },
            baseUrl: {
                type: String,
                default: '#/blog/tags/',
            },
            articleBaseUrl: {
                type: String,
                default: '#/blog/detail/',
            }
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                iconClass: 'fa-' + this.icon
            }
        },
        methods: {
            tagClick(tag) {
                this.$emit('on-tag-click', tag);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .timeline-wrap {
        width: 100%;
        .timeline {
            margin: -20px 20px 40px 40px;
            border-left: 3px solid #eceff2;
            h1 {
                font-weight: inherit;
            }
            .timeline-row-major {
                span.node {
                    width: 14px;
                    height: 14px;
                    font-size: 14px;
                    margin: 0 0 0 -17px;
                    padding: 6px 8px 10px;
                }
                .title {
                    font-size: 18px;
                    margin-left: 15px;
                    line-height: 30px;
                }
            }
            .timeline-row {
                margin: 20px 0;
                a {
                    color: #565a5f;
                    transition: .2s ease;
                    cursor: pointer;
                    &:visited {
                        /*color: #38b7ea;*/
                    }
                    &:hover {
                        color: #38b7ea;
                    }
                }
                span {
                    border: 0;
                    outline: 0;
                    font-weight: inherit;
                    font-style: inherit;
                    font-family: inherit;
                    font-size: 100%;
                    vertical-align: baseline;
                }
                &:before, &:after {
                    content: "";
                    display: table;
                }
                &:after {
                    clear: both;
                }
                .title {
                    float: left;
                }
                .node {
                    width: 12px;
                    color: #fff;
                    height: 12px;
                    border-radius: 50%;
                    margin: 11px 0 0 -8px;
                    display: inline-block;
                    background-color: #38b7ea;
                    float: left;
                }
                .content {
                    margin-left: 25px;
                    position: relative;
                    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
                    background: #fff;
                    &:before {
                        top: 9px;
                        left: -16px;
                        border: 8px solid transparent;
                        border-right-color: #fff;
                    }
                    h1 {
                        font-size: 16px;
                        padding: 10px;

                    }
                    div.article-date {
                        float: left;
                        margin-right: 10px;
                        .fa {
                            margin-right: 5px;
                        }
                    }
                    .article-meta {
                        font-size: 12px;
                        color: #898d92;
                        border-top: 1px solid #f7f7f7;
                        background-color: rgba(244, 246, 247, .2);
                        padding: .5rem;
                        text-decoration: none;
                        line-height: 1.6rem;
                        &:before, &:after {
                            content: '';
                            display: table;
                        }
                        .tags {
                            margin-left: 10px;
                        }
                        .tags-wrap {
                            display: inline-block;
                            padding-left: -20px;
                            .tag-link {
                                margin-left: 5px;
                                &:first-child {
                                    margin-left: 5px;
                                }
                            }
                        }

                    }
                    &:after {
                        top: 10px;
                        left: -14px;
                        border: 7px solid transparent;
                        border-right-color: #fff;
                    }
                    &:before {
                        content: '';
                        position: absolute;
                        display: inline-block;
                    }
                }
            }
        }

        div {
            padding: 0;
            border: 0;
            outline: 0;
            font-weight: inherit;
            font-style: inherit;
            font-family: inherit;
            font-size: 100%;
            vertical-align: baseline;
        }
    }
</style>
