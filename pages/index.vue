<template>
  <div class="container mx-auto my-6">
    <section class="overflow-hidden mb-8 pb-10">
      <div>
        <viewport-watcher @inViewport="animate('image')">
          <tape-animator :is-active="animations.image.hasAnimated">
            <t-image :src="imageMe" alt="A photo of me, Pascal Thormeier" />
          </tape-animator>
        </viewport-watcher>
      </div>

      <div class="flex flex-wrap p-8 -mx-2">
        <div class="px-2 w-1/2 sm:w-1/3">
          <sticky-note class="w-full text-xl sm:text-3xl">
            Hey there,<br />I'm Pascal!
          </sticky-note>
        </div>

        <div class="px-2 w-1/2 sm:w-1/3">
          <sticky-note class="w-full text-xl sm:text-3xl">
            Get to know<br />me below!
          </sticky-note>
        </div>

        <div class="px-2 w-full sm:w-1/3 -mt-20">
          <viewport-watcher @inViewport="animate('arrow')">
            <arrow
              :is-active="animations.arrow.hasAnimated"
              class="arrow-down w-full"
            />
          </viewport-watcher>
        </div>
      </div>
    </section>

    <section class="mb-6 px-4">
      <viewport-watcher @inViewport="animate('aboutBox')">
        <border-animator
          :is-active="animations.aboutBox.hasAnimated"
          class="mx-2 md:mx-6 lg:mx-8 my-3 p-6 pt-8 md:py-8"
        >
          <t-title>
            About me
          </t-title>

          <t-paragraph>
            Hi, I'm Pascal Thormeier! I am a passionate web developer based in
            Switzerland who loves to work full-stack with all kinds of
            technologies.
          </t-paragraph>

          <t-paragraph>
            I am a problem solver who understands how to systematically find the
            best solution for all stakeholders. My passion lies in creating high
            quality software that is actually useful.
          </t-paragraph>

          <t-paragraph>
            Thanks to my bachelor studies and around 10 years of experience I
            have a broad knowledge in different areas: Web development, desktop
            development, databases, DevOps, UX design and management. I love to
            share my knowledge and learn new things.
          </t-paragraph>

          <t-paragraph class="font-bold text-xl">
            My motto: Choose the right tool for the job.
          </t-paragraph>
        </border-animator>
      </viewport-watcher>
    </section>

    <section class="mb-6 px-4">
      <viewport-watcher @inViewport="animate('ctaBox')">
        <border-animator
          :is-active="animations.ctaBox.hasAnimated"
          class="mx-2 md:mx-6 lg:mx-8 my-3 p-6 pt-12 md:py-8"
        >
          <t-subtitle>
            Get to know me better
          </t-subtitle>

          <t-paragraph>
            If you want to get to know me even better, have a look at my resume,
            my writing or my free time projects!
          </t-paragraph>

          <div class="flex flex-wrap justify-center mt-12 mb-20">
            <div class="px-2 mb-6 w-full sm:w-1/3">
              <viewport-watcher @inViewport="animate('btnResume')">
                <sticky-note class="w-full mx-auto">
                  <router-link to="/resume">
                    <border-animator
                      :is-active="animations.btnResume.hasAnimated"
                      class="mx-6 my-3"
                    >
                      <t-button>
                        See my resume
                      </t-button>
                    </border-animator>
                  </router-link>
                </sticky-note>
              </viewport-watcher>
            </div>

            <div class="px-2 mb-6 w-full sm:w-1/3">
              <viewport-watcher @inViewport="animate('btnWriting')">
                <sticky-note class="w-full mx-auto">
                  <router-link to="/articles">
                    <border-animator
                      :is-active="animations.btnWriting.hasAnimated"
                      class="mx-8 my-3"
                    >
                      <t-button>
                        Read my articles
                      </t-button>
                    </border-animator>
                  </router-link>
                </sticky-note>
              </viewport-watcher>
            </div>

            <div class="px-2 mb-6 w-full sm:w-1/3">
              <viewport-watcher @inViewport="animate('btnProjects')">
                <sticky-note class="w-full mx-auto">
                  <router-link to="/contact">
                    <border-animator
                      :is-active="animations.btnProjects.hasAnimated"
                      class="mx-8 my-3"
                    >
                      <t-button>
                        Contact me
                      </t-button>
                    </border-animator>
                  </router-link>
                </sticky-note>
              </viewport-watcher>
            </div>
          </div>
        </border-animator>
      </viewport-watcher>
    </section>
  </div>
</template>

<script>
import Animation from '@/mixins/Animation'

export default {
  head: {
    title: 'Get to know Pascal Thormeier',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Pascal Thormeier presents himself.'
      }
    ]
  },

  mixins: [Animation],

  data() {
    return {
      imageMe: require('~/assets/images/me.jpg'),

      animations: {
        aboutBox: {
          delay: 1000,
          hasAnimated: false
        },
        ctaBox: {
          delay: 1000,
          hasAnimated: false
        },
        image: {
          delay: 0,
          hasAnimated: false
        },
        arrow: {
          delay: 300,
          hasAnimated: false
        },
        btnResume: {
          delay: 400,
          hasAnimated: false
        },
        btnWriting: {
          delay: 700,
          hasAnimated: false
        },
        btnProjects: {
          delay: 1000,
          hasAnimated: false
        }
      }
    }
  }
}
</script>

<style scoped>
.arrow-down {
  transform: rotate(90deg);
}
</style>
