<template>
  <div class="home-event-search-section">
    <StarTitle title="企画を探す" class="star-title"/>
    <div class="genre-buttons">
      <router-link to="/events?genre=1" class="exhibition hover-to-shrink">
        <div>展示</div>
      </router-link>
      <router-link to="/events?genre=10" class="food hover-to-shrink">
        <div>飲食</div>
      </router-link>
      <router-link to="/events?genre=2" class="performance hover-to-shrink">
        <div>パフォーマンス</div>
      </router-link>
      <router-link to="/events?genre=3" class="game hover-to-shrink">
        <div>
          <span>ゲーム・</span><span>スポーツ</span>
        </div>
      </router-link>
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
  height: fit-content;
  padding: 2em 0;

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
      font-size: 1.2em;
      width: 40%;
      line-height: 2;

      > div {
        border-radius: 0.5em;
        padding: 0.5em;
      }
    }

    .exhibition > div {
      background: #b36305;
    }

    .food > div {
      background: #0598d2;
    }

    .performance > div {
      background: #e32017;
    }

    .game > div {
      background: #00782a;
    }
  }

  span {
    display: inline-block;
  }

  @media screen and (max-width: 350px) {
    > a {
      font-size: 1em;
      padding: 0.2em
    }
  }
}
</style>
<script>
import StarTitle from "@/components/StarTitle";

export default {
  components: {StarTitle}
}
</script>