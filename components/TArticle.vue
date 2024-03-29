<template>
  <a :href="url" :title="title" class="block">
    <article class="curved-border p-3 m-4 bg-white">
      <div class="-mx-4">
        <div class="mb-6 px-4 py-3">
          <div class="image">
            <img
              :src="image.src"
              :alt="image.alt"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="px-6">
          <h2 class="text-2xl lg:text-3xl font-script pb-3">
            {{ title }}
            <span class="text-xl opacity-50 whitespace-no-wrap">
              ({{ dateFormatted }})
            </span>
          </h2>

          <div class="flex align-center mb-3">
            <div v-if="likes" class="flex items-center pl-3 pr-6">
              <heart class="w-icon h-icon mr-2" aria-hidden="true" />
              <span aria-label="Likes/reactions">
                {{ likes }}
              </span>
            </div>

            <ul v-if="tags.length > 0" class="flex flex-wrap mt-4">
              <li v-for="tag in tags" class="mr-4 mb-4 px-2 curved-border">
                #{{ tag }}
              </li>
            </ul>
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
    },
    tags: {
      type: Array,
      default: () => []
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
