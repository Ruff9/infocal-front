import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LocationError from '../LocationError.vue'

describe('LocationError', () => {
  it('renders properly', () => {
    const wrapper = mount(LocationError, { props: {content: 'Ça ne marche pas...'} })
    expect(wrapper.text()).toContain('Ça ne marche pas...')
  })
})
