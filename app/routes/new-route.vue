<template lang="html">
  <div class="">

      <form @submit.prevent="submit">
      <div class="column is-two-thirds">

        <h1 class="title">Found a Puppy? We Can Help!</h1>

        <div class="control-panel">

          <label for="pup-name" class="label">Name</label>
          <p class="Name">
          <input type="text" class="input" id="pup-name">
          </p>

          <label for="pup-age" class="label">Age</label>
          <p class="control">
          <input type="text" class="input" id="pup-age">
          </p>

          <label for="pup-sex" class="label">Sex</label>
          <p class="control">
            <span class="select">
          <select class="">
            <option value="#">Please Select an Option</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </span>
          </p>

          <p class="control">
          <label for="pup-color" class="label">Color</label>
          <input type="text" class="input" id="pup-color">
          </p>
          <p class="control">
          <label for="pup-breed" class="label">Breed</label>
          <input type="text" class="input" id="pup-breed">
          </p>
          <p class="control">
          <label for="pup-img" class="label">Image Url</label>
          <input type="text" class="input" id="pup-img">
          </p>

          <label class="label">Description</label>
          <p class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
          </p>

          <p class="control">
          <a href="/" class="button">Back</a>
          <a class="button is-info">Submit</a>
          </p>

        </div>
      </div>
      </form>


</div>
</template>

<script>
// import store from '../store';


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
      }
    };
  },

  methods: {

  },
};
</script>
