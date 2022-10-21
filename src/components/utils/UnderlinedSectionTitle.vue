<script setup>
</script>

<template>
  <h2>
    <slot/>
  </h2>
</template>

<style scoped>
h2 {
  font-weight: bolder;
  font-size: 1.8em;
  width: fit-content;
  margin: 0.5em auto;
}

h2:after {
  content: "";
  float: left;
  background: #b49b29;
  width: 100%;
  height: 6px;
  border-radius: 3px;
}
</style>