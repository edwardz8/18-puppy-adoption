<template lang="html">
  <div class="">


      <div class="column is-fullwidth">
        <form @submit.prevent="submit">
          <div class="detail-main">
          <div class="detail-heading">
            <h1 class="title has-text-centered">Luna</h1>
            <span class="button is-primary">
              <span class="icon is-small fa fa-paw"></span>
              <span>I'm adopted</span>
            </span>
          </div>
        <div class="card">
            <figure class="image is-square">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/51/a2/a7/51a2a7d187667ada432bfdb0db2024ee.jpg" alt=""
              class="pup-detail__img">
            </figure>
        </div>

      <nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Age</p>
      <p class="title">4</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Breed</p>
      <p class="title">Hound</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Color</p>
      <p class="title">Blonde</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Sex</p>
      <p class="title">Female</p>
    </div>
  </div>
</nav>
        <div class="card is-fullwidth">
          <div class="card-content">
            <h3 class="subtitle">About Me</h3>
            <p>Hello world! I am Luna! I am very active and friendly. I am very strong so could benefit from some manners training.
            I am looking for a loving and patient owner to provide me with my forever home. If you think I might be the
            dog for you, stop by and visit me today.</p>
          </div>
        </div>


    </div>
  </div>
    </form>

  </div>
</template>

<script>
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
