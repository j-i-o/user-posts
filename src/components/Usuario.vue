<template>
  <v-container>
    <v-card width="400" elevation="2">
      <v-card-title>
        {{ datos.name }}
        <v-spacer></v-spacer>
        <v-img max-width="40" :src="generateAvatar()"></v-img>
      </v-card-title>
      <v-card-subtitle>@{{ datos.username.toLowerCase() }}</v-card-subtitle>
      <v-card-text>
        texto blabla blablablbab blbalabba lb alb a al babbbal asbasf
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <router-link
          :to="{ name: 'Posts', params: { user: datos, id: datos.id } }"
        >
          <v-icon class="mr-1"> mdi-comment-text </v-icon>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import generateAvatar from "@/util/avatar";
export default {
  props: {
    datos: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      skin: ["Pale", "Light", "Black"],
      glasses: ["Blank", "Prescription02"],
      hairColor: ["Auburn", "BlondeGolden", "BrownDark"],
      hairStyle: [
        "LongHairBigHair",
        "LongHairNotTooLong",
        "ShortHairDreads01",
        "ShortHairTheCaesarSidePart",
      ],
      clothesColor: ["Blue03", "PastelOrange", "Red", "Gray02"],
    };
  },
  methods: {
    generateAvatar,
  },
};
</script>

<style>
</style>