<script setup>
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
// import UnderlinedSectionTitle from "@/components/utils/UnderlinedSectionTitle.vue";
import StarTitle from "@/components/StarTitle";
import {event} from "vue-gtag";
import UnderlinedSectionTitle from "@/components/utils/UnderlinedSectionTitle";
import EventStageItem from "@/components/events-and-stage/EventStageItem"
import stage28 from "@/assets/stage28.json"
import stage29 from "@/assets/stage29.json"
import stage30 from "@/assets/stage30.json"

const data28 = stage28;
const data29 = stage29;
const data30 = stage30;
event('map-page')
</script>
<template>
  <div class="content fade-up" @click="null">
    <div class="page-title">
      <StarTitle title="ステージ"/>
    </div>
    <div class="page-content">

    </div>
    <UnderlinedSectionTitle>10.28の企画</UnderlinedSectionTitle>
    <div class="events-area">
      <div v-for="d in data28" :key="d.id">
        <router-link v-if="d.detail_page" :to="d.detail_page">
          <EventStageItem :data="d"/>
        </router-link>
        <EventStageItem v-else :data="d"/>
      </div>
    </div>
    <UnderlinedSectionTitle>10.29の企画</UnderlinedSectionTitle>
    <div class="events-area">
      <div v-for="d in data29" :key="d.id">
        <router-link v-if="d.detail_page" :to="d.detail_page">
          <EventStageItem :data="d"/>
        </router-link>
        <EventStageItem v-else :data="d"/>
      </div>
    </div>
    <UnderlinedSectionTitle>10.30の企画</UnderlinedSectionTitle>
    <div class="events-area">
      <div v-for="d in data30" :key="d.id">
        <router-link v-if="d.detail_page" :to="d.detail_page">
          <EventStageItem :data="d"/>
        </router-link>
        <EventStageItem v-else :data="d"/>
      </div>
    </div>
    <div class="back-button-wrapper">
      <router-link class="back-button" to="/">トップに戻る</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-description {
  font-size: 1.5em;
  padding: 0 1em;
}

.content {
  box-sizing: border-box;
  width: min(90%, 1200px);
  background: white;
  color: #2c3e50;
  border-radius: 1em;
  overflow: hidden;

  span {
    display: inline-block;
  }

  .page-title {
    padding: 1em 0;
    margin: 0;
    width: 100%;
    background: #25254d;
    color: white;

    .star-title {
      margin: 0 auto;
      @media screen and (max-width: 420px) {
        font-size: 20px;
      }
    }
  }

  .page-content {
    margin: 1em;
    background-image: url("@/assets/logo-seisai-trans08.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 1em;
    font-weight: bold;
  }

  b {
    color: red;
    text-decoration: underline;
  }

  .back-button-wrapper {
    margin: 80px auto;
    position: relative;
    width: fit-content;

    .back-button {
      text-decoration: none;
      padding: 0.8em 1.5em 0.8em 2.5em;
      border-radius: 2em;
      border: solid 0.1em #25254d;
      width: fit-content;
      font-size: 1em;
      color: #25254d;
      font-weight: bold;
    }

    .back-button::before {
      content: "";
      background: url("../assets/goto_top_icon.webp") no-repeat;
      background-size: contain;
      position: absolute;
      top: 55%;
      left: 12%;
      transform: translate(0, -50%);

      vertical-align: middle;
      padding-right: 5px;
      width: 16px;
      height: 16px;
    }
  }

  .download-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .download-button {
      text-decoration: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3em;
      flex-grow: 1;
      padding: 1em;
      color: #171749;
      border: #171749 1px solid;
      border-radius: 2em;
      margin: 1em;
      max-width: 15em;
      box-sizing: border-box;
      aspect-ratio: 1.7;
    }
  }
}

.events-area {
  margin: 20px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  a {
    text-decoration: none;
    color: white;
  }
}
</style>
