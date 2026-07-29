<template>
  <div>
    <PageHeader title="Promo Purchases" description="Promotional package orders placed by customers across all currencies." />

    <DataTable :columns="columns" :rows="promoPurchases" row-key="id">
      <template #cell-package="{ row }">
        <StatusBadge variant="accent" :label="row.package" />
      </template>
      <template #cell-payment="{ row }">
        <span class="tabular-nums font-medium whitespace-nowrap">{{ row.payment }}</span>
      </template>
      <template #cell-customer="{ row }">
        <div class="min-w-0">
          <p class="font-medium text-ink whitespace-nowrap">{{ row.customer }}</p>
          <p class="text-xs text-subtext truncate">{{ row.email }}</p>
        </div>
      </template>
      <template #cell-status="{ row }">
        <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
      </template>
      <template #cell-date="{ row }">
        <span class="whitespace-nowrap">{{ row.date }}</span>
      </template>
      <template #cell-actions>
        <div class="flex justify-end">
          <Btn size="sm" icon="eye">View</Btn>
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
import { promoPurchases } from '../data/mockProducts'

const columns: Column[] = [
  { key: 'package', label: 'Package' },
  { key: 'payment', label: 'Payment', align: 'right' },
  { key: 'customer', label: 'Customer', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const statusTone: Record<string, 'success' | 'info'> = {
  Completed: 'success',
  'Pushed by staff': 'info',
  Succeeded: 'success',
}
</script>
