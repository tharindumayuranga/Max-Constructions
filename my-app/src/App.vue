<template>
  <v-app>
      <Navbar></Navbar>
      <v-content class="mx-4" color="primary">
          <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
      Navbar,
  },
  data: () => ({
    //
  }),
};
</script>


