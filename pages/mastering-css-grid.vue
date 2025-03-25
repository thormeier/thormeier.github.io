<template>
  <div class="container mx-auto my-6">
    <h2 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
      {{ $t('book.title') }}
    </h2>

    <div class="grid md:grid-cols-2 gap-6 mx-3">
      <a
        href="https://www.amazon.com/-/en/dp/B0BT831SGK"
        :title="$t('book.readOnAmazon')"
        target="_blank"
      >
        <AnimatorViewport v-slot="{ visible }">
          <AnimatorTape :is-active="visible">
            <img src="~/assets/images/mastering-css-grid.jpeg" :alt="$t('book.cover')" class="image">
          </AnimatorTape>
        </AnimatorViewport>
      </a>

      <div>
        <p class="mb-3 text-xl">
          <strong>
            {{ $t('book.lead') }}
          </strong>
        </p>

        <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
          {{ $t('book.keyFeatures.title') }}
        </h3>

        <ul class="text-xl list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2">
          <li v-for="(_, i) in new Array(3)" :key="`keyFeatures${i}`">
            {{ $t(`book.keyFeatures.points[${i}]`) }}
          </li>
        </ul>

        <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
          {{ $t('book.description.title') }}
        </h3>

        <p v-for="(_, i) in new Array(3)" :key="`description${i}`" class="mb-3 text-xl">
          {{ $t(`book.description.paragraphs[${i}]`) }}
        </p>
      </div>
    </div>
    <div class="mx-3">
      <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
        {{ $t('book.whatYouWillLearn.title') }}
      </h3>

      <ul class="text-xl list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2">
        <li v-for="(_, i) in new Array(7)" :key="`whatYouWillLearn${i}`">
          {{ $t(`book.whatYouWillLearn.points[${i}]`) }}
        </li>
      </ul>

      <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
        {{ $t('book.whoThisBookIsFor.title') }}
      </h3>

      <p class="mb-3 text-xl">
        {{ $t('book.whoThisBookIsFor.text') }}
      </p>

      <h3 class="font-script font-bold text-2xl lg:text-3xl mb-3 mt-6">
        {{ $t('book.tableOfContents.title') }}
      </h3>

      <ul class="text-xl list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2 mb-10">
        <li v-for="(_, i) in new Array(7)" :key="`tableOfContents${i}`">
          {{ $t(`book.tableOfContents.points[${i}]`) }}
        </li>
      </ul>

      <div>
        <a
          href="https://www.packtpub.com/product/mastering-css-grid/9781804614846"
          :title="$t('book.readOnPackt')"
        >
          <TButton class="mr-6 mb-6">
            {{ $t('book.readOnPackt') }}
          </TButton>
        </a>

        <a
          href="https://www.amazon.com/-/en/dp/B0BT831SGK"
          :title="$t('book.readOnAmazon')"
        >
          <TButton class="mb-6">
            {{ $t('book.readOnAmazon') }}
          </TButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useHead({
  title: t('book.seo.title'),
  meta: [
    {
      name: 'keywords',
      content: t('book.seo.keywords'),
    },
  ],
})
</script>
