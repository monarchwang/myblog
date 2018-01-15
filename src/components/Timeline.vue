<template>
	<section class="timeline-wrap">
		<div class="timeline">
			<div class="timeline-row timeline-row-major">
				<span class="node">
					<i class="fa fa-tag"></i>
				</span>
				<h1 class="title">#杂项</h1>
			</div>
			<div class="timeline-row">
				<span class="node"></span>
				<div class="content">
					<h1 itemprop="name">
						<a class="timeline-article-title" href="/2017/01/12/newblog.html">博客新家</a>
					</h1>
					<div class="article-meta">
						<div class="article-date">
							<i class="fa fa-calendar"></i>
							<a href="/2017/01/12/newblog.html">
								<time datetime="2017-01-12T09:42:14.000Z" itemprop="datePublished">2017-01-12</time>
							</a>
						</div>
						<i class="fa fa-tag"></i>
						<a class="tag-link" href="/tags/杂项/">杂项</a>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<span class="node"></span>
				<div class="content">
					<h1 itemprop="name">
						<a class="timeline-article-title" href="/2017/01/12/newblog.html">博客新家</a>
					</h1>
					<div class="article-meta">
						<div class="article-date">
							<i class="fa fa-calendar"></i>
							<a href="/2017/01/12/newblog.html">
								<time datetime="2017-01-12T09:42:14.000Z" itemprop="datePublished">2017-01-12</time>
							</a>
						</div>
						<i class="fa fa-tag"></i>
						<a class="tag-link" href="/tags/杂项/">杂项</a>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<span class="node"></span>
				<div class="content">
					<h1 itemprop="name">
						<a class="timeline-article-title" href="/2017/01/12/newblog.html">博客新家</a>
					</h1>
					<div class="article-meta">
						<div class="article-date">
							<i class="fa fa-calendar"></i>
							<a href="/2017/01/12/newblog.html">
								<time datetime="2017-01-12T09:42:14.000Z" itemprop="datePublished">2017-01-12</time>
							</a>
						</div>
						<i class="fa fa-tag"></i>
						<a class="tag-link" href="/tags/杂项/">杂项</a>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<span class="node"></span>
				<div class="content">
					<h1 itemprop="name">
						<a class="timeline-article-title" href="/2017/01/12/newblog.html">博客新家</a>
					</h1>
					<div class="article-meta">
						<div class="article-date">
							<i class="fa fa-calendar"></i>
							<a href="/2017/01/12/newblog.html">
								<time datetime="2017-01-12T09:42:14.000Z" itemprop="datePublished">2017-01-12</time>
							</a>
						</div>
						<i class="fa fa-tag"></i>
						<a class="tag-link" href="/tags/杂项/">杂项</a>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	export default {
		name: 'Timeline',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
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
	.timeline-wrap {
		display: inline;
		float: left;
		width: 54.44444444444444%;
		margin: 0 .555555555555556%;

		.timeline {
			margin: 40px 20px 40px 40px;
			border-left: 3px solid #eceff2;
			h1{
				font-weight: inherit;
			}
			.timeline-row-major {
				.node {
					width: 14px;
					height: 14px;
					font-size: 14px;
					margin: 0 0 0 -17px;
					padding: 6px 8px 10px;
				}
				.title {
					font-size: 18px;
					margin-left: 15px;
					line-height: 30px;
				}
			}
			.timeline-row {
				margin: 20px 0;
				a {
					color: #565a5f;
					transition: .2s ease;
					&:visited {
						color: #38b7ea;
					}
					&:hover{
						color: #38b7ea;
					}
				}
				span {
					border: 0;
					outline: 0;
					font-weight: inherit;
					font-style: inherit;
					font-family: inherit;
					font-size: 100%;
					vertical-align: baseline;
				}
				&:before, &:after {
					content: "";
					display: table;
				}
				&:after {
					clear: both;
				}
				.title {
					float: left;
				}
				.node {
					width: 12px;
					color: #fff;
					height: 12px;
					border-radius: 50%;
					margin: 11px 0 0 -8px;
					display: inline-block;
					background-color: #38b7ea;
					float: left;
				}
				.content {
					margin-left: 25px;
					position: relative;
					box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
					background: #fff;
					&:before {
						top: 9px;
						left: -16px;
						border: 8px solid transparent;
						border-right-color: #fff;
					}
					h1 {
						font-size: 16px;
						padding: 10px;

					}
					div.article-date {
						float: left;
						margin-right: 10px;
						.fa {
							margin-right: 5px;
						}
					}
					.article-meta {
						font-size: 12px;
						color: #898d92;
						border-top: 1px solid #f7f7f7;
						background-color: rgba(244, 246, 247, .2);
						padding: 10px;
						text-decoration: none;
						line-height: 1.6rem;
						&:before, &:after {
							content: '';
							display: table;
						}
					}
					&:after {
						top: 10px;
						left: -14px;
						border: 7px solid transparent;
						border-right-color: #fff;
					}
					&:before {
						content: '';
						position: absolute;
						display: inline-block;
					}
				}
			}
		}

		div {
			padding: 0;
			border: 0;
			outline: 0;
			font-weight: inherit;
			font-style: inherit;
			font-family: inherit;
			font-size: 100%;
			vertical-align: baseline;
		}
	}
</style>
