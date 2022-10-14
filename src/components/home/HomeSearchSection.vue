<template>
  <div class="home-event-search-section">
    <StarTitle title="企画を探す" class="star-title"/>
    <div class="genre-buttons">
      <a>展示</a>
      <a>飲食</a>
      <a>パフォーマンス</a>
      <a>ゲーム・スポーツ</a>
    </div>
    <input class="search-bar">
  </div>
</template>
<style scoped lang="scss">
.home-event-search-section {
  width: 100%;
  display: flex;
  flex-direction: column;

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
      height: 2em;
      font-size: 1.2em;
      width: 40%;
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