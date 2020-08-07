<template>
  <div :id="dynamicId">
    <div class="card-style">A5</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
$border: #525252;

.card-style {
  width: 100%;
  border: 1px solid $border;
  border-radius: 5px;
  padding-bottom: calc(89 / 64 * 100%);
  background-color: #e9e9e9;
}
</style>
