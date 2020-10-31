<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import InViewportMixin from 'vue-in-viewport-mixin'

export default {
  mixins: [InViewportMixin],

  watch: {
    inViewport: {
      deep: true,
      handler(newValue) {
        if (newValue.fully) {
          this.$emit('inViewport')
        }
      }
    }
  }
}
</script>
