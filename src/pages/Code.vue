<template>
  <div class="code-container clearfix">
	<profile></profile>
	<div class="synopses">
    <router-view></router-view>
	  <!--<synopses :synopses="synopses"></synopses>-->
	</div>
	<div class="right-slide">
	  <right-slide></right-slide>
	</div>
  </div>
</template>

<script>
  import Profile from '../components/Profile.vue'
  import ArticleDetail from '../pages/ArticleDetail.vue'
  import Synopses from '../components/Synopses.vue'
  import RightSlide from '../components/RightSlide.vue'

  export default {
	name: 'Code',
	data () {
	  return {
		msg: 'Welcome to Your Vue.js App'

	  }
	},
	methods: {
	  hello () {
		console.log('hello');
	  }
	},
	components: {Profile, Synopses,ArticleDetail, RightSlide}
  }
</script>

<style lang="scss" scoped>
  .synopses {
	float: left;
	width: 50%;
	padding-left: 25px;
  }

  .right-slide {
	width: 20%;
	float: left;
	padding-left: 10px;
  }
</style>
