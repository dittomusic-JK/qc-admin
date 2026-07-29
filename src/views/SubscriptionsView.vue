<template>
  <div>
    <PageHeader title="Subscriptions" description="Active, upcoming and lapsed subscription renewals across all processors." />

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <DataTable :columns="columns" :rows="subscriptions" row-key="id">
        <template #cell-email="{ row }">
          <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
        </template>
        <template #cell-amount="{ row }">
          <span class="whitespace-nowrap">{{ row.amount }}</span>
        </template>
        <template #cell-status="{ row }">
          <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
        </template>
        <template #cell-dueDate="{ row }">
          <span class="whitespace-nowrap">{{ row.dueDate }}</span>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View Details</Btn>
          </div>
        </template>
      </DataTable>

      <div class="space-y-4">
        <FilterCard title="Search by Subscription">
          <SelectField label="Status" :options="['All Statuses', 'Scheduled', 'Incomplete', 'Cancelled']" model-value="All Statuses" />
          <SelectField label="Method" :options="['All Methods', 'Automatic', 'Manual']" model-value="All Methods" />
          <SelectField label="Processor" :options="['All Processors', 'Stripe', 'PayPal', 'Mobile App']" model-value="All Processors" />
        </FilterCard>

        <FilterCard title="Search by User">
          <TextInput label="Forename" placeholder="Forename…" />
          <TextInput label="Surname" placeholder="Surname…" />
          <TextInput label="Email address" placeholder="Email address…" icon="mail" />
        </FilterCard>
      </div>
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
import { subscriptions } from '../data/mockAccounts'

const columns: Column[] = [
  { key: 'email', label: 'User', sortable: true },
  { key: 'amount', label: 'Amount', align: 'right' },
  { key: 'status', label: 'Status' },
  { key: 'method', label: 'Method' },
  { key: 'processor', label: 'Processor' },
  { key: 'dueDate', label: 'Due Date', sortable: true },
  { key: 'renewableItems', label: 'Renewable Items' },
  { key: 'actions', label: '', align: 'right', width: 'w-28' },
]

const statusTone: Record<string, 'info' | 'warning' | 'neutral'> = {
  Scheduled: 'info',
  Incomplete: 'warning',
  Cancelled: 'neutral',
}
</script>
