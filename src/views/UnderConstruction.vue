<template>
  <div class="fade-up">
    <div class="under-construction-title">
      このページは準備中です!<br>公開までしばらくお待ちください
    </div>
<!--    <router-link to="/">-->
    <router-link class="back-button" to="/">
<!--      <div class="back-button">-->
        ホームに戻る
<!--      </div>-->
    </router-link>
<!--    </router-link>-->
  </div>
</template>

<script>
</script>

<style scoped>
.under-construction-title {
  display: flex;
  width: fit-content;
  height: 5em;
  justify-content: center;
  align-items: center;
  margin: 10vh auto;
  font-size: min(8vw, 2em);
  background: #03061ABB;
}

.back-button {
  text-decoration: none;
  padding: 0.8em 2em;
  border-radius: 2em;
  border: solid 0.1em white;
  width: fit-content;
  margin: 1em auto;
  font-size: 1.3em;
  color: white;
  font-weight: bold;
}
</style>