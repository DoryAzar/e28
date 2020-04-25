<!-- Manage Poster Page
Router page for rendering a form for creating a new poster, editing or deleting an existing poster

@id: if it has an id it will be a edit, otherwise creation
@poster: retrieves the poster information from the API
@edit: flag to indicate if it's an edition or a creation

Component Dependency:
@poster-form: component responsible for rendering a form
-->

<template>
    <div id='manageform'>
		<div class='spacer-1'></div>
        <poster-form :poster='poster' :edit='edit'></poster-form>
    </div>
</template>

<script>
import PosterForm from '@/components/posters/PosterForm.vue'
import {mapState} from 'vuex'

export default {
    name: 'manageform',
    components: {
        'poster-form': PosterForm
    },
	data() {
		return {
			id: ''
		};
	},
	computed: {
		...mapState(['poster']),
		...mapState(['edit'])
	},
	mounted() {
		
		// reinitialize the poster upon loading the form
		this.$store.commit('loadPoster', {	
					title: '',
					category: '',
					short_description: '',
					description: '',
					image_url: ''
		});
		
		// Retrieve the id from the request if it is there
		this.id = this.$route.params.id?? '';
		
		// if there is an id then try to retrieve the poster
		if (this.id) {
			this.$store.dispatch('getPoster', this.id);
			this.$store.commit('setEditMode', true);
		} 
	},
	watch: {
		
		// If no poster is retrieved then display an error message
		poster() {
			if (!this.poster) {
				this.$router.push({ name: 'error', params: { 'message': 'The poster is not available'}});
			} 
		}
	}
};
</script>