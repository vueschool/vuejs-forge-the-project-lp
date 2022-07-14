<template>
  <header>
    <div class="container flex justify-between items-center">
      <div class="col-md-12">
        <a :href="logo.url" class="logo" :aria-label="logo.label">
          <img :src="logo.url" width="160" aria-hidden>
        </a>
      </div>
      <nav>
        <ul class="flex">
          <li v-for="menuItem in menuItems" :key="menuItem.metadata.id" class="p-2">
            <a 
              class="ud-menu-scroll menuItem group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
              :href="menuItem.url"
            >
              {{ menuItem.label }}
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <a v-for="action in actionItems" 
          :key="action.metadata.id" 
          :href="action.url" 
          class="loginBtn"
        >
          {{ action.label }}
        </a>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { useActionItems, useLogo, useMenuItems } from "~~/hooks/useCMS";

const menuItems = useMenuItems();
const actionItems = useActionItems();
const logo = useLogo();
</script>
<style scoped>
.menuItem {
  @apply mx-8 flex py-2 text-white;
}

.loginBtn {
  @apply py-3 px-7 text-white font-medium hover:opacity-70 rounded-lg bg-white bg-opacity-20 py-3 px-6 ;
}
</style>