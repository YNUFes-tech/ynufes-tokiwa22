<script setup>
import HeaderView from "@/components/HeaderView";
</script>

<template>

  <div class="wrapper">
<!--    <div id="loader" style="color: white;font-family: 'Kaisei Decol', serif;">
      <div style="font-size: 6rem;font-family: 'Kaisei Decol', serif;">花笑み</div>
      <div style="font-size: 3rem; text-align: center;">22清陵祭</div>
      <div style="font-size: 1.5rem; line-height: 1.1; text-align: center; padding-bottom: 2rem">横浜国立大学<br>オンライン大学祭
      </div>
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
    </div>-->

    <HeaderView class="fadeUp" id="header"/>
    <div  id="body-frame">
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>



<style>
body {
  margin: 0 auto;
}
#app {
  font-family:  'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#body-frame {
  padding-top: 70px;
}

</style>
