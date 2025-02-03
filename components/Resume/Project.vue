<template>
  <ResumePoint>
    <template #title>
      <span class="font-bold">
        {{ title }}
      </span>
    </template>

    <template #right>
      {{ techStack }}
    </template>

    <template #text>
      <p v-if="role">
        {{ role }}
      </p>
      <p>
        {{ what }}
      </p>
    </template>
  </ResumePoint>
</template>

<script lang="ts" setup>
export interface Project {
  title: string
  techStack: string
  role?: string
  what: string
}

defineProps<Project>()
</script>
