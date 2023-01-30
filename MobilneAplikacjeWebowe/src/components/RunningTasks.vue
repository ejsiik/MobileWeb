<script setup>
import { reactive } from 'vue';
import { connection } from '../backend-connection/connection.js';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ maxToasts: 2, duration: 1000 });

const props = defineProps(['data'])

const emit = defineEmits(["done"]);

async function check(event, item) {
  await connection.changeTaskStatus(item.id)
  toaster.info(`Task "${item.name}"" from category: "${item.category}" has been marked as Done.`);
  emit("done");
}

</script>


<template>
  <ul class="list_running_tasks">
    <li v-if="data && data.length > 0" v-for="item in data" :key="item.id">
      {{ item.category }}: {{ item.name }}
      <input type="checkbox" class="running-task-check" name="running-task-check" @change="check($event, item)" />
      <br />
      Started At: {{ new Date(item.createdAt).toLocaleString() }}
    </li>
    <li v-else>
        No tasks
        <br /> currently in progress
    </li>
  </ul>
</template>

<style>
.running-task-check {
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
}

ul.list_running_tasks {
  list-style: none;
  padding: 0;
}

ul.list_running_tasks li {
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

@media only screen and (orientation: landscape) {
  ul.list_running_tasks li {
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