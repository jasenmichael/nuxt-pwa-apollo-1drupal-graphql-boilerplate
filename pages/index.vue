<template>
  <div>
    <NavBar class="navbar"/>
    <nuxt-child :key="$route.params.id"/>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue"

export default {
  layout: 'index',
  components: {
    NavBar
  },
  middleware: 'menuReq',
  data() {
    return {}
  },
}
</script>

<style>

</style>
