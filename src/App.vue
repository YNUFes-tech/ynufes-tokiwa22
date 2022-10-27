<script setup>
import Background from "@/components/BackgroundComponent"
import HeaderView from "@/components/HeaderView";
import {useStore} from "vuex";
import {onMounted} from "vue";
import {createClient} from "microcms-js-sdk";

window.onload = function () {
  const loader = document.getElementById('loader');
  loader.classList.add('loaded');
}

const store = useStore();

const client = createClient({
  serviceDomain: "tokiwa22",
  apiKey: "7a49d7576cff4c6e978c2be8e60b789c8b0b",
});

function getLatestSponsors() {
  client.get({
    endpoint: 'banner',
    queries: {limit: 20},
  }).then((data) => {
        store.commit('setSponsors', data.contents);
      }
  );
}

onMounted(() => {
  getLatestSponsors();
})

</script>

<template>
  <HeaderView id="header"/>
  <router-view class="router-view"/>
  <Background id="bg"/>
  <!--  <FooterComponent/>-->
</template>

<style>
body {
  margin: 0 auto;
}

#app {
  overflow: hidden;
  top: 0;
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  position: relative;
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
  margin: 80px auto 0 auto;
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


#header {
  position: fixed;
  top: 0;
  z-index: 100;
}

.fade-up {
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
