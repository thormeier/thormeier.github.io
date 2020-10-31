<template>
  <viewport-watcher @inViewport="$emit('inViewport')">
    <border-animator :is-active="isActive">
      <div class="p-6">
        <h2 class="font-script text-2xl md:text-3xl mb-6 flex">
          <slot name="title"></slot>
        </h2>

        <slot></slot>
      </div>
    </border-animator>
  </viewport-watcher>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
