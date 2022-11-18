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
  head: {
    title: 'Articles by Pascal Thormeier',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'All articles written on various sources by Pascal Thormeier'
      }
    ]
  },

  data() {
    return {
      rawDevTo: [],
      rawOther: [
        {
          title: '10 tips for Vue beginners - stuff to get you started fast',
          lead:
            "Vue is amazing. Seriously, Evan You and the community have done an amazing job with it and I've spent a good part of my career working with Vue now. It kind of has become my go-to framework over the years and I would absolutely recommend it to everyone.",
          image: {
            src: require('~/assets/images/vue_updivision.png'),
            alt: '10 tips for Vue beginners'
          },
          date: new Date('2022-02-09'),
          url:
            'https://updivision.com/blog/post/10-tips-for-vue-beginners-stuff-to-get-you-started-fast',
          tags: [],
          platform: 'updivision.com'
        },
        {
          title:
            'How Nuxt3, Tailwind and FastAPI helped us kick-start a business in no time',
          lead:
            'Four weeks from the start to go live. Included? A payment provider, an external service, a fantastic design, great Lighthouse scores and a delighted client. How did we manage that?',
          image: {
            src: require('~/assets/images/nuxt3.webp'),
            alt: 'Nuxt3 + FastAPI = Rocket'
          },
          date: new Date('2022-08-15'),
          url:
            'https://www.liip.ch/de/blog/how-nuxt3-tailwind-and-fastapi-helped-us-kick-start-a-business-in-no-time',
          tags: [],
          platform: 'liip.ch'
        },
        {
          title: "Code reviews: Dos, Don'ts and a How-to",
          lead:
            "Our circle recently revisited our definition of done. One point: code reviews. They did happen, but often couldn't unfold their full potential. Question: How could we improve them?",
          image: {
            src: require('~/assets/images/glitch.jpg'),
            alt: 'A glichty image of people working together'
          },
          date: new Date('2021-04-21'),
          url:
            'https://www.liip.ch/de/blog/code-reviews-dos-donts-and-a-how-to',
          tags: [],
          platform: 'liip.ch'
        },
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
          tags: [],
          platform: 'liip.ch'
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
          tags: [],
          platform: 'liip.ch'
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
          tags: [],
          platform: 'liip.ch'
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
          tags: [],
          platform: 'liip.ch'
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
          tags: [],
          platform: 'liip.ch'
        }
      ]
    }
  },

  computed: {
    posts() {
      if (this.rawDevTo.length === 0) {
        return []
      }

      const otherPosts = this.rawOther.map((p) => ({
        ...p,
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

      const all = [...otherPosts, ...devToPosts]

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
