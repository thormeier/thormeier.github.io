export function useResume(t: (s: string) => string) {
  return {
    projects: [
      {
        title: t('resume.content.projects.bs.title'),
        techStack: t('resume.content.projects.bs.techStack'),
        role: t('resume.content.projects.bs.role'),
        what: t('resume.content.projects.bs.what'),
      },
      {
        title: t('resume.content.projects.sv.title'),
        techStack: t('resume.content.projects.sv.techStack'),
        role: t('resume.content.projects.sv.role'),
        what: t('resume.content.projects.sv.what'),
      },
      {
        title: t('resume.content.projects.ethioe.title'),
        techStack: t('resume.content.projects.ethioe.techStack'),
        role: t('resume.content.projects.ethioe.role'),
        what: t('resume.content.projects.ethioe.what'),
      },
      {
        title: t('resume.content.projects.mapi.title'),
        techStack: t('resume.content.projects.mapi.techStack'),
        role: t('resume.content.projects.mapi.role'),
        what: t('resume.content.projects.mapi.what'),
      },
      {
        title: t('resume.content.projects.oss.title'),
        techStack: t('resume.content.projects.oss.techStack'),
        what: t('resume.content.projects.oss.what'),
      },
    ],
    technologies: {
      frontend: [
        {
          name: t('resume.content.technologies.frontend.jsts'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.frontend.nuxtVue'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.frontend.react'),
          rating: 4,
        },
        {
          name: t('resume.content.technologies.frontend.buildTools'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.frontend.css'),
          rating: 5,
        },
      ],
      backend: [
        {
          name: t('resume.content.technologies.backend.php'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.backend.symfony'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.backend.laravel'),
          rating: 4,
        },
        {
          name: t('resume.content.technologies.backend.drupal'),
          rating: 4,
        },
        {
          name: t('resume.content.technologies.backend.python'),
          rating: 3,
        },
      ],
      data: [
        {
          name: t('resume.content.technologies.data.mysqlMariadb'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.data.postgres'),
          rating: 3,
        },
        {
          name: t('resume.content.technologies.data.nosql'),
          rating: 4,
        },
        {
          name: t('resume.content.technologies.data.apis'),
          rating: 5,
        },
      ],
      ops: [
        {
          name: t('resume.content.technologies.ops.nix'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.ops.docker'),
          rating: 5,
        },
        {
          name: t('resume.content.technologies.ops.bash'),
          rating: 5,
        },
      ],
    },
    boxes: [
      {
        id: 'work',
        label: t('resume.content.boxes.work.label'),
        iconName: 'laptop',
        points: [
          {
            title: t('resume.content.boxes.work.points[0].title'),
            dateStart: '2014-01-01',
            where: t('resume.content.boxes.work.points[0].where'),
            what: t('resume.content.boxes.work.points[0].what'),
          },
          {
            title: t('resume.content.boxes.work.points[1].title'),
            dateStart: '2010-07-01',
            dateEnd: '2013-12-31',
            where: t('resume.content.boxes.work.points[1].where'),
            what: t('resume.content.boxes.work.points[1].what'),
          },
          {
            title: t('resume.content.boxes.work.points[2].title'),
            dateStart: '2023-06-09',
            where: t('resume.content.boxes.work.points[2].where'),
            what: t('resume.content.boxes.work.points[2].what'),
          },
          {
            title: t('resume.content.boxes.work.points[3].title'),
            dateStart: '2022-02-18',
            where: t('resume.content.boxes.work.points[3].where'),
            what: t('resume.content.boxes.work.points[3].what'),
          },
          {
            title: t('resume.content.boxes.work.points[4].title'),
            dateStart: '2020-05-12',
            where: t('resume.content.boxes.work.points[4].where'),
            what: t('resume.content.boxes.work.points[4].what'),
          },
        ],
      },
      {
        id: 'diplomas',
        label: t('resume.content.boxes.diplomas.label'),
        iconName: 'diploma',
        points: [
          {
            title: t('resume.content.boxes.diplomas.points[0].title'),
            dateStart: '2020-05-12',
            dateEnd: null,
            where: t('resume.content.boxes.diplomas.points[0].where'),
            what: t('resume.content.boxes.diplomas.points[0].what'),
          },
          {
            title: t('resume.content.boxes.diplomas.points[1].title'),
            dateStart: '2010-06-30',
            dateEnd: null,
            where: t('resume.content.boxes.diplomas.points[1].where'),
            what: t('resume.content.boxes.diplomas.points[1].what'),
          },
          {
            title: t('resume.content.boxes.diplomas.points[2].title'),
            dateStart: '2018-04-28',
            dateEnd: null,
            where: t('resume.content.boxes.diplomas.points[2].where'),
            what: t('resume.content.boxes.diplomas.points[2].what'),
          },
          {
            title: t('resume.content.boxes.diplomas.points[3].title'),
            dateStart: '2014-09-10',
            dateEnd: null,
            where: t('resume.content.boxes.diplomas.points[3].where'),
            what: t('resume.content.boxes.diplomas.points[3].what'),
          },
          {
            title: t('resume.content.boxes.diplomas.points[4].title'),
            dateStart: '2023-06-25',
            dateEnd: null,
            where: t('resume.content.boxes.diplomas.points[4].where'),
            what: t('resume.content.boxes.diplomas.points[4].what'),
          },
        ],
      },
      {
        id: 'awards',
        label: t('resume.content.boxes.awards.label'),
        iconName: 'award',
        points: [
          {
            title: t('resume.content.boxes.awards.points[0].title'),
            dateStart: '2025-03-11',
            dateEnd: null,
            what: t('resume.content.boxes.awards.points[0].what'),
          },
          {
            title: t('resume.content.boxes.awards.points[1].title'),
            dateStart: '2021-02-09',
            dateEnd: null,
            what: t('resume.content.boxes.awards.points[1].what'),
          },
          {
            title: t('resume.content.boxes.awards.points[2].title'),
            dateStart: '2019-02-08',
            dateEnd: null,
            what: t('resume.content.boxes.awards.points[2].what'),
          },
          {
            title: t('resume.content.boxes.awards.points[3].title'),
            dateStart: '2018-04-12',
            dateEnd: null,
            what: t('resume.content.boxes.awards.points[3].what'),
          },
          {
            title: t('resume.content.boxes.awards.points[4].title'),
            dateStart: '2010-06-30',
            dateEnd: null,
            what: t('resume.content.boxes.awards.points[4].what'),
          },
        ],
      },
      {
        id: 'leadershipAndVolunteering',
        label: t('resume.content.boxes.voluntary.label'),
        iconName: 'heart',
        points: [
          {
            title: t('resume.content.boxes.voluntary.points[0].title'),
            dateStart: '2025-03-01',
            where: t('resume.content.boxes.voluntary.points[0].where'),
            what: t('resume.content.boxes.voluntary.points[0].what'),
          },
          {
            title: t('resume.content.boxes.voluntary.points[1].title'),
            dateStart: '2020-01-01',
            where: t('resume.content.boxes.voluntary.points[1].where'),
            what: t('resume.content.boxes.voluntary.points[1].what'),
          },
          {
            title: t('resume.content.boxes.voluntary.points[2].title'),
            dateStart: '2019-07-22',
            where: t('resume.content.boxes.voluntary.points[2].where'),
            what: t('resume.content.boxes.voluntary.points[2].what'),
          },
        ],
      },
    ],
  }
}
