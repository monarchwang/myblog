<template>
    <div class="code-container clearfix">
        <profile :blogSum="blogSum" :tagSum="tags.length"></profile>
        <div class="synopses">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="right-slide">
            <right-slide :tagList="tags" @on-click-tag="clickTag"></right-slide>
        </div>
    </div>
</template>

<script>
    import Profile from '../components/Profile.vue'
    import ArticleDetail from '../pages/ArticleDetail.vue'
    import Synopses from '../components/Synopses.vue'
    import RightSlide from '../components/RightSlide.vue'
    import Api from '../api/index'

    export default {
        name: 'Code',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                tags: [],
                blogSum: 0
            }
        },
        methods: {
            clickTag(tag) {
                this.$router.push({path: `/code/tags/${tag}`});
                Api.Bus.$emit('on-click-tag', tag);
            }
        },
        mounted() {
            Api.getAllTags("").then(res => {
                let arr = [];
                this.blogSum = res.data.total;
                res.data.rows.forEach(tag => {
                    arr.push(tag.name)
                });
                this.tags = arr;
            }).catch(err => {
                console.log(err);
                alert(err);
            })
        },
        components: {Profile, Synopses, ArticleDetail, RightSlide}
    }
</script>

<style lang="scss" scoped>
    .synopses {
        float: left;
        width: 50%;
        padding-left: 25px;
    }

    .right-slide {
        width: 20%;
        float: left;
        padding-left: 10px;
    }
</style>
