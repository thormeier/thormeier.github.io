<template>
  <SvgoArrow
    :class="{
      animated: isActive,
      undrawn: !isActive,
    }"
    class="arrow"
  />
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  isActive: boolean
}>(), {
  isActive: false,
})
</script>
