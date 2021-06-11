<template>
	<div>
		<form @submit.prevent="submitInput">
			<input type="text" v-model="name" />
			<button type="submit">Submit</button>
		</form>
	</div>
</template>
