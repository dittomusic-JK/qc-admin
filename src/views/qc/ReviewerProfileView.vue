<template>
  <div>
    <!-- Identity header -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
      <div class="flex items-center gap-3.5 min-w-0">
        <span class="relative flex-shrink-0">
          <span class="w-11 h-11 rounded-full bg-lavender text-subtext text-[15px] font-bold flex items-center justify-center">{{ member.initials }}</span>
          <span v-if="member.online" class="absolute -bottom-px -right-px w-3 h-3 rounded-full bg-success border-2 border-white"></span>
        </span>
        <div class="min-w-0">
          <div class="flex items-center gap-2.5 flex-wrap">
            <h1 class="text-h1 font-satoshi text-ink">{{ member.name }}</h1>
            <StatusBadge :variant="memberStatus.variant" :label="memberStatus.label" />
            <span v-if="member.you" class="text-[10px] font-bold uppercase tracking-wide text-accent bg-accent-soft rounded px-1.5 py-px">You</span>
          </div>
          <p class="text-[13px] text-subtext mt-0.5">{{ member.role }}</p>
        </div>
      </div>
      <Btn icon="chevron-left" @click="$router.push('/')">Back to leaderboard</Btn>
    </div>

    <!-- Dated shift: timeline + pause discipline -->
    <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden mb-4">
      <div class="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-hairline">
        <div class="flex items-center gap-2">
          <h2 class="text-h3 text-ink">Shift</h2>
          <div class="flex items-center gap-1">
            <button
              @click="selectedIdx = Math.min(selectedIdx + 1, shifts.length - 1)"
              :disabled="selectedIdx >= shifts.length - 1"
              aria-label="Older shift"
              class="w-6 h-6 rounded-md flex items-center justify-center text-subtext hover:text-ink hover:bg-lavender-soft disabled:text-prompt/50 disabled:hover:bg-transparent transition-colors"
            >
              <Icon name="chevron-left" :size="13" />
            </button>
            <span class="text-[13px] font-semibold text-ink tabular-nums w-24 text-center">{{ shift.date }}</span>
            <button
              @click="selectedIdx = Math.max(selectedIdx - 1, 0)"
              :disabled="selectedIdx <= 0"
              aria-label="Newer shift"
              class="w-6 h-6 rounded-md flex items-center justify-center text-subtext hover:text-ink hover:bg-lavender-soft disabled:text-prompt/50 disabled:hover:bg-transparent transition-colors"
            >
              <Icon name="chevron-right" :size="13" />
            </button>
          </div>
          <StatusBadge v-if="shift.today" variant="accent" label="Today" />
          <span class="text-xs text-subtext">clocked in {{ shift.clockIn }}<template v-if="shift.clockOut"> · out {{ shift.clockOut }}</template></span>
        </div>
        <div class="flex items-center gap-3 text-xs text-subtext">
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-sm bg-success/60"></span>Active</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-sm bg-warning"></span>Paused</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-sm bg-lavender border border-hairline-strong"></span>Off shift</span>
        </div>
      </div>
      <div class="px-4 pt-4 pb-2">
        <div class="relative h-8 rounded-md bg-lavender overflow-hidden">
          <div class="absolute inset-y-0 bg-success/25" :style="activeSpanStyle"></div>
          <div
            v-for="p in shift.pauses"
            :key="p.at"
            class="absolute inset-y-0 bg-warning"
            :style="pauseStyle(p)"
            :title="`Paused ${p.at} · ${p.mins} min`"
          ></div>
          <div v-if="shift.today && !shift.clockOut" class="absolute inset-y-0 w-px bg-ink" :style="{ left: pct(nowMin) }" title="Now"></div>
        </div>
        <div class="relative h-4 mt-1 text-[10px] text-prompt tabular-nums">
          <span v-for="h in hourTicks" :key="h" class="absolute -translate-x-1/2" :style="{ left: pct(h * 60) }">{{ h }}:00</span>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-hairline border-t border-hairline">
        <div v-for="s in pauseStats" :key="s.label" class="px-4 py-2.5">
          <p class="text-2xs uppercase text-prompt">{{ s.label }}</p>
          <p class="text-[15px] font-bold tabular-nums mt-0.5" :class="s.tone ?? 'text-ink'">{{ s.value }}</p>
        </div>
      </div>
    </div>

    <!-- Output for the selected shift -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
      <StatCard :label="`Reviewed — ${shiftLabel}`" :value="shift.reviewed" icon="clipboard-check" tint="accent" />
      <StatCard label="Per hour" :value="`${shift.perHour.toFixed(1)}/hr`" icon="clock" :tint="rateTint" />
      <StatCard label="Approved" :value="`${shift.approvedPct}%`" icon="check" tint="success" />
      <StatCard label="Flags issued" :value="flagsIssued" icon="flag" tint="danger" />
    </div>

    <div class="bg-white border border-hairline rounded-card shadow-card grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-hairline mb-4">
      <div v-for="s in decisionStats" :key="s.label" class="px-4 py-2.5">
        <p class="text-2xs uppercase text-prompt">{{ s.label }}</p>
        <p class="text-[15px] font-bold text-ink tabular-nums mt-0.5">{{ s.value }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4 items-start">
      <!-- Flag usage -->
      <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
        <div class="px-4 py-3 border-b border-hairline">
          <h2 class="text-h3 text-ink">Flag reasons used <span class="text-subtext font-normal">· {{ shiftLabel }}</span></h2>
        </div>
        <div class="divide-y divide-hairline">
          <div v-for="f in shift.flagUsage" :key="f.label" class="px-4 py-2.5">
            <div class="flex items-center justify-between text-[13px]">
              <span class="text-ink">{{ f.label }}</span>
              <span class="text-subtext tabular-nums">{{ f.count }}</span>
            </div>
            <div class="h-1 rounded-full bg-lavender mt-1.5 overflow-hidden">
              <div class="h-full bg-danger/60" :style="{ width: `${(f.count / maxFlagCount) * 100}%` }"></div>
            </div>
          </div>
          <div v-if="!shift.flagUsage.length" class="px-4 py-6 text-center text-[13px] text-prompt">No flags issued this shift</div>
        </div>
      </div>

      <!-- Pause log -->
      <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
        <div class="px-4 py-3 border-b border-hairline">
          <h2 class="text-h3 text-ink">Pause log <span class="text-subtext font-normal">· {{ shiftLabel }}</span></h2>
        </div>
        <table class="w-full text-table">
          <thead>
            <tr class="border-b border-hairline">
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Started</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Duration</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Share of shift</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-hairline">
            <tr v-for="p in shift.pauses" :key="p.at">
              <td class="px-4 py-2.5 text-ink tabular-nums">{{ p.at }}</td>
              <td class="px-4 py-2.5 text-right tabular-nums" :class="p.mins >= 40 ? 'text-warning-ink font-semibold' : 'text-ink'">{{ p.mins }} min</td>
              <td class="px-4 py-2.5 text-right text-subtext tabular-nums">{{ Math.round((p.mins / shiftMins) * 100) }}%</td>
            </tr>
            <tr v-if="!shift.pauses.length">
              <td colspan="3" class="px-4 py-6 text-center text-[13px] text-prompt">No pauses this shift</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Decision log -->
    <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-hairline">
        <h2 class="text-h3 text-ink">Decision log <span class="text-subtext font-normal">· {{ shiftLabel }}, most recent</span></h2>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-table">
          <thead>
            <tr class="border-b border-hairline">
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left w-16">Time</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Release</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left w-24">Decision</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right w-28">Handling time</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Flag reason</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-hairline">
            <tr v-for="d in shift.decisions" :key="`${d.time}-${d.releaseId}`">
              <td class="px-4 py-2.5 text-subtext tabular-nums">{{ d.time }}</td>
              <td class="px-4 py-2.5">
                <span class="text-[13px] font-medium text-ink">{{ d.title }}</span>
                <span class="text-xs text-subtext"> — {{ d.artist }} · {{ d.releaseId }}</span>
              </td>
              <td class="px-4 py-2.5">
                <StatusBadge :variant="d.action === 'Pass' ? 'success' : 'danger'" :label="d.action" />
              </td>
              <td class="px-4 py-2.5 text-right tabular-nums" :class="d.secs > shift.avgDecisionSec * 1.4 ? 'text-warning-ink font-semibold' : 'text-ink'">{{ fmtSecs(d.secs) }}</td>
              <td class="px-4 py-2.5 text-[13px]" :class="d.reason ? 'text-ink' : 'text-prompt'">{{ d.reason || '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Shift history (click to load a shift) -->
    <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
      <div class="px-4 py-3 border-b border-hairline">
        <h2 class="text-h3 text-ink">Shift history <span class="text-subtext font-normal">· click a row to load that shift</span></h2>
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
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Paused</th>
              <th class="w-8"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-hairline">
            <tr
              v-for="(s, i) in shifts"
              :key="s.date"
              @click="selectedIdx = i"
              :class="['cursor-pointer transition-colors', i === selectedIdx ? 'bg-accent-soft/40' : 'hover:bg-lavender-soft/70']"
            >
              <td class="px-4 py-2.5 text-ink">
                {{ s.date }}
                <span v-if="s.today" class="text-[10px] font-bold uppercase tracking-wide text-accent bg-accent-soft rounded px-1.5 py-px ml-1.5">Today</span>
              </td>
              <td class="px-4 py-2.5 text-right font-semibold text-ink tabular-nums">{{ s.reviewed }}</td>
              <td class="px-4 py-2.5 text-right">
                <span :class="['inline-flex items-center gap-1.5 font-semibold tabular-nums', rateClass(s.perHour)]">
                  <span class="w-1.5 h-1.5 rounded-full bg-current"></span>{{ s.perHour.toFixed(1) }}
                </span>
              </td>
              <td class="px-4 py-2.5 text-right text-ink tabular-nums">{{ s.approvedPct }}%</td>
              <td class="px-4 py-2.5 text-right text-ink tabular-nums">{{ s.active }}</td>
              <td class="px-4 py-2.5 text-right tabular-nums" :class="s.pausedMin >= 75 ? 'text-warning-ink font-semibold' : 'text-subtext'">{{ s.pausedMin }} min</td>
              <td class="px-2 py-2.5">
                <Icon name="chevron-right" :size="13" :class="i === selectedIdx ? 'text-accent' : 'text-prompt'" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import StatCard from '../../components/ui/StatCard.vue'
import StatusBadge from '../../components/ui/StatusBadge.vue'
import Btn from '../../components/ui/Btn.vue'
import Icon from '../../components/ui/Icon.vue'
import {
  qcTeam,
  qcReviewerDetails,
  qcRateBands,
  QC_NOW_MIN,
  SHIFT_WINDOW,
  type PauseEntry,
} from '../../data/mockQc'

const route = useRoute()

const member = computed(() => qcTeam.find(m => m.id === route.params.id) ?? qcTeam[0])
const shifts = computed(() => (qcReviewerDetails[member.value.id] ?? qcReviewerDetails['rosa-delgado']).shifts)

const initialIdx = () => {
  const q = Number(route.query.shift ?? 0)
  return Number.isFinite(q) ? Math.min(Math.max(q, 0), shifts.value.length - 1) : 0
}
const selectedIdx = ref(initialIdx())
watch(() => route.params.id, () => { selectedIdx.value = initialIdx() })

const shift = computed(() => shifts.value[selectedIdx.value])
const shiftLabel = computed(() => (shift.value.today ? 'today' : shift.value.date))

const toMin = (clock: string) => {
  const [h, m] = clock.split(':').map(Number)
  return h * 60 + m
}

const nowMin = QC_NOW_MIN
const windowSpan = SHIFT_WINDOW.end - SHIFT_WINDOW.start
const pct = (mins: number) => `${(((mins - SHIFT_WINDOW.start) / windowSpan) * 100).toFixed(2)}%`

const shiftEndMin = computed(() => (shift.value.clockOut ? toMin(shift.value.clockOut) : nowMin))
const shiftMins = computed(() => shiftEndMin.value - toMin(shift.value.clockIn))
const pausedTotal = computed(() => shift.value.pausedMin)
const activeMins = computed(() => shiftMins.value - pausedTotal.value)

const activeSpanStyle = computed(() => ({
  left: pct(toMin(shift.value.clockIn)),
  width: `${((shiftMins.value / windowSpan) * 100).toFixed(2)}%`,
}))

const pauseStyle = (p: PauseEntry) => ({
  left: pct(toMin(p.at)),
  width: `${((p.mins / windowSpan) * 100).toFixed(2)}%`,
})

const hourTicks = [9, 10, 11, 12, 13, 14, 15, 16, 17]

const fmtMins = (mins: number) => `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, '0')}`
const fmtSecs = (secs: number) => (secs >= 60 ? `${Math.floor(secs / 60)}m ${secs % 60}s` : `${secs}s`)

const memberStatus = computed<{ variant: 'success' | 'neutral'; label: string }>(() =>
  shifts.value[0].clockOut ? { variant: 'neutral', label: 'Off shift' } : { variant: 'success', label: 'On shift' }
)

const pauseStats = computed(() => {
  const p = shift.value.pauses
  const longest = p.length ? Math.max(...p.map(x => x.mins)) : 0
  const pausedShare = shiftMins.value ? Math.round((pausedTotal.value / shiftMins.value) * 100) : 0
  return [
    { label: 'Active time', value: fmtMins(activeMins.value) },
    { label: 'Paused time', value: `${pausedTotal.value} min`, tone: pausedTotal.value >= 75 ? 'text-warning-ink' : undefined },
    { label: 'Pauses', value: String(p.length) },
    { label: 'Avg pause', value: p.length ? `${Math.round(pausedTotal.value / p.length)} min` : '—' },
    { label: 'Longest pause', value: longest ? `${longest} min` : '—', tone: longest >= 40 ? 'text-warning-ink' : undefined },
    { label: 'Paused share', value: `${pausedShare}%`, tone: pausedShare >= 15 ? 'text-warning-ink' : undefined },
  ]
})

const flagsIssued = computed(() => shift.value.flagUsage.reduce((sum, f) => sum + f.count, 0))
const maxFlagCount = computed(() => Math.max(...shift.value.flagUsage.map(f => f.count), 1))

const decisionStats = computed(() => [
  { label: 'Avg handling', value: fmtSecs(shift.value.avgDecisionSec) },
  { label: 'Fastest', value: fmtSecs(shift.value.fastestSec) },
  { label: 'Slowest', value: fmtSecs(shift.value.slowestSec) },
  { label: 'Skips', value: String(shift.value.skips) },
  { label: 'Undos', value: String(shift.value.undos) },
])

const rateTint = computed(() =>
  shift.value.perHour >= qcRateBands.green ? 'success' : shift.value.perHour >= qcRateBands.amber ? 'warning' : 'danger'
)

const rateClass = (r: number) =>
  r >= qcRateBands.green ? 'text-success-ink' : r >= qcRateBands.amber ? 'text-warning-ink' : 'text-danger-ink'
</script>
