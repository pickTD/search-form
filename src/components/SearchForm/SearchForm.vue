<template>
  <div class="search-form">
    <div class="search-form__wrap">
      <FilterByRooms/>
      <FilterByPrice/>
      <FilterByFloor/>
      <FilterByYear/>
    </div>
  </div>
</template>

<script>
import FilterByRooms from './FilterByRooms.vue';
import FilterByYear from './FilterByYear.vue';
import FilterByPrice from './FilterByPrice.vue';
import FilterByFloor from './FilterByFloor.vue';

export default {
  name: 'SearchForm',
  components: {
    FilterByRooms,
    FilterByYear,
    FilterByPrice,
    FilterByFloor,
  },
};
</script>

<style scoped lang="scss">
.search-form {

  &__wrap {
    max-width: 960px;
    padding: 1em 0;
    margin: 0 auto;
    border: 1px solid lightgreen;
  }
}
</style>
