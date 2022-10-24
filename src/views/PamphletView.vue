<script setup>
// import UnderlinedSectionTitle from "@/components/utils/UnderlinedSectionTitle.vue";
import StarTitle from "@/components/StarTitle";
import {ref} from "vue";
import SimpleModal from "@/components/pamphlet/WarningDialog";

const showDialog = ref(false)
</script>
<template>
  <div class="content fade-up" @click="null">
    <div class="page-title">
      <StarTitle title="パンフレット"/>
    </div>
    <SimpleModal :is-visible="showDialog" @close="showDialog=false"/>
    <div class="page-content">
      <div class="top-description">
        <span>22常盤祭のパンフレットは</span><span>こちらからダウンロードして</span><span>ご覧いただけます。</span>
      </div>
      <div class="download-buttons">
        <div class="download-button">
          パンフレット<br>軽量版<br>(20.7MB)<br>
        </div>
        <a class="download-button" @click="showDialog=true">
          パンフレット<br>オリジナル版<br>(127MB)<br>
        </a>
      </div>
    </div>
    <div class="back-button-wrapper">
      <router-link class="back-button" to="/">トップに戻る</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-description {
  font-size: 1.5em;
  padding: 0 1em;
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

  .page-title {
    padding: 1em 0;
    margin: 0;
    width: 100%;
    background: #25254d;
    color: white;

    .star-title {
      margin: 0 auto;
      @media screen and (max-width: 420px) {
        font-size: 20px;
      }
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
  }

  b {
    color: red;
    text-decoration: underline;
  }

  .back-button-wrapper {
    margin: 80px auto;
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

  .download-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .download-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3em;
      flex-grow: 1;
      padding: 1em;
      border: #171749 1px solid;
      border-radius: 2em;
      margin: 1em;
      max-width: 15em;
      box-sizing: border-box;
      aspect-ratio: 1.7;
    }
  }
}
</style>
