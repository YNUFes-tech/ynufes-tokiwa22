<script setup>

const props = defineProps({
  iconPath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: '未指定'
  }
})
</script>
<template>
  <div class="home-button">
    <img class="icon" :src="props.iconPath">
    <div class="button-title" v-html="props.title"></div>
  </div>
</template>

<style scoped lang="scss">
.home-button {
  width: 80vw;
  max-width: 17em;
  display: flex;
  align-items: center;
  background: #0b0b56;
  border-radius: 10px;
  height: 40px;
  padding: 0.3em;

  .button-title {
    color: white;
    margin: auto;
  }

  .icon {
    height: 30px;
    object-fit: cover;
  }
}

@media screen and (min-width: 768px) {
  .home-button {
    display: flex;
    aspect-ratio: 1;
    height: auto;
    width: 10em;
    flex-direction: column;
    .icon{
      width: 70%;
      height: auto;
    }
  }
}
</style>