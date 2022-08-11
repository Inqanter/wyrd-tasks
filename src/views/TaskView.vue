<template>
  <article class="task-modal">
    <form class="task-modal__form" @submit.prevent="submit">
      <input type="text" class="task-modal__input" v-model="task.name" />
      <textarea
        class="task-modal__textarea"
        rows="5"
        cols="5"
        v-model="task.description"></textarea>
    </form>
  </article>
</template>

<script setup>
import { useTasksStore } from "../stores/tasks";
import { computed } from "vue";
import { useRoute } from "vue-router";
const tasksStore = useTasksStore();
const route = useRoute();
const task = computed(() => tasksStore.getTask(route.params.id));
</script>

<style lang="scss">
.task-modal__input {
  display: block;
  font-family: $font--primary;
  font-size: 18px;
  line-height: 1.5;
  color: var(--color-light);
  width: 100%;
  padding-bottom: 5px;
  margin: 0 0 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--color-border-main);
  outline: none;
}

.task-modal__textarea {
  display: block;
  font-family: $font--primary;
  font-size: 18px;
  line-height: 1.5;
  color: var(--color-light);
  width: 100%;
  height: 200px;
  background-color: transparent;
  border: 1px solid var(--color-border-main);
  resize: none;
  outline: none;
}

.task-modal__input:focus,
.task-modal__textarea:focus {
  outline: none;
}
</style>
