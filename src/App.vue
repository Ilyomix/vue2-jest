<template>
  <div id="app">
    <message-toggle />
    <list :items="['list item 1', 'list item 2']" />
  </div>
</template>

<script>
import MessageToggle from '@/components/messageToggle/index.vue'
import List from '@/components/list/index.vue'

export default {
  components: {
    MessageToggle,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
