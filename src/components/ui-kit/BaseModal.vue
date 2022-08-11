<template>
  <div class="modal" v-if="show" @click.self="$emit('close')">
    <div class="modal__content">
      <slot></slot>
      <button class="modal__close" type="button" @click="$emit('close')">
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss">
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.modal__form {
  padding: 20px;
}

.modal__header {
  padding: 20px 50px;
  border-bottom: 1px solid var(--color-border-main);
}

.modal__title {
  font-family: $font--title;
  font-size: 18px;
  line-height: 26px;
  color: var(--color-wealth);
  text-transform: uppercase;
  text-align: center;
  margin: 0;
}

.modal__content {
  position: relative;
  width: 100%;
  max-width: 450px;
  padding: 50px 20px;
  background-color: var(--color-elements-main);
  z-index: 99;
}

.modal__message {
  padding: 20px;
}

.modal__message p {
  text-transform: uppercase;
  text-align: center;
  margin: 0;
}

.modal__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.modal__close span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 2px;
  transition: $transition--primary;
  background-color: var(--color-wealth);
}

.modal__close:hover span {
  background-color: #999999;
}

.modal__close span:first-child {
  transform: translate(-50%, -50%) rotate(45deg);
}

.modal__close span:nth-child(2) {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.modal__close--response span {
  background-color: var(--color-wealth);
}

@media only screen and ($mobile-width) {
  .modal {
    z-index: 99;
  }

  .modal--show {
    display: block;
  }

  .modal__close {
    width: 35px;
    height: 35px;
    top: 7px;
    right: 15px;
  }

  .modal__content {
    height: 100vh;
    max-width: 100%;
  }

  .modal__header {
    padding: 13px 50px;
  }

  .modal__title {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
