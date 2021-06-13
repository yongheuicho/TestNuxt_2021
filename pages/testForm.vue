<template>
  <div>
    <form @submit.prevent="submitInput">
      <input type="text" v-model="name" />
      <button type="submit">Submit</button>
    </form>
    <br>
    <button class="button" @click="myButton">생성</button>
  </div>
</template>
<script>
import {fbAppCount, fbDb} from '~/plugins/firebaseDatabase';

export default {
  data() {
    return {
      nameField: 'name',
      name: null,
    };
  },
  mounted() {
    //fbDb.ref('data').set({'child1': {'child2_1': 'My world!', 'child2_2': 'Your world!'}});
    //alert(fbDb.ref('data').child('child1'));
    //fbDb.ref('names').child('child1').update({'child2': 'Our world!'});
    fbDb.ref('data').remove();
    // fbDb
    //   .ref('names').child('child1')
    //   .on('value', (snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log('No data available');
    //     }
    //   });
  },
  methods: {
    submitInput() {
      this.$router.push('/search?' + this.nameField + '=' + this.name);
    },
    myButton() {
      let obj = {};
      obj.a = '1';
      obj.b = '2';
      let str = JSON.stringify(obj);
    }
  },
};
</script>
