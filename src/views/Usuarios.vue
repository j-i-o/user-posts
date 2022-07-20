<template>
  <div data-app class="usuarios">
    <ModalCrearUsuario />
    <v-row no-gutters>
      <v-col cols="12" sm="4" md="8">
        <Usuario v-for="(user, index) in usuarios" :datos="user" :key="index" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Usuario from "@/components/Usuario";
import ModalCrearUsuario from "@/components/ModalCrearUsuario";
export default {
  name: "Home",
  data() {
    return {
      createUser: false,
      usuarios: null,
    };
  },
  components: {
    Usuario,
    ModalCrearUsuario,
  },

  async created() {
    const response = await this.$http.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.usuarios = response.data;
  },
};
</script>
