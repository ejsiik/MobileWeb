
<script>
import { connection } from '../backend-connection/connection'
export default {
    name: () => import("../views/ReportsDetailsView.vue"),
    props: ['items']
};
</script>

<template>
    <div class="details">
        <p class="static">Name</p>
        <p class="input" id="name">{{ items.id }}</p>

        <p class="static">Category</p>
        <p class="input" id="category">text</p>

        <p class="static">Duration</p>
        <p class="input" id="input">text</p>

        <p class="static">Start time</p>
        <p class="input" id="start-time">text</p>

        <p class="static">End time</p>
        <p class="input" id="end-time">text</p>
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