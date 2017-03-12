<template lang="html">
  <div class="">
    <div class="app">
    <form @submit.prevent="submit">
    </form>

    <div class="nav">
      <div class="nav-left">
        <a href="/" class="nav-item is-brand">Puppies</a>
      </div>

      <div class="nav-right">
        <a href="/" class="nav-item">All Puppies</a>
        <a href="/new-route" class="nav-item">Add Puppy</a>
      </div>
    </div>

    <div class="section">
    <div class="container">
    <div class="columns">

      <form @submit.prevent="submit">
      <div class="column is-two-thirds">
        <div class="main-info">
        <h1 class="puppy-header">Found a Puppy? We Can Help!</h1>
        <div class="control">
          <p>Name</p>
          <input type="text">
        </div>
      </div>
      </div>
      </form>

  </div>
  </div>
</template>

<script>
import store from '../store';


export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
