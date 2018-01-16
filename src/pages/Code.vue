<template>
    <div class="code-container clearfix">
        <profile></profile>
        <div class="synopses">
            <router-view></router-view>
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
                tags: []
            }
        },
        methods: {
            clickTag(tag) {
                this.$router.push({path: `/code/tags/${tag}`});
            }
        },
        mounted() {
            Api.getAllTags("").then(res => {
                let arr = [];
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
