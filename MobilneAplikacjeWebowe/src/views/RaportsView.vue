<script setup>
import Raport from '../components/Raport.vue';
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

<template>
    <ul id = "category">
        <li>Computer<Raport :data="doneTasksState.data?.tasks?.Computer" /></li>
        <li>Console<Raport :data="doneTasksState.data?.tasks?.Console" /></li>
        <li>Phone<Raport :data="doneTasksState.data?.tasks?.Phone" /></li>
    </ul>
</template>

<style>

ul#category {
  list-style: none;
  padding: 0;
}

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
</style>