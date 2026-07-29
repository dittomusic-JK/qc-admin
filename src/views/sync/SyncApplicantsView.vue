<template>
  <div>
    <router-link
      to="/sync-opportunities"
      class="inline-flex items-center gap-1.5 text-[13px] text-subtext hover:text-accent transition-colors mb-3"
    >
      <Icon name="chevron-left" :size="14" /> Back to all opportunities
    </router-link>

    <PageHeader
      :title="opportunity?.name ?? 'Sync Opportunity'"
      :description="`${applicants.length} applications · Deadline ${opportunity?.deadline ?? '—'}`"
    >
      <Btn icon="download">Export applicants</Btn>
      <Btn icon="pen">Edit opportunity</Btn>
    </PageHeader>

    <DataTable :columns="columns" :rows="applicants" row-key="id">
      <template #cell-applicant="{ row }">
        <div class="min-w-0">
          <p class="font-medium text-ink whitespace-nowrap">{{ row.name }}</p>
          <a :href="`mailto:${row.email}`" class="text-xs text-info-ink hover:underline">{{ row.email }}</a>
        </div>
      </template>
      <template #cell-track="{ row }">
        <div class="min-w-0">
          <p class="font-medium text-ink">{{ row.trackName }}</p>
          <p class="text-xs text-subtext">ISRC {{ row.isrc }} · UPC {{ row.upc }}</p>
          <button class="text-xs text-info-ink hover:underline">View release</button>
        </div>
      </template>
      <template #cell-player="{ row }">
        <button
          @click="playing = playing === row.id ? null : row.id"
          :class="[
            'inline-flex items-center gap-2 pl-2 pr-3 h-8 rounded-full border text-xs font-medium transition-colors',
            playing === row.id
              ? 'bg-ink text-white border-ink'
              : 'bg-white text-ink border-hairline-strong hover:bg-lavender-soft'
          ]"
        >
          <Icon :name="playing === row.id ? 'minus' : 'play'" :size="12" />
          {{ playing === row.id ? 'Playing…' : 'Play track' }}
        </button>
      </template>
      <template #cell-license="{ row }">
        <StatusBadge :variant="row.license === 'Cleared' ? 'success' : 'danger'" :label="row.license" />
      </template>
      <template #cell-streams="{ row }">
        <span class="tabular-nums">{{ row.streams.toLocaleString() }}</span>
      </template>
      <template #cell-pitch="{ row }">
        <p class="text-xs text-subtext max-w-xs leading-relaxed">{{ row.pitch }}</p>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import StatusBadge from '../../components/ui/StatusBadge.vue'
import Btn from '../../components/ui/Btn.vue'
import Icon from '../../components/ui/Icon.vue'
import { syncOpportunities, syncApplicants as applicants } from '../../data/mockSync'

const route = useRoute()
const playing = ref<number | null>(null)

const opportunity = computed(() =>
  syncOpportunities.find(o => o.id === Number(route.params.id)) ?? syncOpportunities[0]
)

const columns: Column[] = [
  { key: 'applicant', label: 'Applicant' },
  { key: 'track', label: 'Track' },
  { key: 'player', label: '' },
  { key: 'language', label: 'Language' },
  { key: 'streams', label: 'Streams', align: 'right' },
  { key: 'license', label: 'License' },
  { key: 'pitch', label: 'Tell me about you' },
]
</script>
