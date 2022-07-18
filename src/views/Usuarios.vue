<template>
  <div class="usuarios">
    <Users />
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users'

export default {
  name: 'Home',
  data() {
    return {
      usuarios: null
    }
  },
  components: {
    Users
  },

  created() {
    const response = this.$http.get('https://jsonplaceholder.typicode.com/users')
    console.log(response)
  }
}
</script>
