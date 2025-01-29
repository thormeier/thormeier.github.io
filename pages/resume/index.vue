<template>
  <div class="container mx-auto my-6">
    <h1 class="font-script text-3xl md:text-4xl mt-3 mb-3 mx-3">
      Resume
    </h1>

    <div class="flex flex-wrap md:-mx-8 p-3">
      <div class="md:px-8 w-full md:w-1/2 mb-3">
        <viewport-watcher @inViewport="animate('image')">
          <tape-animator :is-active="animations.image.hasAnimated">
            <t-image :src="imageMe" alt="A photo of me, Pascal Thormeier" />
          </tape-animator>
        </viewport-watcher>
      </div>
      <div class="md:px-8 w-full md:w-1/2 mb-3 mt-6">
        <resume-box
          @inViewport.capture="animate('about')"
          :is-active="animations.about.hasAnimated"
        >
          <template slot="title">
            Pascal Thormeier
          </template>
          <template slot="default">
            <p class="mb-6">
              Born: 1990-01-15 | he/him
            </p>

            <ul
              class="list-handdrawn ml-3 px-6 print:px-0 print:py-2 print:text-sm"
            >
              <li>Curious self-organized doer</li>
              <li>Team player, leader, coach</li>
              <li>Passionate about all things web</li>
              <li>Tech enthusiast in general</li>
            </ul>
          </template>
        </resume-box>
      </div>

      <div
        :key="index"
        v-for="(resumeBox, index) in resumeBoxes"
        class="md:px-8 w-full md:w-1/2 mb-3 mt-6"
      >
        <resume-box
          @inViewport.capture="animate(resumeBox.id)"
          :is-active="animations[resumeBox.id].hasAnimated"
        >
          <template slot="title" class="flex">
            <!-- eslint-disable-next-line vue/require-component-is -->
            <component
              v-bind:is="resumeBox.icon"
              class="w-icon h-icon mr-3 md:mt-1"
            />
            {{ resumeBox.label }}
          </template>
          <template slot="default">
            <ul
              class="list-handdrawn ml-3 px-6 print:px-0 print:py-2 print:text-sm"
            >
              <li
                :key="pIndex"
                v-for="(point, pIndex) in resumeBox.points"
                class="mb-8"
              >
                <resume-point
                  :date-start="point.dateStart"
                  :date-end="point.dateEnd"
                  :title="point.title"
                  :what="point.what"
                  :where="point.where"
                />
              </li>
            </ul>
          </template>
        </resume-box>
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '@/mixins/Animation'
import Diploma from '../../assets/svg/diploma.svg?inline'
import Laptop from '../../assets/svg/laptop.svg?inline'
import SchoolHat from '../../assets/svg/school.svg?inline'
import Award from '../../assets/svg/award.svg?inline'

