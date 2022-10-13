<script setup>
import {onMounted} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: "#ecece5b3"
  }
})

const tailColor = "background: radial-gradient(ellipse at right, " + props.color + " 0%, #44444455 80%, #11111100 100%);";
onMounted(() => {
  let targets = document.querySelectorAll('.star-animation-title')
  window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    var h = window.innerHeight;
    for (let target of targets) {
      var pos = target.getBoundingClientRect().top + scroll;
      if (scroll + h - 50 > pos && scroll - 100 < pos) {//スクロール量 > アニメーションさせたい要素の位置
        target.classList.add('star-animation');
      } else {
        target.classList.remove('star-animation')
      }
    }
  })
})
</script>
<template>
  <div class="star-animation-title star-animation">
    <div class="star-animation-title-text">{{ props.title }}</div>
    <div class="star-animation-title-tail" :style="tailColor"/>
  </div>
</template>

<style scoped lang="scss">
.star-animation-title-tail {
  width: 100%;
  height: 5px;
  padding: 2px 0;
  position: relative;
  opacity: 0;
}

.star-animation-title-text {
  font-size: 1.5em;
  padding: 0 0.3em;
}


.star-animation {
  .star-animation-title-tail {
    animation: comet 1s forwards;
    animation-delay: 0.3s;

    &::before {
      animation-delay: 0.3s;
      animation: star-rotate 1s forwards;
    }
  }
}

.star-animation-title-tail::before {
  content: "";
  vertical-align: middle;
  background-size: cover;
  width: 20px;
  height: 20px;
  background: url("@/assets/star-white.webp") left center no-repeat;
  position: absolute;
  right: -10px;
  top: -9.5px;
  background-size: 20px 20px;
}

.star-animation-title {
  color: white;
  width: fit-content;
  font-size: 2em;
}

@keyframes comet {
  from {
    opacity: 0;
    height: 0;
    width: 0;
  }
  to {
    opacity: 1;
    height: 1px;
    width: 100%;
  }
}

@keyframes star-rotate {
  from {
    transform: rotate(-120deg);
  }
  to {
    transform: rotate(0);
  }
}

</style>