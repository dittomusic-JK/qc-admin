<template>
  <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
    <div class="flex items-center gap-2 px-4 py-3 border-b border-hairline">
      <Icon name="search" :size="14" class="text-subtext" />
      <h2 class="text-h3 text-ink">{{ title }}</h2>
    </div>
    <div class="px-4 py-4 space-y-3.5">
      <slot />
      <div class="flex items-center gap-2 pt-1">
        <Btn variant="primary" icon="search" @click="$emit('search')">Search</Btn>
        <Btn variant="ghost" @click="$emit('clear')">Clear</Btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
import Btn from './Btn.vue'

withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'Filters',
})

defineEmits<{
  (e: 'search'): void
  (e: 'clear'): void
}>()
</script>