export default {
  head: {
    title: "Pascal Thormeier's resume",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Find out about Pascal Thormeier'
      }
    ]
  },

  mixins: [Animation],

  data() {
    return {
      imageMe: require('~/assets/images/me.jpg'),

      resumeBoxes: [
        {
          id: 'work',
          label: 'Work',
          icon: Laptop,
          points: [
            {
              dateStart: new Date('2025-03-01'),
              dateEnd: new Date(),
              title: 'First Aid instructor',
              where: 'Samariterverein Region-Thalwil',
              what:
                "Giving courses in first aid (BLS-AED-SRC, emergency first aid for obtaining diver's licenses and IVR-1) on a voluntary basis."
            },
            {
              dateStart: new Date('2023-06-09'),
              dateEnd: new Date(),
              title: 'Book author',
              where: 'Packt',
              what:
                'Mastering CSS Grid: A Comprehensive and Practical Guide to Creating Beautiful Layouts with CSS Grid. A 330 page book to learn all about CSS Grid.'
            },
            {
              dateStart: new Date('2022-02-18'),
              dateEnd: new Date(),
              title: 'Course Author',
              where: 'Educative.io',
              what:
                'Wrote the course titled "Advanced VueJS: Build Better Applications Efficiently", containing 51 lessons, 57 code playgrounds and 8 quizzes: https://www.educative.io/courses/advanced-vuejs-build-better-applications-efficiently'
            },
            {
              dateStart: new Date('2014-01-01'),
              dateEnd: new Date(),
              title: 'Senior Web Developer',
              where: 'Liip AG, Zurich, Switzerland',
              what:
                'Development, bugfixing, deployment, system administration, business development. Various different technologies and frameworks'
            },
            {
              dateStart: new Date('2010-07-01'),
              dateEnd: new Date('2013-12-31'),
              title: 'Web Developer',
              where: 'Cinergy AG, Zurich, Switzerland',
              what:
                'Development, bugfixing, system administration, 2nd level support, deployment, network administration'
            }
          ]
        },
        {
          id: 'education',
          label: 'Education',
          icon: SchoolHat,
          points: [
            {
              dateStart: new Date('2023-06-25'),
              dateEnd: new Date(),
              title: 'First aider level 2 IVR 2021',
              where: 'Samariter Schweiz',
              what: 'Able to give advanced first aid in emergency situations.'
            },
            {
              dateStart: new Date('2015-09-16'),
              dateEnd: new Date('2020-05-12'),
              title:
                'Studies for Bachelor of Science FHNW in computer sciences with specialization in design and management',
              where:
                'University of Applied Sciences and Arts Northwestern Switzerland FHNW, School of Engineering, Brugg, Switzerland',
              what:
                '4 1/2 years part-time studies, participated in several larger projects, programming tutor'
            },
            {
              dateStart: new Date('2006-08-01'),
              dateEnd: new Date('2010-06-30'),
              title:
                'Studies for Swiss confederate certificate of competency as application developer',
              where: 'Kantonsschule Enge, Zurich, Switzerland',
              what: 'EFZ, also commercial vocational school leaving certificate'
            }
          ]
        },
        {
          id: 'diplomas',
          label: 'Diplomas',
          icon: Diploma,
          points: [
            {
              dateStart: new Date('2020-05-12'),
              title:
                'Bachelor of Science FHNW in computer sciences with specialization in design and management',
              where:
                'University of Applied Sciences and Arts Northwestern Switzerland FHNW, School of Engineering, Brugg, Switzerland',
              what: 'Swiss grade 5.3'
            },
            {
              dateStart: new Date('2018-04-28'),
              title: 'Machine Learning Course Certificate',
              where: 'Coursera, Stanford University',
              what:
                'During BSc studies. Consisted of various Machine Learning techniques'
            },
            {
              dateStart: new Date('2014-09-10'),
              title: 'Zend Certified PHP Engineer ZCPE',
              where: 'Zend - The PHP Company',
              what: ''
            },
            {
              dateStart: new Date('2019-07-22'),
              title: 'Captain of Civil Protection',
              where: 'ZSO Hardwald, Kloten, Switzerland',
              what:
                '"Zivilschutz", company commander ("Kompaniekommandant") responsible for around 120 people'
            }
          ]
        },
        {
          id: 'awards',
          label: 'Awards & Achievements',
          icon: Award,
          points: [
            {
              dateStart: new Date('2021-02-09'),
              title: 'dev.to Top 7 articles of the week',
              what: 'twice in 2021, once in 2022'
            },
            {
              dateStart: new Date('2019-02-08'),
              title: 'German Design Award - Winner Interactive User Experience',
              what: 'for ETH Immobilienökonomie'
            },
            {
              dateStart: new Date('2018-04-12'),
              title: 'Best of Swiss Web - public affairs silver',
              what: 'for ETH Immobilienökonomie'
            },
            {
              dateStart: new Date('2010-06-30'),
              dateEnd: null,
              title: 'Pass with distinction',
              where: 'Kantonsschule Enge, Zurich, Switzerland',
              what: 'Swiss grade 5.3'
            }
          ]
        }
      ],

      animations: {
        image: {
          delay: 0,
          hasAnimated: false
        },
        about: {
          delay: 100,
          hasAnimated: false
        },
        work: {
          delay: 300,
          hasAnimated: false
        },
        education: {
          delay: 500,
          hasAnimated: false
        },
        diplomas: {
          delay: 600,
          hasAnimated: false
        },
        awards: {
          delay: 900,
          hasAnimated: false
        }
      }
    }
  }
}
</script>

<style>
.list-handdrawn {
  list-style-image: url('../../assets/svg/listItem.svg');
}
</style>
