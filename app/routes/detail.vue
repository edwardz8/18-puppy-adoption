<template lang="html">
  <div class="">

      <form @submit.prevent="submit">
        <div class="detail-main">
        <div class="detail-heading">
          <h1 class="title has-text-centered">Luna</h1>
          <span class="button is-primary">
            <span class="icon is-small fa fa-paw"></span>
            <span>I'm adopted</span>
          </span>
        </div>
      <div class="column is-two-thirds">
        <div class="card is-fullwidth">
          <div class="card-image">
            <figure class="image is-300x300">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/51/a2/a7/51a2a7d187667ada432bfdb0db2024ee.jpg" alt=""
              class="pup-detail__img">
            </figure>
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
