<template>
  <form @submit.prevent='save'>
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input v-model='forum.title' type="text" id="thread_title" class="form-input" name="title">
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea v-model='forum.text' id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
    </div>

    <div class="btn-group">
      <button @click="$emit('cancel')" class="btn btn-ghost">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Publish">
      {{existing ? 'Update' : 'Publish'}}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ThreadEditor',
  props: {
    title: {
      default: '',
      type: String
    },
    text: {
      default: '',
      type: String
    }

  },
  data () {
    return {
      forum: {
        title: this.title,
        text: this.text
      }
    }
  },
  computed: {
    existing () {
      // convert variable into boolean
      return !!this.title
    }
  },
  methods: {
    save () {
      // spread the forum
      this.$emit('save', { ...this.forum })
      // console.log(this.forum)
    }
  }
}
</script>

<style scoped>

</style>
