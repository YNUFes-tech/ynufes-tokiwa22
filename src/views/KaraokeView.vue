<template>
<div class="root-wrapper">
  <div class="title">
    <img src="@/assets/karaoke_logo.png">
  </div>
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
  <div class="information detail">
    <h1>企画詳細</h1>
    <p>
      開催日：10月28日（金）<br>
      時間：開演14:00/閉演15:40（予定）<br>
      場所：図書館1Fメディアホール
    </p>
  </div>
  <div class="information award-goods">
    <h1>気になる豪華景品はこちら！</h1>
    <img src="">
    <p>出演していただいた方にはもれなく全国で使えるビッグエコー室料50%OFFパスポートを贈呈します。</p>
  </div>
  <div class="information entry-flow">
    <h1>出演までの流れ</h1>
    <div class="step">
      <h2 class="yellow-marker">①<span>事前エントリー申し込み</span></h2>
      <p>申し込みフォームにメールアドレス・名前・歌いたい曲名とそのアーティスト名を入力した上で2点の同意事項を確認し、回答を送信する。</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSedpF4xnl0qb_rp_IWVVktUspFz0OL2jYmpMoLDigdFgsCF2w/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" class="btn bgleft"><span>申し込みフォームはこちら</span></a>
    </div>
    <div class="step">
      <h2 class="blue-marker">②<span>出演決定メールを受信</span></h2>
      <p>出演が決定した方にはメールを送信いたします。出演についての詳細をご確認ください。</p>
      <img src="@/assets/mail_icon.png">
    </div>
    <div class="step">
      <h2 class="pink-marker">③<span>会場に集合</span></h2>
      <p>当日に会場にお越しいただき、受付で出演決定メールをスマートフォンの画面等でご提示ください。出演者待機場所へご案内いたします。</p>
      <img src="@/assets/smartphone_icon.png">
    </div>
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


.yellow-marker > span{
  background: linear-gradient(transparent 80%, yellow 20%);
}

.blue-marker > span{
  background: linear-gradient(transparent 80%, turquoise 20%);
}

.pink-marker > span{
  background: linear-gradient(transparent 80%, hotpink 20%);
}

.title > img{
  max-width: 800px;
  width: 80vw;
}

.introduction{
  color: white;
  letter-spacing: 3px;
  line-height: 70px;
  padding-bottom: 100px;
}

.information{
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
}

.detail{
  display: inline-block;
  margin: 2rem;
  padding: 1rem;
  color: white;
  border: double white;
}

.detail:after {
  position: absolute;
  top:2px;
  left:-4px;
  content:"";
  height:100%;
  width:100%;
  z-index:-999;
  -webkit-transform: rotate(-1deg);
  -moz-transform: rotate(-1deg);
  background-color: #004b79;
}

.detail > p{
  line-height: 50px;
  letter-spacing: 2px;
}

.entry-flow{
  margin: 1rem auto;
  padding: 2rem;
  max-width: 700px;
  color: #1a447c;
  background-color: white;
  z-index: 3;
  border: double 10px #1a447c;
  /* 方眼紙模様 */
  background-image: linear-gradient(0deg, transparent calc(100% - 1px), #f0f0f0 calc(100% - 1px)),
  linear-gradient(90deg, transparent calc(100% - 1px), #f0f0f0 calc(100% - 1px));
  background-size: 16px 16px;
  background-repeat: repeat;
  background-position: center center;

}


.step{
  padding: 40px 0;
  line-height: 50px;
  letter-spacing: 1px;
}

.step > p{
  text-align: left;
}

.step > h2{
  text-align: left;
}

.step > img{
  width: 15rem;
  text-align: center;
}

.step > a{
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


.award-goods{
  display: inline-block;
  max-width: 500px;
  margin: 2rem;
  padding: 1rem;
  color: white;
  border: double white;
}

.award-goods:after {
  position: absolute;
  top:2px;
  left:-4px;
  content:"";
  height:100%;
  width:100%;
  z-index:-999;
  -webkit-transform: rotate(-1deg);
  -moz-transform: rotate(-1deg);
  background-color: #6D436E;
}

.award-goods > p{
  line-height: 50px;
  letter-spacing: 3px;
  text-align: left;
}

@media (max-width: 320px){
  p,a,h2{
    font-size: 1rem;
    letter-spacing: 1px;
    line-height: 2.5rem;
  }
  h1{
    font-size: 1.5rem;
  }
  .detail{
    padding: 2rem;
    margin: 1rem;
  }
  .award-goods{
    padding: 2rem;
    margin: 1rem;
  }
  .information{
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .step > img{
    width: 50vw;
  }
}

@media (min-width: 2000px){
  .entry-flow{
    max-width: 1200px;
  }
}


</style>