<template>
  <div>
    <h1>{{propsdata}}</h1>
    <button v-on:click="sendEvent">Send</button>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['propsdata'],
  methods: {
    sendEvent() {
      this.$emit('renew');
    }
  }
}
</script>

<style scoped>

</style>