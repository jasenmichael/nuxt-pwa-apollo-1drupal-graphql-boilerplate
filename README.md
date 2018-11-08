# nuxt-pwa-starter

> name says it all

## Build Setup

``` bash
$ npm i
$ cp example.env .env

open .env
change the backend api url
API1_URL="http://yourDrupalSite.com/graphql"

$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

## todo
- [x] display main menu v-for
- [x] componentize queries
- [x] bind query results to state and local.storage
- [ ] skip content query if exist in local.storage
- [ ] if in local.storage, query last updated and compare to local.storage last update, then query content if has been updated