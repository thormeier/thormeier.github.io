<template>
  <main class="container mx-auto my-6 px-5">
    <h2 class="font-script text-3xl lg:text-4xl mb-3">
      Contact details
    </h2>

    <div class="flex flex-wrap justify-center mt-12 mb-20">
      <div
        v-for="(profile, index) in profiles"
        :key="index"
        class="px-6 mb-12 w-full sm:w-1/3"
      >
        <StickyNote class="w-full mx-auto">
          <TButton :has-border="false">
            <a :href="profile.to" :title="profile.title">
              <component
                :is="getIcon(profile.icon)"
                class="max-w-contact max-h-contact w-full h-full"
              />
            </a>
          </TButton>
        </StickyNote>
      </div>
    </div>

    <div class="curved-border p-6">
      <h3 class="font-script font-bold text-4xl mb-5">
        Business contact
      </h3>

      <p class="text-2xl mb-5">
        In case you want to contact me for business (commissions or similar)
        please use the following email address:
      </p>

      <p class="mb-5">
        <a href="mailto:hello@thormeier.dev">
          <TButton class="curved-border font-bold text-2xl">
            hello@thormeier.dev
          </TButton>
        </a>
      </p>

      <p class="text-2xl mb-5">
        Please be aware that I will not be answering emails by recruiting companies and 3rd party recruitment consultants.
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: 'How to contact Pascal Thormeier',
  meta: [
    { name: 'description', content: 'Contact details for Pascal Thormeier.' },
  ],
})

function getIcon(id: string) {
  return defineAsyncComponent(() => import(`@/assets/svg/${id}.svg`))
}

const profiles = ref([
  {
    title: 'Bluesky',
    to: 'https://bsky.app/profile/thormeier.dev',
    icon: 'bluesky',
  },
  {
    title: 'dev.to',
    to: 'https://dev.to/thormeier',
    icon: 'devto',
  },
  {
    title: 'Github',
    to: 'https://github.com/thormeier',
    icon: 'github',
  },
  {
    title: 'LinkedIn',
    to: 'https://www.linkedin.com/in/thormeier/',
    icon: 'linkedin',
  },
])
</script>
