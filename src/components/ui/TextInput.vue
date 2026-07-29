<template>
  <label class="block">
    <span v-if="label" class="block text-xs font-medium text-subtext mb-1">{{ label }}</span>
    <div class="relative">
      <Icon
        v-if="icon"
        :name="icon"
        :size="14"
        class="absolute left-2.5 top-1/2 -translate-y-1/2 text-prompt pointer-events-none"
      />
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :type="type"
        :placeholder="placeholder"
        :class="[
          'w-full h-9 rounded-control border border-hairline-strong bg-white text-[13px] text-ink placeholder:text-prompt',
          'focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow',
          icon ? 'pl-8 pr-3' : 'px-3',
        ]"
      />
    </div>
  </label>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'

withDefaults(defineProps<{
  modelValue?: string
  label?: string
  placeholder?: string
  icon?: string
  type?: string
}>(), {
  modelValue: '',
  type: 'text',
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
