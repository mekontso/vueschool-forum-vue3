<template>
  <span :title='humanFriendlyDate(timestamp)'>
    {{ diffForHuman(timestamp) }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default {
  name: 'AppDate',
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  methods: {
    userById (userId) {
      return this.users.find(u => u.id === userId)
    },
    diffForHuman (timestamp) {
      return dayjs.unix(timestamp).fromNow()
    },
    humanFriendlyDate (timestamp) {
      return dayjs.unix(timestamp).format('llll')
    }
  }
}
</script>

<style scoped>

</style>
