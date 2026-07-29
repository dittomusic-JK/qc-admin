<template>
  <div>
    <PageHeader title="VEVO Rejected Queue" description="Videos rejected at QC and ingestions that failed delivery." />

    <div class="space-y-4">
      <DataTable
        title="Rejected Videos"
        :columns="columns"
        :rows="vevoRejected"
        row-key="isrc"
        :page="page"
        :per-page="10"
        :total="336"
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
        title="Failed Video Ingestions"
        :columns="columns"
        :rows="vevoFailedIngestions"
        row-key="isrc"
      >
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import TextInput from '../../components/ui/TextInput.vue'
import Btn from '../../components/ui/Btn.vue'
import { vevoRejected, vevoFailedIngestions } from '../../data/mockQc'

const page = ref(1)
const search = ref('')

const columns: Column[] = [
  { key: 'isrc', label: 'ISRC Code', sortable: true },
  { key: 'user', label: 'User', sortable: true },
  { key: 'releaseDate', label: 'Release Date', sortable: true },
  { key: 'reason', label: 'Reason' },
  { key: 'actions', label: '', align: 'right', width: 'w-32' },
]
</script>
