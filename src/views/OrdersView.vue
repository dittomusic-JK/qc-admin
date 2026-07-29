<template>
  <div>
    <PageHeader title="Orders" description="Every checkout across subscriptions, add-ons and one-off purchases." />

    <DataTable
      :columns="columns"
      :rows="orders"
      row-key="id"
      :page="page"
      :per-page="15"
      :total="33419"
      @update:page="page = $event"
    >
      <template #toolbar>
        <Btn icon="search">Advanced Search</Btn>
      </template>
      <template #cell-email="{ row }">
        <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
      </template>
      <template #cell-amount="{ row }">
        <span class="whitespace-nowrap">{{ row.amount }}</span>
      </template>
      <template #cell-status="{ row }">
        <StatusBadge :variant="row.status === 'Completed' ? 'success' : 'neutral'" :label="row.status" />
      </template>
      <template #cell-paid="{ row }">
        <span v-if="row.paid" class="whitespace-nowrap">{{ row.paid }}</span>
        <span v-else class="text-prompt">—</span>
      </template>
      <template #cell-type="{ row }">
        <StatusBadge variant="info" :label="row.type" />
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
import { ref } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import Btn from '../components/ui/Btn.vue'
import { orders } from '../data/mockAccounts'

const page = ref(1)

const columns: Column[] = [
  { key: 'email', label: 'User', sortable: true },
  { key: 'amount', label: 'Amount', align: 'right' },
  { key: 'status', label: 'Status' },
  { key: 'paid', label: 'Paid', sortable: true },
  { key: 'type', label: 'Type' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]
</script>
