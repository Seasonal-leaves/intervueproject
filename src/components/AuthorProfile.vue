<template>
  <div>
    <h1>Author Profile</h1>
    <p><strong>Name:</strong> {{ authorDetails.name }}</p>
    <p><strong>Username:</strong> {{ authorDetails.username }}</p>
    <p><strong>Email:</strong> {{ authorDetails.email }}</p>
    <p><strong>Phone:</strong> {{ authorDetails.phone }}</p>
    <p><strong>Website:</strong> {{ authorDetails.website }}</p>
    <p><strong>Address:</strong> {{ authorDetails.address ? `${authorDetails.address.street}, ${authorDetails.address.city}, ${authorDetails.address.zipcode}` : 'N/A' }}</p>
    <p><strong>Company:</strong> {{ authorDetails.company ? `${authorDetails.company.name} - ${authorDetails.company.catchPhrase}` : 'N/A' }}</p>

    <h2>Posts by {{ authorDetails.name }}</h2>
    <ul v-if="authorPosts.length > 0">
      <li v-for="post in authorPosts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
    <p v-else>No posts found.</p>
  </div>
</template>

<script>
export default {
  name: 'AuthorProfile',
  data() {
    return {
      authorDetails: {},
      authorPosts: []
    };
  },
  created() {
    const authorName = this.$route.params.authorName;
    
    this.$store.dispatch('fetchAuthorProfile', authorName)
      .then(({ userDetails, userPosts }) => {
        this.authorDetails = userDetails;
        this.authorPosts = userPosts;
      })
      .catch(error => {
        console.error('Error fetching author profile:', error);
        
      });
  }
};
</script>

