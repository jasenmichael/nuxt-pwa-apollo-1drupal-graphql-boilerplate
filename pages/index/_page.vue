<template>
  <div>
    <!-- <div v-if="(route === null || route == undefined)">
      <section class="content has-text-centered">
        <h1 class="is-size-4">Oops.. "{{ this.$nuxt.$route.params.page }}" not found...</h1>
        <h2 class="fourzerofour">404</h2>
      </section>
    </div> -->
    <div >
      <section class="content container">
        <h1 class="is-size-1" v-html="$store.state.title"/>
        <div class="container" v-html="$store.state.info" />
      </section>
    </div>
  </div>
</template>

<script>
// import pageQuery from "~/queries/pageQuery.gql";
// import ApolloClient from "apollo-boost"

export default {
  data() {
    return {
    };
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
  //   await client.mutate({query:pageQuery, variables:variables})
  //   .then(({data}) => {
  //     if (data.route) {
  //       payload = data.route.nodeContext
  //       store.dispatch('update', payload)
  //     }
  //   })
  // }
  // async asyncData ({route, store}) {
  //   let variables = {path: route.path}
  //   let payload
  //   const client = new ApolloClient({
  //     uri: process.env.drp_graphql_URL
  //   })
  //   await client.query({query:pageQuery, variables:variables})
  //   .then(({data}) => {
  //     if (data.route) {
  //       payload = data.route.nodeContext
  //     }
  //   })
  //   store.dispatch('update', payload)
  // }
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
