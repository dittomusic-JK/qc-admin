<template>
  <div>
    <PageHeader title="Ditto+ Lyrics QC" description="Lyrics review queue for Ditto+ label services releases." />

    <DataTable
      title="Awaiting Lyrics QC"
      :columns="columns"
      :rows="lyricsQcPlusQueue"
      row-key="id"
    >
      <template #toolbar>
        <TextInput v-model="search" icon="search" placeholder="Search…" />
      </template>
      <template #cell-id="{ row }">
        <a class="font-medium text-accent hover:underline tabular-nums cursor-pointer">{{ row.id }}</a>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import TextInput from '../../components/ui/TextInput.vue'
import Btn from '../../components/ui/Btn.vue'
import { lyricsQcPlusQueue } from '../../data/mockQc'

const search = ref('')

const columns: Column[] = [
  { key: 'id', label: 'Release ID', sortable: true },
  { key: 'user', label: 'User', sortable: true },
  { key: 'releaseDate', label: 'Release Date', sortable: true },
  { key: 'uploadedDate', label: 'Uploaded Date', sortable: true },
  { key: 'actions', label: '', align: 'right', width: 'w-32' },
]
</script>
