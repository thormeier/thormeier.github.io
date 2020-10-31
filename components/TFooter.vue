<template>
  <header
    class="p-3 border-t-2 bg-white flex flex-wrap items-center justify-between"
  >
    Built with Nuxt and Tailwind, all icons are self-made. &copy; {{ year }}
  </header>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
