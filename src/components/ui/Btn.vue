<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener' : undefined"
    :class="[
      'inline-flex items-center justify-center gap-1.5 font-medium rounded-control transition-colors whitespace-nowrap',
      'focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-1',
      sizeClass,
      variantClass,
      block ? 'w-full' : '',
    ]"
    :type="href ? undefined : (type ?? 'button')"
  >
    <Icon v-if="icon" :name="icon" :size="size === 'sm' ? 13 : 15" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'danger' | 'danger-solid' | 'ghost'
  size?: 'sm' | 'md'
  icon?: string
  block?: boolean
  type?: 'button' | 'submit'
  /** Renders as an anchor opening in a new tab — used for legacy-admin links. */
  href?: string
}>(), {
  variant: 'secondary',
  size: 'md',
})

const variants: Record<string, string> = {
  'primary': 'bg-accent text-white hover:bg-accent/90 shadow-card',
  'secondary': 'bg-white text-ink border border-hairline-strong hover:bg-lavender-soft hover:border-prompt',
  'danger': 'bg-white text-danger-ink border border-danger/40 hover:bg-danger/5',
  'danger-solid': 'bg-danger text-white hover:bg-danger/90',
  'ghost': 'text-subtext hover:text-ink hover:bg-lavender-soft',
}

const sizes: Record<string, string> = {
  sm: 'text-xs px-2.5 h-7',
  md: 'text-[13px] px-3.5 h-9',
}

const variantClass = computed(() => variants[props.variant])
const sizeClass = computed(() => sizes[props.size])
</script>
