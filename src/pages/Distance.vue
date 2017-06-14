<template>
	<div>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		name: 'distance',
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

</style>
