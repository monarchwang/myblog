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

					<label class="comments" @click="replayComment()">
						<button class="btn-text"><i class="fa fa-comments"></i>发表评论&nbsp;&nbsp;{{blogData.viewNumber}}
						</button>
					</label>
					<label class="thumbs" @click="praise()">
						<button class="btn-text"><i class="fa fa-thumbs-up" v-bind:class="{'thumb-up':thumbUp}"></i>赞一下&nbsp;&nbsp;{{blogData.thumbUp}}
						</button>
					</label>
				</div>

				<div class="comment">
					<span>文章评论</span>
					<comment @on-replay-comment="replayComment" :comments="comments"></comment>
					<button class="btn-success" @click="replayComment()"><i class="fa fa-edit">&nbsp;&nbsp;发表新评论</i>
					</button>
				</div>
			</div>


			<modal v-show="showReplayCommentModal" :show="showReplayCommentModal" @close="closeModal"
				   :maskClosable="modal.maskClosable" width="500">
				<h1 slot="header">{{modal.header}}</h1>
				<div class="replay-comment-body" slot="body">
					<input type="text" v-model="modal.username" placeholder="敢问大侠尊姓大名">
					<div class="mt-15"></div>
					<div id="editorElement" class="replay-editor"></div>
				</div>
				<div class="replay-comment-footer clearfix" slot="footer">
					<button class="btn-success" @click="submitComment()">提交</button>
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
	import WangEditor from 'wangeditor'
	import Emotion from '../emotions';


	export default {
		name: 'ArticleDetail',
		mixins: [ScrollbarMixins],
		components: {Comment, Modal},
		data() {
			return {
				dataInterface: {
					editorUpImgUrl: Api.ROOT.substring(0, Api.ROOT.lastIndexOf("/")) + '/upload'  // 编辑器插入的图片上传地址
				},
				blogData: {},
				thumbUp: false,
				showReplayCommentModal: false,
				editor: '',
				modal: {
					comment: {},
					header: '',
					body: '',
					footer: '',
					maskClosable: false,
					username: '',
					editorContent: ''
				},
				comments: []
			}
		},
		mounted() {
			document.documentElement.style.overflowY = 'hidden';
			let id = this.$route.params.id;
			Api.queryBlogDetail(id).then(response => {
				this.blogData = response.data;
				this.comments = response.data.comments;
			}).catch(error => {
				console.log(error);
				alert(error.message);
			});
			this.initEditor();
		},
		watch: {
			showReplayCommentModal(val) {
				if (val) {
					this.$refs.container.style.overflowY = 'hidden';
				} else {
					this.$refs.container.style.overflowY = 'auto';
					this.editor.clear();
				}
			}
		},
		methods: {
			praise() {
				//赞文章
				this.thumbUp = !this.thumbUp;
				let thumbUpNum = this.blogData.thumbUp;
				this.blogData.thumbUp = this.thumbUp ? thumbUpNum ? thumbUpNum + 1 : 1 : thumbUpNum ? thumbUpNum - 1 : 0;
			},
			replayComment(comment) {
				if (comment) {
					this.modal.header = "回复" + comment.from;
					this.modal.comment = comment;
				} else {
					this.modal.header = "发表评论";
				}

				this.showReplayCommentModal = true;
			},
			closeModal() {
				this.showReplayCommentModal = false;
			},
			submitComment() {
				//提交评论
				let parentId = this.modal.comment.id;
				console.log('this.modal.comment', this.modal.username, this.modal.editorContent);
				let comment = {
					parentId: parentId,
					content: this.modal.editorContent,
					from: this.modal.username,
					to: this.modal.comment.username
				};
				if (!parentId) {

					//发表对文章的评论
//					this.comments.push({})
				}
				/*this.comments.forEach(c => {
				 if (c.reply && c.reply.length > 0) {
				 c.reply.forEach(r => {
				 if (r.id === targetId) {
				 c.reply.push({
				 id: Math.ceil(Math.random() * 1000),
				 from: this.modal.username,
				 to: r.from,
				 order: r.order + 1,
				 content: this.modal.editorContent,
				 createTime: new Date().toDateString(),
				 reply: []
				 });
				 c.createTime = new Date().toDateString();
				 console.log(r);
				 return;
				 }
				 })
				 }
				 if (c.id === targetId) {
				 c.reply.push({
				 id: Math.ceil(Math.random() * 1000),
				 from: this.modal.username,
				 to: c.from,
				 order: c.order + 1,
				 content: this.modal.editorContent,
				 createTime: new Date().toDateString(),
				 reply: []
				 })
				 }
				 });*/

				this.showReplayCommentModal = false;
			},
			initEditor() {
				// //初始化编辑器
				let editor = new WangEditor('editorElement');
				editor.onchange = () => {
					//去除最后一个<p>
					let content = this.editor.$txt.html();
					content = content.replace(/<br><\/p>/g, "</p>").replace(/<p><\/p>/g, "");
					this.modal.editorContent = content;
				};
				editor.config.emotions = {
					'weibo': {
						title: "微博",
						data: Emotion.sina_emotion
					},
					"qq": {
						title: "QQ",
						data: Emotion.qq_motion
					},
					"favourite": {
						title: "斗图",
						data: Emotion.expression
					}
				};

				editor.config.menus = [
					'bold', 'underline', 'eraser', 'forecolor', 'bgcolor', '|',
					'link', 'unlink', 'emotion', 'img', 'insertcode', 'fullscreen'
				];
				editor.config.menuFixed = false;
				editor.config.uploadImgUrl = this.dataInterface.editorUpImgUrl;  // 图片上传地址
				editor.config.uploadImgFileName = 'file';  // 统一指定上传的文件name，需要指定。否则默认不同的上传方式是不同的name
				editor.create();
				this.editor = editor;
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
				transition: all 0.3s ease-in-out;
				.btn-text {
					color: inherit;
					&:hover {
						background-color: $gray2;
					}
				}
				&:hover {
					i {
						transform: scale(1.2);
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

	.replay-comment-body {
		font-size: 12px !important;
		.replay-editor {
			min-height: 200px;
		}
	}

	.replay-comment-footer {
		button {
			float: right;
			&:last-child {
				margin-right: 20px;
			}
		}
	}

	.thumb-up {
		transform: scale(1.2);
		color: $dangerColor;
		transition: all 0.3s ease-in-out;
	}
</style>
