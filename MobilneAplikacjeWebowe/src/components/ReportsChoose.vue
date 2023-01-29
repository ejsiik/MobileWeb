<script setup>
import { connection } from '../backend-connection/connection'

</script>

<template>
  <div class="con">
    <RouterLink to="/choose/all" class="boxx">ALL</RouterLink>
    <RouterLink to="/choose/category" class="boxx">BY CATEGORY</RouterLink>
  </div>
</template>

<style>
.con {
  width: calc(100vw - 10px);
  display: flex;
  flex-direction: column;
  background-color: #1c2a53;
  justify-content: center;
  align-items: center;
}

.boxx {
  margin: 10px;
  width: calc(100% - 10px);
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