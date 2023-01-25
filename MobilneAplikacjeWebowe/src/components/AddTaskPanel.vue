<script setup>
var counter = 4;

function addElement() {
  var completelist = document.getElementById("thelist");

  completelist.innerHTML += "<li>Item " + counter + "</li>";
  counter++;
}

</script>

<template>
  <div class="addTask">
    <button onclick="addElement">Add Item</button>
    <ul id="thelist">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</template>

<style>
ul#thelist {
  list-style: none;
  padding: 0;
}

ul#thelist li {
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #F1F1F1;
  border-radius: 0.2rem;
  width: 70%;
  color: #2A3B6F;
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