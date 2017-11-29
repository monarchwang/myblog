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
				© 2017 wangguoliang <br>
				本站总访问量<span class="view-num">{{viewNum}}</span>次 <br>
				<a href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备17070653号</a>.
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
	body {
		color: #565a5f;
		background: #f5f8f9;
		overflow-y: hidden;
		font: 14px "open sans", "Helvetica Neue", "Microsoft Yahei", Helvetica, Arial, sans-serif;
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
		padding: 30px 10px 10px;
	}

	.footer {
		border-top: 1px solid $gray5;
		line-height: 1.6em;
		font-size: .85em;
		padding-top: 1rem;
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

</style>
