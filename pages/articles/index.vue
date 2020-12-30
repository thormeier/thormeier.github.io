<template>
  <div class="container mx-auto my-6">
    <h1 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
      My articles
    </h1>

    <p class="mb-12 text-2xl md:text-3xl mx-3">
      Here's a list of all the articles I've written across various platforms
      and blogs. Have a read!
    </p>

    <t-article
      v-for="(a, index) in posts"
      :key="index"
      :image="a.image"
      :date="a.date"
      :title="a.title"
      :lead="a.lead"
      :url="a.url"
      :likes="a.likes"
      :platform="a.platform"
      :tags="a.tags"
      class="mb-20"
    />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      rawDevTo: [],
      rawLiip: [
        {
          title: 'Shapefiles - Of avalanches and ibexes',
          lead:
            'An excellent way to store spatial and geographical data, such as real estates, municipal boundaries, rivers, lakes, streets, you name it, together with metadata, such as names, IDs, year of establishment, etc. are shapefiles.',
          image: {
            src: require('~/assets/images/ibex.jpg'),
            alt: 'An ibex'
          },
          date: new Date('2017-12-06'),
          url:
            'https://www.liip.ch/en/blog/shapefiles-of-avalanches-and-ibexes',
          tags: []
        },
        {
          title: 'Deploy your Nuxt.js app to platform.sh',
          lead:
            'Nuxt.js allows to create Vue apps fast. Deploying it to Heroku, Now, GitHub, and more is already covered - but what about platform.sh?',
          image: {
            src: require('~/assets/images/cargo.jpg'),
            alt: 'Cargo containers'
          },
          date: new Date('2018-08-06'),
          url:
            'https://www.liip.ch/en/blog/deploy-your-nuxt-js-app-to-platform-sh',
          tags: []
        },
        {
          title: 'From coasters to Vuex',
          lead:
            "Imagine: You're an expert for real estate economics. You sit in a café, browsing lots for sale and you find the perfect piece of land for your next project. What do you do next?",
          image: {
            src: require('~/assets/images/coasters.jpg'),
            alt: 'A lot of cargo containers'
          },
          date: new Date('2018-10-09'),
          url: 'https://www.liip.ch/en/blog/from-coasters-to-vuex',
          tags: []
        },
        {
          title: 'How to point at a screen with your phone',
          lead:
            'Most people know laser pointers. Apple Remote offers something like a laser pointer for Keynote. But how about using your smartphone as a pointer device in a web app?',
          image: {
            src: require('~/assets/images/laptop.jpg'),
            alt: 'A laptop on a desk with tape'
          },
          date: new Date('2020-07-01'),
          url:
            'https://www.liip.ch/en/blog/how-to-point-at-a-screen-with-your-phone',
          tags: []
        },
        {
          title: 'NEXPLORER or a steep learning curve',
          lead:
            "Two weeks for a questionnaire. Built from scratch. No existing API to use. Just an Excel sheet full of questions and answers. And we learned so much. Here's what!",
          image: {
            src: require('~/assets/images/whiteboard.jpg'),
            alt: 'A whiteboard with calculations'
          },
          date: new Date('2020-08-03'),
          url:
            'https://www.liip.ch/en/blog/nexplorer-or-a-steep-learning-curve',
          tags: []
        }
      ]
    }
  },

  computed: {
    posts() {
      const liipPosts = this.rawLiip.map((p) => ({
        ...p,
        platform: 'liip.ch',
        likes: null
      }))

      const devToPosts = this.rawDevTo.map((p) => ({
        title: p.title,
        image: {
          src: p.cover_image || p.social_image,
          alt: p.title
        },
        lead: p.description,
        likes: p.public_reactions_count,
        url: p.canonical_url,
        platform: 'dev.to',
        date: new Date(p.published_at),
        tags: p.tag_list
      }))

      const all = [...liipPosts, ...devToPosts]

      return all.sort((a, b) => b.date - a.date)
    }
  },

  async fetch() {
    const response = await axios.get(
      'https://dev.to/api/articles?username=thormeier'
    )

    this.rawDevTo = response.data
  },
  fetchOnServer: false
}
</script>
