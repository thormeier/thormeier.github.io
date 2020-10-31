<template>
  <a :href="url" :title="title" class="block">
    <article class="curved-border p-3 m-4">
      <div class="flex -mx-4 flex-wrap">
        <div class="w-full mb-6 md:w-1/2 md:mb-0 lg:w-1/3 px-4 py-3">
          <div class="image">
            <img
              :src="image.src"
              :alt="image.alt"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 md:px-3 lg:w-2/3 px-4">
          <h2 class="text-2xl lg:text-3xl font-script pb-3">
            {{ title }}
            <span class="text-xl opacity-50 whitespace-no-wrap">
              ({{ dateFormatted }})
            </span>
          </h2>

          <div v-if="likes" class="flex pb-3 items-center pl-3">
            <heart class="w-icon h-icon mr-2" aria-hidden="true" />
            <span aria-label="Likes/reactions">
              {{ likes }}
            </span>
          </div>

          <p class="pb-3">
            {{ lead }}
          </p>

          <t-button class="curved-border">
            Read on <span class="font-bold">{{ platform }}</span>
          </t-button>
        </div>
      </div>
    </article>
  </a>
</template>

<script>
import Heart from '../assets/svg/heart.svg?inline'

export default {
  components: { Heart },

  props: {
    // eslint-disable-next-line vue/require-default-prop
    image: {
      type: Object,
      require: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    lead: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: null
    }
  },

  computed: {
    dateFormatted() {
      const d = this.date
      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
        d
      )
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

      return `${year}-${month}-${day}`
    }
  }
}
</script>
