<template>
  <p>
    <label class="search-form__label">Year: </label>
    <multiselect
      :multiple="true"
      :close-on-select="false"
      :searchable="false"
      placeholder="Pick some"
      :value="years.value"
      :options="years.options"
      @input="updateYears"
    ></multiselect>
  </p>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Multiselect from 'vue-multiselect';

export default {
  name: 'FilterByYear',
  components: {
    Multiselect,
  },
  computed: {
    ...mapState(['years']),
  },
  methods: {
    ...mapActions(['updateYears']),
  },
};
</script>

<style scoped lang="scss">

</style>
