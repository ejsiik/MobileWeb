<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['data', 'loading']);
const router = useRouter();
const detailsObj = inject("details");

function handleClick(item) {
  router.push({ path: "/choose/details", components: item });
  detailsObj.details = item;
  }
</script>

<template>
  <ul class="list">
      <li v-if="data && data.length > 0" v-for="item in data" :key="item.id" v-on:click="handleClick(item)">
        Category: {{ item.category }} <br/>
        Task: {{ item.name }} <br/>
        Finished At: {{ new Date(item.endTime).toLocaleString() }}
      </li>
      <li v-else-if="loading">
        Loading done tasks...
      </li>
      <li v-else>
          There is no done task.
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
  width:calc(100% - 1rem);
  color: #F1F1F1;
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