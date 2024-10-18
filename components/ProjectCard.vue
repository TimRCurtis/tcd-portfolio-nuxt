<template>
    <a :href="project.link" class="flex flex-row justify-between mb-16 [&>:first-child]:hover:scale-95 [&>:last-child]:hover:border-gray-200">
    <div class="mr-3 rounded-l-md shadow transition ease-in-out delay-50">
      <img :src="project.image" :alt="project.title" class="max-w-7xl rounded-l-md">
    </div>
    <div class="bg-white p-7 w-full rounded-r-md border border-transparent shadow">
      <div>
        <div class="flex flex-row pb-8">
          <svg v-for="(svg, index) in project.svgs" :key="index" class="text-slate-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path :d="svg.path" fill="currentColor" />
          </svg>
        </div>
        <h5 class="mb-6 text-4xl font-rubik font-bold text-tcd-mariner-600">{{ project.title }}</h5>
      </div>
      <p class="mb-3 text-slate-500">{{ project.description }}</p>
    </div>
  </a>
  </template>

<script setup>
    defineProps({
        project: {
            type: Object,
            required: true,
            default: () => ({
                title: '',
                description: '',
                link: '#',
                image: 'https://placehold.co/300x400',
                svgs: [
                    { path: 'M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z' }, 
                    { path: 'M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12' }
                ]
            })
        }
    });
</script>