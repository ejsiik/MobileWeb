<script setup>
import RaportsCategory from '../components/ReportsCategory.vue';
import { reactive, inject, ref } from 'vue';
import { connection } from '../backend-connection/connection.js';

const banner = inject("banner");
banner.title = "Reports by Category";

const doneTasksState = reactive({ data: null, keyz: [] });

const notHidden = reactive({
  "Computer": false,
  "Phone": false,
  "Console": false
});

connection.getDoneTasksFromCurrentUserHierarchy()
  .then(data => {    
    console.log(data);
    Object.values(data.tasks).forEach(cat => {
      const xd = [];
      Object.values(cat).forEach(({ tasks }) => {
       xd.push(...tasks);
      })
      xd.sort((a, b) => Date.parse(b.endTime) - Date.parse(a.endTime));
      cat.tasks = xd;
    })
    doneTasksState.data = data;
    doneTasksState.keyz = Object.keys(data.tasks);
  })
  .catch(e => {
    console.error(e);
    alert("Błąd wczytywania danych");
  });
</script>

<template>
  <div class="wrapper">
    <ul class="category">
      <li @click ="notHidden[cat] = !notHidden[cat]" v-for="cat in doneTasksState.keyz">{{ cat }}
        <RaportsCategory v-if="notHidden[cat]" :data="{ tasks: doneTasksState.data?.tasks?.[cat]?.tasks, category: cat }" />
      </li>
    </ul>
  </div>
</template>

<style>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

ul.category {
  flex: 1;
  list-style: none;
  padding: 0;
}

ul.category>li {
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #F1F1F1;
  border-radius: 0.2rem;
  color: #2A3B6F;
  font-weight: bold;
}
</style>