<template>
  <div class="page">
    <div class="ui character-card">
        <div v-for="surfer in surfers" :key="surfer.id">
          <div class="image"><img v-bind:src="surfer.image" v-bind:alt="surfer.username" /></div>
          <div class="title">{{surfer.username}}</div>
          <div class="content"><p>{{surfer.firstName}} {{surfer.lastName}}</p><p><a :href="`mailto:${surfer.email}`">{{surfer.email}}</a></p><p>{{surfer.job}}</p></div>
        </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
//import Faker from 'faker';

// GraphQL query
const GET_PERSON_PROFILE_QUERY = gql`
query GetPersonProfileQuery($id: Int!) {
  surfers(id:$id) {
    id
    username
    firstName
    lastName
    email
    job
    image
  }
}
`;

// 
export default {
  name:'PersonPage',
  //props: ['id'],
  data(){
    return{
      title:'PersonPage',
      surfers:'',
      routeParam: this.$route.params.id,
      //test: Faker.image.avatar()
    }
  },
  apollo: {
    surfers: {
      query: GET_PERSON_PROFILE_QUERY,
      /*prefetch: ({ route }) => {
        return {
          id: route.params.id
        }
      },*/
      //loadingKey: 'loading',
      variables() {
        return {
            id: this.routeParam
        }
      }
      /*variables: {
       //id:2
       //return { id: this.$route.params.id }
      }*/
    }
  },
}
</script>
<style scoped>
.character-card{margin-top:25px;}
.title{color:#e2e6e8;font-weight: 700;font-size: 16px;padding:15px;}
.image {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.image img {
  border-radius: 50%;

}
.content{
  color:#e2e6e8;
}
</style>