<template>
  <div>
    <PageHeader title="YouTube Sales" description="Monthly YouTube royalty income broken down by year and revenue stream.">
      <Btn variant="secondary" icon="refresh">Refresh data</Btn>
    </PageHeader>

    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
      <LiquidTabs :tabs="tabs" :active="activeTab" @select="activeTab = $event" />
      <CheckField v-model="rlsOnly" label="Ditto+ RLS users only" />
    </div>

    <div class="space-y-3">
      <Accordion
        v-for="yearRow in activeYears"
        :key="`${activeTab}-${yearRow.year}`"
        :title="String(yearRow.year)"
        :meta="formatGBP(yearTotal(yearRow))"
        :open="openYears.has(yearRow.year)"
        @toggle="toggleYear(yearRow.year)"
      >
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-hairline">
          <div v-for="(value, i) in yearRow.months" :key="i" class="bg-white px-3 py-2.5">
            <p class="text-2xs uppercase text-subtext">{{ monthLabels[i] }}</p>
            <p :class="['tabular-nums text-[13px] font-medium', value === 0 ? 'text-prompt' : 'text-ink']">
              {{ formatGBP(value) }}
            </p>
          </div>
        </div>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import Accordion from '../components/ui/Accordion.vue'
import LiquidTabs from '../components/ui/LiquidTabs.vue'
import CheckField from '../components/ui/CheckField.vue'
import Btn from '../components/ui/Btn.vue'
import {
  youtubeMusicRoyalties,
  youtubeContentIdRoyalties,
  youtubeMcnRoyalties,
  type RoyaltyYear,
} from '../data/mockProducts'

const tabs = [
  { id: 'music', label: 'YouTube Music' },
  { id: 'content-id', label: 'YouTube Content ID' },
  { id: 'mcn', label: 'YouTube MCN' },
]
const activeTab = ref('music')
const rlsOnly = ref(false)

const datasets: Record<string, RoyaltyYear[]> = {
  'music': youtubeMusicRoyalties,
  'content-id': youtubeContentIdRoyalties,
  'mcn': youtubeMcnRoyalties,
}

const activeYears = computed(() => datasets[activeTab.value])

const openYears = ref(new Set<number>([2026]))
const toggleYear = (year: number) => {
  const next = new Set(openYears.value)
  next.has(year) ? next.delete(year) : next.add(year)
  openYears.value = next
}

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const formatGBP = (n: number) =>
  '£' + n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

const yearTotal = (row: RoyaltyYear) => row.months.reduce((sum, m) => sum + m, 0)
</script>
