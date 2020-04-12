<!-- Poster Form
Poster component responsible for rendering a create or edit form

@poster: when poster information is available it is displayed for editing
@edit: flag to control whether it's a creation or an edition form

-->

<template>
	<div id='posterform'>
		<form id='poster_form' method='POST' enctype='multipart/form-data' @submit.prevent='savePoster'>
			<div class='content-section bounded-xlarge equally-spaced-1 horizontal-center'>
				<div class='card color0 dropshadow horizontal-center'>
					<div class='spacer-2'></div>
					<div class='horizontal-left'>

						<div class='form-group'>
							<label for='title' class='textcolor5'>* title</label>
							<input type='text' name='title' id='title' class='form-control input-default' placeholder='Enter the title' maxlength='18' v-model='poster.title' required>
						</div>

						<div class='form-group'>
							<label for='category' class='textcolor5'>* category</label>
							<input type='text' name='category' id='category' class='form-control input-default' placeholder='Enter a category name' maxlength='50' v-model='poster.category' required>
						</div>

						<div class='form-group'>
							<label for='short_description' class='textcolor5'>* short description</label>
							<textarea class='form-control' name='short_description' id='short_description' maxlength='200' rows='3' placeholder='What is this poster about?' v-model='poster.short_description' required></textarea> 
						</div>

						<div class='form-group'>
							<label for='description' class='textcolor5'>* description</label>
							<textarea class='form-control' name='description' id='description' rows='6' placeholder='Give us more details about your poster' v-model='poster.description' required></textarea> 
						</div>        

						<div class='form-group'>
							<div v-if='!edit'>
								<label for='image_url' class='textcolor5'>* upload a photo</label>
								<input type='file' id='image_url' name='image_url' class='form-control input-default' accept='image/*'>
							</div>
							<div v-else>
								<div class='wrapper reset-margin'>
									<p class='textcolor5'>Selected file: <span class='default-text block-with-text'>{{ poster.image_url }}</span></p>
								</div>
							</div>
						</div>


						<div class='spacer-2'></div>
						<input class='btn btn-primary btn-md btn-block' type='submit' value='save'>
						<div class='spacer-2'></div>
					</div>
				</div>
			</div>
		</form>

		<form v-if='edit' id='delete_form' method='POST' enctype='multipart/form-data' @submit.prevent=''>
			<input class='btn btn-lnk btn-md btn-block' type='submit' value='delete poster'>
		</form>

		<div class='spacer-2'></div>

	
	</div>

</template>

<script>
import * as app from '@/common/app.js';
	
export default {
    name: 'poster-form',
    props: ['poster', 'edit'],
	data() {
		return {
			error: null,
			apiRoute: app.config.apiRoute + 'posters/',
			app: app
		};
	},
	methods: {
		
      savePoster: function() {
          var form = document.getElementById('poster_form');
          var formData = new FormData(form);

          
          // For a creation, the POST request allows for sending data as form data
          if (!this.edit) {
              
              // Get the input files
              let files = document.getElementById('image_url'); 
              formData.append('image_url', files.files[0]);
              
              // make the post request
              this.app.callApi.post(this.route, formData, this.app.apiConfig)
              .then(response => { 
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
        }
      
        //deleteProject: function() {
        //    if(!this.edit) {
        //        window.location.href="/vue/";
        //    } else {
        //        var input = {
        //                headers: {
        //                    "Authorization": "Bearer NHlVZEN6Ri8vR3hXNEVKSTJhTWlIbTE3bFpzcE1KNkRFVmwzTTloMi9FWGRzRzlRZHBMZ3oybGgrVFlsaXpHNjo6s9CfKQ/uyC8ZMVPcqFrB1w=="
        //                }
        //          };
        //        axios.delete(this.route, input)
        //        .then(response => window.location.href="/vue/")
        //        .catch(error => console.log(error));
        //    }
        //}
		
	}

};
</script>