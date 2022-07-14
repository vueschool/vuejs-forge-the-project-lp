<template>
  <section class="bg-white py-20">
    <div class="container py-4 flex flex-col">
      <h2 class="mb-4 text-3xl font-bold text-dark order-1 sm:text-4xl md:text-[42px]">{{ title }}</h2>
      <h3 class="text-primary-500 mb-2 block text-lg font-semibold text-primary">{{ subheadline }}</h3>
      <p class="order-2 my-10">{{ description }}</p>
      <ul class="feature-list flex order-3">
        <li 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature w-full px-4 md:w-1/2 lg:w-1/4"
        >
          <Feature 
            :src="feature.icon"
            :title="feature.headline"
            :description="feature.description"
            link="https://vueschool.com"
            linkText="Sign up"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import Feature from '~~/components/LFeature.vue';
import { useFeatures, useFeatureSectionInfo } from '~~/hooks/useCMS';
const features = useFeatures() as any;
const { title, subheadline, description } = useFeatureSectionInfo() as any;
</script>