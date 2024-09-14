<template>
  <div class="app">
    <header>
      <main-nav></main-nav>
    </header>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <footer>
      <main-nav></main-nav>
    </footer>
  </div>
</template>
<script setup>
import MainNav from '@/components/MainNav.vue';

</script>
<style>

</style>