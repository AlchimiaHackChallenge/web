<template>
<div>
  <v-app-bar app
             color="bar">
    <v-toolbar-title
      class="headline text-uppercase">
      <span class="primary--text">Italika</span>
    </v-toolbar-title>
  </v-app-bar>
  <v-content>
    <v-container fluid fill-height>
      <router-view/>
    </v-container>
  </v-content>
</div>
</template>

<script>
export default {
}
</script>
