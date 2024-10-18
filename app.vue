<template>
  <section class="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
    <h1 class="font-rubik font-bold pb-8 text-5xl text-tcd-java-400">Projects</h1>
    <div class="flex flex-col">
      <ProjectCard :project="project1" />
      <ProjectCard :project="project2" reverse />
    </div>
  </section>
</template>

<script setup>
  import ProjectCard from '@/components/ProjectCard.vue'

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
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    link: 'https://example.com/project-1',
    image: 'https://placehold.co/300x400',
    svgs: [
      { path: 'M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12' }
    ]
  }
</script>