<template>
    <div class="synopsis-container">
        <div class="synopsis" v-for="(synopsis, item) in synopses">
            <div class="synopsis-header">
                <h2 class="synopsis-title" @click="toArticleDetail(synopsis.id)">{{synopsis.title}}</h2>
                <div class="synopsis-subtitle">
                    <label class="date"><i class="fa fa-calendar"></i>&nbsp;&nbsp;<span>{{synopsis.time}}</span></label>
                    <label class="tags"><i class="fa fa-tags"></i>&nbsp;&nbsp;<span
                            v-for="tag in synopsis.tags">{{tag}}</span></label>
                </div>
            </div>
            <div class="synopsis-content">
                {{synopsis.value}}
            </div>
            <div class="synopsis-footer">
                <label class="comments"><i class="fa fa-comments"></i>&nbsp;&nbsp;{{synopsis.comments}}</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'synopses',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                synopses: [
                    {
                        id: 'first',
                        title: '这是一篇测试文章，主要是用来测试页面的布局是否正确',
                        time: '2017-06-13',
                        tags: 'spring,test,hadoop,vue'.split(","),
                        value: '你是否遇到过这种事？一个“好”工程师，非常喜欢学习和钻研新的技术知识，JEE时代学习Spring，SSH时代学习分布式，大数据时代又开始学习Hadoop,Storm,云时代开始搞docker,k8……然后成长为一名“架构师”了，在他的公司，有一个重要项目，于是乎他决意把这个项目设计成一个全分布式的系统，毕竟“时髦”嘛。每一个小的开发团队负责分布式中的一个服务。由于架构师对这些程序员缺乏必要的指导和控制，每个程序员只熟悉自己负责的一小块工作，彼此间缺乏沟通和协作，这个项目的概念完整性很快就被破坏了，他们开始自行其事，分布式服务间大量的远程调用导致了性能和可伸缩性等多方面的问题，开发、测试、运维的工作难度与日递增。慢慢的，项目的开发人员，离职的越来越多，包含最初的架构师，代码的维护越来越难，最终只能重构，将十几个分布式服务合并为三个相对独立的集中应用。最初良好的架构，到最后沦为废墟。中间一位离职的程序员，换了一家公司，涨了一点工资，开始了另一段新系统建设的“狂欢”，周而复始，随着年龄的增大，他不再能够从软件开发中享受到乐趣，开发的生涯，对他来说痛苦开始多余快乐。学习新技术，他也比不上年轻人。运气好的话，他可以转产品、管理或做业务，运气不好的话，还得继续码代码，毕竟要养家糊口。从一家公司换到另一家公司…',
                        comments: '25'
                    },
                    {
                        id: 'second',
                        title: '这是一篇测试文章，主要是用来测试页面的布局是否正确',
                        time: '2017-06-13',
                        tags: 'spring,test,hadoop,vue'.split(","),
                        value: '你是否遇到过这种事？一个“好”工程师，非常喜欢学习和钻研新的技术知识，JEE时代学习Spring，SSH时代学习分布式，大数据时代又开始学习Hadoop,Storm,云时代开始搞docker,k8……然后成长为一名“架构师”了，在他的公司，有一个重要项目，于是乎他决意把这个项目设计成一个全分布式的系统，毕竟“时髦”嘛。每一个小的开发团队负责分布式中的一个服务。由于架构师对这些程序员缺乏必要的指导和控制，每个程序员只熟悉自己负责的一小块工作，彼此间缺乏沟通和协作，这个项目的概念完整性很快就被破坏了，他们开始自行其事，分布式服务间大量的远程调用导致了性能和可伸缩性等多方面的问题，开发、测试、运维的工作难度与日递增。慢慢的，项目的开发人员，离职的越来越多，包含最初的架构师，代码的维护越来越难，最终只能重构，将十几个分布式服务合并为三个相对独立的集中应用。最初良好的架构，到最后沦为废墟。中间一位离职的程序员，换了一家公司，涨了一点工资，开始了另一段新系统建设的“狂欢”，周而复始，随着年龄的增大，他不再能够从软件开发中享受到乐趣，开发的生涯，对他来说痛苦开始多余快乐。学习新技术，他也比不上年轻人。运气好的话，他可以转产品、管理或做业务，运气不好的话，还得继续码代码，毕竟要养家糊口。从一家公司换到另一家公司…',
                        comments: '25'
                    }
                ]
            }
        },
        mounted(){

        },
        methods: {
            hello () {
                console.log('hello');
            },
            toArticleDetail(articleId){
                this.$router.push(`/code/article/${articleId}`);
            }
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
