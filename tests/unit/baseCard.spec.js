import { shallowMount } from '@vue/test-utils';
import BaseCard from '@/components/BaseCard.vue';

describe('BaseCard', () => {
  let wrapper;

  describe('getting the card props of:', () => {
    describe('Jack of Club', () => {
      beforeEach(() => {
        wrapper = shallowMount(BaseCard, {
          propsData: {
            card: {
              rank: 'j',
              suit: 'club',
            },
          },
        });
      });

      it('should show the J as an abbreviation of Jack', () => {
        expect(wrapper.findComponent({ ref: 'cardRank' }).text()).toBe('J');
      });

      it("should show the card rank color black like the club's color", () => {
        const cardRankColor = wrapper.findComponent({ ref: 'cardRank' }).element.classList;
        expect(cardRankColor.contains('color--black')).toBeTruthy();
      });

      it('should render club image', () => {
        const renderedImage = wrapper.findComponent({ ref: 'cardSuitLeft' }).attributes('src');
        expect(renderedImage).toMatch(require('@/assets/img/cardSymbol/club.png'));
      });
    });

    describe('AS of Diamond', () => {
      beforeEach(() => {
        wrapper = shallowMount(BaseCard, {
          propsData: {
            card: {
              rank: 'a',
              suit: 'diamond',
            },
          },
        });
      });

      it('should show the J as an abbreviation of Jack', () => {
        expect(wrapper.findComponent({ ref: 'cardRank' }).text()).toBe('A');
      });

      it("should show the card rank color red like the diamond's color", () => {
        const cardRankColor = wrapper.findComponent({ ref: 'cardRank' }).element.classList;
        expect(cardRankColor.contains('color--red')).toBeTruthy();
      });

      it('should render diamond image', () => {
        const renderedImage = wrapper.findComponent({ ref: 'cardSuitLeft' }).attributes('src');
        expect(renderedImage).toMatch(require('@/assets/img/cardSymbol/diamond.png'));
      });
    });
  });
});
