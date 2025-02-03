<template>
  <a :href="url">
    <article class="curved-border p-8 m-4">
      <div class="image mb-8">
        <img :src="useImage(image.src)" :alt="image.alt" class="object-cover w-full h-full">
      </div>

      <h3 class="text-2xl lg:text-3xl font-script pb-3">
        {{ title }}
        <span class="text-xl opacity-50 whitespace-no-wrap">
          ({{ dateFormatted }})
        </span>
      </h3>

      <div v-if="likes || tags.length > 0" class="flex align-center mb-3">
        <div v-if="likes" class="flex items-center pl-3 pr-6">
          <SvgoHeart class="w-icon h-icon mr-2" />
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

      <TButton class="curved-border">
        Read on <span class="font-bold">{{ platform }}</span>
      </TButton>
    </article>
  </a>
</template>

<script lang="ts" setup>
export interface Article {
  image: {
    src: string
    alt: string
  }
  title: string
  date: string
  lead: string
  url: string
  platform: string
  likes?: number
  tags: string[]
}

const props = defineProps<Article>()

const dateFormatted = computed(() => {
  const d = new Date(props.date)
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
    d,
  )
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

  return `${year}-${month}-${day}`
})
</script>
