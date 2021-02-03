<template>
<div class="container">
  <router-view></router-view>
  <footer>
    <img src="/src/assets/resources/CatWikiLogo.svg">
    <span>©ngosangns - devchallenge.io 2020</span>
  </footer>
</div>
</template>

<script setup>
</script>

<style lang="scss">
@font-face {
  font-family: Montserrat;
  src: url('/src/assets/fonts/Montserrat-Regular.ttf'); 
}

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1rem;
}

footer {
  background: black;
  border-radius: 3rem 3rem 0 0;
  padding: 2rem 5rem;
  img {
    filter: grayscale(100%) brightness(10);
  }
  span {
    float: right;
    color: white;
  }
}
</style>