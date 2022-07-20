<template>
  <div id="app">
    <v-app>
      <v-app-bar dense elevation="4">
        <v-app-bar-nav-icon>
          <router-link to="/">
            <v-img
              max-height="35"
              max-width="35"
              src="https://www.clipartmax.com/png/full/434-4349876_profile-icon-vector-png.png"
            >
            </v-img>
          </router-link>
        </v-app-bar-nav-icon>
        <v-app-bar-title> Usuarios </v-app-bar-title>
      </v-app-bar>
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
