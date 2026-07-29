<template>
  <div>
    <PageHeader title="Ban Log" description="A record of every account ban, who actioned it and why." />

    <DataTable :columns="columns" :rows="banLog" row-key="id">
      <template #cell-user="{ row }">
        <span class="font-medium text-ink whitespace-nowrap">{{ row.user }}</span>
      </template>
      <template #cell-status="{ row }">
        <StatusBadge variant="danger" :label="row.status" />
      </template>
      <template #cell-reason="{ row }">
        <div class="flex items-center gap-2 min-w-0">
          <StatusBadge variant="neutral" :label="row.reasonCode" />
          <span class="text-subtext truncate">{{ row.reasonText }}</span>
        </div>
      </template>
      <template #cell-date="{ row }">
        <span class="whitespace-nowrap">{{ row.date }}</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import { banLog } from '../data/mockAccounts'

const columns: Column[] = [
  { key: 'user', label: 'User', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'reason', label: 'Reason' },
  { key: 'actionedBy', label: 'Actioned By' },
  { key: 'date', label: 'Date', sortable: true },
]
</script>
