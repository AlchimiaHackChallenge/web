<template>
  <v-app-bar app
             color="bar">
    <v-toolbar-title
      class="headline text-uppercase">
      <span class="primary--text">Italika</span>
    </v-toolbar-title>
    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>
  </v-app-bar>
</template>

<script>
export default {
};
</script>
