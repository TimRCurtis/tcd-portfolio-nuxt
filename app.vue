<template>
  <Navbar />
  <Intro />
  <ProjectSection />
  <section class="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
      <Timeline :items="timelineItems" />
    </div>
  </section>
  <section>
    <!-- todo Contact Section ??? -->
  </section>
  <Footer />
</template>

<script setup>
  import ProjectCard from '~/components/ProjectSection.vue';
  import Timeline from '~/components/Timeline.vue';
  import Navbar from '~/components/Navbar.vue';
  import Intro from '~/components/Intro.vue';

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
</script>