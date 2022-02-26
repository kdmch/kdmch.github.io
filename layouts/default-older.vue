<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-btn icon>
        <v-icon>mdi-heart-circle</v-icon>
      </v-btn>

      <v-toolbar-title>mitorie</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} mitori kd</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>