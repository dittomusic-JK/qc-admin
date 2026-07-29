<template>
  <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
    <button
      @click="$emit('toggle')"
      :class="[
        'w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors',
        open ? 'bg-lavender-soft border-b border-hairline' : 'hover:bg-lavender-soft/60'
      ]"
    >
      <span class="flex items-center gap-2.5 min-w-0">
        <span class="text-[13px] font-bold text-ink truncate">{{ title }}</span>
        <span v-if="meta" class="text-[13px] text-subtext tabular-nums">{{ meta }}</span>
      </span>
      <Icon
        name="chevron-down"
        :size="15"
        :class="['text-prompt transition-transform duration-200 flex-shrink-0', open ? 'rotate-180' : '']"
      />
    </button>
    <div v-if="open">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'

defineProps<{
  title: string
  meta?: string
  open?: boolean
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>
