<template>
  <li class="mb-6 md:mb-0 print:mb-0">
    <h4 class="text-lg print:text-xs font-bold mb-2">
      {{ label }}
    </h4>
    <ul>
      <ResumeTechnology v-for="(technology, i) in technologies" :key="`tech_${id}_${i}`" v-bind="technology" />
    </ul>
  </li>
</template>

<script lang="ts" setup>
import type { Technology } from '~/components/Resume/Technology.vue'

defineProps<{
  technologies: Technology[]
  id: string
  label: string
}>()
</script>
