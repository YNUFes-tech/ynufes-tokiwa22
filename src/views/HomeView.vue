<script setup>
import TopTitleBar from "@/components/home/TopTitleBar";
import HomeSearchSection from "@/components/home/HomeSearchSection";
import IconRowButton from "@/components/home/IconRowButton";
// eslint-disable-next-line no-unused-vars
import SponsorBlock from "@/components/sponsor/SponsorBlock";
// eslint-disable-next-line no-unused-vars
import StarTitle from "@/components/StarTitle";
</script>
<template>
  <div class="home-wrapper">
    <TopTitleBar/>
    <SponsorBlock class="sponsor-block"/>
    <div class="home-row-1">
      <div class="menu-buttons">
        <router-link :to="{name:'EventListView'}">
          <IconRowButton icon-path="/data/icons/generals/list.webp" title="企画一覧"/>
        </router-link>
        <router-link to="/time-table">
          <IconRowButton icon-path="/data/icons/generals/schedule.webp" title="ステージタイムテーブル"/>
        </router-link>
        <router-link to="/map">
          <IconRowButton icon-path="/data/icons/generals/map.webp" title="マップをみる"/>
        </router-link>
        <router-link to="/access">
          <IconRowButton icon-path="/data/icons/generals/access.webp" title="アクセス"/>
        </router-link>
        <router-link to="/reservation">
          <IconRowButton class="reservation-icon-row" icon-path="/data/icons/generals/info.png"
                         title="事前予約制について"/>
          <img class="reservation-image" src="@/assets/reservation-info.webp">
        </router-link>
      </div>
      <HomeSearchSection/>
    </div>
<!--        <div class="home-row-2">-->
<!--          <StarTitle class="star-title" title="コンテンツ"/>-->
<!--        </div>-->
    <!--    <div class="home-row-3">-->
    <!--      <StarTitle class="star-title" title="お役立ち情報"/>-->
    <!--    </div>-->
    <!--    <div class="event-search-area">-->
    <!--    </div>-->
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

  .star-title {
    margin: auto;
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

