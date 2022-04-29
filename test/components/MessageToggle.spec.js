import { shallowMount } from '@vue/test-utils'
import MessageToggle from '@/components/messageToggle/index.vue'
import Message from '@/components/messageToggle/components/Message.vue'

describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is hovered', () => {
    const wrapper = shallowMount(MessageToggle)
    const button = wrapper.find('#toggle-message')
    button.trigger('mouseover')
    const MessageComponent = wrapper.find(Message)
    expect(MessageComponent.props()).toEqual({ msg: 'message' })
    button.trigger('mouseover')
    expect(MessageComponent.props()).toEqual({ msg: 'toggled message' })
  })
})
