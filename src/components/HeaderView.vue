<script setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

let mToggled = ref(false);

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
      <div class="header_top">
        <button id="menu_toggle" @click="toggleMenu">
          <svg aria-hidden="true" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7h22M4 15h22M4 23h22" stroke="white" stroke-linecap="round" stroke-miterlimit="10"
                  stroke-width="2"></path>
          </svg>
          <span>Menu</span>
        </button>
        <router-link id="site_title" to="/" @click="closeMenu">
          <div class="logo1">
            <div>22常盤祭</div>
            <div>横浜国立大学 大学祭</div>
          </div>
          <div class="logo2">星彩</div>
        </router-link>
      </div>
    </header>
    <transition name="mobileMenu">
      <div v-show="mToggled" id="mobile_menu">
        <router-link active-class="selected" to="/" @click="closeMenu">ホーム</router-link>
        <router-link to="/events" active-class="selected" @click="closeMenu">企画を見る</router-link>
        <router-link active-class="selected" to="/reservation" @click="closeMenu">事前予約制について</router-link>
        <router-link active-class="selected" to="/access" @click="closeMenu">アクセス</router-link>
        <router-link active-class="selected" to="/pamphlet" @click="closeMenu">パンフレット</router-link>
        <router-link active-class="selected" to="/sponsors" @click="closeMenu">ご協賛について</router-link>
        <router-link active-class="selected" to="/others" @click="closeMenu">他大学祭の紹介</router-link>
        <div class="sns">
          <a href="https://twitter.com/ynu_fes" target="_blank" class="hover-to-shrink">
            <img alt="twitter" src="@/assets/sns/twitter_icon.png"/>
          </a>
          <a href="https://www.instagram.com/ynu_fes" target="_blank" class="hover-to-shrink">
            <img alt="instagram" class="hover-to-shrink" src="@/assets/sns/instagram_icon.png"/>
          </a>
          <a href="https://www.facebook.com/ynufes" target="_blank" class="hover-to-shrink">
            <img alt="facebook" src="@/assets/sns/facebook_icon.png"/>
          </a>
        </div>
      </div>
    </transition>
    <transition name="mobileBack">
      <div v-show="mToggled" class="header-back" @click="closeMenu"/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.header_active {
  background: #03061A;
}

header {
  padding: 0.5rem 0;
  z-index: 100;
  width: 100%;
  position: fixed;
  color: white;
  background: #03061A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    white-space: nowrap;
  }
}

#header_wrapper {
  position: relative;
}

.header-back {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -10;
  background: #0009;
}


.mobileBack-enter-active, .mobileBack-fade-active {
  transition: all .3s ease-in-out;
}

.mobileBack-enter-from, .mobileBack-leave-to {
  opacity: 0;
}

.mobileMenu-enter-active, .mobileMenu-fade-active {
  transition: all .3s ease-in-out;
}

.mobileMenu-enter-from, .mobileMenu-leave-to {
  transform: translateX(-80vw);
}

#mobile_menu {
  z-index: 100;
  transition: all 0.5s 0s ease-in-out;
  padding: 85px 20px;
  width: unquote("min(250px, 80vw)");
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #03061A;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.4em;
    padding: 10px;
    text-align: center;
    border-radius: 1em;
  }

  a.selected {
    background: #fffe;
    color: #03061A;

  }

  .sns {
    display: flex;
    width: 100%;

    a {
      flex-basis: 30%;
      object-fit: contain;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}

.header_top {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
}

#menu_toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 1px white solid;
  color: white;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  margin-right: auto;

  > svg {
    height: 40px;
    aspect-ratio: 1;
  }

  @media screen and (min-width: 550px) {
    flex-direction: row;
    font-size: 25px;
    > span {
      padding-left: 12px;
    }
  }
}

#site_title {
  position: absolute;
  text-decoration: none;
  color: white;
  height: 70px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo1 {
    > div:first-of-type {
      padding: 0;
      height: 35px;
      line-height: 1;
      font-size: 35px;
      margin-bottom: 3px;
      @media screen and (max-width: 400px) {
        font-size: 28px;
        height: 28px;
      }
    }

    > div:nth-of-type(2) {
      margin-top: 3px;
      font-size: 15px;
      @media screen and (max-width: 400px) {
        font-size: 12px;
      }
    }
  }

  .logo2 {
    margin-left: 40px;
    font-size: 50px;

    @media screen and (max-width: 400px) {
      font-size: 40px;
    }
  }
}

.header-back {
  display: initial;
}

#site_title .logo2 {
  margin-left: 8px;
}
</style>