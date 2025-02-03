<template>
  <main class="container print:max-w-full px-5 md:px-0 mx-auto print:mx-0 my-6">
    <h2 class="font-script text-3xl lg:text-4xl print:text-2xl mb-3">
      Pascal Thormeier (he/him) &ndash; Senior Software Engineer
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
            Born 1990-01-15
          </p>

          <p class="mb-1">
            Living in Zurich, CH
          </p>

          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-2xs"
          >
            <li>Curious self-organized doer</li>
            <li>Team player, leader, coach</li>
            <li>Passionate about all things web</li>
            <li>Tech enthusiast in general</li>
            <li>German (native)</li>
            <li>English (fluent in<br>written and spoken)</li>
          </ul>
        </StickyNote>
      </li>
      <li id="resume-box-tech" class="p-3 md:p-6 print:p-3 curved-border">
        <ResumeTitle title="Technologies" icon-name="spanner" />
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
            My key soft skills
          </h3>
          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-xs"
          >
            <li>Problem Solver</li>
            <li>Team Player</li>
            <li>Quick Learner</li>
            <li>Strong Communicator</li>
            <li>Trusted Leader</li>
            <li>Resilient Enthusiast</li>
          </ul>
        </StickyNote>
      </li>
      <li>
        <StickyNote class="[&_.sticky-content]:flex-col mx-auto">
          <h3 class="font-bold mb-2">
            Fun facts about me
          </h3>
          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-xs"
          >
            <li>Started programming<br>when I was 13</li>
            <li>I love woodworking<br>and electronics</li>
            <li>I own around 200 music<br>CDs and vinyls</li>
            <li>I have five different<br>ways to make coffee</li>
          </ul>
        </StickyNote>
      </li>
      <li>
        <StickyNote class="[&_.sticky-content]:flex-col mx-auto">
          <h3 class="font-bold">
            My learning goals
          </h3>
          <ul
            class="list-image-[url(~/assets/svg/listItemSmall.svg)] lg:list-image-[url(~/assets/svg/listItem.svg)] ml-3 px-6 print:px-0 print:py-2 print:text-xs"
          >
            <li>Godot and Gamedev</li>
            <li>Electronics and Arduino</li>
            <li>In-depth UX</li>
            <li>Refine my artistic skills</li>
            <li>More ways to make coffee</li>
          </ul>
        </StickyNote>
      </li>
    </ul>

    <p class="hidden print:block text-2xl font-bold text-center font-script mt-10">
      Contact details at
      <a href="https://thormeier.dev/contact">
        <TButton :has-border="false" class="text-2xl">
          thormeier.dev/contact
        </TButton>
      </a>
    </p>
    <p class="hidden print:block text-2xs text-center font-script mt-6">
      This CV was made with love, HTML, CSS, Nuxt+Vue and Tailwind. Icons are SVGs, the rest is CSS.
    </p>
  </main>
</template>

<script lang="ts" setup>
import type { Box } from '~/components/Resume/Box.vue'
import type { Project } from '~/components/Resume/Project.vue'
import type { Technology } from '~/components/Resume/Technology.vue'
import resume from '../data/resume.json'

useHead({
  title: 'Pascal Thormeier\'s resume',
  meta: [
    { name: 'description', content: 'Find out about Pascal Thormeier.' },
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
