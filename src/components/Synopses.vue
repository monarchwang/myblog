<template>
  <div class="synopsis-container">
	<div class="synopsis" v-for="(synopsis, item) in synopses">
	  <div class="synopsis-header">
		<h2 class="synopsis-title">{{synopsis.title}}</h2>
		<div class="synopsis-subtitle">
		  <label class="date"><i class="fa fa-calendar"></i>&nbsp;&nbsp;<span>{{synopsis.time}}</span></label>
		  <label class="tags"><i class="fa fa-tags"></i>&nbsp;&nbsp;<span
				  v-for="tag in synopsis.tags">{{tag}}</span></label>
		</div>
	  </div>
	  <div class="synopsis-content">
		{{synopsis.value}}
	  </div>
	  <div class="synopsis-footer">
		<label class="comments"><i class="fa fa-comments"></i>&nbsp;&nbsp;{{synopsis.comments}}</label>
	  </div>
	</div>
  </div>
</template>

<script>
  export default {
	name: 'synopses',
	props: ['synopses'],
	data () {
	  return {
		msg: 'Welcome to Your Vue.js App',
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

  .synopsis-container {
	width: 100%;
	float: left;
	.synopsis {
	  font-size: 85%;

	  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
	  padding: 1.8rem;
	  margin-bottom: 1.8rem;
	  background-color: #fff;
	  .synopsis-header {
		width: 100%;
		.synopsis-title {
		  font-size: 20px;
		  cursor: pointer;
		  color: $checkedColor;
		  &:hover{
			color: $decorateColor;
		  }
		}
		.synopsis-subtitle {
		  margin: 1rem 0;
		  label {
			display: inline-block;
		  }
		  label.date > span {
			cursor: pointer;
			&:hover {
			  color: $brightColor;
			}
		  }
		  label.tags {
			margin-left: 20px;
			span {
			  cursor: pointer;
			  &:hover {
				color: $brightColor;
			  }
			}
			span + span {
			  margin-left: 10px;
			}
		  }
		}
		margin-bottom: 0.5rem;
	  }
	  .synopsis-content {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		text-indent: 2em;
		line-height: 1.7em;
	  }
	  .synopsis-footer {
		border-top: 1px solid $gray4;
		height: 20px;
		line-height: 50px;
		.comments {
		  float: right;
		  cursor: pointer;
		  &:hover {
			color: $checkedColor;
		  }
		}
	  }
	}
  }
</style>
