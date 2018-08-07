// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// add
// OLD import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
// NEW
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


import VueApollo from 'vue-apollo';
//import Vuetify from "vuetify";

// Create the apollo client
// OLD
/*const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    //uri: 'http://localhost:8080/graphql',
    uri: 'http://localhost:4000/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
});*/
// NEW
const httpLink = new HttpLink({
  //uri: "https://pkpvqwm30.lp.gql.zone/graphql"
  uri:'http://localhost:3000/graphql'
  //uri: 'http://localhost:4000/graphiql',
  //uri: 'https://api.graph.cool/simple/v1/cj2ru08721dzf0160jd3fn7km'
});
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(), 
  connectToDevTools: true
});

// Install the vue plugin
Vue.use(VueApollo);
//Vue.use(Vuetify);

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /*apolloProvider,
  components: { App },
  template: '<App/>'*/
  provide: apolloProvider.provide(),
  render: h => h(App)
})
