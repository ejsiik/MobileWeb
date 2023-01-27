<script setup>
import { connection } from '../backend-connection/connection'

</script>

<template>
  <div class="container">
    <RouterLink to="/choose/all" class="box">WSZYSTKIE</RouterLink>
    <RouterLink to="/choose/category" class="box">WEDŁUG KATEGORII</RouterLink>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  background-color: #1c2a53;
  justify-content: center;
}

.box {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  color: #2A3B6F;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 220%;
  font-family: sans-serif;
}
@media only screen and (max-device-width: 360px) {
  .box {
    font-size: 180%;
  }
}
</style>