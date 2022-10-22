<template>
  <div class="content fade-up" @click="null">
    <h1>
      <span>22常盤祭は</span><span><b>事前予約制</b><span>です!!</span></span>
    </h1>
    <div class="modal-content">
      <p>
        22常盤祭では、感染症対策の観点から事前予約制を導入します。<br />チケットの無い方はご入場いただけませんのでご了承下さい。
      </p>
      <!-- <h2><span>事前予約制への</span><span>申し込み方法</span></h2> -->
      <UnderlinedSectionTitle
        >事前予約制への申し込み方法</UnderlinedSectionTitle
      >
      <div class="event-application-buttons">
        <p>
          一次申し込みで定員に達しなかったため、<br />10/28(金)分チケットの2次申し込みを行います。
        </p>
        <a
          href="https://e-ve.event-form.jp/event/39275/TokiwaDay1"
          class="second-application-button"
          >1日目(10/28)分はこちら</a
        >
        <ul>
          <li>
            ミスミスターコンテスト、花火大会など目玉企画もございます。是非お越しください！
          </li>
          <li>
            一次申し込み期間にお申し込みいただいた方宛にメールをお送りしております。
            ご確認ください。
          </li>
        </ul>
        <p>一次申し込みは終了いたしました。</p>
        <div><s> 2日目(10/29)分はこちら</s></div>
        <div><s> 3日目(10/30)分はこちら</s></div>
      </div>
      <!-- <h2>定員について</h2> -->
      <UnderlinedSectionTitle>定員について</UnderlinedSectionTitle>
      <ul>
        <li>大学側との協議により1日当たり<b>4000人</b>となります。</li>
        <li>
          <b>当日枠等は設けておりません</b
          >。来場をご希望の方は<b>必ず</b>事前予約をお願いいたします。
        </li>
      </ul>
      <UnderlinedSectionTitle>チケットについて</UnderlinedSectionTitle>
      <ul>
        <li>
          4歳以上の方のご入場には、一人一枚ずつのチケットが必要です。(3歳までのお子様は保護者の方と一緒にご入場できます。)
        </li>
        <li>
          22常盤祭の来場チケットは、<b>メール宛にお送りするQRコード</b>です。当日は入場・退場時に読み取ることで受付を行います。
        </li>
        <li>
          多くの方にご入場いただくため、各日程１人１枚のお申込みとなります(複数日程の申し込みは可能です。)
        </li>
        <li>お連れ様と一緒にお申込みいただけます(4人まで)</li>
      </ul>
      <UnderlinedSectionTitle>抽選について</UnderlinedSectionTitle>
      <ul>
        <li>
          抽選結果は、<b>10/22(土)の18:00まで</b>にメールでお知らせします。
        </li>
        <li>
          <b>落選の方は申し訳ありませんがご来場頂けません</b
          >。企画によって配信の予定もございますのでそちらもご覧ください。
        </li>
      </ul>
    </div>
    <div class="back-button-wrapper">
      <router-link class="back-button" to="/">トップに戻る</router-link>
    </div>
  </div>
</template>

<script>
import UnderlinedSectionTitle from "@/components/utils/UnderlinedSectionTitle.vue";
export default {
  name: "ReservationInfo",
  components: { UnderlinedSectionTitle },
};
</script>

<style scoped lang="scss">
.modal {
  overflow: scroll;
  overflow-x: hidden;
}

.content {
  box-sizing: border-box;
  width: min(90%, 50rem);
  background: white;
  color: #2c3e50;
  border-radius: 1em;
  overflow: hidden;

  span {
    // display: inline-block;
    display: inline;
  }

  h1 {
    padding: 1em 0;
    margin: 0;
    width: 100%;
    font-size: 2em;
    background: #25254d;
    color: white;

    b {
      color: white;
      font-size: 1.5em;
      margin: 0 0.1em;
      text-decoration: none;
    }
  }

  .modal-content {
    margin: 1em;
    background-image: url("@/assets/logo-seisai-trans08.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 1em;
    font-weight: bold;

    h2 {
      font-weight: bolder;
      font-size: 1.8em;
      width: fit-content;
      margin: 1em auto 1.2em;
    }

    h2:after {
      content: "";
      float: left;
      background: #b49b29;
      width: 100%;
      height: 6px;
      border-radius: 3px;
    }

    ul {
      text-align: start;
      margin: 0 auto;
      line-height: 1.5;

      li {
        margin: 0.5em 0;
      }
    }

    p,
    ul {
      font-size: 1em;
    }
  }

  b {
    color: red;
    text-decoration: underline;
  }

  .back-button-wrapper {
    margin: 80px auto;
  }
  .back-button {
    text-decoration: none;
    padding: 0.8em 2em;
    border-radius: 2em;
    border: solid 0.1em #25254d;
    width: fit-content;
    // margin: 100px auto;
    font-size: 1em;
    color: #25254d;
    font-weight: bold;
  }

  .event-application-buttons {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: fit-content;
    gap: 0.5em;

    div {
      border-radius: 0.8em;
      font-size: 1.3em;
      margin: 0 auto;
      color: rgb(132, 130, 130);
      width: fit-content;
      padding: 0.8em;
      text-decoration: none;
      background-color: #94949455;
    }
    .second-application-button {
      border-radius: 0.8em;
      font-size: 1.3em;
      margin: 0 auto;
      color: #2c2c2c;
      width: fit-content;
      padding: 0.8em;
      text-decoration: none;
      background-color: #c5d2ef;
    }
    p {
      color: red;
      font-size: 1.2em;
    }
    span {
      color: red;
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
</style>
