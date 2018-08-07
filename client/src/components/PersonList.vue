<template>
  <div class="page">
    <div class="ui characters-list cards">
      <!-- <link-item
        v-for="link in surfers"
        :key="link.id"
        :link="link">
      </link-item> -->
      <person-item
        v-for="link in surfers"
        :key="link.id"
        :link="link" class="ui card fadeIn-animation">
      </person-item>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PersonItem from '@/components/PersonItem'
//import LinkItem from '@/components/LinkItem'

// GraphQL query
const GET_PERSONS_QUERY = gql`
query GetPersonsQuery {
  surfers {
    id
    username
    firstName
    lastName
    image
  }
}
`;

// Component def
export default {
  name:'PersonList',
  data () {
    return {
      surfers:[],
      loading: 0
    }
  },
  components: {
    PersonItem
    //LinkItem

  },
  apollo: {
    surfers: {
      query: GET_PERSONS_QUERY
    }
  }
}
</script>
<style>
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
  
}
.characters-list.cards .image {
    position: relative;
    width: 100%;
    border-radius: 4px;
}
.characters-list.cards .image img {
  max-width:100%;
  border-radius: 50%;
}
.ui.card, .ui.cards > .card {
  width: 364px;
  background-color: #21495F;
   box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);

}
.ui.cards>.card>.content{
  position: relative;
}
.ui.cards>.card>.content>.header{
    color:#e2e6e8;
    padding-top: 20px;
}
.ui.cards>.card>.content>.link{
  padding-top: 10px;
}
.ui.cards>.card>.content>.link a{
  font-weight: 700;
  text-transform: uppercase;
}
.ui.cards>.card>.content>.link a:hover{
  color:#e2e6e8;
  font-weight: 700;
}
</style>