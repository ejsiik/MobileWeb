<script setup>
import RaportsDetails from '../components/ReportsDetails.vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const item = inject("details").details;
if (item == null || item == undefined){
    router.push("/menu");
}
const banner = inject("banner");
banner.title = "Details of Report";
</script>

<template>
    <RaportsDetails v-if="item" :item="item" />
</template>

<style>
    
</style>