<script setup>
import StarTitle from "@/components/StarTitle";
import EventStageItem from "@/components/events-and-stage/EventStageItem";
import stage_data from "@/assets/events_and_stage.json"

const data = stage_data;
</script>
<template>
  <div class="main-frame">
    <StarTitle class="center" title="EVENTS AND STAGE"/>
    <div class="events-area">
      <router-link v-for="d in data" :key="d.id">
        <EventStageItem/>
      </router-link>
    </div>
  </div>
  <div class="date-row">
    <div class="events-area">
    </div>
  </div>
</template>
<style scoped>
.main-frame {
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.center {
  margin: 0 auto;
}

.events-area {
  margin: 20px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>