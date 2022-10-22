<script setup>
const props = defineProps({
  "date": {
    type: String,
    required: true,
    default: () => {
      return "10.28"
    }
  }
})

</script>

<template>
  <div class="date-block">
    <div class="date">{{ props.date }}</div>
    <div class="time">14:00<br>~15:00</div>
  </div>
</template>

<script>
export default {
  name: "DateBlock"
}
</script>

<style scoped lang="scss">
.date-block {
  overflow: hidden;
  border-radius: 20px;
  border: solid #03061A 2px;
  background: #fffffff5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .date {
    justify-content: center;
    text-align: center;
    padding-top: 0.1em;
    background: #ecb731;
    height: 3em;
    font-size: 1.5em;
    display: flex;
    align-items: center;
  }


  .time {
    padding: 0.3em 0;
    line-height: 1.2;
    color: #03061A;
    width: 110px;
    font-size: 20px;
  }
}
</style>