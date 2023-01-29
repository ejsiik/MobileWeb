<script setup>
const props = defineProps(['data'])

</script>

<template>
    <ul class="list">
        <li v-if="data" v-for="item in Object.keys(data)">
            {{ item }}
        </li>
        <li v-else>
            No done tasks in this category
        </li>
    </ul>
</template>

<style>
ul.list {
  list-style: none;
  padding: 0;
}

ul.list li {
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
    ul.list li {
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