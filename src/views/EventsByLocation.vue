<template>
  <!--  大学会館周辺-->
  <!--  都市科学部講義棟-->
  <!--  経済・経営学部講義棟1号館-->
  <!--  教育学部講義棟6号館-->
  <!--  メインストリートA&B-->
  <!--  メインストリートC&D-->
  <!--  メインストリートE&F-->
  <!--野外音楽堂-->
  <div class="view">
    <h1>企画場所から探す</h1>
    <div class="locations-container">
      <a>
        <LocationTile/>
      </a>
      <a>
        <LocationTile/>
      </a>
      <a>
        <LocationTile/>
      </a>
    </div>
  </div>
</template>

<script>
import LocationTile from "@/components/LocationTile";

export default {
  name: "EventsByLocation",
  components: {LocationTile}
}
</script>

<style scoped>
.view{
  padding: 6px;
}
.locations-container {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 1em;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 12px;
}
</style>