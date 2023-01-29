<script setup>
import RaportsCategory from '../components/ReportsCategory.vue';
import { reactive, inject } from 'vue';
import { connection } from '../backend-connection/connection.js';

const banner = inject("banner");
banner.title = "Reports by Category";

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
    <div class = "wrapper">
    <ul class = "category">
        <li>Computer<RaportsCategory :data="doneTasksState.data?.tasks?.Computer" /><ul><li></li></ul></li>
        <li>Console<RaportsCategory :data="doneTasksState.data?.tasks?.Console"/><ul><li></li></ul></li>
        <li>Phone<RaportsCategory :data="doneTasksState.data?.tasks?.Phone" /><ul><li></li></ul></li>
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