<template>
  <div class="col-full push-top">

    <h1>Editing <i>{{ thread.title }}</i></h1>

    <thread-editor :title='thread.title' :text='text' @save='save' @cancel='cancel'/>
  </div>
</template>

<script>
import ThreadEditor from '@/components/ThreadEditor'
export default {
  name: 'ThreadEdit',
  components: { ThreadEditor },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    thread () {
      return this.$store.state.threads.find(thread => thread.id === this.id)
    },
    text () {
      return this.$store.state.posts.find(
        post => post.id === this.thread.posts[0]
      ).text
    }
  },

  methods: {
    async save ({ title, text }) {
      // dispatch a vuex action
      const thread = await this.$store.dispatch('updateThread', {
        id: this.id,
        title,
        text
      })
      await this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
    },
    cancel () {
      this.$router.push({ name: 'ThreadShow', params: { id: this.id } })
    }
  }
}
</script>

<style scoped>

</style>
