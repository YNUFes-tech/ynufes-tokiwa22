<script setup>
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
const genreIcons = {
  1: "exhibition.png",
  2: "performance.png",
  3: "sports.png",
  4: "dessert.png",
  5: "noodle.png",
  6: "fast_food.png",
  7: "drink.png",
  8: "rice.png"
}
const showNoImage = function (e) {
  e.target.onerror = null;
  e.target.src = '/data/icons/events/noimage.png'
}
function getPlaceName(e) {
  let place_name = "";
  switch (e.event_place_id) {
    case "AB":
    case "CD":
    case "EF":
      place_name = "メインストリート";
      break;
    case "ED":
      place_name = "教育";
      break;
    case "H":
      place_name = "大学会館周辺";
      break;
    case "KK":
      place_name = "経済経営";
      break;
    case "T":
      place_name = "都市";
      break;
    case "Y":
      place_name = "野外音楽堂";
      break;
    case "Z":
      place_name = "その他"
  }
  return place_name + e.event_pamphlet_id
}
</script>

<template>
  <div class="event_widget">
    <img :src="`/data/icons/events/${eventData.event_id}.webp`" @error="showNoImage"/>
    <div class="tag_area">
      <div class="event_genre" v-bind:class="`event_genre_${props.eventData.event_genre_id}`">
        <img class="event_genre_icon" :src="`/data/icons/genre/${genreIcons[props.eventData.event_genre_id]}`"/>
        <span>{{ eventGenre[props.eventData.event_genre_id] }}</span>
      </div>
      <div>{{ getPlaceName(props.eventData) }}</div>
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
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 13.4em;
  background: #00000077;
  position: relative;
  text-overflow: ellipsis;

  > img {
    background: white;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    width: 100%;
    aspect-ratio: 1;
  }

  > .tag_area {
    margin: 0.3rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    > .event_genre {
      .event_genre_icon {
        aspect-ratio: 1;
        vertical-align: middle;
        height: 1.2em;
        margin: 0.1em 0 0.1em 0.1em;
        object-fit: contain;
      }

      > span {
        margin-left: 0.1em;
      }
    }

    > div {
      vertical-align: middle;
      font-size: unquote("max(0.6rem, 0.9em)");
      color: white;
      padding: 0.1em 0.3em;
      border-radius: 0.4em;
      border: 0.08em solid #ffffff99;
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
      background-color: #b36305;
    }

    > .event_genre_2 {
      background-color: #e32017;
    }

    > .event_genre_3 {
      background-color: #00782a;
    }

    > .event_genre_4 {
      background-color: #003688;
    }

    > .event_genre_5 {
      background-color: #9b0056;
    }

    > .event_genre_6 {
      background-color: #ee7c0e;
    }

    > .event_genre_7 {
      background-color: #84b817;
    }

    > .event_genre_8 {
      background-color: #0098d4;
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