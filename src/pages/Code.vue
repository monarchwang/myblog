<template>
	<div class="code-container">
		<profile></profile>
	</div>
</template>

<script>
	import Profile from '../components/Profile.vue'
	export default {
		name: 'code',
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
		components:{Profile}
	}
</script>

<style lang="scss" scoped>

</style>
