<template>
  <div>
    <PageHeader title="VEVO Channels" description="Every VEVO channel purchased through Ditto, with delivery status." />

    <DataTable
      :columns="columns"
      :rows="filteredChannels"
      row-key="id"
      :page="page"
      :per-page="10"
      :total="30024"
      @update:page="page = $event"
    >
      <template #toolbar>
        <TextInput v-model="search" icon="search" placeholder="Search…" />
        <SelectField v-model="status" :options="['All Statuses', 'Complete', 'Problematic', 'Pending']" />
      </template>
      <template #cell-channel="{ row }">
        <span class="font-medium text-ink">{{ row.channel }}</span>
      </template>
      <template #cell-status="{ row }">
        <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
      </template>
      <template #cell-user="{ row }">
        <a :href="`mailto:${row.user}`" class="text-info-ink hover:underline">{{ row.user }}</a>
      </template>
      <template #cell-slots="{ row }">
        <span class="tabular-nums">{{ row.slots }} {{ row.slots === 1 ? 'Slot' : 'Slots' }}</span>
      </template>
      <template #cell-actions>
        <div class="flex justify-end">
          <Btn size="sm" icon="eye">View Details</Btn>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import StatusBadge from '../../components/ui/StatusBadge.vue'
import TextInput from '../../components/ui/TextInput.vue'
import SelectField from '../../components/ui/SelectField.vue'
import Btn from '../../components/ui/Btn.vue'
import { vevoChannels } from '../../data/mockQc'

const page = ref(1)
const search = ref('')
const status = ref('All Statuses')

const filteredChannels = computed(() =>
  status.value === 'All Statuses'
    ? vevoChannels
    : vevoChannels.filter(c => c.status === status.value)
)

const columns: Column[] = [
  { key: 'artist', label: 'Artist Name', sortable: true },
  { key: 'channel', label: 'Channel Name', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'user', label: 'User', sortable: true },
  { key: 'slots', label: 'Video Slots' },
  { key: 'purchased', label: 'Purchased', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-32' },
]

const statusTone: Record<string, 'success' | 'danger' | 'warning'> = {
  Complete: 'success',
  Problematic: 'danger',
  Pending: 'warning',
}
</script>
