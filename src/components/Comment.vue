<template>
    <div class="comment-container">
        <ul class="comments">
            <li v-for="comment in comments" class="comment">
                <div class="title">
                    <span class="comment-user">{{comment.from}}</span>
                    <!--<span class="agree"><i class="fa fa-thumbs-o-up"></i>{{comment.agreeNum}}</span>-->
                    <!--<span class="disagree"><i class="fa fa-thumbs-o-down"></i>{{comment.disagreeNum}}</span>-->
                    <span class="comment-date">{{comment.order+"楼 "+comment.createTime+" 发表"}}</span>
                </div>
                <p v-html="comment.content"></p>
                <ul class="comments-reply" v-if="comment.reply && comment.reply.length >0">
                    <!--子一级评论-->
                    <li class="reply-item" v-for="replay in comment.reply">
                        <template v-if="replay.to === comment.from">
                            <span class="comment-user">{{replay.from}}</span>:&nbsp;
                        </template>
                        <template v-else>
                            <span class="comment-user">{{replay.from}}</span><span>&nbsp;回复</span>
                            <span class="comment-user">{{replay.to}}</span>:&nbsp;
                        </template>
                        <p v-html="replay.content"></p><br>
                        <span class="comment-date comment-replay" @click="handleReplayComment(replay)">回复</span>
                        <span class="comment-date">{{comment.createTime}}</span>
                        <span class="division"></span>
                    </li>
                    <li class="clearfix">
                        <a href="#" class="replay-btn" @click.stop.prevent="handleReplayComment(comment)">我也说一句</a>
                    </li>
                </ul>
                <div v-else>
                    <span class="comment-date comment-replay" @click="handleReplayComment(comment)">回复</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data() {
            return {
                comments: [
                    {
                        id: 111,
                        from: "Tom",
                        to: "",
                        agreeNum: 10,
                        disagreeNum: 5,
                        order: 1,
                        content: '这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？这个是对的吗？',
                        createTime: '2017-12-31 14:54:32',
                        reply: [{
                            id: 123,
                            from: "Jim",
                            to: "Tom",
                            agreeNum: 10,
                            disagreeNum: 5,
                            order: 1,
                            content: '<span style="">是的，亲测是正确的，指定编译时的 JDK 版本是非常有必要的，尤其是在使用 IDEA 的情况下，这样可以避免 IDEA 选择 1.5 作为默认值的一些编译错误。由于不同环境使用的插件不太相同，所以这里只是一个示例，不需要按照这种方式使用。更合理的用法可能是创建一个插件的基础 pom（plugin-pom），然后在上面的的 pom 中设置 parent 为 plugin-pom，这样能满足更多情况下的选择。</span>',
                            createTime: '2017-12-31 15:32:32',
                        }, {
                            id: 1234,
                            from: "Ketty",
                            to: "Jim",
                            agreeNum: 10,
                            disagreeNum: 5,
                            order: 2,
                            content: 'but I have a mistake',
                            createTime: '2017-12-31 16:54:32',
                        }],
                    }, {
                        id: 222,
                        from: "Jackon",
                        to: "",
                        agreeNum: 10,
                        disagreeNum: 5,
                        order: 2,
                        content: 'Good',
                        createTime: '2017-12-31 15:54:32',
                        reply: [],
                    },
                    {
                        id: 666,
                        from: "Mackle",
                        to: "",
                        agreeNum: 10,
                        disagreeNum: 5,
                        order: 3,
                        content: 'Thank you very much',
                        createTime: '2017-12-31 17:54:32',
                        reply: [],
                    }
                ]
            }
        },
        methods: {
            handleReplayComment(comment) {
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
                    margin-top: -5px;
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
                        padding: .5rem 1rem 1rem 2rem;
                        box-sizing: border-box;
                        .title {
                            display: inline-block;
                            float: left;
                        }
                        p {
                            display: inline;
                            margin-left: 5px;
                            word-break: normal;
                            word-wrap: break-word;
                        }
                        .comment-date {
                            display: block !important;
                            margin-top: 5px;
                            margin-right: 10px;
                        }
                    }
                    .replay-btn {
                        float: right;
                        margin-right: 1.2rem;
                        margin-bottom: 1rem;
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
            }

        }
    }
</style>