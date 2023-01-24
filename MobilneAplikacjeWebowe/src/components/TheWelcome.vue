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
  <!-- to wrzuca do body
     <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Page</title>
    <link rel="stylesheet" href="styleGrid.css">
  </head> -->
  <div class="container">
    <RouterLink to="/addTask" class="box">Add Task</RouterLink>
    <RouterLink to="/tasks" class="box">Running Tasks</RouterLink>
    <RouterLink to="/raports" class="box">Raporty</RouterLink>
    <RouterLink @click="logout" to="/" class="box">Logout</RouterLink>
  </div>
</template>

<style>
.container {
  flex: 1;
  background-color: #1c2a53;
  display: grid;
  /* Jak się zmieni grid gap to zmienić też w template*/
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-template-rows: calc(50% - 10px) calc(50% - 10px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

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
  font-size: 40px;
  font-family: sans-serif;
}
</style>
