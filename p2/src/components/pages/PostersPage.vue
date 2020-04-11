<!-- Posters Page
Router page for rendering all posters
@posters: Retrieves all posters from the API

Components Dependency
@show-posters: component responsible rendering the posters
-->
<template>
    <div id='posters'>
        <show-posters v-for='poster in posters' :key='poster.id' :poster='poster'></show-posters>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import ShowPosters from '@/components/posters/ShowPosters.vue';


export default {
    name: 'posters',
    components: {
        'show-posters': ShowPosters
    },
	data() {
		return {
			posters: [],
			apiRoute: app.config.apiRoute + 'posters',
			app: app
		};
	},
	mounted() {
		
		// call a GET method to get all posters
		app.callApi
		.get(this.apiRoute, this.app.apiConfig)
		.then(response => { 
			this.posters = response.data;  
		});
	}
};
</script>