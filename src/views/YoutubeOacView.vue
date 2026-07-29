<template>
  <div>
    <PageHeader title="YouTube Official Artist Channel" description="Process Official Artist Channel requests and track their submission status." />

    <div class="space-y-4">
      <LiquidTabs :tabs="tabs" :active="tab" @select="tab = $event" />

      <DataTable :columns="columns" :rows="rows" row-key="id">
        <template #toolbar>
          <div class="w-64 max-w-full">
            <TextInput v-model="search" placeholder="Search requests…" icon="search" />
          </div>
        </template>
        <template #cell-userEmail="{ row }">
          <a :href="`mailto:${row.userEmail}`" class="text-info-ink hover:underline">{{ row.userEmail }}</a>
        </template>
        <template #cell-channelId="{ row }">
          <span class="font-mono text-xs">{{ row.channelId }}</span>
        </template>
        <template #cell-topicChannelId="{ row }">
          <span class="font-mono text-xs">{{ row.topicChannelId }}</span>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import LiquidTabs from '../components/ui/LiquidTabs.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import TextInput from '../components/ui/TextInput.vue'
import Btn from '../components/ui/Btn.vue'
import { youtubeOacPending, youtubeOacResolved } from '../data/mockReleases'

const tab = ref('pending')
const search = ref('')

const tabs = [
  { id: 'pending', label: 'Pending', count: youtubeOacPending.length },
  { id: 'resolved', label: 'Submitted & Rejected', count: youtubeOacResolved.length },
]

const rows = computed(() => {
  const source = tab.value === 'pending' ? youtubeOacPending : youtubeOacResolved
  const q = search.value.trim().toLowerCase()
  if (!q) return source
  return source.filter(r =>
    [r.userEmail, r.artistName, r.channelId, r.topicChannelId].some(v => v.toLowerCase().includes(q))
  )
})

const columns: Column[] = [
  { key: 'userEmail', label: 'User Email' },
  { key: 'artistName', label: 'Artist Name', sortable: true },
  { key: 'channelId', label: 'Channel ID' },
  { key: 'topicChannelId', label: 'Topic Channel ID' },
  { key: 'createdAt', label: 'Created At', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const statusTone: Record<string, 'warning' | 'success' | 'danger'> = {
  Pending: 'warning',
  Submitted: 'success',
  Rejected: 'danger',
}
</script>
