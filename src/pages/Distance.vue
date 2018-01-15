<template>
	<div>
		<h1>{{msg}}</h1>
		<timeline></timeline>
	</div>
</template>

<script>
	import Timeline from '../components/Timeline.vue'

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
		},
		components: {Timeline}
	}
</script>

<style lang="scss" scoped>

</style>
