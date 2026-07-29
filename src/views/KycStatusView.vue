<template>
  <div>
    <PageHeader title="KYC Status" description="Identity verification results from Mati and flagged shared-document accounts." />

    <div class="space-y-4">
      <DataTable :columns="statusColumns" :rows="kycUsers" row-key="id" title="Customer KYC Status">
        <template #toolbar>
          <div class="w-56">
            <SelectField :options="['Mati Review Needed', 'Approved', 'Rejected', 'All']" model-value="Mati Review Needed" />
          </div>
        </template>
        <template #cell-name="{ row }">
          <span class="font-medium text-ink whitespace-nowrap">{{ row.name }}</span>
        </template>
        <template #cell-email="{ row }">
          <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
        </template>
        <template #cell-kycStatus="{ row }">
          <StatusBadge :variant="kycTone[row.kycStatus]" :label="row.kycStatus" />
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View</Btn>
          </div>
        </template>
      </DataTable>

      <DataTable
        :columns="linkedColumns"
        :rows="kycLinkedUsers"
        row-key="id"
        title="Users with Multiple Identity Documents"
        subtitle="These users share ID documents with other accounts"
      >
        <template #cell-name="{ row }">
          <span class="font-medium text-ink whitespace-nowrap">{{ row.name }}</span>
        </template>
        <template #cell-email="{ row }">
          <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
        </template>
        <template #cell-kycStatus="{ row }">
          <StatusBadge :variant="kycTone[row.kycStatus]" :label="row.kycStatus" />
        </template>
        <template #cell-linkedAccounts="{ row }">
          <span class="tabular-nums">{{ row.linkedAccounts }}</span>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View</Btn>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import SelectField from '../components/ui/SelectField.vue'
import Btn from '../components/ui/Btn.vue'
import { kycUsers, kycLinkedUsers } from '../data/mockAccounts'

const statusColumns: Column[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'kycStatus', label: 'KYC Status' },
  { key: 'actions', label: 'Action', align: 'right', width: 'w-20' },
]

const linkedColumns: Column[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'kycStatus', label: 'KYC Status' },
  { key: 'linkedAccounts', label: 'Linked Accounts', align: 'right' },
  { key: 'dateDetected', label: 'Date Detected', sortable: true },
  { key: 'actions', label: 'Action', align: 'right', width: 'w-20' },
]

const kycTone: Record<string, 'success' | 'warning' | 'danger'> = {
  'Review Needed': 'warning',
  'Approved': 'success',
  'Rejected': 'danger',
}
</script>
