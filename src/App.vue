<template>
  <div id="app">
    <v-app-bar dense elevation="4" color="red">
      <v-app-bar-nav-icon>
        <v-img
          max-height="35"
          max-width="35"
          src="https://www.clipartmax.com/png/full/434-4349876_profile-icon-vector-png.png"
        >
        </v-img>
      </v-app-bar-nav-icon>
      <v-app-bar-title> Usuarios </v-app-bar-title>
    </v-app-bar>
    <div id="nav">
      <router-link to="/">Usuarios</router-link> |
      <router-link to="/:id/posts">Posts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
