<template>
  <section class="container">
    <h1 class="is-size-1" v-html="route.nodeContext.title"/>
    <div class="container" v-html="route.nodeContext.body.value" />
  </section>
</template>

<script>
import pageQuery from "~/queries/pageQuery.gql";

export default {
  data() {
    return {}
  },
  asyncData (context) {
    let client = context.app.apolloProvider.defaultClient
  },
  apollo: {
    route: {
      prefetch: true,
      query: pageQuery,
      variables() {
        return {
          path: '/home'
        }
      }
    }
  },
  created() {

  },
  mounted() {},
  methods: {
  }
}
</script>

<style>

</style>
