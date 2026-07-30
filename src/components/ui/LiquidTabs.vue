<template>
  <!-- Never wrap: the morph fill is measured on one axis, so overflow scrolls instead -->
  <nav ref="navRef" class="flex items-center gap-1.5 flex-nowrap overflow-x-auto scrollbar-hide">
    <button
      v-for="(tab, i) in tabs"
      :key="tab.id"
      :ref="el => setBtnRef(el, i)"
      @click="$emit('select', tab.id)"
      :class="[
        'relative overflow-hidden rounded-full px-3.5 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors bg-lavender',
        active === tab.id ? '' : 'hover:bg-hairline'
      ]"
    >
      <!-- Per-button clipped slice of the shared fill (masked to the pill shape) -->
      <span class="absolute inset-y-0 rounded-full pointer-events-none bg-ink" :style="fillStyle(i)"></span>
      <span :class="['relative z-10 transition-colors duration-200', active === tab.id ? 'text-white' : 'text-ink']">
        {{ tab.label }}
        <span v-if="tab.count !== undefined" :class="['tabular-nums', active === tab.id ? 'text-white/60' : 'text-subtext']">
          {{ tab.count }}
        </span>
      </span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onUnmounted, nextTick } from 'vue'

// Ported from ditto-trends LiquidTabs — the liquid-morph pill nav.
const props = defineProps<{
  tabs: { id: string; label: string; count?: number }[]
  active: string
}>()

defineEmits<{
  (e: 'select', id: string): void
}>()

const navRef = ref<HTMLElement | null>(null)
const btnRefs: HTMLElement[] = []
const setBtnRef = (el: unknown, i: number) => { if (el) btnRefs[i] = el as HTMLElement }

const btnGeom = reactive<{ left: number; width: number }[]>([])
const fill = reactive({ left: 0, rightEdge: 0, transition: 'none', ready: false })

let prevIndex = props.tabs.findIndex(t => t.id === props.active)
const EASE = 'cubic-bezier(0.34, 1.4, 0.5, 1)' // springy overshoot

const measure = () => {
  for (let i = 0; i < props.tabs.length; i++) {
    const b = btnRefs[i]
    if (b) btnGeom[i] = { left: b.offsetLeft, width: b.offsetWidth }
  }
}

const updatePosition = (animate: boolean) => {
  const i = props.tabs.findIndex(t => t.id === props.active)
  const b = btnRefs[i]
  if (!b || !navRef.value) return
  measure()

  if (animate) {
    // Leading edge moves first, trailing edge follows — a liquid morph.
    const movingRight = i > prevIndex
    fill.transition = movingRight
      ? `left 0.4s ${EASE} 0.07s, right 0.4s ${EASE}`
      : `left 0.4s ${EASE}, right 0.4s ${EASE} 0.07s`
  } else {
    fill.transition = 'none'
  }

  fill.left = b.offsetLeft
  fill.rightEdge = b.offsetLeft + b.offsetWidth
  fill.ready = true
  prevIndex = i
}

const fillStyle = (i: number) => {
  const g = btnGeom[i]
  if (!g || !fill.ready) return { opacity: 0 }
  return {
    left: `${fill.left - g.left}px`,
    right: `${g.left + g.width - fill.rightEdge}px`,
    transition: fill.transition,
  }
}

watch(() => props.active, () => nextTick(() => updatePosition(true)))

const onResize = () => updatePosition(false)

onMounted(() => nextTick(() => {
  updatePosition(false)
  window.addEventListener('resize', onResize)
}))
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>
