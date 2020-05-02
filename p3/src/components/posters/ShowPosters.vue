<!-- Show Posters Component
Poster component responsible for rendering a snippet for a poster
@poster: Expects a poster object
-->

<template>
	<div id='posters' class="col-sm-6 col-md-4">
		<router-link :to="{ name: 'poster', params: { id: poster.id }}">
			<div class="card color0 equally-spaced-1 height-fixed dropshadow" data-test='poster-test'>
				<div class="card-image" :style="'background-image: url(' + poster.image_url +')'"></div>
				<div class="spacer-2"></div>
				<h2 class="medium-text semibold textcolor5 reset-margin">{{ poster.title }}</h2>
				<div class="small-text textcolor3">{{ poster.category }}</div>
				<div class="spacer-1"></div>
				<div class="wrapper reset-margin">
					<p class="textcolor5 default-text block-with-text">{{ poster.short_description }}</p>
				</div>
				<div class="small-text textcolor3">{{ poster.modified_at }}</div>
				<div class="spacer-1"></div>
			</div>
		</router-link>
	</div>
</template>

<script>

export default {
    name: 'show-posters',
    props: ['poster']
};
</script>