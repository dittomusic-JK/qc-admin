<template>
  <span :class="['inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap', tone.badge]">
    <span :class="['w-1.5 h-1.5 rounded-full flex-shrink-0', tone.dot]"></span>
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// The one status treatment for the whole admin:
//   success = positive/cleared/active · warning = pending/awaiting action
//   danger = blocked/rejected/banned  · info = informational · neutral = inactive
const props = withDefaults(defineProps<{
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'accent'
  label?: string
}>(), {
  variant: 'neutral',
})

const tones: Record<string, { badge: string; dot: string }> = {
  success: { badge: 'bg-success/10 text-success-ink', dot: 'bg-success' },
  warning: { badge: 'bg-warning/10 text-warning-ink', dot: 'bg-warning' },
  danger: { badge: 'bg-danger/10 text-danger-ink', dot: 'bg-danger' },
  info: { badge: 'bg-info/10 text-info-ink', dot: 'bg-info' },
  neutral: { badge: 'bg-lavender text-subtext', dot: 'bg-prompt' },
  accent: { badge: 'bg-accent-soft text-accent', dot: 'bg-accent' },
}

const tone = computed(() => tones[props.variant])
</script>
