<template>
  <aside class="fixed inset-y-0 left-0 w-[232px] flex flex-col bg-white border-r border-hairline z-40">
    <!-- Brand -->
    <router-link to="/" class="h-14 px-5 flex items-center gap-2.5 border-b border-hairline flex-shrink-0">
      <img src="/img/logo-2048-black.svg" alt="Ditto" class="h-6" />
      <span class="text-2xs uppercase bg-accent-soft text-accent px-1.5 py-0.5 rounded leading-none">Admin</span>
    </router-link>

    <!-- Nav -->
    <nav class="flex-1 overflow-y-auto py-3 px-3 space-y-0.5">
      <template v-for="entry in nav" :key="entry.label">
        <!-- Single link (Dashboard) -->
        <router-link
          v-if="entry.path"
          :to="entry.path"
          :class="[
            'flex items-center gap-2.5 px-2.5 py-2 rounded-control text-[13px] font-medium transition-colors',
            isActive(entry.path)
              ? 'bg-accent-soft text-accent'
              : 'text-ink hover:bg-lavender-soft'
          ]"
        >
          <Icon :name="entry.icon" :size="16" :class="isActive(entry.path) ? 'text-accent' : 'text-subtext'" />
          {{ entry.label }}
        </router-link>

        <!-- Group -->
        <div v-else>
          <button
            @click="toggle(entry.label)"
            class="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-control text-[13px] font-medium text-ink hover:bg-lavender-soft transition-colors"
          >
            <Icon :name="entry.icon" :size="16" :class="groupHasActive(entry) ? 'text-accent' : 'text-subtext'" />
            <span class="flex-1 text-left">{{ entry.label }}</span>
            <Icon
              name="chevron-down"
              :size="14"
              :class="['text-prompt transition-transform duration-200', open.has(entry.label) ? '' : '-rotate-90']"
            />
          </button>
          <div v-if="open.has(entry.label)" class="ml-[19px] pl-3 border-l border-hairline mt-0.5 mb-1 space-y-px">
            <router-link
              v-for="item in entry.items"
              :key="item.path"
              :to="item.path"
              :class="[
                'block px-2.5 py-1.5 rounded-md text-[13px] transition-colors leading-snug',
                isActive(item.path)
                  ? 'bg-accent-soft text-accent font-medium'
                  : 'text-subtext hover:bg-lavender-soft hover:text-ink'
              ]"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
      </template>
    </nav>

    <!-- Footer -->
    <div class="px-5 py-3 border-t border-hairline text-xs text-prompt flex-shrink-0">
      © {{ new Date().getFullYear() }} Ditto Music
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { nav, type NavEntry } from '../../data/nav'
import Icon from '../ui/Icon.vue'

const route = useRoute()
const open = ref(new Set<string>())

const isActive = (path: string): boolean => {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(path + '/')
}

const groupHasActive = (entry: NavEntry): boolean =>
  !!entry.items?.some(i => isActive(i.path))

const toggle = (label: string) => {
  const next = new Set(open.value)
  next.has(label) ? next.delete(label) : next.add(label)
  open.value = next
}

// Keep the group containing the current route expanded on navigation
watch(
  () => route.path,
  () => {
    for (const entry of nav) {
      if (entry.items && groupHasActive(entry) && !open.value.has(entry.label)) {
        const next = new Set(open.value)
        next.add(entry.label)
        open.value = next
      }
    }
  },
  { immediate: true }
)
</script>
