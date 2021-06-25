<template>

    <div class="col-full push-top">
      <h1>{{ category.name }}</h1>
    </div>

    <div class="col-full">
      <forum-list :forums='forums' :category_name='category.name'/>
    </div>

</template>

<script>
import ForumList from '@/components/ForumList'
export default {
  name: 'Category',
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(category => category.id === this.id)
    },
    forums () {
      return this.$store.state.forums.filter(forum => forum.categoryId === this.id)
    }
  }
}
</script>

<style scoped>

</style>
