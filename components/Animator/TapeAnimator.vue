<template>
  <div class="tape-animator-container">
    <div
      :class="{ animated: tapeTopLeftAnimated }"
      class="tape tape-topleft"
      aria-hidden="true"
    ></div>
    <div
      :class="{ animated: tapeTopRightAnimated }"
      class="tape tape-topright"
      aria-hidden="true"
    ></div>
    <div
      :class="{ animated: tapeBottomLeftAnimated }"
      class="tape tape-bottomleft"
      aria-hidden="true"
    ></div>
    <div
      :class="{ animated: tapeBottomRightAnimated }"
      class="tape tape-bottomright"
      aria-hidden="true"
    ></div>
    <div :class="{ animated: contentAnimated }" class="tape-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      contentAnimated: false,
      tapeTopLeftAnimated: false,
      tapeTopRightAnimated: false,
      tapeBottomLeftAnimated: false,
      tapeBottomRightAnimated: false
    }
  },

  watch: {
    isActive() {
      this.doAnimate()
    }
  },

  methods: {
    doAnimate() {
      this.contentAnimated = true

      setTimeout(() => {
        this.tapeTopLeftAnimated = true
      }, 300)

      setTimeout(() => {
        this.tapeTopRightAnimated = true
      }, 600)

      setTimeout(() => {
        this.tapeBottomRightAnimated = true
      }, 900)

      setTimeout(() => {
        this.tapeBottomLeftAnimated = true
      }, 1200)
    }
  }
}
</script>

<style scoped>
.tape-animator-container {
  overflow: hidden;
  position: relative;
}

.tape {
  width: 90px;
  height: 45px;
  background-image: url('../../assets/svg/tape.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  z-index: 10;
}

.tape-topleft {
  transform: rotate(45deg) scale(1.5);
  transition: all 0.3s;
  opacity: 0;
  top: 16px;
  left: 0;
}
.tape-topright {
  transform: rotate(-45deg) scale(1.5);
  transition: all 0.3s;
  opacity: 0;
  right: 0;
  top: 22px;
}
.tape-bottomleft {
  transform: rotate(-45deg) scale(1.5);
  transition: all 0.3s;
  opacity: 0;
  bottom: 16px;
  left: 6px;
}
.tape-bottomright {
  transform: rotate(45deg) scale(1.5);
  transition: all 0.3s;
  opacity: 0;
  right: 6px;
  bottom: 16px;
}

.tape-topleft.animated {
  transform: rotate(45deg) scale(1);
  opacity: 1;
}
.tape-topright.animated {
  transform: rotate(-45deg) scale(1);
  opacity: 1;
}
.tape-bottomleft.animated {
  transform: rotate(-45deg) scale(1);
  opacity: 1;
}
.tape-bottomright.animated {
  transform: rotate(45deg) scale(1);
  opacity: 1;
}

.tape-content {
  transition: all 0.2s;
  transform: scale(1.1);
  opacity: 0;
}

.tape-content.animated {
  transform: scale(1);
  opacity: 1;
}
</style>
