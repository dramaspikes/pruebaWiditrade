import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('LoginCard', () => {
  const wrapper = mount(Index)

  test('contains log-in card', () => {
    expect(wrapper.findComponent('.login-card')).toBeTruthy()
  })
})
