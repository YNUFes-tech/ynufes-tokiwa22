<template>
  <div class="home-event-search-section">
    <StarTitle title="企画を探す" class="star-title"/>
    <div class="genre-buttons">
      <router-link to="/events">展示</router-link>
      <router-link to="/events">飲食</router-link>
      <router-link to="/events">パフォーマンス</router-link>
      <router-link to="/events">ゲーム・スポーツ</router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-event-search-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(21, 21, 35, 0.7);
  border-radius: 2em;

  .star-title {
    margin: .5em auto;
    justify-self: center;
  }

  .genre-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;

    > a {
      text-decoration: none;
      color: white;
      height: 2em;
      font-size: 1.2em;
      width: 40%;
      line-height: 2;
      border-radius: 0.5em;
      background: #2c3e50;
      padding: 0.5em;
    }
  }

  .search-bar {

  }

}
</style>
<script>
import StarTitle from "@/components/StarTitle";

export default {
  components: {StarTitle}
}
</script>