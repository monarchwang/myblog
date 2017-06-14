<template>
    <div class="code-container clearfix">
        <profile></profile>
        <div class="synopses">
            <synopses :synopses="synopses"></synopses>
        </div>
        <div class="right-slide">
            <right-slide></right-slide>
        </div>
    </div>
</template>

<script>
    import Profile from '../components/Profile.vue'
    import Synopses from '../components/Synopses.vue'
    import RightSlide from '../components/RightSlide.vue'

    export default {
        name: 'code',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                synopses: [
                    {
                        title: '这是一篇测试文章，主要是用来测试页面的布局是否正确',
                        time: '2017-06-13',
                        tags: 'spring,test,hadoop,vue'.split(","),
                        value: '你是否遇到过这种事？一个“好”工程师，非常喜欢学习和钻研新的技术知识，JEE时代学习Spring，SSH时代学习分布式，大数据时代又开始学习Hadoop,Storm,云时代开始搞docker,k8……然后成长为一名“架构师”了，在他的公司，有一个重要项目，于是乎他决意把这个项目设计成一个全分布式的系统，毕竟“时髦”嘛。每一个小的开发团队负责分布式中的一个服务。由于架构师对这些程序员缺乏必要的指导和控制，每个程序员只熟悉自己负责的一小块工作，彼此间缺乏沟通和协作，这个项目的概念完整性很快就被破坏了，他们开始自行其事，分布式服务间大量的远程调用导致了性能和可伸缩性等多方面的问题，开发、测试、运维的工作难度与日递增。慢慢的，项目的开发人员，离职的越来越多，包含最初的架构师，代码的维护越来越难，最终只能重构，将十几个分布式服务合并为三个相对独立的集中应用。最初良好的架构，到最后沦为废墟。中间一位离职的程序员，换了一家公司，涨了一点工资，开始了另一段新系统建设的“狂欢”，周而复始，随着年龄的增大，他不再能够从软件开发中享受到乐趣，开发的生涯，对他来说痛苦开始多余快乐。学习新技术，他也比不上年轻人。运气好的话，他可以转产品、管理或做业务，运气不好的话，还得继续码代码，毕竟要养家糊口。从一家公司换到另一家公司…',
                        comments: '25'
                    },
                    {
                        title: '这是一篇测试文章，主要是用来测试页面的布局是否正确',
                        time: '2017-06-13',
                        tags: 'spring,test,hadoop,vue'.split(","),
                        value: '你是否遇到过这种事？一个“好”工程师，非常喜欢学习和钻研新的技术知识，JEE时代学习Spring，SSH时代学习分布式，大数据时代又开始学习Hadoop,Storm,云时代开始搞docker,k8……然后成长为一名“架构师”了，在他的公司，有一个重要项目，于是乎他决意把这个项目设计成一个全分布式的系统，毕竟“时髦”嘛。每一个小的开发团队负责分布式中的一个服务。由于架构师对这些程序员缺乏必要的指导和控制，每个程序员只熟悉自己负责的一小块工作，彼此间缺乏沟通和协作，这个项目的概念完整性很快就被破坏了，他们开始自行其事，分布式服务间大量的远程调用导致了性能和可伸缩性等多方面的问题，开发、测试、运维的工作难度与日递增。慢慢的，项目的开发人员，离职的越来越多，包含最初的架构师，代码的维护越来越难，最终只能重构，将十几个分布式服务合并为三个相对独立的集中应用。最初良好的架构，到最后沦为废墟。中间一位离职的程序员，换了一家公司，涨了一点工资，开始了另一段新系统建设的“狂欢”，周而复始，随着年龄的增大，他不再能够从软件开发中享受到乐趣，开发的生涯，对他来说痛苦开始多余快乐。学习新技术，他也比不上年轻人。运气好的话，他可以转产品、管理或做业务，运气不好的话，还得继续码代码，毕竟要养家糊口。从一家公司换到另一家公司…',
                        comments: '25'
                    }
                ]
            }
        },
        methods: {
            hello () {
                console.log('hello');
            }
        },
        components: {Profile, Synopses,RightSlide}
    }
</script>

<style lang="scss" scoped>
    .synopses {
        float: left;
        width: 47%;
        padding-left: 1rem;
    }
    .right-slide{
        width: 20%;
        float: left;
        padding-left: 1rem;
    }
</style>
