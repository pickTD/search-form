<template>
  <p>
    <label class="search-form__label">Rooms: </label>
    <multiselect
      :multiple="true"
      :close-on-select="false"
      :searchable="false"
      placeholder="Pick some"
      :value="rooms.value"
      :options="rooms.options"
      @input="updateRooms"
    ></multiselect>
  </p>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Multiselect from 'vue-multiselect';

export default {
  name: 'FilterByRooms',
  components: {
    Multiselect,
  },
  computed: {
    ...mapState(['rooms']),
  },
  methods: {
    ...mapActions(['updateRooms']),
  },
};
</script>

<style lang="scss">
.multiselect {
  position: relative;
  display: inline-block;
  min-width: 150px;
  border: 1px solid lightgray;
  cursor: pointer;

  &__content {
    padding: 0;
    list-style: none;
  }

  &__content-wrapper {
    position: absolute;
    width: 100%;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border: 1px solid lightgrey;
    z-index: 1;
  }

  &__element {
    min-width: 50px;
    margin-bottom: 5px;
    padding: 5px;
    border: 1px solid lightgray;
  }

  &__option {
    display: inline-block;
    width: 100%;
  }
}
</style>
