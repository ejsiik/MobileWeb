<script setup>
var counter= 4;

function addelement() {
var completelist= document.getElementById("thelist");

completelist.innerHTML += "<li>Item " + counter + "</li>";
counter++;
}
</script>

<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AddTask Page</title>
    </head>
    <body>
        <button onclick="addelement();">Add Item</button>
        <ul id="thelist">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        </ul>
    </body>
</template>

<style>
    body {
    background-color: #1c2a53;
}
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