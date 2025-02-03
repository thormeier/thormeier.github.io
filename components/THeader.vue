<template>
  <header
    class="print:hidden p-3 gap-6 border-b-2 bg-white flex flex-wrap items-center justify-between z-20 sticky top-0"
  >
    <h1 class="font-script text-3xl">
      <NuxtLink to="/">
        thormeier.dev
      </NuxtLink>
    </h1>

    <span class="flex md:hidden">
      <button
        class="transition-all duration-200 ease-in-out"
        :class="{ '!rotate-180': open }"
        @click.prevent="open = !open"
      >
        <SvgoChevron
          class="!w-icon !h-icon outline-none cursor-pointer"
        />
      </button>
    </span>

    <nav
      :class="{ hidden: !open }"
      class="flex flex-wrap justify-around mt-6 md:mt-0 w-full md:w-auto md:flex gap-6"
    >
      <NuxtLink to="/articles">
        <TButton>
          Articles
        </TButton>
      </NuxtLink>

      <NuxtLink to="/resume">
        <TButton>
          Resume
        </TButton>
      </NuxtLink>

      <NuxtLink to="/contact">
        <TButton>
          Contact
        </TButton>
      </NuxtLink>

      <NuxtLink to="/mastering-css-grid">
        <TButton>
          My book
        </TButton>
      </NuxtLink>

      <a href="https://linktr.ee/thormeier" target="_blank">
        <TButton>
          Linktree
        </TButton>
      </a>

      <a href="https://www.buymeacoffee.com/pthormeier" target="_blank">
        <TButton>
          Buy me a coffee
        </TButton>
      </a>

      <a href="https://paypal.me/pthormeier" target="_blank">
        <TButton>
          Support me via PayPal
        </TButton>
      </a>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const open = ref(false)
</script>
