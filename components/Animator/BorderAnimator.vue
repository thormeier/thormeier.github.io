<template>
  <div
    @click="$emit('click')"
    :class="{
      'no-animation': !toggledOnce || noAnimation,
      'is-active': isActive,
      'is-inactive': !isActive
    }"
    class="curved-border"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    noAnimation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      toggledOnce: false
    }
  },

  watch: {
    isActive() {
      this.toggledOnce = true
    }
  }
}
</script>

<style scoped>
.no-animation {
  animation: none;
}
.is-active {
  animation: draw 1s;
  animation-fill-mode: forwards;
}
.is-inactive {
  clip-path: polygon(
    /* Inner */ min(8%, 13px) min(8%, 13px),
    calc(100% - min(8%, 13px)) min(8%, 13px),
    calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
    min(8%, 13px) calc(100% - min(8%, 13px)),
    min(8%, 13px) min(8%, 13px),
    /* First line */ 0 0,
    0 0,
    0 0,
    /* Second line */ 0 0,
    0 0,
    0 0,
    0 0,
    0 0,
    /* Third line */ 0 0,
    0 0,
    0 0,
    0 0,
    0 0,
    /* Fourth line */ 0 0,
    0 0,
    0 0,
    0 0
  );
}

@keyframes draw {
  0% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      0 0,
      0 0,
      /* Second line */ 0 0,
      0 0,
      0 0,
      0 0,
      0 0,
      /* Third line */ 0 0,
      0 0,
      0 0,
      0 0,
      0 0,
      /* Fourth line */ 0 0,
      0 0,
      0 0,
      0 0
    );
  }

  0.1% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      0 0,
      0 min(8%, 13px),
      /* Second line */ min(8%, 13px) min(8%, 13px),
      0 0,
      0 0,
      0 0,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  23.9% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) 0,
      100% 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  50% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  73.9% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  100% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) min(8%, 13px),
      0 0,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }
}

@keyframes draw-reverse {
  0% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) min(8%, 13px),
      0 0,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  23.9% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  50% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  73.9% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      /* Second line */ calc(100% - min(8%, 13px)) 0,
      100% 0,
      100% 0,
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      /* Third line */ calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      100% 100%,
      100% 100%,
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      /* Fourth line */ min(8%, 13px) calc(100% - min(8%, 13px)),
      0 100%,
      0 100%,
      min(8%, 13px) calc(100% - min(8%, 13px))
    );
  }

  100% {
    clip-path: polygon(
      /* Inner */ min(8%, 13px) min(8%, 13px),
      calc(100% - min(8%, 13px)) min(8%, 13px),
      calc(100% - min(8%, 13px)) calc(100% - min(8%, 13px)),
      min(8%, 13px) calc(100% - min(8%, 13px)),
      min(8%, 13px) min(8%, 13px),
      /* First line */ 0 0,
      0 0,
      0 0,
      /* Second line */ 0 0,
      0 0,
      0 0,
      0 0,
      0 0,
      /* Third line */ 0 0,
      0 0,
      0 0,
      0 0,
      0 0,
      /* Fourth line */ 0 0,
      0 0,
      0 0,
      0 0
    );
  }
}
</style>
