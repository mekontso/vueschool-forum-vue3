<template>
  <form @submit.prevent='save'>
    <div class='form-group'>
      <textarea v-model='text'  name='' id='' cols='30' rows='10' class='form-input'></textarea>
    </div>
    <div class='form-actions'>
      <button class='btn-blue' type='submit'>Submit post</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostEditor',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text
      }
      // We use custom events to communicate with parent components
      this.$emit('save-post', { post }) // access under eventData.post
      // this.posts.push(post)
      // this.thread.posts.push(postId)
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>
