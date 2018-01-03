<template>
	<div>
		Poetry
		<profile></profile>
		<comment></comment>
	</div>
</template>

<script>
	import Profile from '../components/Profile.vue'
	import Comment from '../components/Comment.vue'

	export default {
		name: 'poetry',
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
		components: {Profile, Comment}
	}
</script>

<style lang="scss" scoped>

</style>
