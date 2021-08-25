<template>
  <div>
<!--    <app-header v-on:renew="renewString" v-bind:propsdata="str"></app-header>-->
    <login-form></login-form>
  </div>
</template>

<script>
// import AppHeader from "@/components/AppHeader";
import LoginForm from "@/components/LoginForm";

export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'login-form': LoginForm
  },
  methods: {
    renewString() {
      this.str += '!';
    }
  }
}
</script>

<style>

</style>