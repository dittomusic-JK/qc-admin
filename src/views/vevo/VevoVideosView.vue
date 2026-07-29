<template>
  <div>
    <PageHeader title="VEVO Videos" description="Every video delivered to VEVO through Ditto, with delivery status.">
      <Btn variant="primary" icon="plus">Add a Video</Btn>
    </PageHeader>

    <DataTable
      :columns="columns"
      :rows="vevoVideos"
      row-key="id"
      :page="page"
      :per-page="10"
      :total="27392"
      @update:page="page = $event"
    >
      <template #toolbar>
        <TextInput v-model="search" icon="search" placeholder="Search…" />
      </template>
      <template #cell-video="{ row }">
        <span class="font-medium text-ink">{{ row.video }}</span>
      </template>
      <template #cell-channel="{ row }">
        <span v-if="!row.channel" class="text-prompt">—</span>
        <template v-else>{{ row.channel }}</template>
      </template>
      <template #cell-status="{ row }">
        <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
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
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import StatusBadge from '../../components/ui/StatusBadge.vue'
import TextInput from '../../components/ui/TextInput.vue'
import Btn from '../../components/ui/Btn.vue'
import { vevoVideos } from '../../data/mockQc'

const page = ref(1)
const search = ref('')

const columns: Column[] = [
  { key: 'artist', label: 'Artist', sortable: true },
  { key: 'video', label: 'Video', sortable: true },
  { key: 'channel', label: 'Channel', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', align: 'right', width: 'w-32' },
]

const statusTone: Record<string, 'success' | 'info' | 'danger'> = {
  Sent: 'success',
  Processing: 'info',
  Rejected: 'danger',
}
</script>
