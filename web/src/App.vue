<template>
<div class="container">
  <div id="top">
      <router-link to="/">
        <img src="/resources/CatWikiLogo.svg">
      </router-link>
  </div>
  <router-view></router-view>
  <footer>
    <img src="/resources/CatWikiLogo.svg">
    <span>©ngosangns - devchallenge.io 2020</span>
  </footer>
</div>
</template>

<script setup>
</script>

<style lang="scss">
@font-face {
  font-family: Montserrat;
  src: url('/fonts/Montserrat-Regular.ttf'); 
}

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1rem;
  #top {
    display: flex;
    justify-content: start;
  }

  #danger-toast {
    display: flex;
    align-items: center;
    color: white;
    border: 0;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  footer {
    background: black;
    border-radius: 3rem 3rem 0 0;
    padding: 2rem 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    img {
      filter: grayscale(100%) brightness(10);
    }
    span {
      color: white;
      text-align: right;
      @media only screen and (max-width: 768px) {
        text-align: left;
      }
    }
  }
}
</style>