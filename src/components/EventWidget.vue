<script setup>
import {defineProps} from "vue"

const props = defineProps({
  eventData: {
    type: Object,
    required: true
  }
});
const eventGenre = {
  1: "展示販売",
  2: "パフォーマンス",
  3: "ゲームスポーツ",
  4: "デザート",
  5: "鉄板・麺類",
  6: "ファストフード",
  7: "ドリンク",
  8: "ご飯もの",
};

</script>

<template>
  <div class="event_widget">
    <img :src="`/icon/${props.eventData.icon_filename}`"/>
    <div class="tag_area">
      <div v-bind:class="`event_genre_${props.eventData.event_genre_id}`">
        {{ eventGenre[props.eventData.event_genre_id] }}
      </div>
      <div v-bind:class="event_place_text_keiei">{{ props.eventData.event_place_text }}</div>
    </div>
    <div class="meta_area">
      <h2 v-text="`${props.eventData.event_title}`" style="white-space: pre-wrap"/>
      <hr>
      <div class="org_name">
        {{ props.eventData.org_name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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