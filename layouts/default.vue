<template>
  <div class="flex flex-col min-h-screen">
    <t-header />
    <main class="flex-1">
      <nuxt />
    </main>
    <t-footer />
  </div>
</template>

<style>
body {
  background-image: url('../assets/svg/grid.svg?external');
}
</style>
