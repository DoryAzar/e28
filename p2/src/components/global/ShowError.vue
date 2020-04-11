<!-- Show Error Component
Global component responsible for rendering an error message passed on to it on a page
@error: Expects an error object that contains a message to be displayed
-->
<template>
	<div class='wrapper content-section bounded equally-spaced-1'>
		<div class='spacer-4'></div>
		<section class='bounded showborders dropshadow color0 horizontal-left'>
			<h2>Whooops...</h2>
			<p class='semibold'>Something went wrong</p>
			<p>We are working on it, please be patient with us</p>
			<div v-if='error'>
				<hr>
				<p>{{ error.message }}</p>
				<div class='spacer-2'></div>
				<div class='horizontal-center'>
					<router-link :to='{ name: "posters" }'><a class='btn btn-default'>Let's start again</a></router-link>
				</div>
			</div>
			<div class='spacer-2'></div>
		</section>
	
	</div>
	
</template>

<script>

export default {
    name: 'show-error',
	props: ['error']
};
</script>