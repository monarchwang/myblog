<template>
    <div class="synopsis-container">
        <div class="synopsis">
            <div class="synopsis-header">
                <h2 class="synopsis-title" @click="toArticleDetail(synopsis.id)">{{synopsis.title}}</h2>
                <div class="synopsis-subtitle">
                    <label class="date"><i
                            class="fa fa-calendar"></i>&nbsp;&nbsp;<span>{{synopsis.createTime}}</span></label>
                    <label class="tags"><i class="fa fa-tags"></i>&nbsp;&nbsp;<span
                            v-for="tag in synopsis.tags">{{tag}}</span></label>
                </div>
            </div>
            <div class="synopsis-content" v-html="synopsis.content" style="font-size: .9rem;overflow-x:hidden "></div>
            <div class="synopsis-footer">
                <label class="comments"><i class="fa fa-eye"></i>&nbsp;&nbsp;{{synopsis.viewNumber}}</label>
            </div>
        </div>
    </div>
</template>

<script>
    import Api from '../api/index'

    export default {
        name: 'ArticleDetail',
        data () {
            return {
                synopsis: {}
            }
        },
        mounted(){
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


</style>
