<template>
  <div>
    <PageHeader title="Store Royalties" description="Monthly royalty income per store, broken down by year." />

    <!-- Filters -->
    <div class="bg-white rounded-card border border-hairline shadow-card p-4 flex flex-wrap gap-3 items-end">
      <SelectField
        label="Stores"
        :options="['All stores', 'Spotify', 'Apple Music', 'TIDAL', 'Deezer']"
        v-model="storeFilter"
        class="w-52"
      />
      <CheckField v-model="rlsOnly" label="Ditto+ RLS users only" class="h-9" />
      <Btn variant="primary" icon="search">Search</Btn>
      <Btn variant="ghost" @click="storeFilter = 'All stores'; rlsOnly = false">Clear</Btn>
      <Btn variant="secondary" icon="refresh">Refresh data</Btn>
    </div>

    <!-- Per-store sections -->
    <section v-for="store in storeSections" :key="store.name">
      <h2 class="text-h2 text-ink mt-6 mb-3">{{ store.name }}</h2>
      <div class="space-y-3">
        <Accordion
          v-for="yearRow in store.years"
          :key="`${store.name}-${yearRow.year}`"
          :title="String(yearRow.year)"
          :meta="formatGBP(yearTotal(yearRow))"
          :open="openKeys.has(`${store.name}-${yearRow.year}`)"
          @toggle="toggleKey(`${store.name}-${yearRow.year}`)"
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import Accordion from '../components/ui/Accordion.vue'
import SelectField from '../components/ui/SelectField.vue'
import CheckField from '../components/ui/CheckField.vue'
import Btn from '../components/ui/Btn.vue'
import { spotifyRoyalties, appleMusicRoyalties, type RoyaltyYear } from '../data/mockProducts'

const storeFilter = ref('All stores')
const rlsOnly = ref(false)

const storeSections: { name: string; years: RoyaltyYear[] }[] = [
  { name: 'Spotify', years: spotifyRoyalties },
  { name: 'Apple Music', years: appleMusicRoyalties },
]

// Open accordions keyed by "<store>-<year>"; Spotify's current year starts open.
const openKeys = ref(new Set<string>(['Spotify-2026']))
const toggleKey = (key: string) => {
  const next = new Set(openKeys.value)
  next.has(key) ? next.delete(key) : next.add(key)
  openKeys.value = next
}

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const formatGBP = (n: number) =>
  '£' + n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

const yearTotal = (row: RoyaltyYear) => row.months.reduce((sum, m) => sum + m, 0)
</script>
