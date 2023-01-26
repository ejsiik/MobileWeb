<script setup>
const props = defineProps(['data'])
</script>


<template>
  <ul id="list_running_tasks">
      <li v-if="data" v-for="item in Object.keys(data)">
          {{ item }}
      </li>
      <li v-else>
        No tasks currently in progress
      </li>
  </ul>
</template>

<style>
ul#list_running_tasks {
list-style: none;
padding: 0;
}

ul#list_running_tasks li {
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