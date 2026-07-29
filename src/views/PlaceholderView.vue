<template>
  <div>
    <PageHeader :title="String(route.meta.title ?? 'Coming soon')" />
    <div class="bg-white border border-hairline rounded-card shadow-card px-8 py-16 flex flex-col items-center text-center">
      <div class="w-12 h-12 rounded-full bg-lavender flex items-center justify-center mb-4">
        <Icon name="clock" :size="20" class="text-subtext" />
      </div>
      <h2 class="text-h3 text-ink">This screen hasn't been rebuilt yet</h2>
      <p class="text-[13px] text-subtext mt-1 max-w-sm">
        It's on the redesign roadmap and will use the same components as the rest of the new admin.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Icon from '../components/ui/Icon.vue'

const route = useRoute()
</script>
