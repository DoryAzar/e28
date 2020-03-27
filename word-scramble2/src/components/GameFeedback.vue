<template>
		<label :class="{ win: feedbackStatus == 'win', lose: feedbackStatus == 'lose' }">{{ feedbackMessage }}</label>
</template>



<script>
	export default {
		
		template: '#game-feedback',
		props: ['feedback-status', 'feedback-message']

	};

</script>


<style src='../css/styles.css'></style>