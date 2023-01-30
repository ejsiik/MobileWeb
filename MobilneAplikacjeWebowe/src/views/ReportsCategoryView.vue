<script setup>
import RaportsCategory from '../components/ReportsCategory.vue';
import { reactive, inject, ref, onBeforeUnmount } from 'vue';
import { connection } from '../backend-connection/connection.js';


const banner = inject("banner");
banner.title = "Reports by Category";

const doneTasksState = reactive({ data: null, keyz: [] });
const loading = ref(true);
loadData();

const notHidden = reactive({
  "Computer": false,
  "Phone": false,
  "Console": false
});


let timeout = setTimeout(loadDataLoop, 1000);
async function loadDataLoop() {
    await loadData(true);
    timeout = setTimeout(loadDataLoop, 1000);
}

onBeforeUnmount(() => {
    if (timeout) {
        clearTimeout(timeout);
    }
})

async function loadData(silent = false) {
  if (!silent) {
    loading.value = true;
  }
  try {
    const data = await connection.getDoneTasksFromCurrentUserHierarchy();
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
  }
  catch(e) {
    console.error(e);
    alert("Błąd wczytywania danych");
  }
  finally {
    if (!silent) {
      loading.value = false;
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <ul class="category">
      <li v-if="!loading" @click ="notHidden[cat] = !notHidden[cat]" v-for="cat in doneTasksState.keyz">{{ cat }}
        <RaportsCategory v-if="notHidden[cat]" :data="{ tasks: doneTasksState.data?.tasks?.[cat]?.tasks, category: cat }" />
      </li>
      <li v-else>
        Loading done tasks...
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