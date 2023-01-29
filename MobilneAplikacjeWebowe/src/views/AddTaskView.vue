<script setup>
import AddTaskPanel from '../components/AddTaskPanel.vue';
import { reactive } from 'vue';
import { connection } from '../backend-connection/connection.js';

const doneTasksState = reactive({ data: null, keyz: [] });

connection.getTasksToAdd()
.then(data => {
    doneTasksState.data = data;
    doneTasksState.keyz = Object.keys(data.tasks);
    console.log(data);

})
.catch(e => {
    alert("Błąd wczytywania danych");
});


</script>

<template>
    <div class = "wrapper">
    <ul class = "category">
        <li v-for="cat in doneTasksState.keyz">{{ cat }}<AddTaskPanel :data="{ tasks: doneTasksState.data?.tasks?.[cat], category: cat}" /></li>

    </ul>
</div>
</template>

<style>
.wrapper {
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  max-width: 100% !important;
  overflow-x: hidden !important;
}
ul.category {
  flex:1;
  list-style: none;
  padding: 0;
}
ul.category > li{
  flex:1;
  text-align: center;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #F1F1F1;
  border-radius: 0.2rem;
  color: #2A3B6F;
  font-weight: bold;
}
</style>