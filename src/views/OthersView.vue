<script setup>
import {event} from "vue-gtag";
import StarTitle from "@/components/StarTitle.vue";
if (process.env.NODE_ENV === "production") {
  event("page:OtherFes");
}

</script>
<template>
  <div class="content fade-up" @click="null">
    <div class="title">
      <StarTitle title="他大学祭のご紹介"/>
    </div>
    <div class="page-content">
      <div class="cell-holder">
        <a class="fes-cell fadeLeft" href="http://miyakomatsuri.com/" rel="noopener" target="_blank">
          <img alt="東京都立大学大学祭の紹介写真" src="@/assets/other_fes/miyako.webp"/>
          <div class="text-area">
            <div class="info-area">
              <div class="info-upper">
                <h1>みやこ祭</h1>
                <h2>東京都立大学</h2>
              </div>
              <div class="info-down">
                <hr>
                <h2>11/3~11/5</h2>
                <h2>対面+オンライン</h2>
              </div>
            </div>
            <div class="jump-area">
              <div>公式サイト<br>を見る</div>
            </div>
          </div>
        </a>
        <a class="fes-cell fadeLeft" href="https://www.kokushikan.ac.jp/campus_life/school_event/festival/setagaya/" rel="noopener" target="_blank">
          <img alt="国士館大学大学祭の紹介写真" src="@/assets/other_fes/kaede.webp"/>
          <div class="text-area">
            <div class="info-area">
              <div class="info-upper">
                <h1>楓門祭</h1>
                <h2>国士舘大学</h2>
              </div>
              <div class="info-down">
                <hr>
                <h2>11/2,11/3</h2>
                <h2>対面開催(限定)</h2>
              </div>
            </div>
            <div class="jump-area">
              <div>公式サイト<br>を見る</div>
            </div>
          </div>
        </a>
        <a class="fes-cell fadeLeft" href="https://mutsume.com/" rel="noopener" target="_blank">
          <img alt="埼玉大学大学祭の紹介写真" src="@/assets/other_fes/mutume.webp"/>
          <div class="text-area">
            <div class="info-area">
              <div class="info-upper">
                <h1>むつめ祭</h1>
                <h2>埼玉大学</h2>
              </div>
              <div class="info-down">
                <hr>
                <h2>11/25~11/27</h2>
                <h2>対面開催</h2>
              </div>
            </div>
            <div class="jump-area">
              <div>公式サイト<br>を見る</div>
            </div>
          </div>
        </a>
      </div>
      <div class="back-button-wrapper">
        <router-link class="back-button" to="/">トップに戻る</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  box-sizing: border-box;
  width: min(90%, 50rem);
  background: white;
  color: #2c3e50;
  border-radius: 1em;
  overflow: hidden;

  span {
    display: inline;
  }

  .title {
    padding: 1em 0;
    margin: 0;
    width: 100%;
    background: #25254d;
    color: white;
    .star-title{
      margin: 0 auto;
    }
  }

  .page-content {
    margin: 1em;
    background-image: url("@/assets/logo-seisai-trans08.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 1em;
    font-weight: bold;

    .access-map {
      border-radius: 2em;
      aspect-ratio: 1.4;
      width: calc(100% - 2em);
    }

    h2 {
      font-weight: bolder;
      font-size: 1.8em;
      width: fit-content;
      margin: 1em auto 1.2em;
    }

    .nearest-stations {
      width: fit-content;
      text-align: start;
      margin: 0 auto;
      line-height: 1.5;

      li {
        margin: 0.5em auto;
      }
    }



    .back-button-wrapper {
      margin: 100px auto 60px;
      position: relative;
      width: fit-content;

      .back-button {
        text-decoration: none;
        padding: 0.8em 1.5em 0.8em 2.5em;
        border-radius: 2em;
        border: solid 0.1em #25254d;
        width: fit-content;
        font-size: 1em;
        color: #25254d;
        font-weight: bold;
        margin-top: 32px;
      }

      .back-button::before {
        content: "";
        background: url("../assets/goto_top_icon.webp") no-repeat;
        background-size: contain;
        position: absolute;
        top: 55%;
        left: 12%;
        transform: translate(0, -50%);

        vertical-align: middle;
        padding-right: 5px;
        width: 16px;
        height: 16px;
      }
    }
  }
}

.fade-up {
  animation-delay: 0.5s;
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cell-holder {
  width: unquote("min(100% - 1rem, 80rem)");
  justify-content: center;
  gap: 2em;
  display: flex;
  flex-wrap: wrap;
}

.fes-cell {
  text-decoration: none;
  display: flex;
  overflow: hidden;
  border-radius: 2rem;
  aspect-ratio: 2;
  flex-shrink: 0;
  width: unquote("min(100% - 1rem, 600px)");
  background: white;
  position: relative;
  box-shadow: 0 19.2px 19.8px rgba(0, 0, 0, 0.092),
  0 38.4px 34.8px rgba(0, 0, 0, 0.1);

  img {
    position: absolute;
    height: 100%;
    aspect-ratio: 1.2;
    object-fit: cover;
  }


  &:hover {
    .text-area {
      transform: translateX(0);
    }
  }

  .text-area {
    aspect-ratio: 2;
    height: 100%;
    background: white;
    z-index: 50;
    border-radius: 2rem;
    display: flex;
    flex-direction: row;
    transform: translateX(50%);
    transition: all 0.3s ease-in-out;


    .info-area {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 2rem;
      background: linear-gradient(90deg, #0b0b56, #151561);
      //background: #0b0b56;
      //background: #151561;
      box-shadow: 0 19.2px 19.8px rgba(0, 0, 0, 0.092),
      0 38.4px 34.8px rgba(0, 0, 0, 0.1);
      color: white;

      h1 {
        margin: 0;
        text-align: center;
        font-size: 3em;
        font-style: normal;
      }


      .info-upper {
        width: 100%;
        height: 50%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-end;

        h2 {
          margin: 0;
        }
      }

      .info-down {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        hr {
          width: calc(100% - 20px);
          color: white;
          border: solid 1px;
          margin: 10px;
        }

        h2 {
          font-style: normal;
          margin: 0;
          font-size: 1.8em;
          width: 100%;
          text-align: center;
        }
      }
    }

    .jump-area {
      justify-content: center;
      height: 100%;
      aspect-ratio: 1;
      color: #0b0b56;
      display: flex;

      div {
        font-size: 2.5em;
        text-align: center;
        margin: auto;
      }
    }
  }

  &:nth-child(1) {
    animation-delay: .5s;
  }

  &:nth-child(2) {
    animation-delay: .7s;
  }


  @media screen and (max-width: 530px) {
    font-size: 13px;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
  @media screen and (max-width: 370px) {
    font-size: 9px;
  }
}
</style>