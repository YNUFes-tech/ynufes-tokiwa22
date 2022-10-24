<template>
<div class="root-wrapper fade-up">
  <h1>22常盤祭ポスター展覧会</h1>
  <p>22常盤祭開催にあたり計4点のポスター案の応募をいただきました。<br>選考の結果、今回のポスターは以下の作品に決定しました。</p>
  <div class="selected">
    <img src="@/assets/poster.webp">
    <p>経営学部経営学科2年<br><span>よる</span>さんの作品</p>
  </div>
  <div class="others">
    <h2>その他の作品</h2>
    <p>他3点の作品全てご紹介させていただきます。<br>ご応募ありがとうございました。</p>
    <div class="other-images">
      <div class="option">
        <img src="@/assets/poster1.webp">
        <div class="mask">
          <p class="caption">都市科学部都市社会共生学科4年<br><span>そうざい</span>さんの作品</p>
        </div>
      </div>
      <div class="option">
        <img src="@/assets/poster.webp">
        <div class="mask">
          <p class="caption">教育学部学校教育課程4年<br><span>サイ</span>さんの作品</p>
        </div>
      </div>
      <div class="option">
        <img src="@/assets/poster3.webp">
        <div class="mask">
          <p class="caption">経営学部経営学科2年<br><span>メロンソーダ</span>さんの作品</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PosterView"
}
</script>

<style scoped>
h1{
  padding-top: 2em;
}

p{
  line-height: 3rem;
  letter-spacing: 2px;
}

.selected{
  margin: 50px auto;
  padding: 20px;
  max-width: 700px;
  width: 80vw;
  background-color: white;
  color: #1a447c;
  border-radius: 30px;
  border: double 7px #1a447c;
}

.selected > img{
  text-align: center;
  margin: 30px auto;
  max-width: 550px;
  width: 60vw;
}

.selected > p > span{
  font-size: 2rem;
}

.others{
  max-width: 900px;
  margin: 0 auto;
  padding: 50px;
  text-align: left;
}

.other-images{
  text-align: center;
}

.option{
  display: inline-block;
  margin: 25px;
  position: relative;
  overflow: hidden;
}

.option > img{
  max-width: 250px;
}

.option .mask {
  width:			100%;
  height:			99%;
  position:		absolute;
  top:			0;
  left:			0;
  opacity:		0;
  background-color:	rgba(0,0,0,0.7);
  -webkit-transition:	all 0.2s ease;
  transition:		all 0.2s ease;
}

.option:hover .mask {
  opacity:		1;
}

.caption{
  font-size: 0.7rem;
  line-height: 2rem;
}

.caption > span{
  font-size: 1rem;
}

</style>