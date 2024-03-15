import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Dashboard from '../Dashboard.vue'

describe('Dashboard', () => {
  it('renders properly', () => {
    const testProps = {
        city: 'Bagnolet',
        postcode: '93300',
        insee_code: '65871',
        population: 234
    }
    const wrapper = mount(Dashboard, { props: {data: testProps} })

    expect(wrapper.text()).toContain('Bagnolet')
    expect(wrapper.text()).toContain('93300')
    expect(wrapper.text()).toContain('65871')
    expect(wrapper.text()).toContain('234 hbts')
  })
})