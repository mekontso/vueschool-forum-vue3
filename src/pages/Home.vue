<template>
  <h1>
    Welcome to the forums
  </h1>
  <div class='col-full'>
    <category-list :categories='categories'/>
  </div>

<!--  <thread-list :threads='threads'/>-->

</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList'

export default {
  name: 'Home',
  components: {
    CategoryList
  },
  data () {
    return {
      threads: sourceData.threads,
      forums: sourceData.forums,
      categories: sourceData.categories
    }
  }
}
</script>

<style scoped>

</style>
