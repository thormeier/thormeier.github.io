<template>
  <button class="button" :class="{ 'border-2 border-black rounded-curved': hasBorder }">
    <Highlight class="absolute top-[50%] left-[50%] w-auto h-auto max-h-full max-w-full z-0 -translate-[50%]" />
    <div class="relative z-1">
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>
import Highlight from '@/assets/svg/highlight.svg?skipsvgo'

withDefaults(defineProps<{
  hasBorder?: boolean
}>(), {
  hasBorder: true,
})
</script>
