<template>
  <label class="block">
    <span v-if="label" class="block text-xs font-medium text-subtext mb-1">{{ label }}</span>
    <div class="relative">
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="w-full h-9 rounded-control border border-hairline-strong bg-white text-[13px] text-ink px-3 pr-8 cursor-pointer focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow"
      >
        <option v-for="opt in normalized" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
      </select>
      <Icon
        name="chevron-down"
        :size="14"
        class="absolute right-2.5 top-1/2 -translate-y-1/2 text-prompt pointer-events-none"
      />
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  label?: string
  options: (string | { label: string; value: string })[]
}>(), {
  modelValue: '',
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const normalized = computed(() =>
  props.options.map(o => (typeof o === 'string' ? { label: o, value: o } : o))
)
</script>
