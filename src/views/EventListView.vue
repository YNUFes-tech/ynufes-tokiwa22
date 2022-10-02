<script setup>

import EventWidget from "@/components/EventWidget";
import data from "@/assets/eventData.json";

</script>
<template>
  <div class="root-wrapper">
    <div class="events_block">
      <router-link :to="`/event/${d.event_id}`" v-for="d in data" :key="d.key" class="router-link">
        <EventWidget :eventData="d"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link {
  text-decoration: none;
}

.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}

.events_block {
  box-sizing: border-box;
  justify-content: center;
  gap: .8em;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;
}

//3列で表示することを考えた場合、企画リストの横幅は41.8(=13.4 + 0.8 + 13.4 + 0.8 + 13.4)
@media screen and (max-width: 43.6rem) {
  .root-wrapper {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 39.24rem) {
  .root-wrapper {
    font-size: 0.8rem;
  }
}

//ここからは2列で表示する事を考える。
//企画リストの横幅は27.6(=13.4 + 0.8 + 13.4)
@media screen and (max-width: 34.88rem) {
  .root-wrapper {
    font-size: 1rem;
  }
}

@media screen and (max-width: 29.4rem) {
  .root-wrapper {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 26.46rem) {
  .root-wrapper {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 23.52rem) {
  .root-wrapper {
    font-size: 0.7rem;
  }
}

</style>