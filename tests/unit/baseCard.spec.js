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
    });
  });
});
