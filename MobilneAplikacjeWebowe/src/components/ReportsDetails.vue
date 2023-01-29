<script setup>

const props = defineProps(['item']);

console.log(props.item);
</script>

<template>
    <div class="details">
        <p class="static">Name</p>
        <p class="input" id="name">{{ item.name }}</p>

        <p class="static">Category</p>
        <p class="input" id="category">{{ item.category }}</p>

        <p class="static">Started at</p>
        <p class="input" id="start-time">{{ new Date(item.createdAt).toLocaleString() }}</p>

        <p class="static">Finished at</p>
        <p class="input" id="end-time">{{ new Date(item.endTime).toLocaleString() }}</p>

        <p class="static">Duration</p>
        <p class="input" id="input">{{ item.duration }}</p>
    </div>
</template>

<style>
.details {
    display: flex;
    flex-direction: column;
}

.static, .input {
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  color: #2A3B6F;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 150%;
  font-family: sans-serif;
  margin-bottom: 5px;
}

.static {
    margin-top: 15px;
    font-weight: 700;
}

@media only screen and (max-device-width: 360px) {
  .box {
    font-size: 180%;
  }
}
</style>