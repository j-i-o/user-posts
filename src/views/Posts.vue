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
import apiService from "@/services/apiService"

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
    const response = await apiService.getPostsByUser(this.user.id)
    this.posts = response.data;
  },
  methods: {
    generateAvatar,
  },
};
</script>

