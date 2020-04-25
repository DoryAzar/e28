<!-- Poster Page
Router page for rendering a poster
@id: expects an id when called
@poster: retrieves the poster information from the API

Component Dependency:
@show-poster: component responsible for rendering a poster
-->

<template>
    <div id='poster' v-if='poster'>
		<div class='spacer-2'></div>
        <show-poster :poster='poster'></show-poster>
    </div>
</template>

<script>
import ShowPoster from '@/components/posters/ShowPoster.vue'
import {mapState} from 'vuex'

export default {
    name: 'posterdetails',
    components: {
        'show-poster': ShowPoster
    },
	props: ['id'],
	data() {
		return {};
	},
	computed: {
		...mapState(['poster'])
	},
	mounted() {
		
		this.$store.dispatch('getPoster', this.id);

	},
	
	watch: {
		
		// Watch poster for results. In the absence of one, display message
		poster() {
			if (!this.poster) {
				this.$router.push({ name: 'error', params: { 'message': 'The poster is not available'}});
			}
		}
		
		
	}
};
</script>