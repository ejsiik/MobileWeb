<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { connection } from '../backend-connection/connection'
function logout(event) {
  const logout = connection.logout();
  console.log(connection.authToken);
}
</script>

<template>
  <div class="container">
    <RouterLink to="/addTask" class="box">Add Task</RouterLink>
    <RouterLink to="/tasks" class="box">Running Tasks</RouterLink>
    <RouterLink to="/choose" class="box">Raporty</RouterLink>
    <RouterLink @click="logout" to="/" class="box">Logout</RouterLink>
  </div>
</template>

<style>
.container {
  flex: 1;
  background-color: #1c2a53;
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-template-rows: calc(50% - 10px) calc(50% - 10px);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
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
