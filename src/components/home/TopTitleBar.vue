<template>
  <div id="top-title-bar">
    <div>
      <div class="title">星彩</div>
      <div class="date">2022.9.28(金)~30(日)<br>@横浜国立大学<br>事前予約制</div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#top-title-bar {
  width: 100vw;
  position: relative;
  padding-bottom: 30px;
  margin: 0 auto;
  justify-self: center;

  > div {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    margin: auto;
    .title {
      font-size: 100px;
    }

    .date {
      padding-top: 10px;
      text-align: end;
      margin: 0 3em;
    }
  }
}
</style>