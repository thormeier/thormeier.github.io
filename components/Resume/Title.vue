<template>
  <h3 class="font-script text-2xl md:text-3xl print:text-lg mb-6 print:mb-3 flex items-center">
    <span class="resume-box-title relative -my-5 py-5">
      <Highlight aria-hidden="true" class="w-full h-full absolute inset-0" width="100%" height="100%" />
      <span class="z-2 relative flex items-center">
        <component :is="getIcon(iconName)" v-if="iconName !== undefined" class="w-icon h-icon print:w-[20px] print:h-[20px] mr-5" aria-hidden="true" />
        {{ title }}
      </span>
    </span>
  </h3>
</template>

<script lang="ts" setup>
import Highlight from '@/assets/svg/highlight.svg?skipsvgo'

defineProps<{
  title: string
  iconName?: string
}>()

function getIcon(id: string) {
  return defineAsyncComponent(() => import(`@/assets/svg/${id}.svg`))
}
</script>
