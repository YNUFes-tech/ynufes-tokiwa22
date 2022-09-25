<script setup>
import Background from "@/components/BackgroundComponent"
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/events">Events</router-link>
    |
    <router-link to="/detail">Detail</router-link>
  </nav>
  <router-view class="router-view"/>
  <Background id="bg"/>
</template>

<style>
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
  width: calc(100vw - 1rem);
  margin: 0 auto;
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