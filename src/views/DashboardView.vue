<template>
  <div>
    <PageHeader title="Dashboard" description="Content QC output across the team and your own shift.">
      <LiquidTabs :tabs="viewTabs" :active="viewMode" @select="viewMode = $event as ViewMode" />
      <Btn variant="primary" icon="clipboard-check" @click="$router.push('/qc/review')">Start QC session</Btn>
    </PageHeader>

    <!-- Agent view: personal output first -->
    <template v-if="viewMode === 'agent'">
      <h2 class="text-2xs uppercase text-subtext mb-2.5">Your QC — today</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
        <StatCard label="Your output" :value="me.stats.day.reviewed" icon="clipboard-check" tint="accent" to="/qc/review" />
        <StatCard label="Your rate" :value="`${me.stats.day.perHour.toFixed(1)}/hr`" icon="clock" :tint="rateTint(me.stats.day.perHour)" />
        <StatCard label="Your approval rate" :value="`${me.stats.day.approvedPct}%`" icon="check" tint="success" />
        <StatCard label="Team rank" :value="`#${myRank} of ${qcTeam.length}`" icon="users" tint="info" />
      </div>

      <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden mb-6">
        <div class="flex items-center justify-between px-4 py-3 border-b border-hairline">
          <h2 class="text-h3 text-ink">Your recent shifts</h2>
          <router-link :to="`/qc/team/${me.id}`" class="text-xs text-accent hover:underline">Full profile →</router-link>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-table">
            <thead>
              <tr class="border-b border-hairline">
                <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Date</th>
                <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Reviewed</th>
                <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Per hour</th>
                <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Approved</th>
                <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Active</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-hairline">
              <tr
                v-for="(s, i) in myShifts"
                :key="s.date"
                @click="$router.push(`/qc/team/${me.id}?shift=${i + 1}`)"
                class="cursor-pointer hover:bg-lavender-soft/70 transition-colors"
              >
                <td class="px-4 py-2.5 text-ink">{{ s.date }}</td>
                <td class="px-4 py-2.5 text-right font-semibold text-ink tabular-nums">{{ s.reviewed }}</td>
                <td class="px-4 py-2.5 text-right">
                  <span :class="['inline-flex items-center gap-1.5 font-semibold tabular-nums', rateClass(s.perHour)]">
                    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>{{ s.perHour.toFixed(1) }}
                  </span>
                </td>
                <td class="px-4 py-2.5 text-right text-ink tabular-nums">{{ s.approvedPct }}%</td>
                <td class="px-4 py-2.5 text-right text-subtext tabular-nums">{{ s.active }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>

    <!-- Manager view: team shift output first -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-2.5">
      <h2 class="text-2xs uppercase text-subtext">Team QC — {{ periodLabels[period] }}</h2>
      <LiquidTabs :tabs="periodTabs" :active="period" @select="period = $event as QcPeriod" />
    </div>
    <div v-if="viewMode === 'manager'" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
      <StatCard label="Releases QC'd" :value="teamReviewed.toLocaleString()" icon="clipboard-check" tint="accent" to="/qc/review" />
      <StatCard label="Team rate" :value="`${teamRate}/hr`" icon="clock" tint="info" />
      <StatCard label="Approval rate" :value="`${teamApproved}%`" icon="check" tint="success" />
      <StatCard label="Queue remaining" :value="qcQueueRemaining" icon="inbox" tint="warning" to="/qc/ingestion-queue" />
    </div>

    <!-- QC leaderboard -->
    <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden mb-6">
      <div class="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-hairline">
        <div>
          <h2 class="text-h3 text-ink">QC leaderboard</h2>
          <p class="text-xs text-subtext mt-0.5">Full team, {{ periodLabels[period] }} — click a column to re-rank, click a reviewer for their profile.</p>
        </div>
        <div class="flex items-center gap-3 text-xs text-subtext">
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-success"></span>{{ qcRateBands.green }}+/hr</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-warning"></span>{{ qcRateBands.amber }}–{{ qcRateBands.green }}</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-danger"></span>Below {{ qcRateBands.amber }}</span>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-table">
          <thead>
            <tr class="border-b border-hairline">
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left w-14">Rank</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Reviewer</th>
              <th v-for="col in sortCols" :key="col.key" class="px-4 py-2 text-right">
                <button
                  @click="setSort(col.key)"
                  :class="[
                    'text-2xs uppercase inline-flex items-center gap-1 transition-colors',
                    sortKey === col.key ? 'text-ink' : 'text-subtext hover:text-ink'
                  ]"
                >
                  {{ col.label }}
                  <Icon v-if="sortKey === col.key" :name="sortDir === 'desc' ? 'chevron-down' : 'chevron-up'" :size="11" />
                </button>
              </th>
              <th class="w-8"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-hairline">
            <tr
              v-for="(m, i) in ranked"
              :key="m.name"
              @click="$router.push(`/qc/team/${m.id}`)"
              :class="['cursor-pointer transition-colors', m.you ? 'bg-accent-soft/40 hover:bg-accent-soft/70' : 'hover:bg-lavender-soft/70']"
            >
              <td class="px-4 py-2.5">
                <span
                  :class="[
                    'inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold tabular-nums',
                    i === 0 ? 'bg-accent text-white' : i < 3 ? 'bg-accent-soft text-accent' : 'bg-lavender text-subtext'
                  ]"
                >{{ i + 1 }}</span>
              </td>
              <td class="px-4 py-2.5">
                <span class="flex items-center gap-2.5 min-w-0">
                  <span class="relative flex-shrink-0">
                    <span class="w-7 h-7 rounded-full bg-lavender text-subtext text-[11px] font-bold flex items-center justify-center">{{ m.initials }}</span>
                    <span v-if="m.online" class="absolute -bottom-px -right-px w-2 h-2 rounded-full bg-success border border-white"></span>
                  </span>
                  <span class="text-[13px] font-medium text-ink truncate">{{ m.name }}</span>
                  <span v-if="m.you" class="text-[10px] font-bold uppercase tracking-wide text-accent bg-accent-soft rounded px-1.5 py-px">You</span>
                </span>
              </td>
              <td class="px-4 py-2.5 text-right font-semibold text-ink tabular-nums">{{ m.stats[period].reviewed.toLocaleString() }}</td>
              <td class="px-4 py-2.5 text-right">
                <span :class="['inline-flex items-center gap-1.5 font-semibold tabular-nums', rateClass(m.stats[period].perHour)]">
                  <span class="w-1.5 h-1.5 rounded-full bg-current"></span>{{ m.stats[period].perHour.toFixed(1) }}
                </span>
              </td>
              <td class="px-4 py-2.5 text-right text-ink tabular-nums">{{ m.stats[period].approvedPct }}%</td>
              <td class="px-2 py-2.5 w-8">
                <Icon name="chevron-right" :size="13" class="text-prompt" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import StatCard from '../components/ui/StatCard.vue'
