<template>
    <section class="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div class="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-6">
          <div class="w-full max-w-7xl mx-auto">
            <div class="mx-auto max-w-7xl space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <h1 class="font-rubik font-bold text-5xl text-tcd-java-400">Work</h1>
              <TimelineItem
                v-for="(item, index) in items"
                :key="index"
                :title="item.title"
                :subtitle="item.subtitle"
                :date="item.date"
                :description="item.description"
                :tasks="item.tasks"
                :reverse="index % 2 !== 0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    // Props: Accept timeline data from the parent component
    const props = defineProps({
        items: {
        type: Array,
        required: true,
        default: () => []
        }
    });
  </script>