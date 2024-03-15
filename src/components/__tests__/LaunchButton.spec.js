import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LaunchButton from '../LaunchButton.vue'

describe('LaunchButton', () => {
  it('renders properly', () => {
    const wrapper = mount(LaunchButton)
    expect(wrapper.text()).toContain('Où suis-je ?')
  })
})
