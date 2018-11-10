<template>
    <section class="container">
      <h1 class="is-size-1" v-html="route.nodeContext.title"/>
      <div class="container" v-html="route.nodeContext.body.value" />
    </section>
</template>

<script>
import menuQuery from "~/queries/menuQuery.gql";
import pageQuery from "~/queries/pageQuery.gql";

export default {
  layout: 'index',
  data() {
    return {
      name: this.$nuxt.$route.params.page,
      path: this.$nuxt.$route.path,
      type: this.$nuxt.$route.name
    };
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
  mounted () {},
  methods: {},
  destroyed () {}
}
</script>

<style>
img {
  /* width: 40vw; */
  max-width: 400px;
  float: left;
  margin: 0.4rem 0.4rem -0.6rem;
  padding: 3px 6px 1px 0;
}
</style>
