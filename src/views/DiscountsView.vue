<template>
  <div>
    <PageHeader title="Discounts" description="Create and manage discount codes and their campaign groupings.">
      <Btn variant="primary" icon="plus">Add New Discount</Btn>
    </PageHeader>

    <LiquidTabs :tabs="tabs" :active="activeTab" @select="activeTab = $event" class="mb-4" />

    <!-- Reduction Discounts -->
    <DataTable v-if="activeTab === 'reductions'" :columns="discountColumns" :rows="discounts" row-key="id">
      <template #cell-code="{ row }">
        <span class="font-bold uppercase tracking-wide text-ink whitespace-nowrap">{{ row.code }}</span>
      </template>
      <template #cell-type="{ row }">
        <span class="tabular-nums whitespace-nowrap">{{ row.type }}</span>
      </template>
      <template #cell-started="{ row }">
        <span class="whitespace-nowrap">{{ row.started }}</span>
      </template>
      <template #cell-expires="{ row }">
        <span v-if="row.expires" class="whitespace-nowrap">{{ row.expires }}</span>
        <span v-else class="text-prompt">—</span>
      </template>
      <template #cell-redeemed="{ row }">
        <span class="tabular-nums whitespace-nowrap">{{ row.redeemed.toLocaleString() }} / {{ row.limit.toLocaleString() }}</span>
      </template>
      <template #cell-status="{ row }">
        <StatusBadge :variant="statusOf(row).variant" :label="statusOf(row).label" />
      </template>
      <template #cell-actions>
        <div class="flex justify-end">
          <Btn size="sm" icon="eye">View</Btn>
        </div>
      </template>
    </DataTable>

    <!-- Discount Groups -->
    <DataTable v-else :columns="groupColumns" :rows="discountGroups" row-key="id">
      <template #cell-name="{ row }">
        <span class="font-medium text-ink whitespace-nowrap">{{ row.name }}</span>
      </template>
      <template #cell-discounts="{ row }">
        <span class="tabular-nums">{{ row.discounts }}</span>
      </template>
      <template #cell-created="{ row }">
        <span class="whitespace-nowrap">{{ row.created }}</span>
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
import LiquidTabs from '../components/ui/LiquidTabs.vue'
import Btn from '../components/ui/Btn.vue'
import { discounts, discountGroups, type DiscountRow } from '../data/mockProducts'

const tabs = [
  { id: 'reductions', label: 'Reduction Discounts', count: discounts.length },
  { id: 'groups', label: 'Discount Groups', count: discountGroups.length },
]
const activeTab = ref('reductions')

const discountColumns: Column[] = [
  { key: 'code', label: 'Discount Code', sortable: true },
  { key: 'type', label: 'Type', align: 'right' },
  { key: 'started', label: 'Started', sortable: true },
  { key: 'expires', label: 'Expires', sortable: true },
  { key: 'redeemed', label: 'Redeemed', align: 'right' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const groupColumns: Column[] = [
  { key: 'name', label: 'Group Name', sortable: true },
  { key: 'discounts', label: 'Discounts' },
  { key: 'created', label: 'Created', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

// Derive a discount's status: fully-redeemed codes are Exhausted, past-expiry
// codes are Expired, everything else (no expiry or a future one) is Active.
const statusOf = (row: Record<string, any>): { variant: 'success' | 'warning' | 'neutral'; label: string } => {
  const d = row as DiscountRow
  if (d.redeemed >= d.limit) return { variant: 'warning', label: 'Exhausted' }
  if (d.expiresIso && new Date(d.expiresIso) < new Date()) return { variant: 'neutral', label: 'Expired' }
  return { variant: 'success', label: 'Active' }
}
</script>
