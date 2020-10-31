<template>
  <div class="sticky-container">
    <div class="sticky-outer">
      <div :style="`transform: rotate(${rotation}deg)`" class="sticky">
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
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotation: Math.round(Math.random() * 6 - 3)
    }
  }
}
</script>

<style scoped>
.sticky-container {
  max-width: 270px;
  position: relative;
}

.sticky-outer {
  display: flex;
  padding-top: 92.5925926%;
  position: relative;

  width: 100%;
}

.sticky {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.sticky:before {
  box-shadow: -2px 2px 15px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.25);
  content: '';
  width: 85%;
  left: 5px;
  height: 80%;
  position: absolute;
  top: 20%;
}

.sticky-content {
  background: linear-gradient(
    180deg,
    rgba(187, 235, 255, 1) 0%,
    rgba(187, 235, 255, 1) 12%,
    rgba(170, 220, 241, 1) 75%,
    rgba(195, 229, 244, 1) 100%
  );
  width: 100%;
  height: 100%;

  @apply flex;
  @apply justify-center;
  @apply items-center;

  clip-path: url(#stickyClip);
}
</style>
