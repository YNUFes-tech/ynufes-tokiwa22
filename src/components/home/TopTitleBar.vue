<template>
  <div id="top-title-bar">
    <div>
      <div class="title">星彩</div>
      <div class="date">
        <div class="date-text">
          <div>
            事前予約制
          </div>
          <div>
            2022.10.28(金)~30(日)
          </div>
          <div>
            @横浜国立大学
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#top-title-bar {
  width: 100%;
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
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      text-align: end;
      margin: 1.5em 3em 1.8em 3em;
      font-size: 20px;
      align-items: flex-end;
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
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .title {
        width: 50%;
        margin: 0;
        max-width: 400px;
        text-align: right;
        font-size: min(150px, 20vw);
      }

      .date {
        max-width: 20em;
        width: 50%;
        margin: 0;
        align-self: flex-end;
        display: flex;
        font-size: 24px;
        justify-content: center;
        padding: 0 2em;
        box-sizing: border-box;
      }

      .date-text {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > div {
          padding: 0.1em;
          background: rgba(41, 55, 70, 0.77);
          width: fit-content;
        }
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  #top-title-bar {
    height: 500px;
  }
}

</style>