<template>
	<div>
		<form @submit.prevent="submitInput">
			<input type="text" v-model="name" />
			<button type="submit">Submit</button>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				name: null,
			};
		},
		methods: {
			submitInput() {
				if (process.client || process.browser)
					this.$router.push('/search?name=' + this.name);
			},
		},
	};
</script>
