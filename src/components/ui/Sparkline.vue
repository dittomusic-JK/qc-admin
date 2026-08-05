<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" aria-hidden="true">
    <polyline
      :points="points"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle :cx="lastX" :cy="lastY" r="2" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  values: number[]
  width?: number
  height?: number
}>(), {
  width: 72,
  height: 22,
})

const coords = computed(() => {
  const vals = props.values
  if (vals.length < 2) return []
  const min = Math.min(...vals)
  const max = Math.max(...vals)
  const span = max - min || 1
  const pad = 3
  return vals.map((v, i) => [
    pad + (i / (vals.length - 1)) * (props.width - pad * 2),
    pad + (1 - (v - min) / span) * (props.height - pad * 2),
  ])
})

const points = computed(() => coords.value.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' '))
const lastX = computed(() => coords.value[coords.value.length - 1]?.[0] ?? 0)
const lastY = computed(() => coords.value[coords.value.length - 1]?.[1] ?? 0)
</script>
