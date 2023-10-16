<template>
  <component
    :is="ordered ? 'ol' : 'ul'"
    :class="ordered ? 'list-decimal' : 'list-disc'"
    class="mb-3 text-xl ml-5"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    ordered: {
      type: Boolean,
      default: false
    }
  }
}
</script>
