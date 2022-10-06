<script setup>
import Background from "@/components/BackgroundComponent"
import HeaderView from "@/components/HeaderView";
</script>

<template>

  <HeaderView class="fadeUp" id="header"/>
  <router-view class="router-view"/>
  <Background id="bg"/>
</template>

<style>
body {
  margin: 0 auto;
}
#app {
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.router-view {
  width: 100vw;
  margin: 0 auto;
  padding-top: 70px;
  position: fixed;
  top: 0;
  z-index: 50;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #03061A;
  position: relative;
  z-index: -200;
}


#bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}


</style>
