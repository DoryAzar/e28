<!-- Poster Form
Poster component responsible for rendering a create or edit form

@poster: when poster information is available it is displayed for editing
@edit: flag to control whether it's a creation or an edition form

Component Dependency:
@ShowMessaging: global component responsible for displaying inline messaging

-->

<template>
	<div id='posterform'>
		<div class='content-section bounded-xlarge equally-spaced-1 horizontal-center'>
			<form id='poster_form' method='POST' enctype='multipart/form-data' @submit.prevent='savePoster'>
				<div class='card color0 dropshadow horizontal-center'>
					<div class='horizontal-left'>
						<router-link v-if='edit' :to="{ name: 'poster'}"><a class='btn btn-default btn-sm'>back to poster</a></router-link>
						<router-link v-else :to="{ name: 'posters'}"><a class='btn btn-default btn-sm'>back to posters</a></router-link>
					</div>
					<div class='spacer-1'></div>
					<div class='horizontal-left'>
						<poster-message :error='error'></poster-message>
						
						<div class='form-group'>
							<label for='title' :class='[{ error: error && error.errors.title }, "textcolor5"]'>* title</label>
                            <p v-if='error' class='error'>{{ error.errors.title }}</p>
							<input type='text' name='title' id='title' class='form-control input-default' placeholder='Enter the title' maxlength='18' v-model='posterInputs.title' required>
						</div>

						<div class='form-group'>
							<label for='category' :class='[{ error: error && error.errors.category }, "textcolor5"]'>* category</label>
                            <p v-if='error' class='error'>{{ error.errors.category }}</p>
							<input type='text' name='category' id='category' class='form-control input-default' placeholder='Enter a category name' maxlength='50' v-model='posterInputs.category' required>
						</div>

						<div class='form-group'>
							<label for='short_description' :class='[{ error: error && error.errors.short_description }, "textcolor5"]'>* short description</label>
                            <p v-if='error' class='error'>{{ error.errors.short_description }}</p>
							<textarea class='form-control' name='short_description' id='short_description' maxlength='200' rows='3' placeholder='What is this poster about?' v-model='posterInputs.short_description' required></textarea> 
						</div>

						<div class='form-group'>
							<label for='description' :class='[{ error: error && error.errors.description }, "textcolor5"]'>* description</label>
                            <p v-if='error' class='error'>{{ error.errors.description }}</p>
							<textarea class='form-control' name='description' id='description' rows='6' placeholder='Give us more details about your poster' v-model='posterInputs.description' required></textarea> 
						</div>        

						<div class='form-group'>
							<div v-if='!edit'>
								<label for='image_url' :class='[{ error: error && error.errors.image_url }, "textcolor5"]'>* Image</label>
								<p v-if='error' class='error'>{{ error.errors.image_url }}</p>
								<input type='file' id='image_url' name='image_url' class='form-control input-default' accept='image/*'>
							</div>
							<div v-else>
								<div class='wrapper reset-margin'>
									<p class='textcolor5'>Selected file: <span class='default-text block-with-text'>{{ posterInputs.image_url }}</span></p>
								</div>
							</div>
						</div>


						<div class='spacer-2'></div>
						<input class='btn btn-primary btn-md btn-block' type='submit' value='save'>
						<div class='spacer-2'></div>
					</div>
				</div>
			</form>
			
			<form v-if='edit' id='delete_form' method='POST' enctype='multipart/form-data' @submit.prevent='deletePoster'>
				<input class='btn btn-lnk btn-md btn-block' type='submit' value='delete poster'>
			</form>
			<div class='spacer-2'></div>
			
		</div>	
	</div>

</template>

<script>
import * as app from '@/common/app.js';
import ShowMessaging from '@/components/global/ShowMessaging.vue';
	
export default {
    name: 'poster-form',
    props: ['poster', 'edit'],
	components: {
		'poster-message': ShowMessaging
	},
	data() {
		return {
			response: null,
			error: null,
			apiRoute: app.config.apiRoute + 'posters/',
			app: app
		};
	},
	computed: {
		
		// preserving input values upon non successful completion
		posterInputs() {
			if (this.response && this.response.posters) {
				
				// if the inputs have been returned by the server
				return this.response.posters;
				
			} else {
				return this.poster;
			}
		}	
	},
	methods: {

		// save poster method
		savePoster: function() {
			var form = document.getElementById('poster_form');
			var formData = new FormData(form);

			// For a creation, the POST request allows for sending data as form data
			if (!this.edit) {

				// Get the input files
				let files = document.getElementById('image_url'); 
				formData.append('image_url', files.files[0]);

				// make the post request
				this.app.callApi.post(this.apiRoute, formData, this.app.apiConfig)
				.then(response => { 
					this.response = response.data;
					
					// if the response returns an error
					if(response.data.error) {
						this.error = response.data;
						if (this.error.status == 'danger') {
							this.error.alertType = 'exclamation-sign';
						}
					} else {
						this.$router.push({ name: 'posters'});
					}
				})
				.catch(error => (console.log(error)));
				
			} else {

				// form data needs to be jsonified
				var updateData = JSON.stringify(Object.fromEntries(formData));
				this.app.callApi.put(this.apiRoute + this.poster.id, updateData, this.app.apiConfig)
				.then(response => { 
					this.response = response.data;
					
					// if the response returns an error
					if(response.data.error) {
						this.error = response.data;
						if (this.error.status == 'danger') {
							this.error.alertType = 'exclamation-sign';
						}
					} else {
						this.$router.push({ name: 'posters'});
					}
				})
				.catch(error => (console.log(error)));  
			}
		},

		// delete poster method
		deletePoster: function() {
			if(!this.edit) {
				this.$router.push({ name: 'posters'});
			} else {
				this.app.callApi.delete(this.apiRoute + this.poster.id, this.app.apiConfig)
				.then(this.$router.push({ name: 'posters'}))
				.catch(error => console.log(error));
			}
		}
		
	}

};
</script>