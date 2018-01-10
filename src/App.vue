<template>
	<div id="app">
		<div class="header">
			<div class="main-content clearfix">
				<div class="logo">
					<i class="icon"></i>liang
				</div>
				<ul class="nav">
					<li v-for="item in items" :class="{active:item.isShow}" @click="goto(item)">
						{{item.text}}
					</li>
				</ul>

				<!--搜索框-->
				<div class="search">
					<label>
						<input class="input" @click="searchFocus()"/>
						<i class="fa fa-search"></i>
					</label>
				</div>
			</div>
		</div>

		<div class="main-content content clearfix">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>

		<div class="footer">
			<div id="footer-info" class="main-content">
				© 2018 wangguoliang <a href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备17070653号</a>
				<br>
				本站总访问量<span class="view-num">{{viewNum}}</span>次 <br>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				viewNum: 1234,
				items: [
					{
						text: '要填的坑',
						router: '/code',
						isShow: false
					},
					{
						text: '诗',
						router: '/poetry',
						isShow: false
					},
					{
						text: '远方',
						router: '/distance',
						isShow: false
					},
					{
						text: '自白',
						router: '/readme',
						isShow: false
					},
				]
			}
		},
		mounted (){
			let href = location.href;
			this.items.map(function (value) {
				if (href.indexOf(value.router)>0){
					value.isShow = true;
				}
			})
		},
		methods: {
			goto (item){
				this.items.map(function (val, index, arr) {
					val.isShow = false;
				});
				item.isShow = true;
				//TODO 切换路由
				this.$router.push(item.router)
			},
			searchFocus(){
				alert(123)
			}
		}
	}
</script>

<style lang="scss">
	/*全局css*/
	@import './assets/css/global.scss';
	@import './assets/font-awesome/css/font-awesome.min.css';

	body {
		color: #3f3f3f;
		background: #fff;
		font: 14px "open sans", "Helvetica Neue", "Microsoft Yahei", Helvetica, Arial, sans-serif;
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

	.header {
		width: 100%;
		height: $headerHeight;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
		line-height: $headerHeight;
		.main-content {
			.logo {
				float: left;
				height: $headerHeight;
				line-height: $headerHeight;
				.icon {
					display: inline-block;
					width: 40px;
					height: 40px;
					background: url("./assets/logo.png") no-repeat;
					background-size: 40px 40px;
					white-space: nowrap;
					letter-spacing: -1em;
					text-indent: -99em;
					color: transparent;
					vertical-align: middle;
					margin-right: 10px;
				}
			}
			.nav {
				float: left;
				margin-left: 100px;
				li {
					display: inline-block;
					width: 80px;
					text-align: center;
					font-weight: 300;
					cursor: pointer;
					font-style: inherit;
					font-family: inherit;
					font-size: 100%;
					&:hover {
						color: $brightColor;
					}
				}
				.active {
					box-shadow: 0 -2px 0 $brightColor inset;
					color: $infoColor;
				}
			}
			.search {
				float: right;
				width: 400px;
				height: $headerHeight;
				line-height: $headerHeight;
				label {
					.input {
						border: 1px solid $gray5;
						border-radius: 25px;
						height: 32px;
						line-height: 40px;
						padding: 0 30px 0 15px;
						outline: none;
						background: 0;
					}
					i {
						margin-left: -30px;
					}
				}
			}
		}
	}

	.main-content {
		width: 85%;
		margin: 0 auto;
	}

	.content{
		padding: 30px 10px 20px 10px;
	}

	.footer {
		border-top: 1px solid $gray6;
		line-height: 1.6em;
		font-size: .85em;
		padding: 1rem;
		.view-num{
			color: #0097a7;
			font-weight: 700;
			font-size: 1.2em;
			padding: 0 5px;
		}
		#footer-info{
			margin: 0 auto;
			text-align: center;
		}
		a{
			color: #38b7ea;
			text-decoration: none;
		}
	}

	.clearfix {
		*zoom: 1;
		&:before, &:after {
			display: table;
			line-height: 0;
			content: "";
		}
		&:after {
			clear: both;
		}
	}

	.division{
		display: block;
		margin-top: 15px;
		border-bottom: 1px dashed #dfdfdf;
	}

	input {
		height: 32px;
		box-sizing: border-box;
		line-height: 1.5;
		padding: 4px 7px;
		font-size: 12px;
		border: 1px solid #d7dde4;
		border-radius: 4px;
		color: #657180;
		background: #fff none;
		cursor: text;
		display: inline-block;
		width: 100%;
		transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
		&:focus {
			outline: 0;
			box-shadow: 0 0 0 2px rgba(51, 153, 255, .2);
			border-color: #5cadff;
		}
	}
	button{
		outline: 0;
		display: inline-block;
		margin-bottom: 0;
		font-weight: 400;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		border: 1px solid #d7dde4;
		white-space: nowrap;
		line-height: 1.5;
		-webkit-user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		user-select: none;
		padding: 6px 15px;
		font-size: 12px;
		border-radius: 4px;
		transform: translateZ(0);
		transition: color .2s linear,background-color .2s linear,border .2s linear;
		color: #657180;
		background: #f7f7f7 none;
		text-align: center;
	}
	.btn-success{
		color: #fff;
		background-color: #0c6;
		border-color: #0c6;
		&:hover{
			background-color: #33d685;
			border-color: #33d685;
		}
	}
	.btn-info {
		color: #fff;
		background-color: #2db7f5;
		border-color: #2db7f5;
		&:hover{
			background-color: #57c5f7;
			border-color: #57c5f7;
		}
	}
	.btn-text {
		color: #657180;
		background-color: transparent;
		border-color: transparent;
		&:hover{
			color: #3091f2;
			background-color: transparent;
			border-color: transparent;
		}
	}

	.mt-15{
		margin-top: 15px;
	}
</style>
