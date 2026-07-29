<template>
  <div>
    <PageHeader title="VEVO Ingestion Queue" description="Videos awaiting QC and channels that need action before delivery." />

    <div class="space-y-4">
      <DataTable
        title="Videos Awaiting QC"
        :columns="videoColumns"
        :rows="vevoAwaitingQc"
        row-key="isrc"
        :page="page"
        :per-page="10"
        :total="139"
        @update:page="page = $event"
      >
        <template #toolbar>
          <TextInput v-model="search" icon="search" placeholder="Search…" />
        </template>
        <template #cell-isrc="{ row }">
          <a class="font-medium text-accent hover:underline tabular-nums cursor-pointer">{{ row.isrc }}</a>
        </template>
        <template #cell-user="{ row }">
          <a :href="`mailto:${row.user}`" class="text-info-ink hover:underline">{{ row.user }}</a>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View Release</Btn>
          </div>
        </template>
      </DataTable>

      <DataTable
        title="Channels Awaiting Action"
        :columns="channelColumns"
        :rows="vevoChannelsAwaitingAction"
        row-key="channel"
      >
        <template #cell-status="{ row }">
          <StatusBadge variant="warning" :label="row.status" />
        </template>
        <template #cell-slots="{ row }">
          <span class="tabular-nums">{{ row.slots }}</span>
        </template>
        <template #cell-actions>
          <div class="flex justify-end">
            <Btn size="sm" icon="eye">View Channel</Btn>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import StatusBadge from '../../components/ui/StatusBadge.vue'
import TextInput from '../../components/ui/TextInput.vue'
import Btn from '../../components/ui/Btn.vue'
import { vevoAwaitingQc, vevoChannelsAwaitingAction } from '../../data/mockQc'

const page = ref(1)
const search = ref('')

const videoColumns: Column[] = [
  { key: 'isrc', label: 'ISRC Code', sortable: true },
  { key: 'user', label: 'User', sortable: true },
  { key: 'releaseDate', label: 'Release Date', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-32' },
]

const channelColumns: Column[] = [
  { key: 'channel', label: 'Channel', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'slots', label: 'Video Slots' },
  { key: 'actions', label: '', align: 'right', width: 'w-32' },
]
</script>
