<script setup>

import {RouterView, RouterLink} from 'vue-router'

</script>

<template>
  <h1>VUE FORM </h1>
    <!-- <FormUser></FormUser> -->
    <button type="button" class="btn btn-primary">  <RouterLink class="text-light text-decoration-none m-2" :to="{name: 'FormUser'}">Manage Users </RouterLink> </button>
      
      
      <button type="button" class="btn btn-primary m-2"> <RouterLink class="text-light text-decoration-none m-2" :to="{name: 'FormList'}">go to Users List  </RouterLink>  </button>
    
    <nav>
    <!-- <RouterLink to="/myself/ricardo/25">go to myself  </RouterLink> -->
    
  </nav>
  <router-view></router-view>
    <footer>Ricardo Sousa T0121085</footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
