<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['data']);
const router = useRouter();
const detailsObj = inject("details");

console.log(props.data);

function handleClick(item) {
  router.push({ path: "/choose/details", components: item });
  detailsObj.details = item;
}

</script>

<template>
  <ul class="list">
    <li v-if="data" v-for="i in data.tasks" :key="i.id" v-on:click="handleClick(i)">
      Task: {{ i.name }} <br />
      Finished At: {{ new Date(i.endTime).toLocaleString() }}
    </li>
    <li v-else>
      No done <br/> tasks in this category
    </li>
  </ul>
</template>

<style>
ul.list {
  list-style: none;
  padding: 0;
}

ul.list li {
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #2A3B6F;
  border-radius: 0.2rem;
  width: calc(100% - 1rem);
  color: #F1F1F1;
}

ul.list li ul li {
  margin: 5px;
  background-color: aqua;
  color: black;
  list-style-type: none;
}

@media only screen and (orientation: landscape) {
  ul.list li {
    text-align: center;
  }
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