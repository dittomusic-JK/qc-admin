<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    :class="[
      'bg-white border border-hairline rounded-card shadow-card px-5 py-4 flex items-center gap-4 min-w-0',
      to ? 'hover:border-hairline-strong hover:shadow-pop transition-all group' : ''
    ]"
  >
    <div :class="['w-10 h-10 rounded-control flex items-center justify-center flex-shrink-0', tintClass]">
      <Icon :name="icon" :size="18" />
    </div>
    <div class="min-w-0 flex-1">
      <p class="text-xs text-subtext truncate">{{ label }}</p>
      <p class="text-xl font-bold text-ink leading-7 tabular-nums truncate">{{ value }}</p>
    </div>
    <Icon
      v-if="to"
      name="arrow-up-right"
      :size="14"
      class="text-prompt group-hover:text-accent transition-colors flex-shrink-0"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = withDefaults(defineProps<{
  label: string
  value: string | number
  icon: string
  tint?: 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  to?: string
}>(), {
  tint: 'accent',
})

const tints: Record<string, string> = {
  accent: 'bg-accent-soft text-accent',
  success: 'bg-success/10 text-success-ink',
  warning: 'bg-warning/10 text-warning-ink',
  danger: 'bg-danger/10 text-danger-ink',
  info: 'bg-info/10 text-info-ink',
  neutral: 'bg-lavender text-subtext',
}

const tintClass = computed(() => tints[props.tint])
</script>
