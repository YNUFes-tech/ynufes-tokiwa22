<script setup>
import DateBlock from "@/components/events-and-stage/DateBlock";
</script>
<template>
  <div class="event-frame">
    <DateBlock/>
    <div class="title-bar">
      <div class="title">カラオケバトル in 横国</div>
    </div>
    <hr>
    <div class="details-area">
      <div class="details-area-left">
        <img src="/data/icons/facilities/restroom.png"/>
      </div>
      <div class="details-area-right">
        <div class="location">
          <div class="location-label">
            場所
          </div>
          <div class="location-content">
            @中央図書館１階
          </div>
        </div>
        <div class="description">
          常盤祭にのど自慢が大集合!!
        </div>
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
    background: #03061A;
    padding: 0 1em;
    border-radius: 1em;
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
  max-width: 450px;
  flex-grow: 1;
  border-radius: 1em;
  overflow: hidden;
  margin-top: 1em;
  background: rgba(3, 9, 49, 0.7);
}

.details-area {
  display: flex;
  flex-direction: row;

  .details-area-left {
    width: 150px;

    img {
      width: 150px;
    }
  }

  .description {
    padding: 1em;
  }
}

.title {
  width: 100%;
  font-size: 1.8em;
}
</style>