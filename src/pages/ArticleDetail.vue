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
							class="fa fa-comments"></i>发表评论&nbsp;&nbsp;{{blogData.viewNumber - Math.ceil(Math.random() *
						blogData.viewNumber)}}</label>
					<label class="thumbs"><i
							class="fa fa-thumbs-up"></i>赞一下&nbsp;&nbsp;{{blogData.viewNumber - Math.ceil(Math.random() *
						blogData.viewNumber)}}</label>
				</div>

				<div class="comment">
					<span>文章评论</span>
					<comment @on-replay-comment="replayComment" :comments="comments"></comment>
				</div>
			</div>


			<modal v-show="showReplayCommentModal" :show="showReplayCommentModal" @close="closeModal"
				   :maskClosable="modal.maskClosable" width="600">
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
					editorUpImgUrl: Api.ROOT.substring(0, Api.ROOT.lastIndexOf("/")) + '/blog/upload'  // 编辑器插入的图片上传地址
				},
				blogData: {},
				showReplayCommentModal: false,
				modal: {
					comment: {},
					header: '',
					body: '',
					footer: '',
					maskClosable: false,
					username: '',
					editorContent: ''
				},
				editor: '',
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
							reply:[]
						}, {
							id: 1234,
							from: "Ketty",
							to: "Jim",
							agreeNum: 10,
							disagreeNum: 5,
							order: 2,
							content: 'but I have a mistake',
							createTime: '2017-12-31 16:54:32',
							reply:[]
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
		mounted() {
			document.documentElement.style.overflowY = 'hidden';
			let id = this.$route.params.id;
			Api.queryBlogDetail(id).then(response => {
				this.blogData = response.data;
			}).catch(error => {
				console.log(error);
				alert(error.message);
			});
			this.$nextTick(()=>{
				this.initEditor();
			});
		},
		watch: {
			showReplayCommentModal(val){
				if (val) {
					this.$refs.container.style.overflowY = 'hidden';
				} else {
					this.$refs.container.style.overflowY = 'auto';
				}
			}
		},
		methods: {
			replayComment(comment) {
				this.modal.header = "回复" + comment.from;
				this.modal.comment = comment;
				this.showReplayCommentModal = true;
			},
			closeModal() {
				this.showReplayCommentModal = false;
			},
			submitComment(){
				//提交评论
				let targetId = this.modal.comment.id;
				this.comments.forEach(c => {
					if (c.reply && c.reply.length > 0) {
						c.reply.forEach(r => {
							if (r.id === targetId) {
								c.reply.push({
									id: Math.ceil(Math.random() * 1000),
									from: this.modal.username,
									to: r.from,
									order: r.order + 1,
									content: this.modal.editorContent,
									createTime:new Date().toDateString(),
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
							createTime:new Date().toDateString(),
							reply: []
						})
					}
				});

				this.showReplayCommentModal = false;
			},
			initEditor(){
				// //初始化编辑器
				this.editor = new WangEditor('editorElement');
				this.editor.onchange = () => {
					this.modal.editorContent = this.editor.$txt.html();
				};
				this.editor.config.emotions = {
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

				this.editor.config.menus = [
					'bold', 'underline', 'eraser', 'forecolor', 'bgcolor', '|',
					'link', 'unlink', 'emotion', 'img', 'insertcode', '|',
					'undo', 'redo', 'fullscreen'
				];
				this.editor.config.menuFixed = false;
				this.editor.config.uploadImgUrl = this.dataInterface.editorUpImgUrl;  // 图片上传地址
				this.editor.config.uploadImgFileName = 'file';  // 统一指定上传的文件name，需要指定。否则默认不同的上传方式是不同的name
				this.editor.create();
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
</style>
