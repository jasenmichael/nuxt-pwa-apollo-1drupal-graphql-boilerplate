<template>
  <div v-if="(route === null || route == undefined)">
    <section class="content has-text-centered">
      <h1 class="is-size-4">Oops.. "{{ this.$nuxt.$route.params.page }}" not found...</h1>
      <h2 class="fourzerofour">404</h2>
    </section>
  </div>
  <div v-else>
    <section class="content container">
      <h1 class="is-size-1" v-html="route.nodeContext.title"/>
      <div class="container" v-html="route.nodeContext.body.value.replace('/sites/', 'http://api1.majaqu.com/sites/')" />
    </section>
  </div>
</template>

<script>
import pageQuery from "~/queries/pageQuery.gql";

export default {
  data() {
    return {
      name: this.$nuxt.$route.params.page,
      path: this.$nuxt.$route.path,
      type: this.$nuxt.$route.name
    };
  },
  apollo: {
    route: {
      prefetch: ({ route }) => ({ path: route.path }),
      query: pageQuery,
      variables() {
        return {
          path: this.$route.path
        }
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 40vw;
  float: left;
  margin: 0.4rem 0.4rem -0.6rem;
  padding: 3px 6px 1px 0;
}

.fourzerofour {
  font-size: 800%;
  margin: 0;
  padding: 0;
}

h2 {
  margin: 0;
}

.content {
  margin-top: 4rem;
}
</style>
