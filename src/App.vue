<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link>
  </nav>
  <router-view class="router-view"/>
  <Background class="background"></Background>
</template>

<style>
#app {
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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



.router-view{
  width: calc(100vw - 1rem);
  margin: 0 auto;
}

.background{
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  top: 0;
  z-index: -100;
}


</style>
<script>
import Background from "@/components/BackgroundComponent";
export default {
  components: {Background}
}
</script>