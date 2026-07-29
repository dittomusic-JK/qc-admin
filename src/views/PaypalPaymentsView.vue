<template>
  <div>
    <PageHeader title="PayPal Payments" description="Payments captured through PayPal, matched to their originating orders." />

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <DataTable
        :columns="columns"
        :rows="paypalPayments"
        row-key="id"
        :page="page"
        :per-page="12"
        :total="597806"
        @update:page="page = $event"
      >
        <template #cell-id="{ row }">
          <span class="tabular-nums">{{ row.id }}</span>
        </template>
        <template #cell-orderId="{ row }">
          <a href="#" class="font-medium text-accent hover:underline tabular-nums">{{ row.orderId }}</a>
        </template>
        <template #cell-email="{ row }">
          <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
        </template>
        <template #cell-amount="{ row }">
          <span class="whitespace-nowrap">{{ row.amount }}</span>
        </template>
        <template #cell-reference="{ row }">
          <span class="font-mono text-xs uppercase tracking-wide text-subtext">{{ row.reference }}</span>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View Payment</Btn>
          </div>
        </template>
      </DataTable>

      <FilterCard title="Search by">
        <TextInput label="Reference" placeholder="Reference…" />
        <TextInput label="User's Email Address" placeholder="Email address…" icon="mail" />
        <TextInput label="Order ID" placeholder="Order ID…" />
      </FilterCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import FilterCard from '../components/ui/FilterCard.vue'
import TextInput from '../components/ui/TextInput.vue'
import Btn from '../components/ui/Btn.vue'
import { paypalPayments } from '../data/mockAccounts'

const page = ref(1)

const columns: Column[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'orderId', label: 'Order' },
  { key: 'email', label: 'User' },
  { key: 'amount', label: 'Amount', align: 'right' },
  { key: 'reference', label: 'Reference' },
  { key: 'actions', label: '', align: 'right', width: 'w-28' },
]
</script>
