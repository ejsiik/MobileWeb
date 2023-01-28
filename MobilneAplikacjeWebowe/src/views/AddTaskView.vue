<script setup>
import AddTaskPanel from '../components/AddTaskPanel.vue';
import { reactive } from 'vue';
import { connection } from '../backend-connection/connection.js';

const doneTasksState = reactive({ data: null });

connection.getDoneTasksFromCurrentUserHierarchy()
.then(data => {
    doneTasksState.data = data;
    console.log(data);
})
.catch(e => {
    alert("Błąd wczytywania danych");
});

</script>

<script>
export default {
    methods: {
        handleClick(category) {
            connection.addTask(category,category) //how to get task name
            console.log(category);
        }
    }
}
</script>

<template>
    <div class = "wrapper">
    <ul class = "category">
        <li v-on:click="handleClick('Computer')">Computer<AddTaskPanel :data="doneTasksState.data?.tasks?.Computer" /></li>
        <li v-on:click="handleClick('Console')">Console<AddTaskPanel :data="doneTasksState.data?.tasks?.Console" /></li>
        <li v-on:click="handleClick('Phone')">Phone<AddTaskPanel :data="doneTasksState.data?.tasks?.Phone" /></li>
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