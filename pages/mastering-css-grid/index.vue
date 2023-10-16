<template>
  <div class="container mx-auto my-6">
    <h1 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
      About my book "Mastering CSS Grid"
    </h1>

    <div class="grid md:grid-cols-2 gap-6 mx-3">
      <a
        href="https://www.amazon.com/-/en/dp/B0BT831SGK"
        title="Read on Amazon"
      >
        <viewport-watcher
          @inViewport="animate('imageBook')"
          class="md:order-last"
        >
          <tape-animator :is-active="animations.imageBook.hasAnimated">
            <t-image :src="imageBook" alt="A photo of me, Pascal Thormeier" />
          </tape-animator>
        </viewport-watcher>
      </a>

      <div>
        <t-paragraph>
          <strong>
            Explore the full spectrum of CSS Grid concepts and efficiently
            leverage its specifications with a project that incorporates both
            basic and advanced aspects
          </strong>
        </t-paragraph>

        <t-subtitle>
          Key Features
        </t-subtitle>

        <t-list>
          <li>
            Explore the differences between grid boxes and block containers to
            enhance your web design knowledge
          </li>
          <li>
            Create block-level grids, inline grids, and nested grids to create
            responsive layouts
          </li>
          <li>
            Adopt best practices for attaching elements to your layout by using
            explicitly defined grid lines or grid areas
          </li>
        </t-list>

        <t-subtitle>
          Book Description
        </t-subtitle>

        <t-paragraph>
          CSS Grid has revolutionized web design by filling a long-existing gap
          in creating real, dynamic grids on the web. This book will help you
          grasp these CSS Grid concepts in a step-by-step way, empowering you
          with the knowledge and skills needed to design beautiful and
          responsive grid-based layouts for your web projects.
        </t-paragraph>

        <t-paragraph>
          This book provides a comprehensive coverage of CSS Grid by taking you
          through both fundamental and advanced concepts with practical
          exercises. You'll learn how to create responsive layouts and discover
          best practices for incorporating grids into any design. As you
          advance, you'll explore the dynamic interplay between CSS Grid and
          flexbox, culminating in the development of a usable responsive web
          project as a reference for further improvement. You'll also see how
          frameworks utilize CSS Grid to construct reusable components and learn
          to rebuild and polyfill CSS Grid for browsers that don't fully support
          it yet. The concluding chapters include a quick reference and cheat
          sheet, making this book an indispensable resource for frontend
          developers of all skill levels.
        </t-paragraph>

        <t-paragraph>
          By the end of this book, you'll have thoroughly explored all aspects
          of CSS Grid and gained expert-level proficiency, enabling you to craft
          beautiful and functional layouts for web projects of any size.
        </t-paragraph>
      </div>
    </div>
    <div class="mx-3">
      <t-subtitle>
        What you will learn
      </t-subtitle>

      <t-list>
        <li>
          Enhance your CSS Grid skills by mastering both its fundamental and
          advanced concepts
        </li>
        <li>
          Combine flexbox and CSS Grid seamlessly to produce stunning and
          responsive page layouts
        </li>
        <li>
          Discover the potential of complex grid layouts to improve your next
          project
        </li>
        <li>
          Examine how frameworks utilize CSS Grid to create reusable components
        </li>
        <li>
          Leverage the benefits of grid-based layouts to create visually
          appealing websites
        </li>
        <li>
          Create custom polyfills and learn when to use grid layouts
        </li>
        <li>
          Build dynamic and user-friendly web projects using CSS Grid's
          responsive design capabilities
        </li>
      </t-list>

      <t-subtitle>
        Who this book is for
      </t-subtitle>

      <t-paragraph>
        This book is for web developers and designers who want to learn CSS Grid
        and improve their layout design skills. This book will also be a
        valuable resource for CSS developers seeking to advance their skills to
        the most proficient level. Additionally, this book will serve as an
        excellent guide for those who wish to expand their toolset to include
        flexbox and grids.
      </t-paragraph>

      <t-subtitle>
        Table of Contents
      </t-subtitle>

      <t-list ordered>
        <li>
          Understanding the Basic Rules and Structures for CSS Grid
        </li>
        <li>
          Project Introduction: What We'll Work on and First Tasks
        </li>
        <li>
          Building Advanced Grid Layouts
        </li>
        <li>
          Understanding and Creating Responsive and Fluid Grid Layouts
        </li>
        <li>
          Implementing Layouts with Flexbox and CSS Grid
        </li>
        <li>
          Benefits of Grid Layouts and When Not to Use Them
        </li>
        <li>
          Polyfilling CSS Grid's Missing Features
        </li>
        <li>
          Grids in the Wild – How Frameworks Implement Grids
        </li>
        <li>
          Quick Reference and Cheat Sheet
        </li>
      </t-list>

      <div>
        <a
          href="https://www.packtpub.com/product/mastering-css-grid/9781804614846"
          title="Read on packt.com"
        >
          <t-button class="curved-border mr-6">
            Read on <span class="font-bold">packt.com</span>
          </t-button>
        </a>

        <a
          href="https://www.amazon.com/-/en/dp/B0BT831SGK"
          title="Read on Amazon"
        >
          <t-button class="curved-border">
            Read on <span class="font-bold">Amazon</span>
          </t-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '@/mixins/Animation'

export default {
  head: {
    title: 'About my book "Mastering CSS Grid"',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Pascal Thormeier presents his book "Mastering CSS Grid".'
      }
    ]
  },

  mixins: [Animation],

  data() {
    return {
      imageBook: require('~/assets/images/mastering-css-grid.jpeg'),
      animations: {
        imageBook: {
          delay: 0,
          hasAnimated: false
        }
      }
    }
  }
}
</script>
