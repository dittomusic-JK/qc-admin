<template>
  <div>
    <router-link
      to="/credits"
      class="inline-flex items-center gap-1.5 text-[13px] text-subtext hover:text-accent transition-colors mb-3"
    >
      <Icon name="chevron-left" :size="14" /> Back to credits
    </router-link>

    <PageHeader title="Add Credit" description="Create a ledger credit request for a user." />

    <div class="max-w-lg bg-white border border-hairline rounded-card shadow-card p-5 space-y-4">
      <SelectField
        label="Credit type"
        :options="['Refer a Friend', 'Goodwill', 'Compensation', 'Promotion']"
        v-model="form.type"
      />
      <TextInput label="User" placeholder="Search by name or email…" icon="search" v-model="form.user" />
      <div>
        <span class="block text-xs font-medium text-subtext mb-1">Credit amount</span>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-subtext">£</span>
          <input
            v-model="form.amount"
            type="number"
            min="0"
            step="0.01"
            class="w-full h-9 rounded-control border border-hairline-strong bg-white text-[13px] text-ink pl-7 pr-3 tabular-nums focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow"
          />
        </div>
      </div>

      <div class="flex items-center gap-2 pt-2 border-t border-hairline">
        <Btn variant="primary" icon="check">Save credit</Btn>
        <Btn variant="ghost">Reset form</Btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import SelectField from '../components/ui/SelectField.vue'
import TextInput from '../components/ui/TextInput.vue'
import Btn from '../components/ui/Btn.vue'
import Icon from '../components/ui/Icon.vue'

const form = reactive({
  type: 'Refer a Friend',
  user: '',
  amount: '10',
})
</script>
