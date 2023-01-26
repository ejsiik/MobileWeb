<script setup>
import TheWelcome from '../components/TheWelcome.vue';
</script>

<template>
  <div class="menu">
    <TheWelcome />
  </div>
</template>

<style>
.menu {
  min-height: 100%;
  min-width: 100%;
  display: flex;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

</style>
