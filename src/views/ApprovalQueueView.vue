<template>
  <div>
    <PageHeader title="Approval Queue" description="Payouts over £2,000 awaiting approval — 48 queued." />

    <DataTable :columns="columns" :rows="approvalQueue" row-key="id">
      <template #cell-actions>
        <Btn size="sm" icon="eye">View Details</Btn>
      </template>
      <template #cell-email="{ row }">
        <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
      </template>
      <template #cell-amount="{ row }">
        <span class="font-semibold whitespace-nowrap">{{ row.amount }}</span>
      </template>
      <template #cell-type="{ row }">
        <StatusBadge :variant="typeTone[row.type]" :label="row.type" />
      </template>
      <template #cell-balance="{ row }">
        <span class="whitespace-nowrap">{{ row.balance }}</span>
      </template>
      <template #cell-requested="{ row }">
        <span class="whitespace-nowrap">{{ row.requested }}</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import Btn from '../components/ui/Btn.vue'
import { approvalQueue } from '../data/mockAccounts'

const columns: Column[] = [
  { key: 'actions', label: '', width: 'w-28' },
  { key: 'email', label: 'User', sortable: true },
  { key: 'amount', label: 'Amount', align: 'right', sortable: true },
  { key: 'type', label: 'Type' },
  { key: 'balance', label: 'Balance', align: 'right' },
  { key: 'requested', label: 'Requested', sortable: true },
]

const typeTone: Record<string, 'info' | 'accent' | 'neutral'> = {
  'PayPal': 'info',
  'Bank Transfer': 'accent',
  'Payoneer': 'neutral',
}
</script>
