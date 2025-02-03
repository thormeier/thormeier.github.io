<template>
  <li :id="`resume-box-${id}`" class="p-3 md:p-6 print:p-3 curved-border">
    <ResumeTitle :title="label" :icon-name="iconName" />
    <ul class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2">
      <ResumeBoxListPoint v-for="(point, i) in points" :key="i" v-bind="point" />
    </ul>
  </li>
</template>

<script lang="ts" setup>
import type { Point } from '~/components/Resume/BoxListPoint.vue'

export interface Box {
  id: string
  label: string
  iconName: string
  points: Point[]
}

defineProps<Box>()
</script>
