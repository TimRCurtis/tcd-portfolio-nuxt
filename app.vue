<template>
  <section class="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
    <h1 class="font-rubik font-bold pb-8 text-5xl text-tcd-java-400">Projects</h1>
    <div class="flex flex-col">
      <ProjectCard :project="project1" />
      <ProjectCard :project="project2" reverse />
    </div>
  </section class="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
      <Timeline :items="timelineItems" />
    </div>
  <section class="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
    <EducationSection :educationItems="educationList" />
  </section>
</template>

<script setup>
  import ProjectCard from '~/components/ProjectCard.vue';
  import Timeline from '~/components/Timeline.vue';
  import EducationSection from '~/components/EducationSection.vue';

  const project1 = {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    link: 'https://example.com/project-1',
    image: 'https://placehold.co/300x400',
    svgs: [
      { path: 'M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z' },
      { path: 'M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12' }
    ]
  }

  const project2 = {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    link: 'https://example.com/project-1',
    image: 'https://placehold.co/300x400',
    svgs: [
      { path: 'M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12' }
    ]
  }

  const timelineItems = [
  {
    title: 'Self Employed/Contract Work',
    subtitle: 'Web Designer/Developer',
    date: 'March 2019 - Current',
    description: 'Contract web designer and developer',
    tasks: [
      'Build websites using Wordpress or HTML/CSS/JS',
      'Design logos and vector icons',
      'Conducted testing of website designs for responsiveness'
    ]
  },
  {
    title: 'Higher Information Group',
    subtitle: 'Web Developer',
    date: 'May 2018 - March 2019',
    description: 'Web developer in a team of 6 for their web services department.',
    tasks: [
      'Managed full-cycle design tasks, handling all phases from conception to completion while maintaining guidelines throughout.',
      'Build websites using Wordpress and Divi Theme',
      'Conducted testing and review of website design for responsiveness, clarity and effectiveness',
      'Design logos, info graphics, and others used for print and digital'
    ]
  },
  {
    title: 'Oven Industries',
    subtitle: 'Web Developer/E-commerce',
    date: 'May 2016 - May 2018',
    description: 'In-house web developer for Oven Industries and other partner sites.',
    tasks: [
      'Designed websites with Wordpress and Themes',
      'Used WooCommerce for Ecommerce',
      'Used Google Analytics & MOZ reports',
      'Design logos, info graphics, and others used for print and digital'
    ]
  }
];

const educationList = [
  {
    school: 'Art Institute of York',
    description: 'BS in Web Design & Interactive Media'
  },
  {
    school: 'Millersville University',
    description: 'BFA in Graphic Design- 46 credits earned'
  }
];
</script>