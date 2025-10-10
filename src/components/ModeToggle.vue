<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const { toggleDark } = appStore
</script>

<template>
  <div class="flex items-center">
    <label class="swap swap-rotate">
      <div class="tooltip tooltip-bottom" :data-tip="`${appStore.modeText} mode`">
        <input type="checkbox" :checked="appStore.isDark" @change="toggleDark()" class="hidden" />
        <span class="ml-auto text-2xl">{{ appStore.modeIcon }}</span>
      </div>
    </label>
  </div>
</template>