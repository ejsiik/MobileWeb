<script setup>
import { inject } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

const banner = inject("banner");
banner.title = "Main menu";

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
  margin: 0 auto;
  max-height: 100%;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

</style>
