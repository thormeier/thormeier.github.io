<template>
  <div ref="container">
    <slot :visible="visible" />
  </div>
</template>

<script lang="ts" setup>
const container = ref<HTMLElement>()
const visible = ref(false)
const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    visible.value = entries[0].isIntersecting
  })

  if (container.value) {
    observer.value.observe(container.value)
  }
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
  observer.value = null
})
</script>
