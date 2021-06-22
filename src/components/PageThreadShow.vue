<template>
  <div class="col-large push-top">

    <h1>{{thread.title}}</h1>

    <div class="post-list">

      <div v-for='postId in thread.posts' :key='postId' class="post" >

        <div class="user-info">
          <a href="profile.html#profile-details" class="user-name">{{ userById(postById(postId).userId).name }}</a>

          <a href="profile.html#profile-details">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="User Avatar">
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
          <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
        </div>
        <div class="post-date text-faded">
          6 hours ago
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageHome',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
