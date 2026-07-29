<template>
  <span :class="['inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap', tone]">
    {{ plan }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Subscription-tier chip, matching the Ditto framework tier colors and the
// treatment used in ditto-trends' nav (tinted bg + tier-colored text, caps).
//   Starter → framework --ditto-starter purple
//   Pro → framework --ditto-pro green
//   Label → framework --ditto-label gold
//   Ditto Plus / RLS → Ditto purple (as in ditto-trends TopNavbar)
const props = defineProps<{
  plan: string
}>()

const tone = computed(() => {
  const p = props.plan.toLowerCase()
  if (p.includes('plus') || p.includes('rls')) return 'bg-ditto-purple/15 text-ditto-purple'
  if (p.includes('starter')) return 'bg-tier-starter/15 text-tier-starter-ink'
  if (p.includes('pro')) return 'bg-tier-pro/15 text-tier-pro-ink'
  if (p.includes('label')) return 'bg-tier-label/20 text-tier-label-ink'
  return 'bg-lavender text-subtext'
})
</script>
