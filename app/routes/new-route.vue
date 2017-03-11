<template lang="html">
  <div class="">
    <div class="app">
    <form @submit.prevent="submit">
    </form>

    <div class="nav">
      <div class="nav-left">
        <a href="#" class="nav-item is-brand">Puppies</a>
      </div>

      <div class="nav-right">
        <a href="#" class="nav-item">All Puppies</a>
        <a href="#" class="nav-item">Add Puppy</a>
      </div>
    </div>

    <div class="section">
    <div class="container">
    <div class="columns">
      <div class="column is-one-third">
      <div class="panel">
        <div class="panel-heading">
          <h2>Adopt a Puppy</h2>
        </div>
          <div class="panel-block">
            <img src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            class="panel-img" alt="">
            <div class="panel-info">
            <p class="panel-name">Luna</p>
            <a href="#" class="panel-link">Read More</a>
          </div>
          </div>
          <div class="panel-block">
            <img src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            class="panel-img" alt="">
            <div class="panel-info">
            <p class="panel-name">Luna</p>
            <a href="#" class="panel-link">Read More</a>
          </div>
          </div>
          <div class="panel-block">
            <img src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            class="panel-img" alt="">
            <div class="panel-info">
            <p class="panel-name">Luna</p>
            <a href="#" class="panel-link">Read More</a>
          </div>
          </div>
          <div class="panel-block">
            <img src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            class="panel-img" alt="">
            <div class="panel-info">
            <p class="panel-name">Luna</p>
            <a href="#" class="panel-link">Read More</a>
          </div>
          </div>
          <div class="panel-block">
            <img src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            class="panel-img" alt="">
            <div class="panel-info">
            <p class="panel-name">Luna</p>
            <a href="#" class="panel-link">Read More</a>
          </div>
          </div>
          <div class="panel-block">
            <img src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            class="panel-img" alt="">
            <div class="panel-info">
            <p class="panel-name">Luna</p>
            <a href="#" class="panel-link">Read More</a>
          </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="submit">
      <div class="column is-two-thirds">
        <div class="main-info">
        <h1 class="puppy-header">Found a Puppy? We Can Help!</h1>
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
