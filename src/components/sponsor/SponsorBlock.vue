<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import {event} from "vue-gtag";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'

// import Swiper core and required modules
import SwiperCore, {Autoplay} from 'swiper';
import store from "@/store";
SwiperCore.use([Autoplay]);
const randomList = function (rand) {
  return rand.map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);
}

const access = async function (id) {
  if (process.env.NODE_ENV === "production") {
    event("sponsor:click", {
      sponsor_id: id,
    });
  }
}
</script>
<template>
  <swiper v-show="store.state.sponsors.length!==0"
          :autoplay="{
  delay: 6000,
  disableOnInteraction: true,
  }"
          :breakpoints="{
          300: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 5,
          },
          430: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 8,
          },
          768: {
          slidesPerView: 4,
          slidesPerGroup: 2,
          spaceBetween: 10,
          },
          }"

          :loop="true"
          class="sponsorsSwiper"
          style="margin: 0 auto">

    <swiper-slide v-for="ad in randomList(store.state.sponsors)" :key="ad.id">
      <a :href="`${ad.url?ad.url:''}`" rel="noopener noreferrer"
         target="_blank"
         v-on:click="access(`${ad.sponsors}`)">
        <img :src="`${ad.image.url}`" alt=""/>
      </a>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">

.swiper {
  max-width: min(1000px, 90vw);
  width: 100vw;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  aspect-ratio: 3;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>