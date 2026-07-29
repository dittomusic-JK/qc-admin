<template>
  <label class="block">
    <span v-if="label" class="block text-xs font-medium text-subtext mb-1">{{ label }}</span>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      :placeholder="placeholder"
      :rows="rows"
      class="w-full rounded-control border border-hairline-strong bg-white text-[13px] text-ink placeholder:text-prompt px-3 py-2 resize-y focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow"
    ></textarea>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string
  label?: string
  placeholder?: string
  rows?: number
}>(), {
  modelValue: '',
  rows: 5,
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
