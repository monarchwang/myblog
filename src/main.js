import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Code from './pages/Code.vue'
import Distance from './pages/Distance.vue'
import Poetry from './pages/Poetry.vue'
import Readme from './pages/Readme.vue'
import Synopses from './components/Synopses.vue'
import ArticleDetail from './pages/ArticleDetail.vue'
Vue.use(VueRouter);
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/code'
		}, {
			path: '/code',
			component: Code,
			children:[
				{path:'/',component:Synopses},
				{path:'article/:id',component:ArticleDetail}
			]
		}, {
			path: '/poetry',
			component: Poetry
		}, {
			path: '/distance',
			component: Distance
		}, {
			path: '/readme',
			component: Readme
		}
	]
});
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
