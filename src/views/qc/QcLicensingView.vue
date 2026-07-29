<template>
  <div>
    <PageHeader title="Licensing" description="Users with uncleared licensing that require manual review." />

    <DataTable
      title="Uncleared Users"
      :columns="columns"
      :rows="unclearedUsers"
      row-key="id"
    >
      <template #toolbar>
        <TextInput v-model="search" icon="search" placeholder="Search…" />
      </template>
      <template #cell-email="{ row }">
        <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
      </template>
      <template #cell-balance="{ row }">
        <span class="tabular-nums font-medium">{{ row.balance }}</span>
      </template>
      <template #cell-actions>
        <div class="flex justify-end gap-2">
          <Btn size="sm" icon="eye">View User</Btn>
          <Btn size="sm" variant="danger" icon="shield-check">Clear licensing</Btn>
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
import { unclearedUsers } from '../../data/mockQc'

const search = ref('')

const columns: Column[] = [
  { key: 'email', label: 'User Email', sortable: true },
  { key: 'balance', label: 'Balance', align: 'right', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-56' },
]
</script>
