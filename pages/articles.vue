<template>
  <main class="container mx-auto my-6 px-5">
    <h2 class="font-script text-3xl lg:text-4xl mb-3">
      My articles
    </h2>

    <p class="mb-12 text-xl md:text-2xl">
      Here's a list of all the articles I've written across various platforms
      and blogs. Have a read!
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h3 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
          Articles on dev.to
        </h3>
        <ul class="flex flex-col gap-10">
          <li v-for="(article, i) in devToPosts" :key="`devto_${i}`">
            <TArticle v-bind="article" />
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
          Articles on other platforms
        </h3>
        <ul class="flex flex-col gap-10">
          <li v-for="(article, i) in otherPosts" :key="`devto_${i}`">
            <TArticle v-bind="article" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { Article } from '../components/TArticle.vue'
import otherPosts from '../data/articles.json'

useHead({
  title: 'Articles by Pascal Thormeier',
  meta: [
    { name: 'description', content: 'All articles written on various platforms by Pascal Thormeier.' },
  ],
})

interface DevToArticle {
  title: string
  description: string
  canonical_url: string
  public_reactions_count: number
  published_timestamp: string
  cover_image?: string
  social_image?: string
  tag_list: string[]
}

const { data: rawDevToArticles } = useAsyncData<DevToArticle[]>('devtoposts', () => $fetch('https://dev.to/api/articles?username=thormeier'))

const devToPosts = computed<Article[]>(() => {
  if (!rawDevToArticles.value) {
    return []
  }

  return rawDevToArticles.value.map(article => ({
    title: article.title,
    image: {
      src: (article.cover_image || article.social_image) as string,
      alt: article.title,
    },
    lead: article.description,
    url: article.canonical_url,
    platform: 'dev.to',
    date: article.published_timestamp,
    tags: article.tag_list,
    likes: article.public_reactions_count,
  }))
})
</script>
