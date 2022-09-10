// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from "/src/components/CountriesList.vue";
import CountryDetails from "/src/components/CountryDetails.vue";
import EmptyDetails from "/src/components/EmptyDetails.vue";
import NotFound from "/src/components/NotFound.vue";


const routes = [
 
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

  {
    path: '/',
    component: ""
    
  },

  {
    path: '/list',
    component: CountriesList
  },
  {
    path: '/details/',
    component: CountryDetails
  },
{
  path: '/details/:id',
  component: CountryDetails
},

{
  path: '/empty',
  component: EmptyDetails
},


];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;