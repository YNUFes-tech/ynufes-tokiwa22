<template>
  <div class="content fade-up" @click="null">
    <div class="title">
      <StarTitle title="アクセス"/>
    </div>
    <div class="page-content">
      <iframe
          class="access-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.307113456039!2d139.58968321581605!3d35.47194454902769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2sYokohama%20National%20University!5e0!3m2!1sen!2sjp!4v1666620182419!5m2!1sen!2sjp"
          style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"/>
      <UnderlinedSectionTitle>バスでのアクセス</UnderlinedSectionTitle>
      <p>
        横浜駅バス乗り場より、20〜30分で大学最寄のバス停(徒歩5分圏内)に到着いたします。
      </p>
      <div class="accesslink-button-wrapper">
        <a href="https://www.ynu.ac.jp/campus/guide/handbook/pdf/ori_04.pdf"
           class="accesslink-button">詳細はこちら</a>
      </div>

      <UnderlinedSectionTitle>電車でのアクセス</UnderlinedSectionTitle>
      <ul class="nearest-stations">
        <li>
          横浜市営地下鉄ブルーライン「三ツ沢上町駅」より正門まで徒歩16分<br/>高低差：低
        </li>
        <li>
          相鉄線「和田町駅」より南門・南通用門まで徒歩20分<br/>高低差：高
        </li>
        <li>
          相鉄・JR直通線「羽沢横浜国大駅」より北門・西門まで徒歩15分<br/>高低差：中
        </li>
      </ul>
      <div class="accesslink-button-wrapper">
        <a
            href="https://www.ynu.ac.jp/campus/guide/handbook/pdf/ori_04.pdf"
            class="accesslink-button"
        >詳細はこちら</a
        >
      </div>
      <div class="back-button-wrapper">
        <router-link class="back-button" to="/">トップに戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UnderlinedSectionTitle from "@/components/utils/UnderlinedSectionTitle.vue";
import StarTitle from "@/components/StarTitle";

export default {
  name: "ReservationInfo",
  components: {StarTitle, UnderlinedSectionTitle},
};
</script>

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

    .accesslink-button-wrapper {
      margin: 40px auto 60px;

      .accesslink-button {
        text-decoration: none;
        padding: 0.8em 2em;
        border-radius: 2em;
        border: solid 0.1em #25254d;
        width: fit-content;
        font-size: 1em;
        color: #25254d;
        font-weight: bold;
      }
    }

    .back-button-wrapper {
      margin: 200px auto 60px;
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
</style>
