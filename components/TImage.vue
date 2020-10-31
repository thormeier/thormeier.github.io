<template>
  <div class="image-container p-8">
    <img :src="src" :alt="alt" class="image" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>
