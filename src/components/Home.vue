<template>
    <div>
      <h1>Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="/post/${post.id}">{{ post.title }}</router-link>
          <p>{{ post.body }}</p>
          <small>Author: {{ getAuthorName(post.userId) }}</small>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    methods: {
      getAuthorName(userId) {
        const user = this.$store.state.users.find(user => user.id === userId)
        return user ? user.name : 'Unknown'
      }
    },
    created() {
      this.$store.dispatch('fetchPosts')
      this.$store.dispatch('fetchUsers')
    }
  }
  </script>
  