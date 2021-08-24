<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  data: function() {
    return {
      str: 'hi'
    }
  },
  components: {
    'app-header': AppHeader
  }
}
</script>

<style>

</style>