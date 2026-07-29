<template>
  <div>
    <PageHeader title="Credits" description="Account credits issued by staff — track redemption and remaining balances.">
      <Btn variant="primary" icon="plus" @click="$router.push('/credits/add')">Add Credit</Btn>
    </PageHeader>

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <DataTable :columns="columns" :rows="credits" row-key="id">
        <template #cell-user="{ row }">
          <a href="#" class="font-medium text-ink hover:text-accent transition-colors whitespace-nowrap">{{ row.user }}</a>
        </template>
        <template #cell-credited="{ row }">
          <span class="whitespace-nowrap">{{ row.credited }}</span>
        </template>
        <template #cell-redeemed="{ row }">
          <span v-if="row.redeemed" class="whitespace-nowrap">{{ row.redeemed }}</span>
          <span v-else class="text-prompt">—</span>
        </template>
        <template #cell-available="{ row }">
          <span class="whitespace-nowrap">{{ row.available }}</span>
        </template>
        <template #cell-status="{ row }">
          <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
        </template>
        <template #cell-disabledBy="{ row }">
          <span v-if="row.disabledBy">{{ row.disabledBy }}</span>
          <span v-else class="text-prompt">—</span>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View</Btn>
          </div>
        </template>
      </DataTable>

      <FilterCard title="Search for Credit">
        <SelectField label="Credit type" :options="['All Credits', 'Active', 'Redeemed', 'Disabled']" model-value="All Credits" />
        <div class="space-y-3.5">
          <p class="text-2xs uppercase text-prompt pt-1">User</p>
          <TextInput label="Forename" placeholder="Forename…" />
          <TextInput label="Surname" placeholder="Surname…" />
          <TextInput label="Email address" placeholder="Email address…" icon="mail" />
        </div>
        <div class="space-y-3.5">
          <p class="text-2xs uppercase text-prompt pt-1">Creditor</p>
          <TextInput label="Forename" placeholder="Forename…" />
          <TextInput label="Surname" placeholder="Surname…" />
          <TextInput label="Email address" placeholder="Email address…" icon="mail" />
        </div>
      </FilterCard>
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
import { credits } from '../data/mockAccounts'

const columns: Column[] = [
  { key: 'user', label: 'User', sortable: true },
  { key: 'creditedBy', label: 'Credited By' },
  { key: 'credited', label: 'Credited', align: 'right' },
  { key: 'redeemed', label: 'Redeemed', align: 'right' },
  { key: 'available', label: 'Available', align: 'right' },
  { key: 'status', label: 'Status' },
  { key: 'disabledBy', label: 'Disabled By' },
  { key: 'date', label: 'Date', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const statusTone: Record<string, 'success' | 'neutral'> = {
  Active: 'success',
  Redeemed: 'neutral',
  Disabled: 'neutral',
}
</script>
