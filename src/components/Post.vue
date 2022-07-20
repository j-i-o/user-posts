<template>
  <v-container>
    <v-card width="400px">
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>{{ post.body }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
</style>