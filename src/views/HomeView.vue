<script setup>
import TopTitleBar from "@/components/home/TopTitleBar";
import HomeSearchSection from "@/components/home/HomeSearchSection";
import IconRowButton from "@/components/home/IconRowButton";
// eslint-disable-next-line no-unused-vars
import SponsorBlock from "@/components/sponsor/SponsorBlock";
// eslint-disable-next-line no-unused-vars
import StarTitle from "@/components/StarTitle";
import SecondRowSwiper from "@/components/home/SecondRowSwiper";
</script>
<template>
  <div class="home-wrapper">
    <TopTitleBar/>
    <SponsorBlock class="sponsor-block"/>
    <div class="home-row-1">
      <div class="menu-buttons">
        <router-link to="/reservation" class="hover-to-shrink">
          <IconRowButton class="reservation-icon-row" icon-path="/data/icons/generals/info.png"
                         title="事前予約制について"/>
          <img class="reservation-image" src="@/assets/reservation-info.webp">
        </router-link>
        <router-link :to="{name:'EventListView'}" class="hover-to-shrink">
          <IconRowButton icon-path="/data/icons/generals/list.webp" title="企画一覧"/>
        </router-link>
        <router-link to="/stages" class="hover-to-shrink">
          <IconRowButton icon-path="/data/icons/generals/schedule.webp" title="ステージイベント"/>
        </router-link>
        <router-link to="/pamphlet" class="hover-to-shrink">
          <IconRowButton icon-path="/data/icons/generals/book.webp" title="パンフレット"/>
        </router-link>
        <router-link to="/map" class="hover-to-shrink">
          <IconRowButton icon-path="/data/icons/generals/map.webp" title="マップをみる"/>
        </router-link>
        <router-link to="/access" class="hover-to-shrink">
          <IconRowButton icon-path="/data/icons/generals/access.webp" title="アクセス"/>
        </router-link>
      </div>
      <HomeSearchSection/>
    </div>
    <div class="home-row-2">
      <StarTitle title="コンテンツ"/>
      <SecondRowSwiper/>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  max-width: 1200px;
}

.menu-buttons {
  text-decoration: none;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5em;
  padding: 0.5em;

  > a {
    text-decoration: none;
  }
}

.sponsor-block {
  padding: 3em 0;
}

.home-row-1 {
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.home-row-2 {
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  .star-title {
    margin: 1em auto .5em auto;
  }
}

.home-row-3 {
  .star-title {
    margin: auto;
  }
}

.reservation-image {
  display: none;
}

@media screen and (min-width: 768px) {
  .home-row-1 {
    flex-direction: row;

    .menu-buttons {
      width: 50%;
    }

    .home-event-search-section {
      width: 50%;
    }
  }
  .reservation-image {
    padding: 0.3em;
    display: inline;
    width: 10em;
    object-fit: cover;
    border-radius: 0.8em;
  }
  .reservation-icon-row {
    display: none;
  }
}

</style>

