<template>
	<div>
		Poetry
		<profile></profile>
	</div>
</template>

<script>
	import Profile from '../components/Profile.vue'

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
		components: {Profile}
	}
</script>

<style lang="scss" scoped>

</style>
