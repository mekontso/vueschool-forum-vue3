<template>
  <div class="post-list">

    <div v-for='post in posts' :key='post.id' class="post" >

      <div class="user-info">
        <a href="profile.html#profile-details" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="profile.html#profile-details">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="User Avatar">
        </a>

        <p class="desktop-only text-small">{{ userById(post.userId).postsCount }} posts</p>
        <p class="desktop-only text-small">{{ userById(post.userId).threadsCount }} threads</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
        <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
      </div>
      <div class="post-date text-faded" >
        <app-date :timestamp='post.publishedAt'/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    userById (userId) {
      return this.$store.getters.user(userId)
    }
  }

}

</script>

<style scoped>

</style>
