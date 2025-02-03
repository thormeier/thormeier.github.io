<template>
  <div class="sticky-container">
    <div class="sticky-outer">
      <div :style="`transform: rotate(${rotation}deg)`" class="sticky-note">
        <svg width="0" height="0">
          <defs>
            <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
              <path
                d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                stroke-linejoin="round"
                stroke-linecap="square"
              />
            </clipPath>
          </defs>
        </svg>
        <div class="sticky-content font-script">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const rotation = ref(0)

onMounted(() => {
  rotation.value = Math.round(Math.random() * 6 - 3)
})
</script>
