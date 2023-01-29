<script setup>
import RaportsChoose from '../components/ReportsChoose.vue';
import { inject } from 'vue';

const banner = inject("banner");
banner.title = "Reports";
</script>

<template>
  <div class="menu">
    <RaportsChoose />
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
