<template>
  <div>
    <div
      ref="cardBox"
      class="card-style"
    >
      <div
        ref="cardRank"
        class="card-rank"
        :class="cardColor"
      >
        {{ uppercaseRank }}
      </div>
    </div>
  </div>
</template>

<script>
const suitsVariant = ['club', 'diamond', 'heart', 'spade'];
const ranksVariant = [
  'a',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'j',
  'q',
  'k',
];

export default {
  name: 'BaseCard',

  props: {
    card: {
      type: Object,
      required: true,
      validator(val) {
        const suitIsValid = suitsVariant.some((variant) => variant === val.suit);
        const rankIsValid = ranksVariant.some((variant) => variant === val.rank);

        return suitIsValid && rankIsValid;
      },
    },
  },

  computed: {
    cardColor() {
      const redCards = ['diamond', 'heart'];
      const isCardRed = redCards.some((card) => card === this.card.suit);

      return isCardRed ? 'color--red' : 'color--black';
    },

    uppercaseRank() {
      return String(this.card.rank).toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
$border: #525252;

.card-style {
  position: relative;
  width: 100%;
  border: 1px solid $border;
  border-radius: 5px;
  padding-bottom: calc(89 / 64 * 100%);
  background-color: #e9e9e9;
}

.card-rank {
  position: absolute;
  width: 100%;
  text-align: center;

  &.color--black {
    color: black;
  }

  &.color--red {
    color: red;
  }
}
</style>
