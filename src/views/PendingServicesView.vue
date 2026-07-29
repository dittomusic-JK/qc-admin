<template>
  <div>
    <PageHeader title="Pending Services" description="Add-on services awaiting processing against upcoming releases." />

    <DataTable :columns="columns" :rows="filteredRows" row-key="id">
      <template #toolbar>
        <SelectField
          :options="serviceOptions"
          v-model="serviceFilter"
          class="w-56"
        />
        <Btn variant="ghost" @click="serviceFilter = 'All Services'">Clear</Btn>
      </template>
      <template #cell-releaseName="{ row }">
        <a href="#" class="font-medium text-accent hover:underline whitespace-nowrap" @click.prevent>
          {{ row.releaseName }}
        </a>
      </template>
      <template #cell-releaseDate="{ row }">
        <span class="whitespace-nowrap">{{ row.releaseDate }}</span>
      </template>
      <template #cell-created="{ row }">
        <span class="whitespace-nowrap text-subtext">{{ row.created }}</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import SelectField from '../components/ui/SelectField.vue'
import Btn from '../components/ui/Btn.vue'
import { pendingServices } from '../data/mockProducts'

const serviceOptions = ['All Services', 'Claim YouTube Royalties', 'Name Your Label', 'Charts Registration']
const serviceFilter = ref('All Services')

const filteredRows = computed(() =>
  serviceFilter.value === 'All Services'
    ? pendingServices
    : pendingServices.filter(r => r.serviceName === serviceFilter.value)
)

const columns: Column[] = [
  { key: 'releaseName', label: 'Release Name', sortable: true },
  { key: 'serviceName', label: 'Service Name' },
  { key: 'releaseDate', label: 'Release Date', sortable: true },
  { key: 'created', label: 'Created', sortable: true },
]
</script>
