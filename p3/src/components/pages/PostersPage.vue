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
import ShowPosters from '@/components/posters/ShowPosters.vue'
import {mapState} from 'vuex'

export default {
    name: 'posters',
    components: {
        'show-posters': ShowPosters
    },
	data() {
		return {}
	},
	computed: {
		// component reads needed information directly from store
		...mapState(['posters'])
	},
	
	mounted() {
		this.$store.dispatch('getPosters');
	}
};
</script>