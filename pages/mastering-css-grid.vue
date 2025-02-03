<template>
  <div class="container mx-auto my-6">
    <h2 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
      About my book "Mastering CSS Grid"
    </h2>

    <div class="grid md:grid-cols-2 gap-6 mx-3">
      <a
        href="https://www.amazon.com/-/en/dp/B0BT831SGK"
        title="Read on Amazon"
      >
        <AnimatorViewport v-slot="{ visible }">
          <AnimatorTape :is-active="visible">
            <img src="~/assets/images/mastering-css-grid.jpeg" alt="The book cover" class="image">
          </AnimatorTape>
        </AnimatorViewport>
      </a>

      <div>
        <p class="mb-3 text-xl">
          <strong>
            Explore the full spectrum of CSS Grid concepts and efficiently
            leverage its specifications with a project that incorporates both
            basic and advanced aspects
          </strong>
        </p>

        <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
          Key Features
        </h3>

        <ul class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2">
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
        </ul>

        <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
          Book Description
        </h3>

        <p class="mb-3 text-xl">
          CSS Grid has revolutionized web design by filling a long-existing gap
          in creating real, dynamic grids on the web. This book will help you
          grasp these CSS Grid concepts in a step-by-step way, empowering you
          with the knowledge and skills needed to design beautiful and
          responsive grid-based layouts for your web projects.
        </p>

        <p class="mb-3 text-xl">
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
        </p>

        <p class="mb-3 text-xl">
          By the end of this book, you'll have thoroughly explored all aspects
          of CSS Grid and gained expert-level proficiency, enabling you to craft
          beautiful and functional layouts for web projects of any size.
        </p>
      </div>
    </div>
    <div class="mx-3">
      <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
        What you will learn
      </h3>

      <ul class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2">
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
      </ul>

      <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
        Who this book is for
      </h3>

      <p class="mb-3 text-xl">
        This book is for web developers and designers who want to learn CSS Grid
        and improve their layout design skills. This book will also be a
        valuable resource for CSS developers seeking to advance their skills to
        the most proficient level. Additionally, this book will serve as an
        excellent guide for those who wish to expand their toolset to include
        flexbox and grids.
      </p>

      <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
        Table of Contents
      </h3>

      <ul class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2 mb-10">
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
      </ul>

      <div>
        <a
          href="https://www.packtpub.com/product/mastering-css-grid/9781804614846"
          title="Read on packt.com"
        >
          <TButton class="mr-6 mb-6">
            Read on <span class="font-bold">packt.com</span>
          </TButton>
        </a>

        <a
          href="https://www.amazon.com/-/en/dp/B0BT831SGK"
          title="Read on Amazon"
        >
          <TButton class="mb-6">
            Read on <span class="font-bold">Amazon</span>
          </TButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'About my book "Mastering CSS Grid"',
  meta: [
    { name: 'description', content: 'Pascal Thormeier presents his book "Mastering CSS Grid".' },
  ],
})
</script>
