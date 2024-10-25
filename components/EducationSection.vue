<template>
    <h1 class="font-rubik font-bold pb-8 text-5xl text-tcd-java-400">Education</h1>
    <div class="flex flex-row justify-around">
    <!-- Render each education card -->
    <EducationCard
        v-for="(item, index) in educationItems"
        :key="index"
        :school="item.school"
        :description="item.description"
    />
    </div>
  </template>
  
  <script setup>
  // Import the child component
  import EducationCard from '~/components/EducationCard.vue';
  
  // Props: Accept an array of education items
  const props = defineProps({
    educationItems: {
      type: Array,
      required: true,
      default: () => []
    }
  });
  </script>