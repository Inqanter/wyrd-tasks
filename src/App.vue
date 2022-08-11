<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <section class="home">
    <div class="container">
      <RouterView />
    </div>
  </section>
</template>

<style lang="scss">
.home {
  padding: 80px 0;
}

.home__title {
  font-family: $font--title;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  margin: 0 0 40px;
}
</style>
