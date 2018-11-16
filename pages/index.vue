<template>
  <div>
    <NavBar class="navbar"/>
    <nuxt-child/>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue"
// import pageQuery from "~/queries/pageQuery.gql";
// import ApolloClient from "apollo-boost"
// import axios from 'axios'

export default {
  layout: 'index',
  components: {
    NavBar
  },
  middleware: 'menuReq',
  data() {
    return {
      client: {}
    }
  },
  
  // // get page data using a watcher on route changed
  // watch: {
  //   async $route (to, from){
  //    console.log(to, from);
  //    const client = new ApolloClient({
  //            uri: process.env.drp_graphql_URL
  //          })
  //    let variables
  //    if (to.path === "/") {
  //      variables = {path: to.path + "home"}
  //    }else {
  //      variables = {path: to.path}
  //    }
  //   await this.$apollo.query({query:pageQuery, variables:variables})
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //   }
  // },

  // // get page data using asyncData
  // async asyncData ({route, store, app}) {
  //   let variables
  //   if (route.path === "/") {
  //     variables = {path: route.path + "home"}
  //   }else {
  //     variables = {path: route.path}
  //   }
  //   let payload
  //   let client
  //   console.log(this);
  //   if ( this === undefined) {
  //     console.log("new");
  //     client = new ApolloClient({
  //       uri: process.env.drp_graphql_URL
  //     })
  //   }else {
  //     console.log("old");
  //     client = app.apolloProvider.defaultClient
  //     console.log(client);
  //   }
  //   await client.query({query:pageQuery, variables:variables})
  //   .then(({data}) => {
  //     if (data.route) {
  //       payload = data.route.nodeContext
  //     }
  //   })
  //   store.dispatch('update', payload)
  // }
}
</script>

<style>

</style>
