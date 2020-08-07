<template>
  <div id="app">
    <div class="columns is-gapless">
      <div class="column is-half">
        <left-section />
      </div>
      <div class="column is-half has-background-link full-height"></div>
    </div>
  </div>
</template>

<script>
import { v4 } from 'uuid';
// import Card from './components/Card.vue';
import LeftSection from './components/layouts/LeftSection.vue';

export default {
  name: 'App',
  components: {
    // Card,
    LeftSection,
  },
  methods: {
    getCardDynamicId(str) {
      return `${str}-${v4()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.full-height {
  min-height: 100vh;
  height: 100vh;
}
</style>
