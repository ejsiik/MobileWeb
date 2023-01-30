<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { inject, computed } from 'vue'

const bannerData = inject('banner');
const route = useRoute();
const router = useRouter();
const hidden = computed(() => ["/menu", "/"].includes(route.path));


</script>

<template>
      <meta charset="UTF-8">
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <div class="banner"><button :class="{ return: true, hidden }" @click="router.back()"> &lt; </button>{{ bannerData.title }}</div>
      <main class="app-container">
            <RouterView />
      </main>
</template>

<style>
.return {
      cursor: pointer;
      margin: 0;
      border: none;
      position: absolute;
      left: 15px;
      background-color: #344887;
      font-size: 22px;
      color: #f8f8f8;
}

.hidden {
      visibility: hidden;
}

.banner {
      width: 100vw;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #344887;
      font-size: 30px;
      color: #f8f8f8;
}
</style>
