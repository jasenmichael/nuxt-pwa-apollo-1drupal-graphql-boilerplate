//this currently isnt compatable with nuxt-link and breaks when the route is switched

import pageQuery from "~/queries/pageQuery.gql";
import ApolloClient from "apollo-boost"

export default function({route, store}) {
    let variables
    if (route.path === "/") {
      variables = {path: route.path + "home"}
    }else {
      variables = {path: route.path}
    }
  let payload
  const client = new ApolloClient({
    uri: process.env.drp_graphql_URL
  })
  console.log(process.server);

  return client.query({query:pageQuery, variables:variables})
  .then(({data}) => {
    if (data.route) {
      payload = data.route.nodeContext
      store.dispatch('update', payload)
    }
  })
}
