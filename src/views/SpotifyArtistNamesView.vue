<template>
  <div>
    <PageHeader title="Spotify Artist Names" description="Normalised artist names used to match releases to Spotify profiles." />

    <DataTable :columns="columns" :rows="rows" row-key="id" title="Artist Names" :subtitle="`${rows.length} names`">
      <template #toolbar>
        <div class="w-64 max-w-full">
          <TextInput v-model="search" placeholder="Search artist names…" icon="search" />
        </div>
      </template>
      <template #cell-artistName="{ row }">
        <span class="font-medium text-ink">{{ row.artistName }}</span>
      </template>
      <template #cell-normalisedName="{ row }">
        <span class="text-subtext">{{ row.normalisedName }}</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import TextInput from '../components/ui/TextInput.vue'
import { spotifyArtistNames } from '../data/mockReleases'

const search = ref('')

const rows = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return spotifyArtistNames
  return spotifyArtistNames.filter(r =>
    r.artistName.toLowerCase().includes(q) || r.normalisedName.includes(q)
  )
})

const columns: Column[] = [
  { key: 'artistName', label: 'Artist Name', sortable: true },
  { key: 'normalisedName', label: 'Normalised Artist Name' },
  { key: 'created', label: 'Created', sortable: true },
]
</script>
