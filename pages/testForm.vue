<template>
	<div>
		<client-only>
			<form @submit.prevent="submitInput">
				<input type="text" v-model="name" />
				<button type="submit">Submit</button>
			</form>
		</client-only>
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
				//				if (process.server) this.$router.push('/search?name=' + this.name);
			},
		},
	};
</script>
