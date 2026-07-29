<template>
  <div>
    <PageHeader title="Suspected Fraud" description="Accounts flagged for suspicious activity and accounts currently suspended." />

    <div class="space-y-4">
      <DataTable
        :columns="columns"
        :rows="suspectedFraudUsers"
        row-key="id"
        title="Suspected Fraud Users"
        :page="fraudPage"
        :per-page="10"
        :total="20656"
        @update:page="fraudPage = $event"
      >
        <template #cell-name="{ row }">
          <span class="font-medium text-ink whitespace-nowrap">{{ row.name }}</span>
        </template>
        <template #cell-email="{ row }">
          <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View Details</Btn>
          </div>
        </template>
      </DataTable>

      <DataTable
        :columns="columns"
        :rows="suspendedUsers"
        row-key="id"
        title="Suspended Users"
        :page="suspendedPage"
        :per-page="10"
        :total="342"
        @update:page="suspendedPage = $event"
      >
        <template #cell-name="{ row }">
          <span class="font-medium text-ink whitespace-nowrap">{{ row.name }}</span>
        </template>
        <template #cell-email="{ row }">
          <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View Details</Btn>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import Btn from '../components/ui/Btn.vue'
import { suspectedFraudUsers, suspendedUsers } from '../data/mockAccounts'

const fraudPage = ref(1)
const suspendedPage = ref(1)

const columns: Column[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'actions', label: 'Action', align: 'right', width: 'w-28' },
]
</script>
