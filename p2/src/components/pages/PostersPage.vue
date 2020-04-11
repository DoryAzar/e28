<template>
    <div id='posters'>
        <show-posters v-for='poster in posters' :key='poster.id' :poster='poster'></show-posters>
    </div>
</template>

<script>
const axios = require('axios');
import * as app from '@/common/app.js';
import ShowPosters from '@/components/ShowPosters.vue';


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
		axios
		.get(this.apiRoute, this.app.apiConfig)
		.then(response => { 
			this.posters = response.data;  
		});
	}
};
</script>