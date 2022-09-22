<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
      :keyboard="{
      enabled: true,
    }"
      :slidesPerGroup="2"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :pagination="{
      clickable: true,
    }"
      :navigation="true"
      :modules="modules"
      :breakpoints="{
      768:{
      slidesPerView: 2,
      spaceBetween: 20,
      },
      1080:{
      slidesPerView: 4,
      spaceBetween: 20,
      }
      }"
      class="mySwiper"
  >
    <swiper-slide>
      <div class="event_widget">
        <img src="1tai2test.png"/>

        <div class="meta_area">
          <h2 style="white-space: pre-wrap">企画テスト団体</h2>
          <hr>
          <div class="org_name">
            企画テスト団体
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>Slide 2
    </swiper-slide
    >
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4
    </swiper-slide
    >
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6
    </swiper-slide
    >
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8
    </swiper-slide
    >
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {Autoplay, Keyboard, Pagination, Navigation} from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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

.event_widget {
  border-radius: 0.5rem;
  width: 13.4em;
  background: #00000077;
  position: relative;
  text-overflow: ellipsis;

  > img {
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    width: 100%;
  }

  > .tag_area {
    position: relative;
    margin: 0.3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.2rem;

    > div {
      font-size: unquote("max(0.6rem, 0.9em)");
      color: white;
      padding: 0.05rem 0.1rem;
      border-radius: 0.4rem;
      border: 0.08rem solid;
      border-color: #ffffff99;
    }

    > .event_place_text_toshi {
      background-color: #00adb5;
    }

    > .event_place_text_keizai {
      background-color: #ff5722;
    }

    > .event_place_text_keiei {
      background-color: #eeeeee;
      color: black;
    }

    > .event_genre_1 {
      background-color: #004b79;
    }

    > .event_genre_2 {
      background-color: #7f181b;
    }

    > .event_genre_3 {
      background-color: #56a0d3;
    }

    > .event_genre_4 {
      background-color: #537b35;
    }

    > .event_genre_5 {
      background-color: #ecb731;
    }

    > .event_genre_6 {
      background-color: #b4a996;
      color: black;
    }

    > .event_genre_7 {
      background-color: #d7d7d8;
    }

    > .event_genre_8 {
      background-color: #6d6e70;
    }
  }

  > .meta_area {
    color: white;
    margin: 0.7em;

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      max-height: 2.8rem;
      overflow: hidden;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 1.2em;
      line-height: 1.4rem;
      padding: 0;
      margin: 0;
    }
  }

  > hr {
    margin: 0;
    padding: 0;
  }

}
</style>