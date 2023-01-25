<script setup>
const props = defineProps(['data'])

</script>

<template>
    <ul id="list">
        <li v-for="item in Object.keys(data)">
            {{ item }}
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