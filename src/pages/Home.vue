<template>
  <h1 class='push-top'>
    Welcome to the forums
  </h1>
  <div class='col-full'>
    <category-list :categories='categories'/>
  </div>

<!--  <thread-list :threads='threads'/>-->

</template>

<script>

import CategoryList from '@/components/CategoryList'

export default {
  name: 'Home',
  components: {
    CategoryList
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style scoped>

</style>
