<template>
  <div>
    <PageHeader title="Channel Name Update" description="Customer-requested VEVO channel name changes awaiting completion." />

    <DataTable
      :columns="columns"
      :rows="vevoNameUpdates"
      row-key="id"
    >
      <template #toolbar>
        <TextInput v-model="search" icon="search" placeholder="Search…" />
      </template>
      <template #cell-channelName="{ row }">
        <a class="font-medium text-accent hover:underline cursor-pointer">{{ row.channelName }}</a>
      </template>
      <template #cell-changedBy="{ row }">
        <div>
          <a :href="`mailto:${row.changedBy}`" class="text-info-ink hover:underline">{{ row.changedBy }}</a>
          <p class="text-xs text-subtext mt-0.5">(customer)</p>
        </div>
      </template>
      <template #cell-actions>
        <div class="flex justify-end">
          <Btn size="sm" variant="primary" icon="check">Mark as Complete</Btn>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import TextInput from '../../components/ui/TextInput.vue'
import Btn from '../../components/ui/Btn.vue'
import { vevoNameUpdates } from '../../data/mockQc'

const search = ref('')

const columns: Column[] = [
  { key: 'date', label: 'Date', sortable: true },
  { key: 'channelName', label: 'Channel Name', sortable: true },
  { key: 'changedBy', label: 'Changed By' },
  { key: 'oldValue', label: 'Old Value' },
  { key: 'newValue', label: 'New Value' },
  { key: 'actions', label: '', align: 'right', width: 'w-40' },
]
</script>
