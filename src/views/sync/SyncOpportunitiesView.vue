<template>
  <div>
    <PageHeader title="Sync Opportunities" description="Licensing briefs open for artist applications.">
      <Btn variant="primary" icon="plus" @click="$router.push('/sync-opportunities/create')">Add New</Btn>
    </PageHeader>

    <DataTable :columns="columns" :rows="syncOpportunities" row-key="id">
      <template #cell-name="{ row }">
        <router-link
          :to="`/sync-opportunities/${row.id}/applicants`"
          class="font-medium text-ink hover:text-accent transition-colors"
        >
          {{ row.name }}
        </router-link>
      </template>
      <template #cell-applications="{ row }">
        <span class="tabular-nums">{{ row.applications }}</span>
      </template>
      <template #cell-actions="{ row }">
        <div class="flex justify-end gap-2">
          <Btn size="sm" icon="users" @click="$router.push(`/sync-opportunities/${row.id}/applicants`)">View Applicants</Btn>
          <Btn size="sm" icon="pen">Edit</Btn>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../../components/ui/DataTable.vue'
import Btn from '../../components/ui/Btn.vue'
import { syncOpportunities } from '../../data/mockSync'

const columns: Column[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'deadline', label: 'Deadline', sortable: true },
  { key: 'applications', label: 'Applications' },
  { key: 'actions', label: '', align: 'right', width: 'w-72' },
]
</script>
