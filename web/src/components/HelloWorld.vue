<template>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    state: {
      count: 0
    }
  })
}
</script>

<style scoped>
@font-face {
  font-family: myFirstFont;
  src: url(/src/assets/fonts/MysteryQuest-Regular.ttf);
}
a {
  color: #42b983;
  font-family: myFirstFont;
}
</style>