import LiquidTabs from '../components/ui/LiquidTabs.vue'
import Icon from '../components/ui/Icon.vue'
import Btn from '../components/ui/Btn.vue'
import { qcTeam, qcRateBands, qcQueueRemaining, qcReviewerDetails, type QcPeriod } from '../data/mockQc'

type ViewMode = 'manager' | 'agent'
const viewMode = ref<ViewMode>('manager')

const viewTabs = [
  { id: 'manager', label: 'Manager view' },
  { id: 'agent', label: 'Agent view' },
]

const me = qcTeam.find(m => m.you) ?? qcTeam[0]
// Past shifts only — today's live numbers are on the stat cards above.
const myShifts = (qcReviewerDetails[me.id]?.shifts ?? []).slice(1)
const myRank = computed(() =>
  [...qcTeam].sort((a, b) => b.stats.day.reviewed - a.stats.day.reviewed).findIndex(m => m.you) + 1
)

const rateTint = (r: number) =>
  r >= qcRateBands.green ? 'success' as const : r >= qcRateBands.amber ? 'warning' as const : 'danger' as const

const period = ref<QcPeriod>('day')

const periodTabs = [
  { id: 'day', label: 'Day' },
  { id: 'week', label: 'Week' },
  { id: 'month', label: 'Month' },
  { id: 'quarter', label: 'Quarter' },
  { id: 'year', label: 'Year' },
]

const periodLabels: Record<QcPeriod, string> = {
  day: 'today',
  week: 'this week',
  month: 'this month',
  quarter: 'this quarter',
  year: 'this year',
}

type SortKey = 'reviewed' | 'perHour' | 'approvedPct'
const sortKey = ref<SortKey>('reviewed')
const sortDir = ref<'desc' | 'asc'>('desc')

const sortCols: { key: SortKey; label: string }[] = [
  { key: 'reviewed', label: 'Reviewed' },
  { key: 'perHour', label: 'Per hour' },
  { key: 'approvedPct', label: 'Approved' },
]

const setSort = (key: SortKey) => {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'desc' ? 'asc' : 'desc'
  } else {
    sortKey.value = key
    sortDir.value = 'desc'
  }
}

const ranked = computed(() =>
  [...qcTeam].sort((a, b) => {
    const diff = b.stats[period.value][sortKey.value] - a.stats[period.value][sortKey.value]
    return sortDir.value === 'desc' ? diff : -diff
  })
)

const rateClass = (r: number) =>
  r >= qcRateBands.green ? 'text-success-ink' : r >= qcRateBands.amber ? 'text-warning-ink' : 'text-danger-ink'

const teamReviewed = computed(() => qcTeam.reduce((sum, m) => sum + m.stats[period.value].reviewed, 0))
const teamRate = computed(() =>
  (qcTeam.reduce((sum, m) => sum + m.stats[period.value].perHour, 0) / qcTeam.length).toFixed(1)
)
const teamApproved = computed(() => {
  const reviewed = teamReviewed.value
  const approved = qcTeam.reduce((sum, m) => sum + m.stats[period.value].reviewed * m.stats[period.value].approvedPct, 0)
  return reviewed ? Math.round(approved / reviewed) : 0
})
</script>
