<template>
  <div>
    <PageHeader title="Labels" description="Browse basic and Beatport labels registered across customer accounts." />

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <DataTable :columns="columns" :rows="labels" row-key="id">
        <template #cell-name="{ row }">
          <div class="min-w-0">
            <p class="font-medium text-ink whitespace-nowrap">{{ row.name }}</p>
            <p v-if="row.owner" class="text-xs text-subtext mt-0.5">{{ row.owner }}</p>
          </div>
        </template>
        <template #cell-type="{ row }">
          <StatusBadge :variant="row.type === 'Beatport Label' ? 'accent' : 'neutral'" :label="row.type" />
        </template>
        <template #cell-user>
          <Btn size="sm" icon="user">View User</Btn>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View</Btn>
          </div>
        </template>
      </DataTable>

      <FilterCard title="Search for Label">
        <SelectField label="Label type" :options="['All Labels', 'Basic Labels', 'Beatport Labels']" model-value="All Labels" />
        <TextInput label="Label name" placeholder="Label name…" />
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
import { labels } from '../data/mockAccounts'

const columns: Column[] = [
  { key: 'name', label: 'Label', sortable: true },
  { key: 'type', label: 'Label Type' },
  { key: 'user', label: 'User' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]
</script>
