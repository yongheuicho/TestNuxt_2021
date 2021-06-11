<template>
	<div>This is a test page: {{ name }}.</div>
</template>
<script>
	import qs from 'querystring';
	export default {
		asyncData(context) {
			return { name: context.route.query.name };
		},
		data() {
			return {
				name: 'init',
			};
		},
		mounted() {
			//alert(this.name);
		},
	};
</script>
