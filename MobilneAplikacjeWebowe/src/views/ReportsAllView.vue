<script setup>
import RaportsAll from '../components/ReportsAll.vue';
import { reactive, inject, ref, onBeforeUnmount } from 'vue';
import { connection } from '../backend-connection/connection.js';

const banner = inject("banner");
banner.title = "All Reports";

const doneTasksState = reactive({ data: null });
const loading = ref(true);

loadData();

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
    const data = await connection.getDoneTasksFromCurrentUser();
    console.log(data.tasks);
    data.tasks.sort((a, b) => Date.parse(b.endTime) - Date.parse(a.endTime));
    doneTasksState.data = data;
  }
  catch(e) {
    console.error(e)
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
  <div class = "wrapper">
    <ul class = "category">
      <li><RaportsAll :data="doneTasksState.data?.tasks" :loading="loading" /></li>
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