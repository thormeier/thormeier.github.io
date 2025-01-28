<template>
  <header
    class="p-3 border-b-2 bg-white flex flex-wrap items-center justify-between z-20 sticky top-0"
  >
    <span class="font-script text-3xl">
      <router-link to="/">
        thormeier.dev
      </router-link>
    </span>

    <span class="block md:hidden">
      <chevron
        @click="open = !open"
        :class="{ 'rotate-180': open }"
        class="w-icon h-icon transition-transform duration-200 transform outline-none cursor-pointer"
      />
    </span>

    <nav
      :class="{ hidden: !open }"
      class="flex flex-wrap justify-around mt-6 md:mt-0 w-full md:w-auto md:flex gap-6"
    >
      <router-link to="/articles">
        <t-button class="curved-border">
          Articles
        </t-button>
      </router-link>

      <router-link to="/resume">
        <t-button class="curved-border">
          Resume
        </t-button>
      </router-link>

      <router-link to="/contact">
        <t-button class="curved-border">
          Contact
        </t-button>
      </router-link>

      <router-link to="/mastering-css-grid">
        <t-button class="curved-border">
          My book
        </t-button>
      </router-link>

      <a href="https://linktr.ee/thormeier" target="_blank">
        <t-button class="curved-border">
          Linktree
        </t-button>
      </a>

      <a href="https://www.buymeacoffee.com/pthormeier" target="_blank">
        <t-button class="curved-border">
          Buy me a coffee
        </t-button>
      </a>

      <a href="https://paypal.me/pthormeier" target="_blank">
        <t-button class="curved-border">
          Support me via PayPal
        </t-button>
      </a>
    </nav>
  </header>
</template>

<script>
import Chevron from '../assets/svg/chevron.svg?inline'

export default {
  components: { Chevron },

  data() {
    return {
      open: false
    }
  }
}
</script>
