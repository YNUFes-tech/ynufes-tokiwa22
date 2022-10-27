<script setup>

import EventWidget from "@/components/EventWidget";
import data from "@/assets/events.json";
import OptionCheckBox from "@/components/OptionCheckBox";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

const showCheckbox = ref(false);
const closeCheckbox = ref(false);

let default_selection
const genre = useRoute().query.genre;
if (Number(genre)) {
  if (Number(genre) === 10) {
    default_selection = [false, false, false, true, true, true, true, true];
  } else {
    default_selection = [false, false, false, false, false, false, false, false];
    default_selection[Number(genre) - 1] = true;
  }
} else {
  default_selection = [true, true, true, true, true, true, true, true];
}

const toggleCheckbox = () => {
  showCheckbox.value = !showCheckbox.value;
  closeCheckbox.value = !showCheckbox.value;
};
const loc = useRoute().query.loc;
const optionCheckBox = ref(null);
const events = computed(() => {
  if (!optionCheckBox.value) return [];
  if (loc)
    return data.filter((d) => {
          return optionCheckBox.value.selection[d.event_genre_id - 1] && d.event_place_id === loc
        }
    )
  return data.filter((d) => {
        return optionCheckBox.value.selection[d.event_genre_id - 1]
      }
  )
});
</script>
<template>
  <div class="root-wrapper fade-up">
    <div class="filter-box">
      <div class="search-button-row">
        <div style="padding: 1.2em" @click="toggleCheckbox">カテゴリーを絞る</div>
      </div>
      <div class="checkbox-frame" :class="{'checkbox-frame-show': showCheckbox, 'checkbox-frame-close': closeCheckbox}">
        <OptionCheckBox ref="optionCheckBox" :selection="default_selection"/>
      </div>
    </div>
    <div class="events_block">
      <router-link :to="`/event/${d.event_id}`" v-for="d in events" :key="d.key" class="router-link">
        <EventWidget :eventData="d"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-box {
  box-sizing: border-box;
  width: calc(100% - 2rem);
  min-height: 4em;
  border-radius: 1em;
  background-color: rgba(141, 141, 143, 0.4);
  margin: auto;
  backdrop-filter: blur(4px);
  max-width: 40rem;

  .search-button-row {
    display: flex;

    > div {
      cursor: pointer;
    }
  }
}

.checkbox-frame {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  padding: 0 0.5em;
}

.checkbox-frame-show {
  animation: .3s linear forwards slide-checkbox;
}

.checkbox-frame-close {
  opacity: 1;
  animation: .3s linear forwards slide-checkbox-1;
}

@keyframes slide-checkbox {
  0% {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
  }
  50% {
    padding-top: .5em;
    padding-bottom: 1em;
  }
  100% {
    padding-top: .5em;
    padding-bottom: 1em;
    opacity: 1;
    max-height: 400px;
  }
}

@keyframes slide-checkbox-1 {
  0% {
    max-height: 400px;
    padding-top: .5em;
    padding-bottom: 1em;
  }
  50% {
    padding-top: .5em;
    padding-bottom: 1em;
    opacity: 1;
  }
  100% {
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0;
    max-height: 0;
  }
}

.router-link {
  text-decoration: none;
}

.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
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