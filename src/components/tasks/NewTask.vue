<template>
  <div class="new-task">
    <button class="new-task__button" type="button" @click="newTaskClickHander">
      Добавить карточку
    </button>
    <form
      v-if="isVisible"
      class="new-task__form"
      @submit.prevent="$emit('submitEmit')">
      <textarea
        v-focus
        class="new-task__textarea"
        rows="2"
        cols="5"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"></textarea>
      <div class="new-task__controls">
        <button
          class="new-task__submit"
          type="submit"
          aria-label="Отправить"></button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vFocus } from "@/directives/vFocus";
defineProps({
  modelValue: {
    type: String,
    required: false
  }
});
const isVisible = ref(false);
const newTaskClickHander = () => (isVisible.value = !isVisible.value);
</script>

<style lang="scss">
.new-task__button {
  display: block;
  font-family: $font--primary;
  font-size: 16px;
  line-height: 1.5;
  text-align: start;
  color: var(--color-light);
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  background-color: var(--color-blue-soft);
}

.new-task__form {
  background-color: var(--color-elements-main);
}

.new-task__textarea {
  font-family: $font--primary;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-light);
  width: 100%;
  padding: 5px 10px;
  resize: none;
  height: 100%;
  background-color: var(--color-elements-main);
  border: none;
}

.new-task__textarea::placeholder {
  color: var(--color-light-darker);
}

.new-task__textarea:focus {
  outline: none;
}

.new-task__controls {
  display: flex;
  justify-content: flex-end;
}

.new-task__submit {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  padding: 0;
  color: var(--color-light);
  border: none;
  background-color: transparent;
}

.new-task__submit::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 50%;
  background-color: var(--color-light);
}

.new-task__submit::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 2px;
  height: 50%;
  background-color: var(--color-light);
}
</style>
