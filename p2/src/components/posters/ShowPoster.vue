<!-- Show Poster Component
Poster component responsible for rendering the details of a poster
@poster: Expects a poster object
-->

<template>
	<div class='content-section bounded-xlarge'>
		<div class='spacer-2'></div>
		<div class='card color0 dropshadow horizontal-center'>
			<div class='horizontal-left'>
				<router-link :to="{ name: 'posters'}"><a class='btn btn-default btn-sm'>back</a></router-link>
			</div>
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
					<p class="textcolor5 default-text block-with-text">{{ poster.description }}</p>
				</div>
				<div class="small-text textcolor3">{{ poster.modified_at }}</div>
			</div>
			<div class="spacer-1"></div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'show-poster',
    props: ['poster']

};
</script>