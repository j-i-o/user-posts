<template>
  <v-container data-app>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://www.clipartmax.com/png/full/434-4349876_profile-icon-vector-png.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Usuarios</h1>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
     dialog: false,
     ecosystem: [
       {
         text: "vuetify-loader",
         href: "https://github.com/vuetifyjs/vuetify-loader",
       },
       {
         text: "github",
         href: "https://github.com/vuetifyjs/vuetify",
       },
       {
         text: "awesome-vuetify",
         href: "https://github.com/vuetifyjs/awesome-vuetify",
       },
     ],
     importantLinks: [
       {
         text: "Documentation",
         href: "https://vuetifyjs.com",
       },
       {
         text: "Chat",
         href: "https://community.vuetifyjs.com",
       },
       {
         text: "Made with Vuetify",
         href: "https://madewithvuejs.com/vuetify",
       },
       {
         text: "Twitter",
         href: "https://twitter.com/vuetifyjs",
       },
       {
         text: "Articles",
         href: "https://medium.com/vuetify",
       },
     ],
     whatsNext: [
       {
         text: "Explore components",
         href: "https://vuetifyjs.com/components/api-explorer",
       },
       {
         text: "Select a layout",
         href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
       },
       {
         text: "Frequently Asked Questions",
         href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
       },
     ],
   }
  }
};
</script>
