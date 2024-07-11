<template>
  <div id="app">
     <NavigationBar/>
     <router-view></router-view>
     <Fooder/>
   </div>
   
 </template>
 
 <script>
 import NavigationBar from './components/NavigationBar.vue';
 import Footer from './components/Footer.vue';
 
 export default {
   name: 'App',
   components: {
     NavigationBar,
     Footer
   }
 }
 </script>
 
 <style>
 
 </style>