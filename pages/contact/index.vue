<template>
  <div class="container mx-auto my-6">
    <h1 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
      Contact details
    </h1>

    <div class="flex flex-wrap justify-center mt-12 mb-20">
      <div
        :key="index"
        v-for="(profile, index) in profiles"
        class="px-6 mb-12 w-full sm:w-1/3"
      >
        <sticky-note class="w-full mx-auto">
          <t-button>
            <a :href="profile.to" :title="profile.title">
              <!-- eslint-disable-next-line vue/require-component-is -->
              <component
                v-bind:is="profile.icon"
                class="max-w-contact max-h-contact w-full h-full"
              />
            </a>
          </t-button>
        </sticky-note>
      </div>
    </div>

    <section class="mb-6 px-4">
      <viewport-watcher @inViewport="animate('businessBox')">
        <border-animator
          :is-active="animations.businessBox.hasAnimated"
          class="mx-2 md:mx-6 lg:mx-8 my-3 p-6 pt-8 md:py-8"
        >
          <t-subtitle>
            Business contact
          </t-subtitle>

          <t-paragraph>
            In case you want to contact me for business (commissions or similar)
            please use the following email address:
          </t-paragraph>

          <t-paragraph>
            <a href="mailto:hello@thormeier.dev">
              <t-button class="curved-border">
                <span class="font-bold">
                  hello@thormeier.dev
                </span>
              </t-button>
            </a>
          </t-paragraph>

          <t-paragraph>
            Please be aware that I will not be answering potential recruitment
            emails for any software developer positions.
          </t-paragraph>
        </border-animator>
      </viewport-watcher>
    </section>
  </div>
</template>

<script>
import Animation from '@/mixins/Animation'
import Twitter from '../../assets/svg/twitter.svg?inline'
import Linkedin from '../../assets/svg/linkedin.svg?inline'
import Slideshare from '../../assets/svg/slideshare.svg?inline'
import Devto from '../../assets/svg/devto.svg?inline'
import Github from '../../assets/svg/github.svg?inline'

export default {
  head: {
    title: 'How to contact Pascal Thormeier',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact details for Pascal Thormeier'
      }
    ]
  },

  mixins: [Animation],

  data() {
    return {
      animations: {
        businessBox: {
          delay: 0,
          hasAnimated: false
        }
      },
      profiles: [
        {
          title: 'Twitter',
          to: 'https://twitter.com/pthormeier',
          icon: Twitter
        },
        {
          title: 'dev.to',
          to: 'https://dev.to/thormeier',
          icon: Devto
        },
        {
          title: 'Github',
          to: 'https://github.com/thormeier',
          icon: Github
        },
        {
          title: 'LinkedIn',
          to: 'https://www.linkedin.com/in/thormeier/',
          icon: Linkedin
        },
        {
          title: 'Slideshare',
          to: 'https://en.slideshare.net/Thormeier',
          icon: Slideshare
        }
      ]
    }
  }
}
</script>
