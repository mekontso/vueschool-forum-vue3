<template>
  <h1>
    Welcome to the forums
  </h1>
  <thread-list :threads='threads'/>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from './ThreadList'

export default {
  name: 'PageHome',
  components: { ThreadList },
  data () {
    return {
      threads: sourceData.threads
    }
  }
}
</script>

<style scoped>

</style>
