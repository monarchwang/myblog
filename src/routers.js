/**
 * Created by wanggl on 2017/8/4.
 */
import Code from './pages/Code.vue'
import Distance from './pages/Distance.vue'
import Poetry from './pages/Poetry.vue'
import Readme from './pages/Readme.vue'
import Synopses from './components/Synopses.vue'
import ArticleDetail from './pages/ArticleDetail.vue'
import Tags from './pages/Tags.vue'
let routers = [
    {
        path: '/',
        redirect: '/code'
    }, {
        path: '/code',
        component: Code,
        children: [
            {path: '/', component: Synopses},
            {path: 'article/:id', component: ArticleDetail},
            {path: 'tags/:tag', component: Tags}
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
];

export default routers;