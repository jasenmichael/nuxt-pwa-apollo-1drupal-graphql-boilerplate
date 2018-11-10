export default function(context){
    return {
        httpEndpoint: process.env.drp_graphql_URL,
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        includeNodeModules: true
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        // wsEndpoint: 'ws://localhost:4000', // optional
        // LocalStorage token
        // tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        // persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        // websocketsOnly: false // Optional
    }
  }