<template>
  <p>
    <label class="search-form__label">Price: </label>
    <input
      type="range"
      min="0"
      max="6000000"
      step="500000"
      :value="price"
      @change="updatePrice"
    >
    <span>{{price}}</span>
  </p>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'FilterByPrice',
  computed: {
    ...mapState(['price']),
  },
  methods: {
    ...mapActions(['updatePrice']),
  },
};
</script>

<style scoped lang="scss">

</style>
