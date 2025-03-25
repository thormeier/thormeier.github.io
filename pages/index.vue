<template>
  <main class="container mx-auto my-6 px-5">
    <section class="overflow-hidden mb-8 pb-10">
      <AnimatorViewport v-slot="{ visible }">
        <AnimatorTape :is-active="visible">
          <img src="~/assets/images/me.jpg" alt="A photo of me, Pascal Thormeier" class="image">
        </AnimatorTape>
      </AnimatorViewport>

      <div class="flex flex-wrap p-8 -mx-2">
        <div class="px-2 w-1/2 sm:w-1/3">
          <StickyNote class="w-full text-xl sm:text-3xl mx-auto">
            {{ $t('home.heyThere') }}<br>{{ $t('home.imPascal') }}
          </StickyNote>
        </div>

        <div class="px-2 w-1/2 sm:w-1/3">
          <StickyNote class="w-full text-xl sm:text-3xl mx-auto">
            {{ $t('home.getToKnow') }}<br>{{ $t('home.meBelow') }}
          </StickyNote>
        </div>

        <div class="px-2 w-full sm:w-1/3 -mt-20">
          <AnimatorViewport v-slot="{ visible }">
            <AnimatorArrow class="rotate-90 w-full" :is-active="visible" />
          </AnimatorViewport>
        </div>
      </div>
    </section>

    <section class="mb-6 px-4">
      <AnimatorViewport v-slot="{ visible }">
        <AnimatorBorder :is-active="visible" class="p-10">
          <h2 class="font-script text-3xl lg:text-4xl mb-3">
            {{ $t('home.aboutMe.title') }}
          </h2>

          <p class="mb-3 text-xl">
            {{ $t('home.aboutMe.p1') }}
          </p>

          <p class="mb-3 text-xl">
            {{ $t('home.aboutMe.p2') }}
          </p>

          <p class="mb-3 text-xl">
            {{ $t('home.aboutMe.p3') }}
          </p>

          <p class="mb-3 text-xl">
            {{ $t('home.aboutMe.p4') }}
          </p>

          <p class="text-xl font-bold">
            {{ $t('home.aboutMe.motto') }}
          </p>
        </AnimatorBorder>
      </AnimatorViewport>
    </section>

    <section class="mb-6 px-4">
      <AnimatorViewport v-slot="{ visible }">
        <AnimatorBorder :is-active="visible" class="p-10">
          <h2 class="font-script text-3xl lg:text-4xl mb-3">
            {{ $t('home.getToKnowMeBetter.title') }}
          </h2>

          <div class="flex flex-wrap justify-center mt-12 mb-20">
            <NuxtLink :to="localePath('/resume')" class="w-full sm:w-1/3">
              <StickyNote class="w-full mx-auto">
                <TButton class="text-lg sm:text-2xl">
                  {{ $t('home.getToKnowMeBetter.resume') }}
                </TButton>
              </StickyNote>
            </NuxtLink>

            <NuxtLink :to="localePath('/articles')" class="w-full sm:w-1/3">
              <StickyNote class="w-full mx-auto">
                <TButton class="text-lg sm:text-2xl">
                  {{ $t('home.getToKnowMeBetter.articles') }}
                </TButton>
              </StickyNote>
            </NuxtLink>

            <NuxtLink :to="localePath('/contact')" class="w-full sm:w-1/3">
              <StickyNote class="w-full mx-auto">
                <TButton class="text-lg sm:text-2xl">
                  {{ $t('home.getToKnowMeBetter.contact') }}
                </TButton>
              </StickyNote>
            </NuxtLink>
          </div>
        </AnimatorBorder>
      </AnimatorViewport>

      <div class="flex flex-wrap justify-center mt-12 mb-20" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import AnimatorTape from '~/components/Animator/Tape.vue'

const localePath = useLocalePath()

const { t } = useI18n()

useHead({
  title: t('home.seo.title'),
  meta: [
    {
      name: 'keywords',
      content: t('home.seo.keywords'),
    },
  ],
})

const image = ref<HTMLElement>()
const imageTapeAnimated = ref(false)

const targetIsVisible = useElementVisibility(image)
watch(() => targetIsVisible, () => {
  imageTapeAnimated.value = true
})

if (targetIsVisible.value) {
  imageTapeAnimated.value = true
}
</script>
