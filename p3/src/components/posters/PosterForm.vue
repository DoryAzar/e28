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
						
						<!-- server page level error message -->
						<poster-message :error='error'></poster-message>
						
						<div class='form-group'>
							
							<label for='title' :class='[{ "semibold error": (error && error.errors.title || $v.posterInputs.title.$error)}, "textcolor5"]'>* title</label>
							
							<!-- Contextual server error message -->
							<p v-if='error && error.errors.title' class='error small-text'>{{ error.errors.title }}</p>
							
							<!-- Contextual client error message -->
							<p v-else-if='$v.posterInputs.title.$error && !$v.posterInputs.title.required' class='error small-text'>Title is required</p>
							
							<p v-else-if='$v.posterInputs.title.$error && !$v.posterInputs.title.maxLength' class='error small-text'>Maximum Length is 18 characters</p>
							
							<input type='text' name='title' id='title' class='form-control input-default' placeholder='Enter the title' v-model='$v.posterInputs.title.$model' @focus='error = ""'>
						</div>

						<div class='form-group'>
							<label for='category' :class='[{ "semibold error": error && error.errors.category || $v.posterInputs.category.$error}, "textcolor5"]'>* category</label>
      
							<!-- Contextual server error message -->
							<p v-if='error && error.errors.category' class='error small-text'>{{ error.errors.category }}</p>
							
							<!-- Contextual client error message -->
							<p v-else-if='$v.posterInputs.category.$error && !$v.posterInputs.category.required' class='error small-text'>Category is required</p>
							
							<p v-else-if='$v.posterInputs.category.$error && !$v.posterInputs.category.maxLength' class='error small-text'>Maximum Length is 18 characters</p>
							
							<p v-else-if='$v.posterInputs.category.$error && !$v.posterInputs.category.alpha' class='error small-text'>Only alphabetic characters can be entered</p>
							
							<input type='text' name='category' id='category' class='form-control input-default' placeholder='Enter a category name' maxlength='50' v-model='$v.posterInputs.category.$model' @focus='error = ""'>
						</div>

						<div class='form-group'>
							<label for='short_description' :class='[{ "semibold error": error && error.errors.short_description || $v.posterInputs.short_description.$error }, "textcolor5"]'>* short description</label>
							
							<!-- Contextual server error message -->
							<p v-if='error && error.errors.short_description' class='error small-text'>{{ error.errors.short_description }}</p>
							
							<!-- Contextual client error message -->
							<p v-else-if='$v.posterInputs.short_description.$error && !$v.posterInputs.short_description.required' class='error small-text'>Short description is required</p>
							
							<p v-else-if='$v.posterInputs.short_description.$error && !$v.posterInputs.short_description.maxLength' class='error small-text'>Maximum Length is 200 characters</p>

							<textarea class='form-control' name='short_description' id='short_description' rows='3' placeholder='What is this poster about?' v-model='$v.posterInputs.short_description.$model' @focus='error = ""'></textarea> 
						</div>

						<div class='form-group'>
							<label for='description' :class='[{ "semibold error": error && error.errors.description || $v.posterInputs.description.$error}, "textcolor5"]'>* description</label>

							<!-- Contextual server error message -->
							<p v-if='error && error.errors.description' class='error small-text'>{{ error.errors.description }}</p>
							
							<!-- Contextual client error message -->
							<p v-else-if='$v.posterInputs.description.$error && !$v.posterInputs.description.required' class='error small-text'>Description is required</p>
							
							<textarea class='form-control' name='description' id='description' rows='6' placeholder='Give us more details about your poster' v-model='$v.posterInputs.description.$model' @focus='error = ""'></textarea> 
						</div>        

						<div class='form-group'>
							<div v-if='!edit'>
								<label for='image_url' :class='[{ "semibold error": error && error.errors.image_url }, "textcolor5"]'>* Image</label>
								
								<!-- Contextual server error message -->
								<p v-if='error && error.errors.image_url' class='error small-text'>{{ error.errors.image_url }}</p>
								
								<input type='file' id='image_url' name='image_url' class='form-control input-default' accept='image/*' @change='error = ""'>
							</div>
							<div v-else>
								<div class='wrapper reset-margin'>
									<p class='textcolor5'>Selected file: <span class='default-text block-with-text'>{{ posterInputs.image_url }}</span></p>
								</div>
							</div>
						</div>


						<div class='spacer-2'></div>
						<p v-if='$v.$anyError || error' class='horizontal-center small-text error'>Make sure to fix the errors on the page</p>
						<input class='btn btn-primary btn-md btn-block' :class='{ disabled: $v.$anyError }' type='submit' value='save'>
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
import * as app from '@/common/app.js'
import ShowMessaging from '@/components/global/ShowMessaging.vue'
import { required, alpha, maxLength } from 'vuelidate/lib/validators'
import {mapState} from 'vuex'
	
export default {
    name: 'poster-form',
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
	validations: {
		posterInputs: {
			title: {
				required,
				maxLength: maxLength(18)
			},
			category: {
				required,
				alpha,
				maxLength: maxLength(18)
			},
			short_description: {
				required,
				maxLength: maxLength(200)
			},
			description: {
				required
			}
		}
	},
	computed: {
		
		// component reads needed information directly from store
		...mapState(['poster', 'edit']),
		
		//preserving input values upon non successful completion
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
			if (!this.$store.state.edit) {

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
			if(!this.$store.state.edit) {
				this.$router.push({ name: 'posters'});
			} else {
				this.app.callApi.delete(this.apiRoute + this.poster.id, this.app.apiConfig)
				.then(response => {
					let editMode = response? false : true;
					this.$store.commit('setEditMode', editMode);
					this.$router.push({ name: 'posters'});
				})
				.catch(error => console.log(error));
			}
		}
		
	}

};
</script>