<script setup>
import RunningTasks from '../components/RunningTasks.vue';
import { reactive, inject } from 'vue';
import { connection } from '../backend-connection/connection.js';

const banner = inject("banner");
banner.title = "Running Tasks";

const runningTasks = reactive({ data: null });
//setInterval(readData, 1000);
readData()


function readData() {
    connection.runningTasks()
        .then(data => {
            runningTasks.data = data;
            //console.log(data);
        })
        .catch(e => {
            alert("Błąd wczytywania danych");
        });
}

</script>
<template>
    <div class="wrapper">
        <ul class="category">
            <li>
                <RunningTasks @done="readData" :data="runningTasks.data?.tasks" />
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
    font-size:small;
}
</style>