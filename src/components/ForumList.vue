<template>
  <div class="forum-list">

    <h2 class="list-title">
      <router-link v-if='category_id' :to="{name: 'Category', params: { id:category_id}}">{{ category_name }}</router-link>
      <a v-else href='#'>{{ category_name }}</a>
    </h2>

    <div class="forum-listing" v-for='forum in forums' :key='forum.id'>
      <div class="forum-details">
        <router-link class="text-xlarge" :to="{ name: 'Forum', params: {id: forum.id}}">{{ forum.name }}</router-link>
        <p>{{ forum.description }}</p>
      </div>

      <div class="threads-count">
        <p><span class="count">{{ forum.threads?.length || '0' }}</span> {{ forum.threads?.length  === 1 ? 'thread' : 'threads'  }}</p>
      </div>

      <div class="last-thread">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      required: true,
      type: Array
    },
    category_name: {
      default: 'Forum',
      type: String
    },
    category_id: {
      required: false,
      type: String
    }
  },
  methods: {
    forumThreadsCount (forum) {
      // Use optional chaining
      return forum.threads?.length || '0'
    }
  }
}
</script>

<style scoped>

</style>
