<template>
  <div>
    <PageHeader title="Stores" description="Manage delivery partners, their availability and store metadata.">
      <Btn variant="primary" icon="plus">Add New Store</Btn>
    </PageHeader>

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <!-- Results -->
      <DataTable :columns="columns" :rows="stores" row-key="id">
        <template #cell-code="{ row }">
          <span class="uppercase tabular-nums text-subtext">{{ row.code }}</span>
        </template>
        <template #cell-name="{ row }">
          <span class="font-medium text-ink whitespace-nowrap">{{ row.name }}</span>
        </template>
        <template #cell-description="{ row }">
          <span class="truncate max-w-md block text-subtext">{{ row.description }}</span>
        </template>
        <template #cell-status="{ row }">
          <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View</Btn>
          </div>
        </template>
      </DataTable>

      <!-- Filters -->
      <FilterCard title="Search for Store">
        <SelectField label="Store status" :options="['All Statuses', 'Live', 'Pending', 'Discontinued']" model-value="All Statuses" />
        <SelectField label="Store type" :options="['All Types', 'Streaming', 'Download', 'Social', 'Radio']" model-value="All Types" />
        <TextInput label="Code" placeholder="Code…" />
        <TextInput label="Store name" placeholder="Store name…" icon="search" />
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
import { stores } from '../data/mockProducts'

const columns: Column[] = [
  { key: 'code', label: 'Code', sortable: true, width: 'w-20' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'description', label: 'Description' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const statusTone: Record<string, 'success' | 'warning' | 'neutral'> = {
  Live: 'success',
  Pending: 'warning',
  Discontinued: 'neutral',
}
</script>
