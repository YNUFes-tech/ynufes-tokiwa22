<script setup>
const props = defineProps({
  nameJP: {
    type: String,
    required: true,
    default: "==デフォルト=="
  },
  nameEN: {
    type: String,
    required: true,
    default: "==DEFAULT=="
  },
  icons: {
    type: Array,
    required: true,
    default: () => ['restroom', 'trash']
  },
  map: {
    type: String,
    required: true,
    default: "area1.png"
  }
})
</script>

<template>
  <div class="location-tile">
    <h2>{{ props.nameEN }}</h2>
    <h1>{{ props.nameJP }}</h1>
    <div class="facilities_icons">
      <img v-if="props.icons.includes('restroom')" src="/icons/facilities/restroom.png" alt="トイレ">
      <img v-if="props.icons.includes('trash')" src="/icons/facilities/trash-area.png" alt="ごみ捨て">
      <img v-if="props.icons.includes('hq')" src="/icons/facilities/tokiwa-hq.png" alt="本部">
    </div>
    <div>
      <img class="map" :src="`/assets/maps/${props.map}`" :alt="`${props.nameJP}の地図`"/>
    </div>
  </div>
</template>
<style scoped lang="scss">
.location-tile {
  font-size: 12px;
  border: solid #ecb731;
  border-width: 0 0 10px 0;
  border-radius: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 1em 0.5em 0.5em 0.5em;
  background: white;
  text-align: start;
  box-sizing: border-box;
  min-width: 23.8em;
  max-width: 28em;

  h1 {
    padding: 0 0.2em;
    font-size: 2em;
    margin: 0;
  }

  h2 {
    padding: 0 1em;
    margin: 0;
    font-size: 0.9em;
  }
}

.map {
  width: 100%;
}

.facilities_icons {
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  margin: 1em;

  img {
    height: 3em;
    object-fit: contain;
  }
}

@media screen and (min-width: 596px) {
  .location-tile {
    width: 45vw;
  }
}

@media screen and (min-width: 892px) {
  .location-tile {
    width: 30vw;
  }
}
</style>