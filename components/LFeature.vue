<template>
  <img :src="src" width=70 class="feature-icon" />
  <h3 class="mb-3 text-xl font-bold text-dark">{{title}}</h3>
  <p class="mb-8 text-secondary-900 lg:mb-11">{{description}}</p>
  <a :href="link">{{ linkText }}</a>
</template>

<script setup>
const { src, title, description, link, linkText} = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  }
})
</script>
