import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainTitle from '../dashboard_parts/MainTitle.vue'

describe('MainTitle', () => {
  it('renders properly', () => {
    const wrapper = mount(MainTitle, { props: {city: 'Montauban'} })
    expect(wrapper.text()).toContain('Montauban')
  })
})
