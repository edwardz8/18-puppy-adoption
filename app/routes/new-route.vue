<template lang="html">
  <div class="">

      <form v-on:submit.prevent="submit">
      <div class="column is-two-thirds">

        <h1 class="title">Found a Puppy? We Can Help!</h1>

        <div class="control-panel">

          <label for="name" class="label">Name</label>
          <p class="Name">
          <input type="text" class="input" v-model="formValues.name">
          </p>

          <label for="age" class="label">Age</label>
          <p class="control">
          <input type="text" class="input" v-model="formValues.age">
          </p>

          <label for="sex" class="label">Sex</label>
          <p class="control">
            <span class="select">
          <select v-model="formValues.sex">
            <option value="#">Please Select an Option</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </span>
          </p>

          <p class="control">
          <label for="color" class="label">Color</label>
          <input type="text" class="input" v-model="formValues.color">
          </p>
          <p class="control">
          <label for="breed" class="label">Breed</label>
          <input type="text" class="input" v-model="formValues.breed">
          </p>
          <p class="control">
          <label for="img" class="label">Image Url</label>
          <input type="text" class="input" v-model="formValues.image_url">
          </p>

          <label class="label">Description</label>
          <p class="control">
          <textarea class="textarea" placeholder="Textarea"
             v-model="formValues.description">
          </textarea>
          </p>

          <p class="control">
          <a href="/" class="button">Back</a>
          <button class="button is-info">Submit</button>
          </p>

        </div>
      </div>
      </form>


</div>
</template>

<script>
import store from '../store';
import { create } from '../actions/puppy';


export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      },
    };
  },

  methods: {
    submit() {
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'index' });
      });
    }
  },
};

</script>
