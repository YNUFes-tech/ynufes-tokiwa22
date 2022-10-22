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
    <div class="time">14:00~15:00</div>
  </div>
</template>

<script>
export default {
  name: "DateBlock"
}
</script>

<style scoped lang="scss">
.date-block {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: #eca50b;
  font-weight: bold;
  align-items: center;
  .date {
    justify-content: center;
    text-align: center;
    display: flex;
    font-size: 1.4em;
    align-items: center;
    padding-right: 1em;
  }

  .time {
    display: flex;
  }
}
</style>