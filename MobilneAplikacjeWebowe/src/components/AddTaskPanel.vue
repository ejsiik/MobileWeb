<script setup>
import { connection } from '../backend-connection/connection.js';
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ maxToasts: 2, duration: 1000 });

const props = defineProps(['data'])

function handleClick(name, category) {
    connection.addTask(category, name);
    console.log(name, category);
    toaster.info(`Task "${name}" from category: "${category}" has been added.`);
}

</script>


<template>
    <ul class="list_add_task">
        <li v-if="data" v-for="item in data.tasks" v-on:click="handleClick(item, data.category)">
            {{ item }}
        </li>
        <li v-else>
            No Tasks to add.
        </li>
    </ul>
</template>

<style>
ul.list_add_task {
    list-style: none;
    padding: 0;
}

ul.list_add_task li {
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: #2A3B6F;
    border-radius: 0.2rem;
    width: calc(100% - 1rem);
    color: #F1F1F1;
}

@media only screen and (orientation: landscape) {
    ul.list_add_task li {
        text-align: center;
    }
}

button {
    margin: 15% 30%;
    background-color: #FFFFFF;
    border-radius: 0.2rem;
    text-align: center;
    display: block;
    color: #2A3B6F;
}
</style>