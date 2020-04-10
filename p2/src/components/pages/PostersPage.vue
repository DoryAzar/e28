<template>
    <div id='posters'>
        <show-poster v-for='poster in posters' :key='poster.id' :poster='poster'></show-poster>
    </div>
</template>

<script>
const axios = require('axios');
import * as app from '@/common/app.js';
import ShowPoster from '@/components/ShowPosters.vue';


export default {
    name: 'posters',
    components: {
        'show-poster': ShowPoster
    },
	data() {
		return {
			posters: [],
			apiRoute: app.config.apiRoute + 'posters',
			app: app
		};
	},
	mounted() {
		axios
		.get(this.apiRoute, this.app.apiConfig)
		.then(response => { 
			this.posters = response.data;  
		});
	}
};
</script>

<style scoped>
</style>