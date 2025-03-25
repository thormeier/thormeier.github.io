<template>
  <header
    class="print:hidden p-3 gap-6 border-b-2 bg-white flex flex-wrap items-center justify-between z-20 sticky top-0"
  >
    <h1 class="font-script text-3xl">
      <NuxtLink :to="localePath('/')">
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

    <nav class="flex justify-around gap-3 md:gap-6">
      <TButton @click="setLocale('en')">
        EN
      </TButton>

      <TButton @click="setLocale('de')">
        DE
      </TButton>
    </nav>

    <nav
      :class="{ hidden: !open }"
      class="flex flex-wrap justify-around mt-6 md:mt-0 w-full md:w-auto gap-6 md:flex"
    >
      <NuxtLink :to="localePath('/articles')">
        <TButton>
          {{ $t('nav.articles') }}
        </TButton>
      </NuxtLink>

      <NuxtLink :to="localePath('/resume')">
        <TButton>
          {{ $t('nav.resume') }}
        </TButton>
      </NuxtLink>

      <NuxtLink :to="localePath('/contact')">
        <TButton>
          {{ $t('nav.contact') }}
        </TButton>
      </NuxtLink>

      <NuxtLink :to="localePath('/mastering-css-grid')">
        <TButton>
          {{ $t('nav.book') }}
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
          {{ $t('nav.paypal') }}
        </TButton>
      </a>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const open = ref(false)
const { setLocale } = useI18n()
const localePath = useLocalePath()
</script>
