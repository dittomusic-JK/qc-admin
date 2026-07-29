<template>
  <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
    <div v-if="title" class="px-4 py-3 border-b border-hairline">
      <h2 class="text-h3 text-ink">{{ title }}</h2>
    </div>
    <dl>
      <slot />
    </dl>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
