<template>
  <div>
    <PageHeader title="All Works" description="Search and review every work registered through Ditto publishing." />

    <!-- Filter bar -->
    <div class="bg-white rounded-card border border-hairline shadow-card p-4 mb-4">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <TextInput v-model="workTitle" label="Work title" placeholder="Search by work title…" icon="search" />
        <TextInput v-model="ownerWriter" label="Owner or writer" placeholder="Owner or writer…" />
        <TextInput v-model="iswc" label="ISWC" placeholder="ISWC…" />
        <TextInput v-model="ownerEmail" label="Owner email" placeholder="Owner email…" icon="mail" />
        <SelectField v-model="appStatus" label="Application status" :options="['All', 'Registered', 'Pending', 'Rejected']" />
        <SelectField v-model="userType" label="User type" :options="['All', 'Customer', 'Staff']" />
        <SelectField v-model="country" label="Country" :options="['All Countries', 'United Kingdom', 'United States', 'Germany', 'France', 'Spain', 'Japan', 'Mexico', 'Sweden', 'Ghana', 'Türkiye']" />
        <div class="flex items-end pb-2">
          <CheckField v-model="withSamples" label="Works with samples" />
        </div>
      </div>
      <div class="flex items-center justify-end gap-2 mt-3 pt-3 border-t border-hairline">
        <Btn variant="ghost" @click="clearAll">Clear all</Btn>
        <Btn variant="secondary" icon="download">Export CSV</Btn>
      </div>
    </div>

    <DataTable
      :columns="columns"
      :rows="publishingWorks"
      row-key="id"
    >
      <template #cell-title="{ row }">
        <a class="font-medium text-accent hover:underline cursor-pointer">{{ row.title }}</a>
      </template>
      <template #cell-ownerEmail="{ row }">
        <a :href="`mailto:${row.ownerEmail}`" class="text-info-ink hover:underline">{{ row.ownerEmail }}</a>
      </template>
      <template #cell-status="{ row }">
        <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
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
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import StatusBadge from '../../components/ui/StatusBadge.vue'
import TextInput from '../../components/ui/TextInput.vue'
import SelectField from '../../components/ui/SelectField.vue'
import CheckField from '../../components/ui/CheckField.vue'
import Btn from '../../components/ui/Btn.vue'
import { publishingWorks } from '../../data/mockQc'

const workTitle = ref('')
const ownerWriter = ref('')
const iswc = ref('')
const ownerEmail = ref('')
const appStatus = ref('All')
const userType = ref('All')
const country = ref('All Countries')
const withSamples = ref(false)

const clearAll = () => {
  workTitle.value = ''
  ownerWriter.value = ''
  iswc.value = ''
  ownerEmail.value = ''
  appStatus.value = 'All'
  userType.value = 'All'
  country.value = 'All Countries'
  withSamples.value = false
}

const columns: Column[] = [
  { key: 'title', label: 'Work Title', sortable: true },
  { key: 'ownerEmail', label: 'Owner Email', sortable: true },
  { key: 'country', label: 'Country', sortable: true },
  { key: 'registeredDate', label: 'Registered Date', sortable: true },
  { key: 'readyDate', label: 'Ready for Review', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const statusTone: Record<string, 'success' | 'warning' | 'danger'> = {
  'Registered': 'success',
  'Pending Review': 'warning',
  'Rejected': 'danger',
}
</script>
