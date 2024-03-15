import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Panel from '../dashboard_parts/Panel.vue'

describe('Panel', () => {
  it('renders properly', () => {
    const testProps = {
        postcode: '93300',
        insee_code: '65871',
        population: 234
    }

    const wrapper = mount(Panel, { props: testProps })

    expect(wrapper.text()).toContain('93300')
    expect(wrapper.text()).toContain('65871')
    expect(wrapper.text()).toContain('234')
  })
})
