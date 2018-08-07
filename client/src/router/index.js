import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PersonList from '@/components/PersonList'
import PersonPage from '@/components/PersonPage'
import AddPerson from '@/components/AddPerson'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonList',//'HelloWorld',
      component: PersonList
    },
    {
      path: '/person/:id',
      name: 'PersonPage',
      component: PersonPage,
      //props: true
    },
    {
      path: '/person/new',
      name: 'AddPerson',
      component: AddPerson
    }
  ],
   mode: 'history' // Here you set mode to ‘history’ to remove the hash from the URLs
})
