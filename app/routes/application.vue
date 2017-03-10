<template lang="html">
  <div class="">
    <div class="app">

      <div class="nav">
        <div class="nav-left">
          <!--<router-link v-bind:to="{ name: 'index' }">Puppies</router-link>
        -->
          <a href="#" class="nav-item is-brand">Puppies</a>
        </div>

        <div class="nav-right">
          <a href="#" class="nav-item">All Puppies</a>
          <a href="#" class="nav-item">Add Puppy</a>
        </div>
      </div>

      <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'Application',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
