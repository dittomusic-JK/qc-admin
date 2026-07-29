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
          @click="toggleTrack(row.id)"
          :aria-label="activeId === row.id && isPlaying ? `Pause ${row.trackName}` : `Play ${row.trackName}`"
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
            activeId === row.id
              ? 'bg-accent text-white'
              : 'bg-white text-ink border border-hairline-strong hover:bg-lavender-soft hover:border-prompt'
          ]"
        >
          <Icon :name="activeId === row.id && isPlaying ? 'pause' : 'play'" :size="12" />
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

    <!-- Spacer so the docked player never covers the last rows -->
    <div v-if="activeTrack" class="h-20"></div>

    <PlayerBar
      ref="playerRef"
      :track="activeTrack"
      @close="activeId = null"
      @playing="isPlaying = $event"
      @previous="step(-1)"
      @next="step(1)"
    />
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
import PlayerBar, { type PlayerTrack } from '../../components/ui/PlayerBar.vue'
import { syncOpportunities, syncApplicants as applicants } from '../../data/mockSync'

const route = useRoute()
const activeId = ref<number | null>(null)
const isPlaying = ref(false)

const opportunity = computed(() =>
  syncOpportunities.find(o => o.id === Number(route.params.id)) ?? syncOpportunities[0]
)

const activeTrack = computed<PlayerTrack | null>(() => {
  const a = applicants.find(x => x.id === activeId.value)
  if (!a) return null
  return { title: a.trackName, artist: a.name, duration: 150 + (a.id * 23) % 120 }
})

const playerRef = ref<InstanceType<typeof PlayerBar> | null>(null)

// Row button: switch track, or pause/resume when it's already the active one
const toggleTrack = (id: number) => {
  if (activeId.value !== id) {
    activeId.value = id
  } else if (isPlaying.value) {
    playerRef.value?.pause()
  } else {
    playerRef.value?.play()
  }
}

const step = (dir: 1 | -1) => {
  const i = applicants.findIndex(a => a.id === activeId.value)
  if (i === -1) return
  const next = applicants[(i + dir + applicants.length) % applicants.length]
  activeId.value = next.id
}

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
