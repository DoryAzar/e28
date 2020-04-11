<!-- Poster Page
Router page for rendering a poster
@id: expects an id when called
@poster: retrieves the poster information from the API

Component Dependency:
@show-poster: component responsible for rendering a poster
-->
<template>
    <div id='poster' v-if='poster'>
        <show-poster :poster='poster'></show-poster>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import ShowPoster from '@/components/posters/ShowPoster.vue';


export default {
    name: 'poster',
    components: {
        'show-poster': ShowPoster
    },
	props: ['id'],
	data() {
		return {
			poster: null,
			apiRoute: app.config.apiRoute + 'posters/',
			app: app
		};
	},
	mounted() {

		// call a GET method to get one poster
		app.callApi
		.get(this.apiRoute + this.id, this.app.apiConfig)
		.then(response => { 
			this.poster = response.data?? null;  
			
			// in the absence of a poster, redirects to error page
			if (!this.poster) {
				this.$router.push({ name: 'error', params: { 'message': 'The poster is not available'}});
			}
		});
	}
};
</script>