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
      class="flex flex-wrap justify-around mt-6 md:mt-0 w-full md:w-auto md:flex"
    >
      <router-link to="/articles" class="md:mr-6">
        <t-button class="curved-border">
          Articles
        </t-button>
      </router-link>

      <router-link to="/resume" class="md:mr-6">
        <t-button class="curved-border">
          Resume
        </t-button>
      </router-link>

      <router-link to="/contact" class="md:mr-6">
        <t-button class="curved-border">
          Contact
        </t-button>
      </router-link>
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
