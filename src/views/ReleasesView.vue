<template>
  <div>
    <PageHeader title="Find a release" description="Look up any release by title, artist, barcode or ISRC to QC it or check its history." />

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <!-- Results -->
      <DataTable
        :columns="columns"
        :rows="releases"
        row-key="id"
        :page="page"
        :per-page="20"
        :total="4310"
        @update:page="page = $event"
      >
        <template #cell-release="{ row }">
          <div class="flex items-center gap-3 min-w-0">
            <span class="w-9 h-9 rounded-md bg-lavender flex items-center justify-center flex-shrink-0">
              <Icon name="music" :size="15" class="text-subtext" />
            </span>
            <div class="min-w-0">
              <router-link to="/releases/6142660" class="font-medium text-ink hover:text-accent transition-colors block truncate">
                {{ row.title }}
              </router-link>
              <p class="text-xs text-subtext truncate">{{ row.artist }} · {{ row.barcode || 'No barcode' }}</p>
            </div>
          </div>
        </template>
        <template #cell-status="{ row }">
          <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
        </template>
        <template #cell-userEmail="{ row }">
          <span class="text-info-ink">{{ row.userEmail }}</span>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye" @click="$router.push('/releases/6142660')">View</Btn>
          </div>
        </template>
      </DataTable>

      <!-- Filters -->
      <div class="space-y-4">
        <FilterCard title="Search for Release">
          <SelectField label="Status" :options="['All Statuses', 'Active', 'Incomplete', 'Takedown']" model-value="All Statuses" />
          <SelectField label="QC status" :options="['Both QC', 'Passed', 'Not Passed']" model-value="Both QC" />
          <SelectField label="Idol status" :options="['All Idol Statuses', 'Undelivered', 'Delivered', 'Delivery Failed']" model-value="All Idol Statuses" />
          <SelectField label="Genre" :options="['All Genres', 'Latin', 'Pop', 'Electronic', 'Hip Hop / Rap', 'Country', 'Folk', 'Alternative Rock', 'Afrobeats']" model-value="All Genres" />
          <SelectField label="Region" :options="['All Regions', 'UK & Europe', 'North America', 'LATAM', 'Asia Pacific', 'Africa']" model-value="All Regions" />
          <SelectField label="Order" :options="['Newest to Oldest', 'Oldest to Newest']" model-value="Newest to Oldest" />
          <TextInput label="Release title" placeholder="Release title…" />
          <TextInput label="Artist name" placeholder="Artist name…" />
          <TextInput label="Barcode" placeholder="Barcode…" />
        </FilterCard>

        <FilterCard title="Search by ISRC">
          <TextInput label="ISRC" placeholder="e.g. GBXXX2600001…" />
        </FilterCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import FilterCard from '../components/ui/FilterCard.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import TextInput from '../components/ui/TextInput.vue'
import SelectField from '../components/ui/SelectField.vue'
import Btn from '../components/ui/Btn.vue'
import Icon from '../components/ui/Icon.vue'
import { releases } from '../data/mockReleases'

const page = ref(1)

const columns: Column[] = [
  { key: 'release', label: 'Release', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'genre', label: 'Genre' },
  { key: 'userEmail', label: 'User' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const statusTone: Record<string, 'success' | 'warning' | 'danger'> = {
  Active: 'success',
  Incomplete: 'warning',
  Takedown: 'danger',
}
</script>
