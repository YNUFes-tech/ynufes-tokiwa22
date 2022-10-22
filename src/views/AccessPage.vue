<template>
  <div class="content fade-up" @click="null">
    <div class="title-frame"><StarTitle title="アクセス"/> </div>
    <div class="modal-content">
      <p>
        22常盤祭では、感染症対策の観点から事前予約制を導入します。チケットの無い方はご入場いただけませんのでご了承下さい。
      </p>
      <UnderlinedSectionTitle><span>事前予約制への</span><span>申し込み方法</span></UnderlinedSectionTitle>
      <div class="event-application-buttons">
        <a href="https://e-ve.event-form.jp/event/39275/TokiwaDay1" target="_blank" rel="noopener noreferrer">
          1日目(10/28)分はこちら
        </a>
        <a href="https://e-ve.event-form.jp/event/39472/TokiwaDay2" target="_blank" rel="noopener noreferrer">
          2日目(10/29)分はこちら
        </a>
        <a href="https://e-ve.event-form.jp/event/39672/TokiwaDay3" target="_blank" rel="noopener noreferrer">
          3日目(10/30)分はこちら
        </a>
      </div>
      <UnderlinedSectionTitle>定員について</UnderlinedSectionTitle>
      <ul>
        <li>大学側との協議により1日当たり<b>4000人</b>となります。</li>
        <li><b>当日枠等は設けておりません</b>。来場をご希望の方は<b>必ず</b>事前予約をお願いいたします。</li>
      </ul>
      <UnderlinedSectionTitle>チケットについて</UnderlinedSectionTitle>
      <ul>
        <li>4歳以上の方のご入場には、一人一枚ずつのチケットが必要です。(3歳までのお子様は保護者の方と一緒にご入場できます。)</li>
        <li>22常盤祭の来場チケットは、<b>メール宛にお送りするQRコード</b>です。当日は入場・退場時に読み取ることで受付を行います。</li>
        <li>多くの方にご入場いただくため、各日程１人１枚のお申込みとなります(複数日程の申し込みは可能です。)</li>
        <li>お連れ様と一緒にお申込みいただけます(4人まで)</li>
      </ul>
      <UnderlinedSectionTitle>抽選について</UnderlinedSectionTitle>
      <ul>
        <li>抽選結果は、<b>10/22(土)の18:00まで</b>にメールでお知らせします。</li>
        <li><b>落選の方は申し訳ありませんがご来場頂けません</b>。企画によって配信の予定もございますのでそちらもご覧ください。</li>
      </ul>
    </div>
    <router-link class="back-button" to="/">トップに戻る</router-link>
  </div>
</template>

<script>
import StarTitle from "@/components/StarTitle";
import UnderlinedSectionTitle from "@/components/utils/UnderlinedSectionTitle";
export default {
  name: "ReservationInfo",
  components: {UnderlinedSectionTitle, StarTitle}
}
</script>

<style scoped lang="scss">
.modal {
  overflow: scroll;
  overflow-x: hidden;
}

.content {
  box-sizing: border-box;
  width: min(90%, 60rem);
  background: white;
  color: #2c3e50;
  border-radius: 1em;
  overflow: hidden;

  span {
    display: inline-block;
  }

  .title-frame {
    padding: 1em 0;
    margin: 0;
    width: 100%;
    background: #25254d;
    color: white;
    .star-title{
      margin: 0 auto;
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

    ul {
      text-align: start;
      margin: 0 auto;
      line-height: 1.5;

      li {
        margin: 0.5em 0;
      }
    }

    p, ul {
      font-size: 1.3em;
    }
  }

  b {
    color: red;
    text-decoration: underline;
  }

  .back-button {
    text-decoration: none;
    padding: 0.8em 2em;
    border-radius: 2em;
    border: solid 0.1em  #25254d;
    width: fit-content;
    margin: 1em auto;
    font-size: 1.3em;
    color: #25254d;
    font-weight: bold;
  }

  .event-application-buttons {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: fit-content;
    gap: 0.5em;

    a {
      border-radius: 0.8em;
      font-size: 1.3em;
      color: rgb(44, 44, 44);
      width: fit-content;
      padding: 0.8em;

      &:nth-child(1) {
        background: #c5d2ef;
      }

      &:nth-child(2) {
        background: #aff6d6;
      }

      &:nth-child(3) {
        background: #f8c1e1;
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
</style>