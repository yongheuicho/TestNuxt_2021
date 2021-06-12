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
      nameField: 'name',
      name: null,
    };
  },
  methods: {
    submitInput() {
      this.$router.push('/search?' + this.nameField + '=' + this.name);
    },
  },
};
</script>
