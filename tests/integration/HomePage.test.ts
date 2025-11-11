import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage.vue'

describe('HomePage', () => {
  it('displays proper message', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.html()).toContain('Hello World')
    // expect(wrapper.html()).toMatchSnapshot();
  })
})
