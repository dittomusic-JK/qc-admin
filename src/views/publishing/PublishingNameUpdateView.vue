<template>
  <div>
    <PageHeader title="Name Update" description="Customer name changes on publishing accounts awaiting society updates." />

    <DataTable
      :columns="columns"
      :rows="publishingNameUpdates"
      row-key="id"
    >
      <template #toolbar>
        <TextInput v-model="search" icon="search" placeholder="Search…" />
      </template>
      <template #cell-userEmail="{ row }">
        <div>
          <a :href="`mailto:${row.userEmail}`" class="text-info-ink hover:underline">{{ row.userEmail }}</a>
          <p class="text-xs text-subtext mt-0.5">(customer)</p>
        </div>
      </template>
      <template #cell-changedBy="{ row }">
        <a :href="`mailto:${row.changedBy}`" class="text-info-ink hover:underline">{{ row.changedBy }}</a>
      </template>
      <template #cell-actions>
        <div class="flex justify-end gap-2">
          <Btn size="sm" icon="file-text">Works</Btn>
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
import { publishingNameUpdates } from '../../data/mockQc'

const search = ref('')

const columns: Column[] = [
  { key: 'date', label: 'Date', sortable: true },
  { key: 'userEmail', label: 'User Email', sortable: true },
  { key: 'changedBy', label: 'Changed By' },
  { key: 'oldValue', label: 'Old Value' },
  { key: 'newValue', label: 'New Value' },
  { key: 'actions', label: '', align: 'right', width: 'w-64' },
]
</script>
