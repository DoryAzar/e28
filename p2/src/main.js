import Vue from 'vue';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import PostersPage from '@/components/pages/PostersPage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

// define the routes
const routes = [
	{ path: '/', component: PostersPage, name: 'posters' }
	//{ path: '/other', component: PostersPage, name: 'other' }, // adding name makes it easy to reference later
	//{ path: '/dynamic/:id', component: App, name: 'dynamic'},  // Loading dynamic params read from $route
	//{ path: '/dynamic/:id', component: App, name: 'dynamic', props: true}  // Loading dynamic params into props of component directly
];

// initialize the router
const router = new VueRouter({
	routes: routes,
	mode: 'history' // avoiding anchoring
});



new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')


