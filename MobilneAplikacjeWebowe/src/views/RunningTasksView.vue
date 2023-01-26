<script setup>
import RunningTasks from '../components/RunningTasks.vue';
import { reactive } from 'vue';
import { connection } from '../backend-connection/connection.js';

const runningTasks = reactive({ data: null });

connection.runningTasks()
.then(data => {
    runningTasks.data = data;
    console.log(data);
})
.catch(e => {
    alert("Błąd wczytywania danych");
});

</script>
<template>
    <div id = "wrapper">
    <ul id = "category">
        <li>Computer<RunningTasks :data="runningTasks.data?.tasks?.Computer" /></li>
        <li>Console<RunningTasks :data="runningTasks.data?.tasks?.Console" /></li>
        <li>Phone<RunningTasks :data="runningTasks.data?.tasks?.Phone" /></li>
    </ul>
</div>
</template>

<style>
#wrapper {
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
}
ul#category {
  flex:1;
  list-style: none;
  padding: 0;
}
ul#category li{
  flex:1;
  text-align: center;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #F1F1F1;
  border-radius: 0.2rem;
  color: #2A3B6F;
  font-weight: bold;
}
ul#list_running_tasks li {
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
    ul#list_running_tasks li {
        text-align: center;
    }
}

</style>