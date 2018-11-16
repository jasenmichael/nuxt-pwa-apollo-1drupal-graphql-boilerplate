<template>
  <div>
    <Banner/>
    <section class="container">
      <h1 class="is-size-1" v-html="$store.state.title"/>
      <div class="container" v-html="$store.state.info" />
    </section>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue"
// import pageQuery from "~/queries/pageQuery.gql";
// import ApolloClient from "apollo-boost"

export default {
  components: {
    Banner
  },
  data() {
    return {}
  },
  // middleware: 'pageReq',

  // // get page data in child page using asyncData
  // async asyncData ({route, store, app}) {
  //   let variables
  //   if (route.path === "/") {
  //     variables = {path: route.path + "home"}
  //   }else {
  //     variables = {path: route.path}
  //   }
  //   let payload
  //   let client
  //   if (this === undefined) {
  //     console.log("new");
  //     client = new ApolloClient({
  //       uri: process.env.drp_graphql_URL
  //     })
  //   }else {
  //     console.log("old");
  //     client = app.apolloProvider.defaultClient
  //   }
  //   await client.query({query:pageQuery, variables:variables})
  //   .then(({data}) => {
  //     if (data.route) {
  //       payload = data.route.nodeContext
  //       store.dispatch('update', payload)
  //     }
  //   })
  // }
}
</script>

<style>

</style>
