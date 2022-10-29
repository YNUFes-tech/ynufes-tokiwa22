<script setup>
import DateBlock from "@/components/events-and-stage/DateBlock";

const props = defineProps({
  data: {
    type: Object
  }
});
let border_color;
switch (props.data.date_color) {
  case 1:
    border_color = {border: "#ecb73155 solid 2px"};
    break
  case 2:
    border_color = {border: "#0f97f855 solid 2px"};
    break
  case 3:
    border_color = {border: "#f5410855 solid 2px"};
    break
}
</script>
<template>
  <div class="event-frame" :style="border_color">
    <DateBlock :date="data.date" :time="data.time" :date_color="data.date_color"/>
    <div class="title-bar">
      <div class="title">{{ props.data.title }}</div>
    </div>
    <hr>
    <div class="details-area">
      <div class="details-area-left">
        <img v-if="props.data.icon" :src="props.data.icon"/>
      </div>
      <div class="details-area-right">
        <div class="location">
          <div class="location-label">
            場所
          </div>
          <div class="location-content">
            {{ props.data.place }}
          </div>
        </div>
        <div class="description">
          {{ props.data.description }}
        </div>
        <div v-if="props.data.detail_page" class="detail-button">詳細はこちら</div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.title-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.location {
  .location-label {
    margin-left: 1em;
    background: #03061A;
    padding: 0 1em;
    border-radius: 1em;
    color: white;
  }

  .location-content {
    padding-left: 1em;
    color: #03061A;
  }

  margin: 0 auto;
  padding: 2px;
  display: flex;
  background: white;
  border-radius: 1em;
}

.event-frame {
  box-sizing: border-box;
  width: 400px;
  height: 250px;
  flex-grow: 1;
  border-radius: 1em;
  overflow: hidden;
  color: #03061A;
}

.details-area {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .details-area-left {
    img {
      width: 150px;
      background: #03061A;
      border-radius: 10%;
    }
  }

  .description {
    box-sizing: border-box;
    padding: .5em;
    height: 5em;
    max-width: 350px;
    line-height: 1;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.title {
  width: 100%;
  font-size: 1.7em;
}

.detail-button {
  padding: .3em;
  text-decoration: none;
  color: #03061A;
  border-radius: 2em;
  border: #03061A solid 1px;
  margin: 0 1em;
}
</style>