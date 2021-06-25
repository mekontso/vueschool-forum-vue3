<template>
  <forum-list
    v-for='category in categories'
    :key='category.id'
    :forums='getForumsForCategory(category.id)'
    :category_name='category.name'
    :category_id='category.id'
  />
</template>

<script>
import ForumList from './ForumList'

export default {
  name: 'CategoryList',
  components: { ForumList },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsForCategory (id) {
      return this.$store.state.forums.filter(forum => forum.categoryId === id)
    }
  }
}
</script>

<style scoped>

</style>
