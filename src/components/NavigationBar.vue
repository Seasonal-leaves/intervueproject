<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
        <router-link to="/" class="navbar-brand">
          <img src="../assets/logo.png"  width="30" height="30">
          SimpleApp
        </router-link>
  
  
        <form class="form-inline ml-auto">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search author"
          aria-label="Search"
          v-model="searchQuery"
          @keyup.enter="searchAuthor"
        >
        <button class="btn btn-outline-light my-2 my-sm-0" type="button" @click="searchAuthor">Search</button>
      </form>
  
       
  
        
      
    </nav>
  
  </template>
  <script>
  export default {
    name: 'NavigationBar',
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      searchAuthor() {
        // Redirect to author profile page based on searchQuery
        const authorName = this.searchQuery.trim();
        if (authorName) {
          // Assuming you have a route named '/author/:authorName' to display author profile
          this.$router.push(`/author/${encodeURIComponent(authorName)}`);
          // Clear search input after navigation
          this.searchQuery = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>