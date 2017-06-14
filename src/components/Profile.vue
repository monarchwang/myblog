<template>
	<div class="profile">
		<div class="base-info">
			<i class="avatar"></i>
			<p class="name">Monarchwang</p>
			<p class="title">懂得前端和移动，设计过架构，做过管理，也搞过自动化和运维，明白各种测试，知晓处理大数据。保持危机感和谦逊，方能更进一步</p>
			<span class="location"><i class="fa fa-map-marker"></i> 中国 - 南京</span>
			<a class="follow" target="_blank" href="#">关注我</a>
		</div>

		<div id="article-info" class="article-info clearfix">
			<div class="article-info-item"><i class="fa fa-file-text-o"></i> 12</div>
			<div class="article-info-item"><i class="fa fa-tags"></i>8</div>
		</div>

		<div class="contact-info">
			<a href="https://www.github.com/monarchwang" target="_blank" class="contact-info-item github">
				<i class="fa fa-github"></i>
			</a>
			<a href="mailto:wglliang@126.com" class="contact-info-item mail">
				<i class="fa fa-envelope"></i>
			</a>
			<a class="contact-info-item weixin" @mouseover="showQrcode= true" @mouseout="showQrcode= false">
				<i class="fa fa-weixin"></i>
			</a>
			<transition name="fade">
				<div class="qrcode" v-show="showQrcode">
					<img src="../assets/img/weixin.png" alt="weixin">
				</div>
			</transition>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'profile',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				showQrcode: false
			}
		},
		methods: {
			hello () {
				console.log('hello');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/global.scss';
	$qrcodeSize: 10rem;
	.profile {
		width: 21%;
		min-width: 20rem;
		background-color: #fff;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
		margin: 0 .555555555555556%;
		.base-info {
			border-bottom: 1px solid $gray4;
			padding: 15px 20px;
			.avatar {
				display: block;
				background: url("http://olnz6wvmk.bkt.clouddn.com/pg7orhzb019rlnzradnyzxgvi.jpg") no-repeat;
				background-size: 8rem 8rem;
				margin: 0.9rem auto;
				width: 7rem;
				height: 7rem;
				border-radius: 50%;
			}
			.name {
				font-weight: 600;
				text-align: center;
			}
			.title {
				margin-top: 5px;
				text-align: center;
				font-size: 80%;
			}
			.location {
				@extend .title;
				font-size: 70%;
				color: #9a9ea3;
				display: block;
			}
			.follow {
				color: #fff;
				width: 140px;
				height: 35px;
				display: block;
				font-size: 80%;
				line-height: 35px;
				text-decoration: none;
				text-align: center;
				margin: 20px auto 10px;
				background-color: $brightColor;
				border-radius: 20px;
				transition: .4s ease-in;
				&:hover {
					transform: scale(1.1);
					font-size: 85%;
					transition: .4s ease-out;
				}
			}
		}

		.article-info {
			.article-info-item {
				width: 50%;
				float: left;
				padding: 20px 15px;
				font-size: 80%;
				text-align: center;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				border-bottom: 1px solid $gray4;
				cursor: pointer;
				&:hover {
					color: $brightColor;
				}
				&:first-child {
					border-right: 1px solid $gray4;
				}
				i {
					margin-right: 5px;
				}
			}
		}

		.contact-info {
			width: 100%;
			position: relative;
			.contact-info-item {
				display: inline-block;
				width: 32%;
				text-align: center;
				padding: 20px 0;
				cursor: pointer;
				.fa-github {
					font-size: 1.1rem;
				}
				&:visited, &:link, &:active {
					color: #565a5f;
				}
				&:hover {
					color: $brightColor;
				}
			}
			.qrcode{
				position: absolute;
				bottom:0;
				right: -$qrcodeSize;
				width: $qrcodeSize;
				height: $qrcodeSize;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.fade-enter-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.fade-leave-active {
		transition: opacity .25s,transform .3s;

	}
	.fade-enter, .fade-leave-active {
		transform-origin: 0 95%;
		transform: scale(.01);
		opacity: 0;
	}
</style>
