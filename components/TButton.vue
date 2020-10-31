<template>
  <button class="button py-2 px-3 text-xl font-script">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      toggledOnce: false
    }
  },

  watch: {
    isOpen() {
      this.toggledOnce = true
    }
  }
}
</script>

<style scoped>
.button {
  outline: none;
  background-color: transparent;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  background-image: url('../assets/svg/highlight.svg?external');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
</style>
