<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { connection } from '../backend-connection/connection.js'
const props = defineProps(['data'])
const router = useRouter()

function handleClick(item) {
  console.log(item, category);
  router.push({ name: 'raportsDetails', params: {items: item} });
  }
</script>

<template>
  <ul id="list">
      <li v-if="data && data.length > 0" v-for="item in data" :key="item.id" v-on:click="handleClick(item)">
        {{ item.category }}: {{ item.name }}
      </li>
      <li v-else>
          Ładowanie...
      </li>
  </ul>
</template>

<style>
ul#list {
  list-style: none;
  padding: 0;
}

ul#list li {
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #F1F1F1;
  border-radius: 0.2rem;
  width: 70%;
  color: #2A3B6F;
}

button {
  margin: 15% 30%;
  background-color: #FFFFFF;
  border-radius: 0.2rem;
  text-align: center;
  display: block;
  color: #2A3B6F;
}
</style>