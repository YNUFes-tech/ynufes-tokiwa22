<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true,
    default: () => {
      return "10.28"
    }
  },
  time: {
    type: String
  },
  date_color: {
    type: Number,
    default: 1
  }
})
let color_style;
switch (props.date_color) {
  case 1:
    color_style = {
      background: "#eca50b",
      color: "#25254d"
    };
    break;
  case 2:
    color_style = {
      background: "#0f97f8",
      color: "#ffffff"
    };
    break;
  case 3:
    color_style = {
      background: "#f54108",
      color: "#ffffff"
    };
    break;
}
</script>

<template>
  <div class="date-block" :style="color_style">
    <div class="date">{{ props.date }}</div>
    <div class="time">{{ props.time }}</div>
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