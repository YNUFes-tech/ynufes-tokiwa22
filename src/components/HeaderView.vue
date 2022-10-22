<script setup>
// eslint-disable-next-line no-unused-vars
import {ref, watch} from "vue";
// eslint-disable-next-line no-unused-vars
import {useRoute} from "vue-router";

let mToggled = ref(false);

// eslint-disable-next-line no-unused-vars
function toggleMenu() {
  mToggled.value = !mToggled.value;
}

function closeMenu() {
  mToggled.value = false;
}

const route = useRoute();
watch(route, () => {
  closeMenu()
});
</script>
<template>
  <div id="header_wrapper">
    <header>
      <div id="header_top">
        <router-link id="site_title" to="/" @click="closeMenu">
          <div id="logo-1">22常盤祭</div>
          <div id="logo-2">横浜国立大学 大学祭</div>
        </router-link>
<!--        <button id="mobile_toggle" @click="toggleMenu">-->
<!--          <svg aria-hidden="true" height="40" viewBox="0 0 30 30" width="40" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M4 7h22M4 15h22M4 23h22" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"-->
<!--                  stroke-width="2"></path>-->
<!--          </svg>-->
<!--        </button>-->
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  z-index: 100;
  width: 100%;
  position: fixed;
}


#header_top {
  positaion: absolute;
  background: #03033d;
  margin: 0;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
}

#site_title {
  position: absolute;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: white;

  #logo-1 {
    font-size: 35px;
    line-height: 1;
  }

  #logo-2 {
    font-size: 18px;
  }
}

#mobile_toggle {
  margin-right: auto;
}

#header_wrapper {
  width: 100%;
  background: #ecb731;
}
</style>