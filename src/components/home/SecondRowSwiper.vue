<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, {Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);
</script>
<template>
  <Swiper
      :autoplay="{
  delay: 6000,
  disableOnInteraction: true,
  }"
      :spaceBetween="20"
      :slidesPerView="'auto'"
      class="home-second-swiper"
  >
    <SwiperSlide>
      <router-link to="/poster" class="hover-to-shrink">
        <div class="poster">
          ポスター
          <br>
          展覧会
        </div>
      </router-link>
    </SwiperSlide>
    <SwiperSlide>
      <router-link to="/sp/karaoke" class="hover-to-shrink">
        <div>
          <img src="@/assets/karaoke_logo.png">
        </div>
      </router-link>
    </SwiperSlide>
    <SwiperSlide>
      <router-link to="/sp/contest" class="hover-to-shrink">
        <div>
          <img src="/data/icons/sp/contest.webp">
        </div>
      </router-link>
    </SwiperSlide>
    <SwiperSlide>
      <router-link to="/sponsors" class="hover-to-shrink">
        <div class="sponsor">
          ご協賛<br>について
        </div>
      </router-link>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.home-second-swiper {
  padding: 20px 10px;

  .swiper-slide {
    width: min(220px, 48%);
    aspect-ratio: 1;
    box-sizing: border-box;
    font-size: 1.7em;
    background: none;

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: white;

      > div {
        box-shadow: 0 0 10px 10px rgba(243, 242, 238, 0.3);
        padding: 10px;
        border-radius: 10%;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(#1e3272, #15084f);
      }
    }

    span {
      display: inline-block;
    }
  }
}
</style>