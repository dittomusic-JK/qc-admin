<template>
  <div>
    <PageHeader title="Beatport" description="Review Beatport label submissions and their approval status." />

    <DataTable :columns="columns" :rows="beatportRows" row-key="id" title="Beatport Submissions" :subtitle="`${beatportRows.length} submissions`">
      <template #cell-userEmail="{ row }">
        <a :href="`mailto:${row.userEmail}`" class="text-info-ink hover:underline">{{ row.userEmail }}</a>
      </template>
      <template #cell-labelStatus="{ row }">
        <StatusBadge :variant="row.labelStatus === 'Active' ? 'success' : 'neutral'" :label="row.labelStatus" />
      </template>
      <template #cell-beatportStatus="{ row }">
        <StatusBadge :variant="beatportTone[row.beatportStatus]" :label="row.beatportStatus" />
      </template>
      <template #cell-actions>
        <div class="flex justify-end">
          <Btn size="sm" icon="eye">View Details</Btn>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import Btn from '../components/ui/Btn.vue'
import { beatportRows } from '../data/mockReleases'

const columns: Column[] = [
  { key: 'userEmail', label: 'User' },
  { key: 'labelName', label: 'Label Name', sortable: true },
  { key: 'labelStatus', label: 'Label Status' },
  { key: 'beatportStatus', label: 'Beatport Status' },
  { key: 'actions', label: '', align: 'right', width: 'w-28' },
]

const beatportTone: Record<string, 'warning' | 'info' | 'success'> = {
  'Awaiting Payment': 'warning',
  'Pending Approval': 'info',
  'Live': 'success',
}
</script>
