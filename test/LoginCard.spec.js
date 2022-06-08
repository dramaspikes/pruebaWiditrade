import { mount } from '@vue/test-utils'
import LoginCard from '@/components/LoginCard.vue'

describe('LoginCard', () => {
  const wrapper = mount(LoginCard)

  test('has a logo', () => {
    expect(wrapper.findComponent('.logo')).toBeTruthy()
  })

  test('has a login form', () => {
    expect(wrapper.findComponent('.form')).toBeTruthy()
  })
})
