<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

    <template>
      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Page</title>
    <link rel="stylesheet" href="styleGrid.css">
</head>
<body>
    <div class="container">
        <div class="box">A</div>
        <div class="box">B</div>
        <div class="box">C</div>
        <div class="box">D</div>
      </div>
</body>
    </template>

  <style>
    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    background-color:#1c2a53;
  }
  .container{
    margin: 35% 5%;
    background-color:#1c2a53;
    display:grid;
    grid-template-columns: 45% 45%;
    grid-template-rows: 200px 200px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
    .box{
      background-color:#fff;
      padding:20px;
      border-radius:10px;
      color:#2A3B6F;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:40px;
      font-family:sans-serif;
    }

  </style>
    