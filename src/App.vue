<template>
  <div id="app">
    <SearchForm/>
    <SearchResult/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import SearchForm from './components/SearchForm/SearchForm.vue';
import SearchResult from './components/SearchResult.vue';

import data from './helpers/data';

export default {
  name: 'app',
  components: {
    SearchForm,
    SearchResult,
  },
  methods: {
    ...mapMutations(['setData']),
  },
  mounted() {
    this.setData(data);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
