<script setup></script>

<template>
  <h2 class="underlined-section-title">
    <slot/>
  </h2>
</template>

<style scoped>
.underlined-section-title {
  font-weight: bolder;
  font-size: 1.8em;
  width: fit-content;
  margin: 0.5em auto 1em;
}

.underlined-section-title:after {
  content: "";
  float: left;
  background: #b49b29;
  width: 100%;
  height: 6px;
  border-radius: 3px;
}
</style>
