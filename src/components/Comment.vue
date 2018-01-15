<template>
    <div class="comment-container">
        <ul class="comments">
            <li v-for="comment in comments" class="comment">
                <div class="title">
                    <span class="comment-user">{{comment.fromUser}}</span>
                    <!--<span class="agree"><i class="fa fa-thumbs-o-up"></i>{{comment.agreeNumber}}</span>-->
                    <!--<span class="disagree"><i class="fa fa-thumbs-o-down"></i>{{comment.disagreeNumber}}</span>-->
                    <span class="comment-date">{{comment.floorNumber+"楼 "+ comment.createTime+" 发表"}}</span>
                </div>
                <p class="comment-content" v-html="comment.content"></p>
                <ul class="comments-reply" v-if="comment.replies && comment.replies.length >0">
                    <!--子一级评论-->
                    <li class="reply-item" v-for="replay in comment.replies">
                        <div class="replay-title">
                            <template v-if="replay.toUser === comment.fromUser">
                                <span class="comment-user">{{replay.fromUser}}</span>&nbsp;:&nbsp;
                            </template>
                            <template v-else>
                                <span class="comment-user">{{replay.fromUser}}</span><span>&nbsp;回复</span>
                                <span class="comment-user">{{replay.toUser}}</span>&nbsp;:&nbsp;
                            </template>
                        </div>
                        <p class="comment-content" v-html="replay.content"></p>
                        <span class="comment-date comment-replay"
                              @click="handleReplayComment(replay,comment.id)">回复</span>
                        <span class="comment-date">{{comment.createTime}}</span>
                        <span class="division"></span>
                    </li>
                    <li class="clearfix">
                        <a href="#" class="replay-btn" @click.stop.prevent="handleReplayComment(comment,comment.id)">我也说一句</a>
                    </li>
                </ul>
                <div v-else>
                    <span class="comment-date comment-replay" @click="handleReplayComment(comment,comment.id)">回复</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "comment",
        props: ['comments'],
        data() {
            return {}
        },
        methods: {
            handleReplayComment(comment, parentId) {
                comment._parentId = parentId;
                this.$emit('on-replay-comment', comment);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/global.scss';

    .comment-container {
        width: 100%;
        .comments {
            min-height: 180px;
            /*box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);*/
            padding: 1.8rem;
            margin-bottom: 1.8rem;
            background-color: #fff;
            box-sizing: border-box;
            .comment {
                margin-top: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #f0f0f0;
                &:last-child {
                    border: none;
                }
                & > p {
                    margin-top: 0.5rem;
                    min-height: 1.5rem;
                }
                .title {
                    .agree, .disagree {
                        cursor: pointer;
                        float: right;
                        display: inline-block;
                        min-width: 20px;
                        i {
                            margin-right: 3px;
                        }
                    }
                    .agree {
                        margin-left: 20px;
                    }
                }
                .comment-user {
                    font-size: 0.85rem;
                    color: $brightColor;
                }
                .comment-date {
                    display: inline-block;
                    float: right;
                    font-size: 0.1rem;
                    color: #aaa;
                    margin-top: 2px;
                }
                .comment-replay {
                    cursor: pointer;
                    color: #555;
                }
                .comments-reply {
                    background-color: #fdfdfd;
                    border-left: 2px solid #d9d9d9;
                    margin-top: 0.5rem;
                    margin-left: 2rem;
                    padding-top: 0.5rem;
                    .reply-item {
                        padding: .2rem 1rem .5rem 1rem;
                        box-sizing: border-box;
                        .title {
                            display: inline-block;
                            float: left;
                        }
                        .comment-date {
                            display: block !important;
                            margin-right: 10px;
                        }
                    }
                    .replay-btn {
                        float: right;
                        margin-right: 1.2rem;
                        margin-bottom: .5rem;
                        display: inline-block;
                        padding: 4px 8px;
                        font-size: 12px;
                        border-radius: 2px;
                        border: 1px solid #ccc;
                        background-color: #fff;
                        color: #333;
                        text-decoration: none;
                        &:hover {
                            background-color: #fff;
                            border-color: #3e89fa;
                            color: #3e89fa;
                        }
                    }
                }
                p.comment-content {
                    margin-top: 5px;
                    word-break: normal;
                    word-wrap: break-word;
                }
            }

        }
    }
</style>