<template>
  <div
    class="column"
    @dragover.prevent
    @dragenter.prevent
    @drop="$emit('dropTask', $event)">
    <p class="column__title">{{ title }}</p>
    <ul class="tasks-column__list list-default">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
.column {
  max-width: 350px;
  width: 100%;
}

.column__title {
  font-family: $font--title;
  font-size: 16px;
  margin: 0 0 20px;
  padding: 0 10px 10px 10px;
  border-bottom: 1px solid var(--color-border-main);
}

.column__item:not(:last-child) {
  margin-bottom: 20px;
}
</style>
