<template>
  <li class="text-base print:text-2xs mb-4">
    <div class="mb-1">
      {{ name }}
    </div>
    <div :aria-label="`${rating} out of 5`" class="flex gap-2 print:gap-1">
      <SvgoStar
        class="w-[15px] h-[15px]" :class="{
          'opacity-25': rating <= 0,
        }"
      />
      <SvgoStar
        class="w-[15px] h-[15px]" :class="{
          'opacity-25': rating <= 1,
        }"
      />
      <SvgoStar
        class="w-[15px] h-[15px]" :class="{
          'opacity-25': rating <= 2,
        }"
      />
      <SvgoStar
        class="w-[15px] h-[15px]" :class="{
          'opacity-25': rating <= 3,
        }"
      />
      <SvgoStar
        class="w-[15px] h-[15px]" :class="{
          'opacity-25': rating <= 4,
        }"
      />
    </div>
  </li>
</template>

<script lang="ts" setup>
export interface Technology {
  name: string
  rating: number
}

defineProps<Technology>()
</script>
