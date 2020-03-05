<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>

        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'
import {fruitMixin} from './fruitMixin.js'

export default {
  components: {
    appList: List,
  },
  mixins: [fruitMixin],
  data() {
    return {
      text: 'Hello there',
      
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  
}
</script>

<style>

</style>
