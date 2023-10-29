import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import BaseLabel from '../components/BaseLabel.vue';

describe('BaseLabel', () => {
  it('Test slot', () => {
    const slot = 'Slot text';
    const wrapper = mount(BaseLabel, { slots: { default: slot } });
    expect(wrapper.text()).toBe(slot);
  });
});
