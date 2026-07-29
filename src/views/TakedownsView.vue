<template>
  <div>
    <PageHeader title="Takedowns" description="Process takedown requests and remove releases from stores." />

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <!-- Results -->
      <DataTable :columns="columns" :rows="takedownRows" row-key="id">
        <template #cell-release="{ row }">
          <div class="flex items-center gap-3 min-w-0">
            <span class="w-9 h-9 rounded-md bg-lavender flex items-center justify-center flex-shrink-0">
              <Icon name="music" :size="15" class="text-subtext" />
            </span>
            <div class="min-w-0">
              <p class="font-medium text-ink truncate">{{ row.title }}</p>
              <p class="text-xs text-subtext truncate">{{ row.artist }}</p>
            </div>
          </div>
        </template>
        <template #cell-status="{ row }">
          <StatusBadge :variant="row.status === 'Pending' ? 'warning' : 'success'" :label="row.status" />
        </template>
        <template #cell-actions="{ row }">
          <div class="flex justify-end">
            <Btn v-if="row.status === 'Pending'" size="sm" variant="primary" icon="check">Complete</Btn>
          </div>
        </template>
      </DataTable>

      <!-- Filters -->
      <FilterCard title="Search for Takedown">
        <SelectField label="Status" :options="['All Statuses', 'Pending', 'Completed']" model-value="All Statuses" />
        <TextInput label="Release title" placeholder="Release title…" />
        <TextInput label="Artist name" placeholder="Artist name…" />
        <TextInput label="Barcode" placeholder="Barcode…" />
        <SelectField label="Order" :options="['Oldest first', 'Newest first']" model-value="Oldest first" />
      </FilterCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import FilterCard from '../components/ui/FilterCard.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import TextInput from '../components/ui/TextInput.vue'
import SelectField from '../components/ui/SelectField.vue'
import Btn from '../components/ui/Btn.vue'
import Icon from '../components/ui/Icon.vue'
import { takedownRows } from '../data/mockReleases'

const columns: Column[] = [
  { key: 'release', label: 'Release' },
  { key: 'barcode', label: 'Barcode' },
  { key: 'status', label: 'Status' },
  { key: 'requestDate', label: 'Request Date', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-28' },
]
</script>
