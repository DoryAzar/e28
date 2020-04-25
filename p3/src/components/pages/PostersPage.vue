<!-- Posters Page
Router page for rendering all posters
@posters: Retrieves all posters from the API

Components Dependency
@show-posters: component responsible rendering the posters
-->

<template>
    <div id='posters'>
		<div class='spacer-2'></div>
		<div class='horizontal-center'>
			<router-link :to="{ name: 'newposter'}"><a class='btn btn-primary btn-md input-size-150'>Share your story</a></router-link>
		</div>
		<div class='spacer-2'></div>
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
		this.app.callApi
		.get(this.apiRoute, this.app.apiConfig)
		.then(response => { 
			this.posters = response.data;  
		});
	}
};
</script>