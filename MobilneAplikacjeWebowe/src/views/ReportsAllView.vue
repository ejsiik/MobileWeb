<script setup>
import RaportsAll from '../components/ReportsAll.vue';
import { reactive, inject } from 'vue';
import { connection } from '../backend-connection/connection.js';

const banner = inject("banner");
banner.title = "All Reports";

const doneTasksState = reactive({ data: null });

connection.getDoneTasksFromCurrentUser()
.then(data => {
  console.log(data.tasks);
  data.tasks.sort((a, b) => Date.parse(b.endTime) - Date.parse(a.endTime));
  doneTasksState.data = data;
  })
.catch(e => {
  console.error(e)
  alert("Błąd wczytywania danych");
});
</script>

<template>
  <div class = "wrapper">
    <ul class = "category">
      <li><RaportsAll :data="doneTasksState.data?.tasks" /></li>
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