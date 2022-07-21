<template>
  <div data-app class="usuarios mt-4 d-flex flex-column align-center">
    <ModalCrearUsuario @newUser="agregarUsuario($event)"/>
    <Usuario v-for="(user, index) in usuarios" :datos="user" :key="index" />
  </div>
</template>

<script>
import Usuario from "@/components/Usuario";
import ModalCrearUsuario from "@/components/ModalCrearUsuario";
import apiService from "@/services/apiService";
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
    const response = await apiService.getUsers();
    this.usuarios = response.data;
  },
  methods: {
    agregarUsuario(user) {
      this.usuarios.push(user)
      console.log("agregao")
    }
  }
};
</script>
