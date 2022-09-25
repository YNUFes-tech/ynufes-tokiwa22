<script setup>

import EventWidget from "@/components/EventWidget";
import data from "@/assets/eventData.json";

</script>
<template>
  <div class="root-wrapper">
    <div class="body-frame">
      <div class="content-frame">
        <div class="events_block">
          <router-link :to="`/event/${d.event_id}`" v-for="d in data" :key="d.key" class="router-link">
            <EventWidget :eventData="d"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link{
  text-decoration: none;
}

.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.events_block {
  box-sizing: border-box;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;

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
        max-height: 3rem;
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
}

.body {
  margin: 0;
  padding: 0;
  font-family: 'Klee One', cursive;
}

.background_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -10;
}

.body-frame {
  font-family: 'Klee One', cursive;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: clip;
  min-height: calc(100vh - 360px);
  box-sizing: border-box;

  .content-frame {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 140px - 220px);
  }
}

@media screen and (max-width: 670px) {
  .body-frame {
    padding-top: 80px;
    min-height: calc(100vh - 80px - 220px);
  }
  .footer_org {
    flex-basis: auto;
  }
  nav.sitemap {
    display: none;
  }
  footer .footer_org {
    flex-basis: auto;
  }
}

//3列で表示することを考えた場合、企画リストの横幅は41.2(=13.4 + 0.5 + 13.4 + 0.5 + 13.4)
@media screen and (max-width: 41.5rem) {
  .root-wrapper {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 37.4rem) {
  .root-wrapper {
    font-size: 0.8rem;
  }
}

//ここからは2列で表示する事を考える。
//企画リストの横幅は27.3(=13.4 + 0.5 + 13.4)
@media screen and (max-width: 33.3rem) {
  .root-wrapper {
    font-size: 1rem;
  }
}

@media screen and (max-width: 27.5rem) {
  .root-wrapper {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 24.7rem) {
  .root-wrapper {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 21.9rem) {
  .root-wrapper {
    font-size: 0.7rem;
  }
}

</style>