import { mount } from '@vue/test-utils'
import WiditradeLogo from '@/components/WiditradeLogo.vue'

describe('WiditradeLogo', () => {
  const wrapper = mount(WiditradeLogo)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('contains an svg element', () => {
    const svg = wrapper.find('svg')
    expect(svg.exists).toBeTruthy()
  })
})
