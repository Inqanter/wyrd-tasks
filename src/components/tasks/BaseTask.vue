<template>
  <article
    class="task"
    draggable="true"
    @dragstart="$emit('takeTask', $event)"
    @dragover.prevent
    @dragenter.prevent
    @click="$emit('showTask')">
    <div class="task__content">
      <p class="task__title">{{ title }}</p>
      <p v-if="description" class="task__description">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});
</script>

<style lang="scss">
.task {
  position: relative;
  padding: 10px;
  background-color: var(--color-elements-main);
}

.task__title {
  font-size: 16px;
  margin: 0;
}

.task__description {
  font-size: 14px;
  max-height: 48px;
  overflow: hidden;
  padding-top: 5px;
  margin: 0;
}
</style>
