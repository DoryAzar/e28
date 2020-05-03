<!-- Show Poster Component
Poster component responsible for rendering the details of a poster
@poster: Expects a poster object
-->

<template>
	<div id='poster' class='content-section bounded-xlarge'>
		<div class='card color0 dropshadow horizontal-center'>
			<div class='inline-block horizontal-left'><router-link :to="{ name: 'posters'}"><a class='btn btn-default btn-sm'>back to posters</a></router-link></div>
			<div class='inline-block horizontal-right'><router-link :to="{ name: 'manageposter'}"><a class='btn btn-primary btn-sm input-size-100' data-test='edit-button'>edit</a></router-link></div>	
			<div class="spacer-2"></div>
			<div class='banner-section color0 horizontal-center'>
				<h2 class='sr-only hide'>post image</h2>
				<img class='card-responsive' alt='Main image' :src='poster.image_url' />
			</div>
			<div class="spacer-2"></div>
			<div class='horizontal-left'>
				<h2 class="medium-text semibold textcolor5 reset-margin">{{ poster.title }}</h2>
				<div class="small-text textcolor3">{{ poster.category }}</div>
				<div class="spacer-1"></div>
				<div class="wrapper reset-margin">
					<p class="textcolor5 default-text block-with-text" data-test='description-test'>{{ poster.description }}</p>
				</div>
				<div class="small-text textcolor3">{{ poster.modified_at }}</div>
			</div>
			<div class="spacer-1"></div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
	
export default {
    name: 'show-poster',
	computed: {
		...mapState(['poster'])
	}

};
</script>