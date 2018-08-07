<template>
  <div class="page">
    <div class="add-person">
        <h2 class="title">Add Person</h2>
        <form method="post" @submit.prevent="addSurferSubmit">
          <div class="field">
            <label class="label">Username</label>
            <p class="control">
                <input
                    class="input"
                    v-model="username"
                    placeholder="your username">
            </p>
          </div>
          <div class="field">
            <label class="label">first name</label>
            <p class="control">
                <input
                    class="input"
                    v-model="firstName"
                    placeholder="your first name">
            </p>
          </div>
          <div class="field">
            <label class="label">Last name</label>
            <p class="control">
                <input
                    class="input"
                    v-model="lastName"
                    placeholder="your last name">
            </p>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <p class="control">
                <input
                    class="input"
                    v-model="email"
                    placeholder="your e-mail address">
            </p>
          </div>
          <div class="field">
            <label class="label">Job</label>
            <p class="control">
                <input
                    class="input"
                    v-model="job"
                    placeholder="your job">
            </p>
          </div>
          <p class="control">
            <button class="button is-primary">go</button>
          </p>
        </form>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import Faker from 'faker';

// GraphQL query
const ADD_PERSON_MUTATION = gql`
mutation AddPersonMutation($username: String!,$firstName: String!, $lastName: String!, $email: String!, $job: String!, $image: String!) {
  addSurfer(username: $username,firstName: $firstName,lastName: $lastName, job: $job,email: $email, image: $image) {
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

const GET_ALL_PERSONS_QUERY = gql`
query GetPersonsQuery {
  surfers {
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
  name:'AddPerson',
  data(){
    return{
      username:'',
      firstName:'',
      lastName:'',
      email:'',
      job:'',
      image:''
    }
  },
  methods:{
    addSurferSubmit(){
      this.$apollo
        .mutate({
          mutation: ADD_PERSON_MUTATION,
          variables:{
            username:this.username,
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            job:this.job,
            image:Faker.image.avatar()
          },
          update: (store, { data: { addSurfer } }) => {

            // read data from cache for this query
            const data = store.readQuery({ query: GET_ALL_PERSONS_QUERY })

            // add new person from the mutation to existing posts
            data.surfers.push(addSurfer)

            // write data back to the cache
            store.writeQuery({ query: GET_ALL_PERSONS_QUERY, data })
        }
        })
        .then(response => {
                    // redirect wherever you want
                    this.$router.replace('/')
                })
    }
  },
}
</script>
<style scoped>
.title{color:#e2e6e8;font-weight: 700;font-size: 16px;padding:15px;text-transform: uppercase;}
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
.control input{
  border: 1px solid #d4cbc5;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px 5px 5px 10px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
}
.control .button{
  margin-top: 15px;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: #4183C4;
  border: 0px solid #d4cbc5;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  color:#fff;
}
</style>