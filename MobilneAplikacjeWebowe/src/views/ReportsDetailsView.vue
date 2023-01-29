<script setup>
import RaportsDetails from '../components/ReportsDetails.vue';
import { inject } from 'vue';

const banner = inject("banner");
banner.title = "Details of Report";
</script>

<template>
    <RaportsDetails/>
</template>

<style>
    
</style>