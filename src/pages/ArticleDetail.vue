<template>
	<transition name="slide">
		<div class="synopsis-container article-container" ref="container">

			<div class="synopsis article">
				<div class="synopsis-header article-title">
					<h1 class="synopsis-title">{{blogData.title}}</h1>
				</div>
				<div class="synopsis-content" v-html="blogData.content"
					 style="font-size: .9rem;overflow-x:hidden "></div>

				<div class="synopsis-footer">
					<label class="date"><i
							class="fa fa-calendar"></i>&nbsp;&nbsp;<span>{{blogData.createTime}}</span></label>
					<label class="tags"><i class="fa fa-tags"></i>&nbsp;&nbsp;<span
							v-for="tag in blogData.tags">{{tag}}</span></label>
					<span class="view-number">{{'浏览' + blogData.viewNumber + '次'}}</span>

					<label class="comments"><i
							class="fa fa-comments"></i>发表评论&nbsp;&nbsp;{{blogData.viewNumber - Math.ceil(Math.random() * blogData.viewNumber)}}</label>
					<label class="thumbs"><i
							class="fa fa-thumbs-up"></i>赞一下&nbsp;&nbsp;{{blogData.viewNumber - Math.ceil(Math.random() * blogData.viewNumber)}}</label>
				</div>

				<div class="comment">
					<span>文章评论</span>
					<comment @on-replay-comment="replayComment"></comment>
				</div>
			</div>

			<modal v-show="showReplayCommentModal" :show="showReplayCommentModal" @close="closeModal"
				   :maskClosable="modal.maskClosable" width="600">
				<h1 slot="header">{{modal.header}}</h1>
				<div class="replay-comment-body" slot="body">
					<input type="text" placeholder="敢问大侠尊姓大名">
				</div>
				<div class="replay-comment-footer clearfix" slot="footer">
					<button class="btn-success">提交</button>
					<button class="btn-text" @click="closeModal()">取消</button>
				</div>
			</modal>
		</div>

	</transition>

</template>

<script>
	import Api from '../api/index'
	import Comment from '../components/Comment.vue'
	import Modal from '../components/Modal.vue'
	import ScrollbarMixins from '../utils/mixins-scrollbar';
	import WangEditor from 'wangeditor';


	export default {
		name: 'ArticleDetail',
		mixins: [ScrollbarMixins],
		components: {Comment, Modal},
		data() {
			return {
				blogData: {},
				showReplayCommentModal: false,
				modal: {
					header: '',
					body: '',
					footer: '',
					maskClosable: false
				}
			}
		},
		mounted() {
			document.documentElement.style.overflowY = 'hidden';
			let id = this.$route.params.id;
			Api.queryBlogDetail(id).then(response => {
				this.blogData = response.data;
			}).catch(error => {
				console.log(error);
				alert(error.message);
			})
		},
		methods: {
			replayComment(comment) {
				this.$refs.container.style.overflowY = 'hidden';
				this.modal.header = "回复" + comment.from;
				this.showReplayCommentModal = true;
			},
			closeModal(){
				this.$refs.container.style.overflowY = 'auto';
				this.showReplayCommentModal = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/global.scss';

	.article-container {
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		bottom: 0;
		background-color: #f6f6f6;
		overflow: auto;

		.article {
			width: 60%;
			margin: 5rem auto;
			border-radius: 1rem;

			.article-title {
				text-align: center;
				h1 {
					font-size: x-large !important;
					cursor: text;
					&:hover {
						text-decoration: none;
					}
				}
			}
			.view-number {
				display: inline-block;
				margin-left: 60px;
			}
			.comments {
				cursor: pointer;
				font-size: 150%;
				margin-right: 10px;
			}
			.thumbs {
				cursor: pointer;
				margin-right: 45px !important;
			}
			.thumbs, .comments {
				font-size: 0.8rem;
				&:hover {
					i {
						transform: scale(1.2);
						color: $brightColor;
						transition: all 0.3s ease-in-out;
					}
				}
				i {
					margin-right: 6px;
					transition: all 0.3s ease-in-out;
					font-size: 150%;
				}
			}
			.comment {
				span {
					font-size: 180%;
					font-weight: bold;
					display: inline-block;
					margin-top: 20px;
				}
				margin-top: 40px;
			}

		}

		/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
		&::-webkit-scrollbar {
			width: 5px;
			height: 4px;
			background-color: #f5f5f5;
		}
		/*定义滚动条的轨道，内阴影及圆角*/
		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px $gray6;
			border-radius: 8px;
			background-color: #f5f5f5;
		}
		/*定义滑块，内阴影及圆角*/
		&::-webkit-scrollbar-thumb {
			/*width: 10px;*/
			height: 8px;
			border-radius: 8px;
			-webkit-box-shadow: inset 0 0 1px $brightColor;
			background-color: $decorateColor;
		}
	}

	.slide-enter-active, .slide-leave-active {
		transition: all .3s;
	}

	.slide-enter, .slide-leave-to {
		transform: translate3d(100%, 0, 0);
	}

	.replay-comment-footer{
		button{
			float: right;
			&:last-child{
				margin-right: 20px;
			}
		}
	}
</style>
