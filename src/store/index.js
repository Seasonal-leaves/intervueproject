import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
    state: {
      posts: [],
      users: []
    },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('SET_POSTS', response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    },
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async fetchAuthorProfile({ commit, state,dispatch  }, authorName) {
        try {
         
          if (state.users.length === 0) {
            await dispatch('fetchUsers');
          }
         
          const user = state.users.find(user => user.name === authorName);
          if (!user) {
            throw new Error(User with name ${authorName} not found.);
          }
          // Fetch user posts
          const response = await axios.get(https://jsonplaceholder.typicode.com/posts?userId=${user.id});
          const userPosts = response.data;
          commit('SET_POSTS', userPosts);
          return { userDetails: user, userPosts };
        } catch (error) {
          console.error('Error fetching author profile:', error);
          throw error;
        }
      }
    
  },
  getters: {
    getAuthorName: (state) => (userId) => {
      const user = state.users.find(user => user.id === userId)
      return user ? user.name : 'Unknown'
    }
  }
})
