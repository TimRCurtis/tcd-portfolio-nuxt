<template>
    <div class="w-2/5 bg-white border border-gray-200 rounded-md shadow">
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-rubik font-bold text-tcd-mariner-600">{{ school }}</h5>
        <p class="mb-3 text-slate-500">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  //Props: Accept individual education data
  const props = defineProps({
    school: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  </script>