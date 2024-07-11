<template>
    <footer class="footer">
      &copy; {{ currentYear }} SimpleApp. All rights reserved.
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>