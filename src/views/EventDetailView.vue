<script setup>

</script>
<template>
  <div class="root-wrapper">
    <div class="event-detail fade-up">
      <div class="event-detail-title">
        <div class="org-name" v-text="this.$store.state.eventData.org_name">
        </div>
        <h1 class="event-title allow-wrap" v-text="this.$store.state.eventData.event_title">
        </h1>
        <div class="event-place">
          日時：全日<br>
          場所：{{ $store.state.eventData.event_place_text }}
        </div>
      </div>
      <div class="event-detail-description">
        <div class="event-icon">
          <img :src="$store.state.imgData.src?$store.state.imgData.src:'/icon/noimage.png'">
        </div>
        <div class="event-description">
          <p class="allow-wrap" v-text="this.$store.state.eventData.event_description"/>
        </div>
      </div>
      <div class="org-detail-description">
        <h2>団体説明</h2>
        <h3>{{ $store.state.eventData.org_name }}</h3>
        <p class="allow-wrap" v-text="this.$store.state.eventData.org_description">
        </p>
      </div>
      <div class="SNS">
<!--        画像のダウンロード元のサイト（https://icon-rainbow.com/tag/sns/）-->
        <a :href="`https://facebook.com/` + $store.state.eventData.sns_facebook" class="SNS-icon c-btn" target="_blank" rel="noopener noreferrer">
          <img src="../assets/facebook_icon.png">
        </a>
        <a :href="`https://twitter.com/` + $store.state.eventData.sns_twitter" class="SNS-icon c-btn" target="_blank" rel="noopener noreferrer">
          <img src="../assets/twitter_icon.png">
        </a>
        <a :href="`https://instagram.com/` + $store.state.eventData.sns_instagram" class="SNS-icon c-btn" target="_blank" rel="noopener noreferrer">
          <img src="../assets/instagram_icon.png">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.allow-wrap{
  white-space: pre-wrap;
}

.root-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;
  color: white;
}

.event-detail {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 50rem;
  padding: 5rem 0;
  background-size: contain;
}

.event-detail-title {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.event-title {
  font-size: 3.5rem;
  white-space: pre-wrap;
}

@media screen and (max-width: 41rem) {
  .event-title {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 31rem) {
  .event-title {
    font-size: 1.6rem;
  }
  .root-wrapper {
    padding: 0 2rem;
  }
}

.event-place {
  line-height: 1.5;
  font-size: 1.5rem;
}

p {
  letter-spacing: 5px;
  line-height: 2;
  text-align: left;

  &::first-letter {
    font-size: 2em;
  }

  &::first-line {
    line-height: 1.5;
  }
}

.event-detail-description {
  display: flex;
  align-items: flex-start;
  padding-bottom: 100px;
  padding-top: 50px;
}

@media screen and (max-width: 700px) {
  .event-detail-description {
    display: block;
  }
  .event-icon {
    display: flex;

    > img {
      margin: 0 auto;
    }
  }
}

.event-icon > img {
  max-width: 400px;
  width: 50vw;
  padding: 1rem;
  flex: 1;
}

.event-description {
  width: 100%;
  text-transform: capitalize;
  padding: 1rem;
}

.SNS{
  display: flex;
  justify-content: center;
  padding-top: 5rem;
}

.SNS-icon img{
  max-width: 100px;
  width: 40%;
  margin: 1rem;
}

.c-btn{
  transition: transform 0.2s;
}
.c-btn:hover {
  transform: scale(1.5, 1.5);

}


.fade-up {
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