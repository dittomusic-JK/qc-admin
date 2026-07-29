<template>
  <label class="flex items-center gap-2 cursor-pointer select-none group">
    <span
      :class="[
        'w-4 h-4 rounded border flex items-center justify-center transition-colors flex-shrink-0',
        modelValue
          ? 'bg-accent border-accent'
          : 'bg-white border-hairline-strong group-hover:border-prompt'
      ]"
    >
      <Icon v-if="modelValue" name="check" :size="11" class="text-white" />
    </span>
    <input
      type="checkbox"
      class="sr-only"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="text-[13px] text-ink">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'

defineProps<{
  modelValue?: boolean
  label: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>
