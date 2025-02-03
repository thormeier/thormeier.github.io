<template>
  <component
    :is="icon"
  />
</template>

<script lang="ts" setup>
defineProps<{
  filled?: boolean
  fontControlled?: boolean
  icon: object
}>()
</script>
