<template>
  <div class="flex items-start gap-4 px-4 py-2.5 border-b border-hairline last:border-b-0 hover:bg-lavender-soft/50 transition-colors">
    <dt class="w-52 flex-shrink-0 text-[13px] text-subtext pt-px">{{ label }}</dt>
    <dd class="flex-1 min-w-0 text-[13px] text-ink flex flex-wrap items-center gap-2">
      <slot>
        <span v-if="value === undefined || value === null || value === ''" class="text-prompt">—</span>
        <template v-else>{{ value }}</template>
      </slot>
    </dd>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value?: string | number
}>()
</script>
