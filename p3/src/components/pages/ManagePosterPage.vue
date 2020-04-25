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
import * as app from '@/common/app.js';
import PosterForm from '@/components/posters/PosterForm.vue';

export default {
    name: 'manageform',
    components: {
        'poster-form': PosterForm
    },
	data() {
		return {
			
			// reset poster value
			poster: {
				title: '',
				category: '',
				short_description: '',
				description: '',
				image_url: ''

			},
			id: '',
			edit: false,
			apiRoute: app.config.apiRoute + 'posters/',
			app: app
		};
	},
	mounted() {
		
		this.id = this.$route.params.id?? '';
		
		
		// call a GET method to get one poster
		if (this.id) {
			this.app.callApi
			.get(this.apiRoute + this.id, this.app.apiConfig)
			.then(response => { 
				let temp = this.poster;
				this.poster = response.data?? null;  
				
				// if no data has been retrieved from the API
				if (!this.poster) {
					// reset the poster and redirect to create
					this.poster = temp;
					this.$router.push({ name: 'newposter'});
				} else {
					// set the edit to true
					this.edit = true;
				}				
			});		
		}

	}
};
</script>