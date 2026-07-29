<template>
  <div class="px-8 py-12 flex flex-col items-center text-center">
    <div class="w-11 h-11 rounded-full bg-lavender flex items-center justify-center mb-3">
      <Icon :name="icon" :size="18" class="text-subtext" />
    </div>
    <p class="text-[13px] font-medium text-ink">{{ title }}</p>
    <p v-if="hint" class="text-xs text-subtext mt-1 max-w-xs">{{ hint }}</p>
    <div v-if="$slots.default" class="mt-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'

withDefaults(defineProps<{
  title: string
  hint?: string
  icon?: string
}>(), {
  icon: 'inbox',
})
</script>
