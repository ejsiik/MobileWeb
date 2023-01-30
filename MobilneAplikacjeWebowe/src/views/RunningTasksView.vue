<script setup>
import RunningTasks from '../components/RunningTasks.vue';
import { reactive, inject, ref } from 'vue';
import { connection } from '../backend-connection/connection.js';

const banner = inject("banner");
banner.title = "Running Tasks";

const runningTasks = reactive({ data: null });
const loading = ref(true);

readData();

// Takie podejście jest lepsze niż setInterval, ponieważ setInterval
// wyśle requesta co sekundę nie ważne co się stanie
// w przypadku bardzo słabego połączenie [np. słaby zasięg] mogłoby to skutkować
// kilkoma zapytaniami wysyłanymi w tym samym czasie, co by jeszcze bardziej obciążało
// sieć na naszym telefonie i zawieszałos stronę.
// Przy użyciu metody z czekaniem na odpowiedź, a potem ustawieniem timeout-a następny request
// zostanie wysłany dopiero jak poprzedni zostanie odebrany.
setTimeout(readDataLoop, 1000);
async function readDataLoop() {
    await readData(true);
    setTimeout(readDataLoop, 1000);
}

async function readData(silent = false) {
    if (!silent) {
        loading.value = true;
    }

    try {
        const data = await connection.runningTasks();
        runningTasks.data = data;
        console.log(data);
    }
    catch(e) {
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
            <li>
                <RunningTasks @done="readData" :data="runningTasks.data?.tasks" :loading="loading" />
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