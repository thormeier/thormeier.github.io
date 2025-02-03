<template>
  <ResumePoint>
    <template #title>
      <span class="font-bold">{{ title }}</span>
      <span class="md:whitespace-no-wrap print:text-xs">
        (<template
          v-if="!dateEnd"
        >since </template>{{ dateStartFormatted
        }}<template
          v-if="dateEnd"
        >
          &ndash; {{ dateEndFormatted }}</template>)
      </span>
    </template>

    <template #right>
      {{ where }}
    </template>

    <template #text>
      {{ what }}
    </template>
  </ResumePoint>
</template>

<script lang="ts" setup>
export interface Point {
  title: string
  dateStart: string
  dateEnd?: string
  where?: string
  what: string
}

const props = defineProps<Point>()

function formatDate(date: string) {
  const d = new Date(date)

  const year = d.getFullYear()
  const month = (`0${d.getMonth() + 1}`).slice(-2)
  const day = (`0${d.getDate()}`).slice(-2)

  return `${year}-${month}-${day}`
}

const dateStartFormatted = computed(() => {
  return formatDate(props.dateStart)
})

const dateEndFormatted = computed(() => {
  if (!props.dateEnd) {
    return null
  }

  return formatDate(props.dateEnd)
})
</script>
