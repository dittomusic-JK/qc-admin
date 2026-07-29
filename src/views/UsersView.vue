<template>
  <div>
    <PageHeader title="Users" description="Search, inspect and manage customer and staff accounts.">
      <Btn variant="primary" icon="plus">Add New User</Btn>
    </PageHeader>

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <!-- Results -->
      <DataTable
        :columns="columns"
        :rows="users"
        row-key="id"
        :page="page"
        :per-page="20"
        :total="807"
        @update:page="page = $event"
      >
        <template #cell-name="{ row }">
          <router-link :to="`/users/${row.id}`" class="font-medium text-ink hover:text-accent transition-colors whitespace-nowrap">
            {{ row.name }}
          </router-link>
        </template>
        <template #cell-email="{ row }">
          <a :href="`mailto:${row.email}`" class="text-info-ink hover:underline">{{ row.email }}</a>
        </template>
        <template #cell-status="{ row }">
          <StatusBadge :variant="statusTone[row.status]" :label="row.status" />
        </template>
        <template #cell-actions="{ row }">
          <div class="flex justify-end">
            <Btn size="sm" icon="eye" @click="$router.push(`/users/${row.id}`)">View</Btn>
          </div>
        </template>
      </DataTable>

      <!-- Filters -->
      <FilterCard title="Search for User">
        <SelectField label="User type" :options="['All Users', 'Customers', 'Staff']" model-value="All Users" />
        <TextInput label="Forename" placeholder="Forename…" />
        <TextInput label="Surname" placeholder="Surname…" />
        <TextInput label="Email address" placeholder="Email address…" icon="mail" />
        <TextInput label="Organization" placeholder="Organization…" />
        <SelectField label="Region" :options="['All Regions', 'UK & Europe', 'North America', 'LATAM', 'Asia Pacific', 'Africa']" model-value="All Regions" />
        <SelectField label="User status" :options="['All', 'Active', 'Inactive', 'Banned', 'Deleted']" model-value="All" />
        <SelectField
          label="Account manager"
          :options="['All Account Managers', 'Fatima Benmouhoub', 'Oleksandr Iliushyn', 'Anastasiia Horbanova', 'Serhii Borovychenko', 'Alina Melashchenko']"
          model-value="All Account Managers"
        />
        <SelectField label="Subscription type" :options="['All Subscriptions', 'Starter', 'Pro', 'Label', 'Ditto Plus – RLS']" model-value="All Subscriptions" />
      </FilterCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import FilterCard from '../components/ui/FilterCard.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import TextInput from '../components/ui/TextInput.vue'
import SelectField from '../components/ui/SelectField.vue'
import Btn from '../components/ui/Btn.vue'
import { users } from '../data/mock'

const page = ref(1)

const columns: Column[] = [
  { key: 'name', label: 'Full Name', sortable: true },
  { key: 'email', label: 'Email Address', sortable: true },
  { key: 'organization', label: 'Organization' },
  { key: 'userType', label: 'User Type' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const statusTone: Record<string, 'success' | 'warning' | 'danger' | 'neutral'> = {
  Active: 'success',
  Inactive: 'neutral',
  Banned: 'danger',
  Deleted: 'neutral',
}
</script>
