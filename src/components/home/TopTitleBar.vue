<template>
  <div id="top-title-bar">
    <div>
      <div class="title">星彩</div>
      <div class="date">
        <p class="date-text">
          事前予約制
          <br>
          2022.9.28(金)~30(日)<br>@横浜国立大学
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#top-title-bar {
  width: 100vw;
  position: relative;
  display: flex;
  padding-bottom: 30px;
  margin: 0 auto;
  justify-self: center;

  > div {
    display: flex;
    flex-direction: column;
    margin: auto;

    .title {
      font-size: 100px;
    }

    .date {
      padding-top: 10px;
      text-align: end;
      margin: 0 3em;
      font-size: 20px;
    }
  }
}

@media screen and (min-width: 768px) {
  #top-title-bar {
    height: 400px;
    align-items: center;
    justify-content: center;

    > div {
      flex-direction: row;
      width: 100%;
      align-items: center;

      .title {
        width: 50%;
        margin: 0;
        text-align: right;
        font-size: min(150px, 20vw);
      }

      .date {
        width: 50%;
        margin: 0;
        align-self: flex-end;
        display: flex;
        font-size: 24px;
        justify-content: center;
      }
      .date-text{
      }
    }
  }
}

</style>