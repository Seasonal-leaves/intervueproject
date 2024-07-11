import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import AuthorProfile from '../components/AuthorProfile.vue';
import PostDetails from '../components/PostDetails.vue';



const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/author/:authorName',
      name: 'AuthorProfile',
      component: AuthorProfile 
    },
    {
      path: '/post/:id',
      name: 'PostDetails',
      component: PostDetails
    }
    
  
  
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
