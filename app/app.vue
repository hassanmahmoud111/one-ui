<template>
  <div>
    <AppHeader v-if="!route.meta?.hideHeader" />
    <NuxtPage />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';

const route = useRoute();
</script>
