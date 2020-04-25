<!-- Error Page
Router page for rendering page errors
@message: Expects a message router parameter to be displayed

Component Dependency:
@show-error: component responsible for rendering an error within the page
-->

<template>
    <div id='error'>
        <show-error :error='error'></show-error>
    </div>
</template>

<script>
import ShowError from '@/components/global/ShowError.vue';

export default {
    name: 'error',
    components: {
        'show-error': ShowError
    },
	data() {
		return {
			error: null
		}
	},
	mounted() {
		// Retrieve the parameters pushed to the page
		this.error = this.$route.params;
	}
};
</script>