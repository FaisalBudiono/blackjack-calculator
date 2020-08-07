<template>
  <div class="container-fluid">
    <div class="column has-background-warning">
      <player-hand/>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column has-background-primary">
          <player-hand/>
        </div>
        <div class="column has-background-success">
          <player-hand/>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column has-background-primary">
          <player-hand/>
        </div>
        <div class="column has-background-success">
          <player-hand/>
        </div>
      </div>
    </div>
    <div class="column has-background-warning">
      <player-hand/>
    </div>
  </div>
</template>

<script>
import PlayerHand from '../PlayerHand.vue';

export default {
  name: 'LeftSection',
  components: {
    PlayerHand,
  },
};
</script>
