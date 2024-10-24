<template>
    <div :class="['relative flex items-center', reverse ? 'md:flex-row-reverse' : '']" class="group is-active">
      <!-- Icon -->
      <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-tcd-java-500 text-slate-500 group-[.is-active]:text-tcd-java-50 shadow shrink-0 md:order-1" 
        :class="[reverse ? '-translate-x-1/2' : 'translate-x-1/2']">
      </div>
      <!-- Card -->
      <div :class="['w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]', reverse ? 'rounded-r-md' : 'rounded-l-md']" class="bg-white p-4 border border-slate-200 shadow">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-lg text-tcd-mariner-600">
            {{ title }}
            <div class="text-base text-tcd-mariner-400">{{ subtitle }}</div>
          </div>
          <time class="font-medium text-sm text-tcd-java-400">{{ date }}</time>
        </div>
        <div class="text-slate-500">
          <p class="pt-4"><em>{{ description }}</em></p>
          <ul class="pt-4 pl-4 list-disc">
            <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    // Props: Accept individual item data
    const props = defineProps({
        title: {
        type: String,
        required: true
        },
        subtitle: {
        type: String,
        required: true
        },
        date: {
        type: String,
        required: true
        },
        description: {
        type: String,
        required: true
        },
        tasks: {
        type: Array,
        required: true
        },
        reverse: {
        type: Boolean,
        default: false
        }
    });
  </script>