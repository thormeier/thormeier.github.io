<template>
  <arrow
    :class="{
      animated: isActive,
      undrawn: !isActive
    }"
    class="arrow"
  />
</template>

<script>
import Arrow from '../assets/svg/arrow.svg?inline'

export default {
  components: { Arrow },

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.arrow .p1 {
  stroke-dasharray: 161;
}
.arrow .p2 {
  stroke-dasharray: 65;
}
.arrow .p3 {
  stroke-dasharray: 61;
}
.arrow .p4 {
  stroke-dasharray: 61;
}
.arrow.undrawn .p1 {
  stroke-dashoffset: 161;
}
.arrow.undrawn .p2 {
  stroke-dashoffset: 65;
}
.arrow.undrawn .p3 {
  stroke-dashoffset: 61;
}
.arrow.undrawn .p4 {
  stroke-dashoffset: 61;
}

.arrow.animated .p1 {
  animation: p1 1s;
  animation-fill-mode: forwards;
}
.arrow.animated .p2 {
  animation: p2 1s;
  animation-fill-mode: forwards;
}
.arrow.animated .p3 {
  animation: p3 1s;
  animation-fill-mode: forwards;
}
.arrow.animated .p4 {
  animation: p4 1s;
  animation-fill-mode: forwards;
}

@keyframes p1 {
  0% {
    stroke-dasharray: 161;
    stroke-dashoffset: 161;
  }
  46% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes p2 {
  0% {
    stroke-dasharray: 65;
    stroke-dashoffset: 65;
  }
  46% {
    stroke-dasharray: 65;
    stroke-dashoffset: 65;
  }
  64% {
    stroke-dasharray: 65;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 65;
    stroke-dashoffset: 0;
  }
}

@keyframes p3 {
  0% {
    stroke-dasharray: 61;
    stroke-dashoffset: 61;
  }
  64% {
    stroke-dashoffset: 61;
  }
  82% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes p4 {
  0% {
    stroke-dasharray: 61;
    stroke-dashoffset: 61;
  }
  82% {
    stroke-dasharray: 61;
    stroke-dashoffset: 61;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
