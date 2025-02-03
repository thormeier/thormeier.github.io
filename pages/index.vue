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
            Hey there,<br>I'm Pascal!
          </StickyNote>
        </div>

        <div class="px-2 w-1/2 sm:w-1/3">
          <StickyNote class="w-full text-xl sm:text-3xl mx-auto">
            Get to know<br>me below!
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
            About me
          </h2>

          <p class="mb-3 text-xl">
            Hi, I'm Pascal Thormeier! I am a passionate web developer based in
            Switzerland who loves to work full-stack with all kinds of
            technologies.
          </p>

          <p class="mb-3 text-xl">
            I am a creative problem solver who understands how to systematically
            find the best solution for all stakeholders. My passion lies in creating
            high quality software that is actually useful.
          </p>

          <p class="mb-3 text-xl">
            Thanks to my bachelor studies and around 15 years of experience I
            have a broad knowledge in different areas: Web development, desktop
            development, databases, DevOps, UX design and management. I love to
            share my knowledge and learn new things.
          </p>

          <p class="mb-3 text-xl">
            I am a pragmatic person. Thinking outside the box and striving to
            understand the big picture are my strengths and I use these to
            build solutions that are simple, yet efficient.
          </p>

          <p class="text-xl font-bold">
            My motto: Choose the right tool for the job.
          </p>
        </AnimatorBorder>
      </AnimatorViewport>
    </section>

    <section class="mb-6 px-4">
      <AnimatorViewport v-slot="{ visible }">
        <AnimatorBorder :is-active="visible" class="p-10">
          <h2 class="font-script text-3xl lg:text-4xl mb-3">
            Get to know me better
          </h2>

          <div class="flex flex-wrap justify-center mt-12 mb-20">
            <NuxtLink to="/resume" class="w-full sm:w-1/3">
              <StickyNote class="w-full mx-auto">
                <TButton class="text-lg sm:text-2xl">
                  See my resume
                </TButton>
              </StickyNote>
            </NuxtLink>

            <NuxtLink to="/articles" class="w-full sm:w-1/3">
              <StickyNote class="w-full mx-auto">
                <TButton class="text-lg sm:text-2xl">
                  Read my articles
                </TButton>
              </StickyNote>
            </NuxtLink>

            <NuxtLink to="/contact" class="w-full sm:w-1/3">
              <StickyNote class="w-full mx-auto">
                <TButton class="text-lg sm:text-2xl">
                  Contact me
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

useHead({
  title: 'Get to know Pascal Thormeier',
  meta: [
    { name: 'description', content: 'Pascal Thormeier presents himself.' },
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
