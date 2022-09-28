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
  gap: 0.5rem;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;
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