<template>
  <div class="search-result">
    <table class="search-result__list">
      <caption class="search-result__caption">
        Total results: <span>{{ result && result.length || 'No results'}}</span>
      </caption>
        <tr class="search-result__list-header">
          <th>ID</th>
          <th>Rooms</th>
          <th>Floor</th>
          <th>Price</th>
          <th>Year</th>
        </tr>
        <tr
          class="search-result__item"
          v-for="item in slicedResult"
          :key="item.id"
        >
          <td>{{item.id}}</td>
          <td>{{item.rooms}}</td>
          <td>{{item.floor}} of {{item.house.floors}}</td>
          <td>{{item.price}}</td>
          <td>{{item.house.completion}}</td>
        </tr>
    </table>
    <button @click="prevPage" :disabled="pageNumber === 0">
      Prev
    </button>
    <button @click="nextPage" :disabled="pageNumber === pageCount - 1">
      Next
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchResult',
  data() {
    return {
      pageNumber: 0,
      pageSize: 5,
    };
  },
  computed: {
    ...mapState(['result']),
    pageCount() {
      return Math.ceil(this.result.length / this.pageSize);
    },
    slicedResult() {
      const start = this.pageNumber * this.pageSize;
      const end = start + this.pageSize;
      return this.result.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      this.pageNumber += 1;
    },
    prevPage() {
      this.pageNumber -= 1;
    },
  },
};
</script>

<style scoped lang="scss">
.search-result {
  max-width: 960px;
  margin: 0 auto;

  &__caption {
    padding: 1em 0;
    font-weight: 900;

    span {
      color: lightcoral;
    }
  }

  &__list {
    width: 100%;
    height: 24em;
    border: 1px solid lightgreen;
  }

  &__list-header {
    height: 4em;
  }

  &__item {
    height: 4em;

    &:nth-child(even) {
      background: #fafafa;
    }
  }
}
</style>
