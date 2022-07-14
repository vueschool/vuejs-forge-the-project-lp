<template>
  <section class="container mt-20 justify-center text-center">
    <h1 class="mb-8 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">{{ headline }}</h1>
    <p class="mx-auto mb-10 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">{{ description }}</p>
    <a 
      :href="button_url" 
      class="inline-flex items-center justify-center rounded-lg bg-white py-2 px-6 m-6 text-center font-medium sm:px-10">
      {{ button_label}}
    </a>
    <img :src="image" />
  </section>
</template>
<script lang="ts" setup>
import { useHero } from '~~/hooks/useCMS';

const { headline, subheadline: description, image, button_label, button_url } = useHero();
</script>