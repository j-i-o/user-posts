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
  components: {
    Users
  }
}
</script>
