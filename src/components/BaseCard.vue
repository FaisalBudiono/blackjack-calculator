<template>
  <div>
    <div
      ref="cardBox"
      class="card-style"
    >
      <img
        ref="cardSuitLeft"
        class="card-suit suit-left"
        :src="cardSuitImage"
      >
      <div
        ref="cardRank"
        class="card-rank"
        :class="cardColor"
      >
        {{ uppercaseRank }}
      </div>
      <img
        ref="cardSuitRight"
        class="card-suit suit-right"
        :src="cardSuitImage"
      >
    </div>
  </div>
</template>

<script>
import iconClub from '@/assets/img/cardSymbol/club.png';
import iconDiamond from '@/assets/img/cardSymbol/diamond.png';
import iconHeart from '@/assets/img/cardSymbol/heart.png';
import iconSpade from '@/assets/img/cardSymbol/spade.png';

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

  data() {
    return {
      imageList: [
        {
          name: 'club',
          src: iconClub,
        },
        {
          name: 'diamond',
          src: iconDiamond,
        },
        {
          name: 'heart',
          src: iconHeart,
        },
        {
          name: 'spade',
          src: iconSpade,
        },
      ],
    };
  },

  computed: {
    cardColor() {
      const redCards = ['diamond', 'heart'];
      const isCardRed = redCards.some((card) => card === this.card.suit);

      return isCardRed ? 'color--red' : 'color--black';
    },

    cardSuitImage() {
      const pickedSuit = this.imageList
        .filter((imageData) => imageData.name === this.card.suit)
        .shift();

      return pickedSuit.src;
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

.card-suit {
  position: absolute;
  width: 25%;

  &.suit-left {
    left: 3%;
    top: 3%;
  }

  &.suit-right {
    right: 3%;
    bottom: 3%;
    transform: rotate(180deg);
  }
}
</style>
