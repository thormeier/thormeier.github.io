<template>
  <main class="container print:max-w-full px-5 md:px-0 mx-auto print:mx-0 my-6">
    <h2 class="font-script text-3xl lg:text-4xl print:text-2xl mb-3">
      Pascal Thormeier ({{ $t('resume.pronouns') }}) &ndash; Senior Software Engineer
    </h2>

    <ul class="grid-resume mb-10">
      <li id="resume-box-photo" class="image relative">
        <div
          class="tape tape-topleft animated small-nomargin"
          aria-hidden="true"
        />
        <div
          class="tape tape-topright animated small-nomargin"
          aria-hidden="true"
        />
        <div
          class="tape tape-bottomleft animated small-nomargin"
          aria-hidden="true"
        />
        <div
          class="tape tape-bottomright animated small-nomargin"
          aria-hidden="true"
        />
        <img src="~/assets/images/me.jpg" alt="A photo of me, Pascal Thormeier" class="object-cover w-full h-full">
      </li>
      <li id="resume-box-info" class="p-6 print:p-3 flex flex-col justify-center">
        <StickyNote class="w-full print:w-[90%] mx-auto text-base print:text-sm [&_.sticky-content]:flex-col [&_.sticky-content]:p-2">
          <p class="mb-1">
            {{ $t('resume.birthDate') }}
          </p>

          <p class="mb-1">
            {{ $t('resume.location') }}
          </p>

          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-2xs"
          >
            <li v-for="(_, i) in new Array(6)" :key="`bulletPoint${i}`">
              {{ $t(`resume.bulletPoints[${i}]`) }}
            </li>
          </ul>
        </StickyNote>
      </li>
      <li id="resume-box-tech" class="p-3 md:p-6 print:p-3 curved-border">
        <ResumeTitle :title="$t('resume.content.technologies.label')" icon-name="spanner" />
        <ul class="grid grid-cols-1 print:grid-cols-2 gap-3 print:gap-2">
          <ResumeTechBox id="fe" :technologies="resume.technologies.frontend" label="Frontend" />
          <ResumeTechBox id="be" :technologies="resume.technologies.backend" label="Backend" />
          <ResumeTechBox id="data" :technologies="resume.technologies.data" label="Data" />
          <ResumeTechBox id="ops" :technologies="resume.technologies.ops" label="Ops" />
        </ul>
      </li>
      <li id="resume-box-projects" class="p-3 md:p-6 print:p-3 curved-border">
        <ResumeTitle title="A selection of projects" icon-name="document" />
        <ul class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 print:ml-2 px-6 print:px-2">
          <ResumeProject v-for="(project, i) in resume.projects" :key="`project_${i}`" v-bind="project" />
        </ul>
      </li>

      <ResumeBox v-for="(box, i) in resume.boxes" :key="`box_${i}`" v-bind="box" />
    </ul>

    <ul class="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-10">
      <li>
        <StickyNote class="[&_.sticky-content]:flex-col mx-auto">
          <h3 class="font-bold">
            {{ $t('resume.softSkills.label') }}
          </h3>
          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-xs"
          >
            <li v-for="(_, i) in new Array(5)" :key="`softSkill${i}`">
              {{ $t(`resume.softSkills.points[${i}]`) }}
            </li>
          </ul>
        </StickyNote>
      </li>
      <li>
        <StickyNote class="[&_.sticky-content]:flex-col mx-auto">
          <h3 class="font-bold mb-2">
            {{ $t('resume.funFacts.label') }}
          </h3>
          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-xs"
          >
            <li v-for="(_, i) in new Array(4)" :key="`funFacts${i}`">
              {{ $t(`resume.funFacts.points[${i}][0]`) }}<br>{{ $t(`resume.funFacts.points[${i}][1]`) }}
            </li>
          </ul>
        </StickyNote>
      </li>
      <li>
        <StickyNote class="[&_.sticky-content]:flex-col mx-auto">
          <h3 class="font-bold">
            {{ $t('resume.learningGoals.label') }}
          </h3>
          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-xs"
          >
            <li v-for="(_, i) in new Array(5)" :key="`learningGoals${i}`">
              {{ $t(`resume.learningGoals.points[${i}]`) }}
            </li>
          </ul>
        </StickyNote>
      </li>
    </ul>

    <p class="hidden print:block text-2xl font-bold text-center font-script mt-4">
      {{ $t('resume.contactDetails') }}
      <a href="https://thormeier.dev/contact">
        <TButton :has-border="false" class="text-2xl">
          thormeier.dev/contact
        </TButton>
      </a>
    </p>
    <p class="hidden print:block text-2xs text-center font-script mt-4">
      {{ $t('resume.thisCVWasMadeWith') }}
    </p>
  </main>
</template>

<script lang="ts" setup>
import type { Box } from '~/components/Resume/Box.vue'
import type { Project } from '~/components/Resume/Project.vue'
import type { Technology } from '~/components/Resume/Technology.vue'
import { useResume } from '../data/useResume'

const { t } = useI18n()
const resume = useResume(t)

useHead({
  title: t('resume.seo.title'),
  meta: [
    {
      name: 'keywords',
      content: t('resume.seo.keywords'),
    },
  ],
})

interface Technologies {
  frontend: Technology[]
  backend: Technology[]
  data: Technology[]
  ops: Technology[]
}

export interface Resume {
  projects: Project[]
  technologies: Technologies
  boxes: Box[]
}
</script>
