<template>
  <div class="posts">
    <v-img max-width="100" :src="generateAvatar()"></v-img>
    <h1>Posts de {{ user.name }}</h1>
    <template v-for="(post, index) in posts">
      <Post :key="index" :post="post" />
    </template>
  </div>
</template>
<script>
import Post from "@/components/Post";
import generateAvatar from "@/util/avatar";
export default {
  components: {
    Post,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      posts: null,
    };
  },
  async created() {
    const response = await this.$http.get(
      `https://jsonplaceholder.typicode.com/users/${this.user.id}/posts`
    );
    this.posts = response.data;
  },
  methods: {
    generateAvatar,
  },
};
</script>

