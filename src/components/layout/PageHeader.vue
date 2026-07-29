<template>
  <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
    <div class="min-w-0">
      <h1 class="text-h1 font-satoshi text-ink">{{ title }}</h1>
      <p v-if="description" class="text-[13px] text-subtext mt-0.5">{{ description }}</p>
    </div>
    <div v-if="$slots.default" class="flex items-center gap-2 flex-shrink-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>
