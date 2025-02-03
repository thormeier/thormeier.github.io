<template>
  <div class="tape-animator-container">
    <div
      :class="{ animated: tapeTopLeftAnimated }"
      class="tape tape-topleft"
      aria-hidden="true"
    />
    <div
      :class="{ animated: tapeTopRightAnimated }"
      class="tape tape-topright"
      aria-hidden="true"
    />
    <div
      :class="{ animated: tapeBottomLeftAnimated }"
      class="tape tape-bottomleft"
      aria-hidden="true"
    />
    <div
      :class="{ animated: tapeBottomRightAnimated }"
      class="tape tape-bottomright"
      aria-hidden="true"
    />
    <div :class="{ animated: contentAnimated }" class="tape-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  isActive: boolean
}>(), {
  isActive: false,
})

const contentAnimated = ref(false)
const tapeTopLeftAnimated = ref(false)
const tapeTopRightAnimated = ref(false)
const tapeBottomLeftAnimated = ref(false)
const tapeBottomRightAnimated = ref(false)

function animate() {
  contentAnimated.value = true

  setTimeout(() => {
    tapeTopLeftAnimated.value = true
  }, 300)

  setTimeout(() => {
    tapeTopRightAnimated.value = true
  }, 600)

  setTimeout(() => {
    tapeBottomRightAnimated.value = true
  }, 900)

  setTimeout(() => {
    tapeBottomLeftAnimated.value = true
  }, 1200)
}

watch(() => props.isActive, (newValue) => {
  if (newValue) {
    animate()
  }
})
</script>
