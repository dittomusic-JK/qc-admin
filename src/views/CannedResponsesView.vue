<template>
  <div>
    <PageHeader title="Canned Responses" description="Reusable bilingual responses for common QC and support scenarios.">
      <Btn variant="primary" icon="plus">Add response</Btn>
    </PageHeader>

    <!-- Toolbar -->
    <div class="flex items-end gap-2 mb-4">
      <div class="w-56 max-w-full">
        <SelectField label="Category" :options="categories" v-model="category" />
      </div>
      <Btn variant="ghost" @click="category = 'All'">Clear</Btn>
    </div>

    <!-- Response cards -->
    <div class="space-y-3">
      <div
        v-for="response in filtered"
        :key="response.id"
        class="bg-white border border-hairline rounded-card shadow-card p-4"
      >
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex items-center gap-2.5 flex-wrap min-w-0">
            <StatusBadge variant="accent" :label="response.category" />
            <h2 class="text-h3 text-ink font-bold">{{ response.title }}</h2>
          </div>
          <Btn size="sm" icon="pen">Edit</Btn>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <p class="text-2xs uppercase text-prompt mb-1">EN</p>
            <p class="text-[13px] text-ink leading-relaxed">{{ response.en }}</p>
          </div>
          <div>
            <p class="text-2xs uppercase text-prompt mb-1">ES</p>
            <p class="text-[13px] text-ink leading-relaxed">{{ response.es }}</p>
          </div>
        </div>
      </div>

      <div v-if="filtered.length === 0" class="bg-white border border-hairline rounded-card shadow-card">
        <EmptyState icon="file-text" title="No responses in this category" hint="Try a different category or clear the filter." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import SelectField from '../components/ui/SelectField.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import Btn from '../components/ui/Btn.vue'
import { cannedResponses } from '../data/mockReleases'

const categories = ['All', 'Artwork', 'Audio', 'Metadata', 'Lyrics']
const category = ref('All')

const filtered = computed(() =>
  category.value === 'All'
    ? cannedResponses
    : cannedResponses.filter(r => r.category === category.value)
)
</script>
