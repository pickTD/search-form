<template>
  <p>
    <label for="floorsRange">Number of storeys: </label>
    <input
      type="number"
      id="floorsRange"
      min="1"
      max="119"
      :value="floors.floorsRange.min"
      @input="updateFloorsMin"
    >
    <span>-</span>
    <input
      type="number"
      min="2"
      max="120"
      :value="floors.floorsRange.max"
      @input="updateFloorsMax"
    >
    <label for="nfnl">Not first nor last: </label>
    <input
      type="checkbox"
      id="nfnl"
      :checked="floors.notFirstNorLast"
      @change="updateFloorsNfnl"
    >
  </p>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'FilterByFloor',
  computed: {
    ...mapState(['floors']),
  },
  methods: {
    ...mapActions([
      'updateFloorsMin',
      'updateFloorsMax',
      'updateFloorsNfnl',
    ]),
  },
};
</script>

<style scoped lang="scss">

</style>
