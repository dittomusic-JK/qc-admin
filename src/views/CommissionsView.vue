<template>
  <div>
    <PageHeader title="Commissions" description="Look up commission records by user, release, organisation or date range." />

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
      <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
        <EmptyState
          icon="search"
          title="Search to load commissions"
          hint="Use the filters to find the commissions you need — results appear here."
        />
      </div>

      <FilterCard title="Search for Commissions">
        <TextInput label="Created from" placeholder="YYYY-MM-DD" icon="calendar" />
        <TextInput label="Created to" placeholder="YYYY-MM-DD" icon="calendar" />
        <TextInput label="User ID" placeholder="User ID…" />
        <TextInput label="Release ID" placeholder="Release ID…" />
        <TextInput label="Organisation name" placeholder="Organisation name…" />
        <SelectField label="Account manager" :options="accountManagers" model-value="All Account Managers" />
      </FilterCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
import FilterCard from '../components/ui/FilterCard.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import TextInput from '../components/ui/TextInput.vue'
import SelectField from '../components/ui/SelectField.vue'
import { accountManagers } from '../data/mockAccounts'
</script>
