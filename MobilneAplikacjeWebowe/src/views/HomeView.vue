<script setup>
import LoginPage from '../components/LoginPage.vue';
import { inject } from 'vue'

const banner = inject("banner");
banner.title = "Log In";
</script>

<template>
    <LoginPage />
</template>
