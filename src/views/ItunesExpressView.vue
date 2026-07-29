<template>
  <div>
    <PageHeader title="iTunes Express" description="Track and process iTunes Express delivery requests." />

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <!-- Results -->
      <DataTable :columns="columns" :rows="itunesExpressRows" row-key="id">
        <template #cell-userEmail="{ row }">
          <a v-if="row.userEmail" :href="`mailto:${row.userEmail}`" class="text-info-ink hover:underline">{{ row.userEmail }}</a>
          <span v-else class="text-prompt">—</span>
        </template>
        <template #cell-assignee="{ row }">
          <template v-if="row.assignee">{{ row.assignee }}</template>
          <StatusBadge v-else variant="neutral" label="Unassigned" />
        </template>
        <template #cell-completed="{ row }">
          <StatusBadge :variant="row.completed ? 'success' : 'neutral'" :label="row.completed ? 'Yes' : 'No'" />
        </template>
        <template #cell-paid="{ row }">
          <StatusBadge :variant="row.paid === 'Paid' ? 'success' : 'warning'" :label="row.paid" />
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View</Btn>
          </div>
        </template>
      </DataTable>

      <!-- Filters -->
      <FilterCard title="Search for Express">
        <SelectField label="Assignment" :options="['Assigned & Unassigned', 'Assigned', 'Unassigned']" model-value="Assigned & Unassigned" />
        <SelectField label="Completion" :options="['Incomplete Only', 'All']" model-value="Incomplete Only" />
        <SelectField label="Payment" :options="['Paid Only', 'All']" model-value="Paid Only" />
        <TextInput label="Forename" placeholder="Forename…" />
        <TextInput label="Surname" placeholder="Surname…" />
        <TextInput label="Email address" placeholder="Email address…" icon="mail" />
        <TextInput label="UPC" placeholder="UPC…" />
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
import { itunesExpressRows } from '../data/mockReleases'

const columns: Column[] = [
  { key: 'userEmail', label: 'User' },
  { key: 'assignee', label: 'Assignee' },
  { key: 'releaseTitle', label: 'Release Title' },
  { key: 'artistName', label: 'Artist Name' },
  { key: 'releaseDate', label: 'Release Date', sortable: true },
  { key: 'completed', label: 'Completed' },
  { key: 'paid', label: 'Paid' },
  { key: 'created', label: 'Created', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]
</script>
