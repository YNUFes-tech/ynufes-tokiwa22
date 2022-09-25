<template>
<div class="root-wrapper">
  <img src="@/assets/karaoke_logo.png">
  <div class="introduction">
    <p>
    3年ぶりの開催となった常盤祭。<br>
    初日を盛り上げるのど自慢企画<br>
    「カラオケバトルin横国」では、<br>
    LIVE DAM Ai最新機種の採点機能を利用して<br>
    出演者が点数を競い合う白熱のバトルを繰り広げます。<br>
    あなたの歌声が1位に輝くかも!?<br>
    出演してくれた方全員に参加賞を贈呈いたします。
    </p>
  </div>
  <div class="information event-detail">
    <h1>企画詳細</h1>
    <p>
      開催日：10月28日（金）<br>
      時間：開演14:00/閉演15:40（予定）<br>
      場所：図書館1Fメディアホール
    </p>
  </div>
  <div class="information entry-flow">
    <h1>出演までの流れ</h1>
    <div class="step1">
      <h2>①事前エントリー申し込み</h2>
      <p>googleフォームにメールアドレス・名前・歌いたい曲名とそのアーティスト名を入力した上で2点の同意事項を確認し、回答を送信する。</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSedpF4xnl0qb_rp_IWVVktUspFz0OL2jYmpMoLDigdFgsCF2w/viewform?usp=sf_link" class="btn bgleft"><span>申し込みフォームはこちら</span></a>
    </div>
    <div class="step2">
      <h2>②出演決定メールを受信</h2>
      <p>出演が決定した方にはメールを送信いたします。出演についての詳細をご確認ください。</p>
      <img src="@/assets/mail_icon.png">
    </div>
    <div class="step3">
      <h2>③会場に集合</h2>
      <p>当日に会場にお越しいただき、受付で出演決定メールをスマートフォンの画面等でご提示ください。出演者待機場所へご案内いたします。</p>
      <img src="@/assets/smartphone_icon.png">
    </div>
  </div>
  <div class="information award-goods">
    <h1>気になる豪華景品はこちら！</h1>
    <img src="">
    <p>出演していただいた方にはもれなく全国で使えるビッグエコー室料50%OFFパスポートを贈呈します。</p>
  </div>
</div>
</template>

<script>
export default {
  name: "KaraokeView"
}
</script>

<style scoped>

.root-wrapper > img{
  width: 40rem;
}

.introduction{
  color: white;
  letter-spacing: 3px;
  line-height: 70px;
  padding-bottom: 100px;
}

.information{
  background-color: #ffffff90;
  border-radius: 50px;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 800px;
  margin: 50px auto;
  position: relative;
  color: black;
}

.event-detail > p{
  line-height: 50px;
  letter-spacing: 2px;
}

.step1{
  padding: 30px 80px;
  line-height: 50px;
  letter-spacing: 3px;
}

.step1 > a{
  margin: 30px auto;
}

.btn{
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #7f181b;
  padding: 10px 30px;
  text-align: center;
  outline: none;
  transition: ease .2s;
}

.btn span {
  position: relative;
  z-index: 3;
  color:#7f181b;
}

.btn:hover span{
  color:#fff;
}

.bgleft:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background:#7f181b;
  width: 100%;
  height: 100%;
  transition: transform .6s cubic-bezier(0.8, 0, 0.2, 1) 0s;
  transform: scale(0, 1);
  transform-origin: right top;
}

.bgleft:hover:before{
  transform-origin:left top;
  transform:scale(1, 1);
}

.step2{
  padding: 30px 80px;
  line-height: 50px;
  letter-spacing: 3px;
}

.step2 > img{
  width: 15rem;
}

.step3{
  padding: 30px 80px;
  line-height: 50px;
  letter-spacing: 3px;
}

.step3 > img{
  width: 15rem;
}

.award-goods > p{
  padding: 0 80px;
  line-height: 50px;
  letter-spacing: 3px;
}


</style>