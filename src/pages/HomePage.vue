<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
// Script setup content goes here
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="flex">
      <h1>Home Page</h1>
    </div>
    <div class="flex h-full flex-col items-center justify-center">
      <HelloWorld name="World" />
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles go here */
</style>
