import Vue from 'vue';
import App from '@/App.vue';
import VueRouter from 'vue-router';

// Import Page Components
import PostersPage from '@/components/pages/PostersPage.vue';
import PosterPage from '@/components/pages/PosterPage.vue';
import ManagePosterPage from '@/components/pages/ManagePosterPage.vue';
import ErrorPage from '@/components/pages/ErrorPage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

// define the routes
const routes = [
	{ path: '/', component: PostersPage, name: 'posters' },
	{ path: '/error', component: ErrorPage, name: 'error'},
	{ path: '/create', component: ManagePosterPage, name: 'newposter'},
	{ path: '/:id/edit', component: ManagePosterPage, name: 'manageposter'},
	{ path: '/:id', component: PosterPage, name: 'poster', props: true}
];

// initialize the router
const router = new VueRouter({
	routes: routes,
	mode: 'history' // avoiding anchoring
});


// Instantiate the vue instance
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')


