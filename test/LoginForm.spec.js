import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
  const wrapper = mount(LoginForm)
  test('toggles password visibility with toggleVis', () => {
    const password = wrapper.findComponent({ ref: 'password' })
    expect(password.attributes('type')).toBe('password')
    wrapper.vm.toggleVis()
    expect(password.attributes('type')).toBe('text')
  })
})
