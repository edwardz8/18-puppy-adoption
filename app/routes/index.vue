<template lang="html">
  <div class="">

        <div class="column is-two-thirds">
          <div class="main-info">
          <h1 class="puppy-header">Puppies for Adoption</h1>
          <div class="block">
    <router-link :to="{ name: 'new-route'}" class="button is-info">Adopt a Puppy</router-link>
    </div>
    </div>

        <table class="table table-one">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!puppy.adopted" v-for="puppy in puppies">
              <th>{{puppy.name}}</th>
              <th>{{puppy.age}}</th>
              <th>
                <router-link :to="{ name: 'detail', params: { id: puppy.id }}"
                class="panel-link">Read More
              </router-link>
            </th>
            </tr>
          </tbody>
        </table>






          <h1 class="puppy-header">Adopted Puppies</h1>
        <table class="table table-two">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Luna</th>
              <th>4</th>
              <th><a href="#" class="panel-link">Read More</a></th>
            </tr>
            <tr>
              <th>Luna</th>
              <th>4</th>
              <th><a href="#" class="panel-link">Read More</a></th>
            </tr>
            <tr>
              <th>Luna</th>
              <th>4</th>
              <th><a href="#" class="panel-link">Read More</a></th>
            </tr>
            <tr>
              <th>Luna</th>
              <th>4</th>
              <th><a href="#" class="panel-link">Read More</a></th>
            </tr>
          </tbody>
        </table>


      </div>

</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  created() {
    store.dispatch(findAll());
  },


  methods: {

  },
};
</script>
