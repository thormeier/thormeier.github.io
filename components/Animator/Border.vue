<template>
  <div
    :class="{
      'no-animation': !toggledOnce || noAnimation,
      'is-active': isActive,
      'is-inactive': !isActive,
    }"
    class="curved-border"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  isActive: boolean
  noAnimation?: boolean
}>(), {
  isActive: false,
  noAnimation: false,
})

const toggledOnce = ref(false)

watch(() => props.isActive, () => {
  toggledOnce.value = true
})
</script>
