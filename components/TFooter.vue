<template>
  <footer
    class="print:hidden p-3 border-t-2 bg-white flex flex-wrap items-center justify-between"
  >
    {{ $t('nav.footer') }} &copy; {{ year }}
  </footer>
</template>

<script lang="ts" setup>
const year = ref(new Date().getFullYear())
</script>
