<template>
  <v-dialog v-model="createUser" width="600" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black lighten-2" dark v-bind="attrs" v-on="on" width="300">
        Crear nuevo usuario
      </v-btn>
    </template>

    <v-card v-if="creado">
      <v-card-title> Usuario creado exitosamente! </v-card-title>
      <v-card-text>
        <v-container>
          <v-col cols="12" sm="6" md="12"> Id: {{ creado.id }} </v-col>
          <v-col cols="12" sm="6" md="12">
            Username: {{ creado.username }}
          </v-col>
          <v-col cols="12" sm="6" md="12"> Nombre: {{ creado.nombre }} </v-col>
          <v-col cols="12" sm="6" md="12">
            Apellido:
            {{ creado.apellido }}
          </v-col>
          <v-col cols="12" sm="6" md="12"> Email: {{ creado.email }} </v-col>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="gray" text @click="cerrar"> Cerrar </v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-else>
      <v-card-title class="text-h5 grey lighten-2">
        Nuevo Usuario
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row offset="5">
            <v-col cols="12" sm="6" md="12">
              <v-text-field
                v-model="username"
                label="Nombre de usuario"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="nombre"
                label="Nombre"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="apellido"
                label="Apellido"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="email"
                label="Email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="gray" text @click="limpiar"> Limpiar </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="gray" text @click="createUser = false"> Cancelar </v-btn>
        <v-btn color="green darken-2" text @click="guardar"> Crear </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import apiService from "@/services/apiService";
export default {
  data() {
    return {
      createUser: false,
      username: null,
      nombre: null,
      apellido: null,
      email: null,
      creado: null,
    };
  },
  methods: {
    limpiar() {
      this.username = null;
      this.nombre = null;
      this.apellido = null;
      this.email = null;
      this.creado = null;
    },
    async guardar() {
      const response = await apiService.createUser({
        username: this.username,
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
      });
      this.creado = response.data;
    },
    async cerrar() {
      this.limpiar();
      this.createUser = false;
    },
  },
};
</script>

<style>
.fl {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
</style>