<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <h2>Author: {{ author.name }}</h2>
      <h3>Comments:</h3>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <p><strong>{{ comment.name }}</strong></p>
          <p>{{ comment.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'PostDetails',
    data() {
      return {
        post: {},
        author: {},
        comments: []
      }
    },
    async created() {
      const postId = this.$route.params.id
      await this.fetchPostDetails(postId)
      await this.fetchComments(postId)
    },
    methods: {
      async fetchPostDetails(postId) {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          this.post = response.data
          const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.post.userId}`)
          this.author = userResponse.data
        } catch (error) {
          console.error('Error fetching post details:', error)
        }
      },
      async fetchComments(postId) {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          this.comments = response.data
        } catch (error) {
          console.error('Error fetching comments:', error)
        }
      }
    }
  }
  </script>
  