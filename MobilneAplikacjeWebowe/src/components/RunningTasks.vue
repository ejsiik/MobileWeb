<script setup>
import { reactive } from 'vue';
import { connection } from '../backend-connection/connection.js';
const props = defineProps(['data'])

const emit = defineEmits(["done"]);

async function check(event, id){
  await connection.changeTaskStatus(id)
  emit("done")
  console.log(id)
}

</script>


<template>
  <ul class="list_running_tasks">
      <li v-if="data && data.length > 0" v-for="item in data" :key="item.id">
          {{ item.category }}: {{ item.name }}
          <input type="checkbox" class="running-task-check" name="running-task-check" @change="check($event, item.id)"/>
          <br/> 
          Started At: {{ new Date(item.createdAt).toLocaleString() }}
      </li>
      <li v-else>
        No tasks currently in progress
      </li>
  </ul>
</template>

<style>
.running-task-check{
  position: absolute;
  right: 5px;
  top: 5px;
  width: 50px;
  height: 50px;
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
  width:calc(100% - 1rem);
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