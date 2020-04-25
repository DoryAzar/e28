<!-- Show Messaging Component
Global component responsible for rendering inline messages such as information, warning, success and errors

-->

<template>
	<div v-if='error && error.status'  class='show'>
		<div class="spacer-2"></div>
		<div :class="'alert alert-' + error.status" role="alert" style="margin:0;">
			<p class="medium-text horizontal-left semibold">
				<span :class="'glyphicon glyphicon-' + alertType" aria-hidden="true"></span>
				{{ error.message_header }}
			</p>
			<span class="sr-only">{{ error.status }}</span>
			<p class="horizontal-left">{{ error.message }}</p>
		</div>
		<div class="spacer-2"></div>
	</div>
</template>

<script>

export default {
    name: 'show-messaging',
	props: ['error'],
	computed: {
		alertType() {
			let status = '';
			switch(this.error.status) {
				case 'danger':
					status = 'exclamation-sign';
					break;
				case 'success':
					status = 'ok';
					break;
				case 'info':
					status = 'info';
					break;
				default:
					status = '';
					
			}
			return status;
		} 
	}
	
};
</script>