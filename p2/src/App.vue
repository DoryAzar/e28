<template>
  <div id='app'>
	<show-navigation></show-navigation>
	<div class='container'>
		<div class='shadowCoverTop color0'></div>
		<div class='shadowContainer'><div class='radialShadowTop'></div></div>
		<div class='spacer-4'></div>
		<div class='wrapper bounded-large'>
			<router-view></router-view>
		</div>
	</div>
	<div class='spacer-4'></div>
	<footer>
		<p class='small-text semi-bold horizontal-center'>Copyright &copy; 2020</p>
	</footer>      
</div>
</template>

<script>
import ShowNavigation from '@/components/ShowNavigation';
	
export default {
	name: 'App',
	components: {
		'show-navigation': ShowNavigation
	}

};
</script>

<style src='@/assets/css/styles.css'></style>