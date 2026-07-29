<template>
  <header class="sticky top-0 h-14 bg-white/90 backdrop-blur border-b border-hairline flex items-center justify-between pl-6 pr-4 z-30 flex-shrink-0">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-1.5 text-[13px] min-w-0">
      <span class="text-prompt">Admin</span>
      <template v-for="(crumb, i) in crumbs" :key="i">
        <Icon name="chevron-right" :size="12" class="text-prompt flex-shrink-0" />
        <span :class="i === crumbs.length - 1 ? 'text-ink font-medium truncate' : 'text-subtext'">{{ crumb }}</span>
      </template>
    </div>

    <div class="flex items-center gap-1">
      <!-- External links (parity with legacy top bar) -->
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        class="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-control text-[13px] text-subtext hover:text-ink hover:bg-lavender-soft transition-colors"
      >
        {{ link.label }}
        <Icon name="external" :size="12" class="text-prompt" />
      </a>

      <div class="w-px h-5 bg-hairline mx-2 hidden lg:block"></div>

      <!-- User menu -->
      <div class="relative">
        <button
          @click="menuOpen = !menuOpen"
          class="flex items-center gap-2 pl-1.5 pr-2 py-1.5 rounded-control hover:bg-lavender-soft transition-colors"
        >
          <span class="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">JK</span>
          <span class="text-[13px] font-medium text-ink hidden sm:block">James Keane</span>
          <Icon name="chevron-down" :size="14" class="text-prompt" />
        </button>
        <div
          v-if="menuOpen"
          class="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-card shadow-pop border border-hairline py-1.5 z-50"
        >
          <button class="w-full flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-ink hover:bg-lavender-soft transition-colors">
            <Icon name="user" :size="14" class="text-subtext" /> My Profile
          </button>
          <div class="h-px bg-hairline my-1.5 mx-3.5"></div>
          <button class="w-full flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-danger-ink hover:bg-danger/5 transition-colors">
            <Icon name="logout" :size="14" /> Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { nav } from '../../data/nav'
import Icon from '../ui/Icon.vue'

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { label: 'Homepage', href: 'https://dittomusic.com' },
  { label: 'Customer Dashboard', href: '/dashboard' },
  { label: 'Dashboard2', href: 'https://dashboard2.dittomusic.com/admin/app/user/list' },
]

const crumbs = computed<string[]>(() => {
  for (const entry of nav) {
    if (entry.path && (entry.path === route.path)) return entry.path === '/' ? ['Dashboard'] : [entry.label]
    const item = entry.items?.find(i => route.path === i.path || route.path.startsWith(i.path + '/'))
    if (item) {
      const trail = [entry.label, item.label]
      if (route.path !== item.path && route.meta.detail) trail.push(String(route.meta.detail))
      return trail
    }
  }
  return [String(route.meta.title ?? 'Dashboard')]
})
</script>
