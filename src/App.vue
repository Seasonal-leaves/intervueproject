<template>
  <div id="app">
     <NavigationBar/>
     <router-view></router-view>
     <Fooder/>
   </div>
   
 </template>
 
 <script>
 import NavigationBar from './components/NavigationBar.vue';
 import Fooder from './components/Fooder.vue';
 
 export default {
   name: 'App',
   components: {
     NavigationBar,
     Fooder
   }
 }
 </script>
 
 <style>
 
 </style>