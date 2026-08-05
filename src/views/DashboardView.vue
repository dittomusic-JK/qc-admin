<template>
  <div>
    <PageHeader title="Dashboard" description="Operational overview across QC, orders, users and code inventory.">
      <Btn variant="primary" icon="clipboard-check" @click="$router.push('/qc/review')">Start QC session</Btn>
    </PageHeader>

    <!-- Team QC today -->
    <h2 class="text-2xs uppercase text-subtext mb-2.5">Team QC — today</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
      <StatCard label="Releases QC'd" :value="qcTeamToday.reviewed.toLocaleString()" icon="clipboard-check" tint="accent" to="/qc/review" />
      <StatCard label="Team rate" :value="`${qcTeamToday.avgPerHour}/hr`" icon="clock" tint="info" />
      <StatCard label="Approval rate" :value="`${qcTeamToday.approvedPct}%`" icon="check" tint="success" />
      <StatCard label="Queue remaining" :value="qcTeamToday.queueRemaining" icon="inbox" tint="warning" to="/qc/ingestion-queue" />
    </div>

    <!-- QC leaderboard -->
    <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden mb-6">
      <div class="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-hairline">
        <div>
          <h2 class="text-h3 text-ink">QC leaderboard</h2>
          <p class="text-xs text-subtext mt-0.5">
            Ranked by releases processed today, quality-weighted by audit accuracy. Team target:
            {{ qcTeamTarget.perHour }}/hr at ≥{{ qcTeamTarget.accuracyPct }}% accuracy.
          </p>
        </div>
        <p class="text-xs text-prompt">Resets daily at 00:00</p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-table">
          <thead>
            <tr class="border-b border-hairline">
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left w-14">Rank</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Reviewer</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Reviewed</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Per hour</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Approved</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-right">Accuracy</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left pl-6">Last 7 days</th>
              <th class="px-4 py-2 text-2xs uppercase text-subtext text-left"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-hairline">
            <tr
              v-for="(m, i) in ranked"
              :key="m.name"
              :class="m.you ? 'bg-accent-soft/40' : i === 0 ? 'bg-lavender-soft/70' : ''"
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
              <td class="px-4 py-2.5 text-right font-semibold text-ink tabular-nums">{{ m.reviewedToday }}</td>
              <td class="px-4 py-2.5 text-right tabular-nums" :class="m.perHour >= qcTeamTarget.perHour ? 'text-ink' : 'text-warning-ink'">{{ m.perHour.toFixed(1) }}</td>
              <td class="px-4 py-2.5 text-right text-ink tabular-nums">{{ m.approvedPct }}%</td>
              <td class="px-4 py-2.5 text-right tabular-nums" :class="m.accuracyPct >= qcTeamTarget.accuracyPct ? 'text-ink' : 'text-warning-ink'">{{ m.accuracyPct }}%</td>
              <td class="px-4 py-2.5 pl-6">
                <Sparkline :values="m.week" :class="i === 0 ? 'text-accent' : 'text-prompt'" />
              </td>
              <td class="px-4 py-2.5">
                <StatusBadge v-if="i === 0" variant="accent" label="Top reviewer" />
                <StatusBadge v-else-if="belowTarget(m)" variant="warning" label="Below target" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Activity (last 7 days) -->
    <h2 class="text-2xs uppercase text-subtext mb-2.5">Last 7 days</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-6">
      <StatCard label="Orders" value="33,419" icon="cart" tint="accent" to="/orders" />
      <StatCard label="Renewals" value="0" icon="refresh" tint="warning" to="/orders" />
      <StatCard label="New Users" value="13,058" icon="users" tint="info" to="/users" />
    </div>

    <!-- Code inventory -->
    <h2 class="text-2xs uppercase text-subtext mb-2.5">Code inventory</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      <StatCard label="Barcodes Remaining" value="118,067" icon="tag" tint="neutral" />
      <StatCard label="UK ISRC Codes Remaining" value="161,052" icon="music" tint="neutral" />
      <StatCard label="US ISRC Codes Remaining" value="84,310" icon="music" tint="neutral" />
      <StatCard label="AU ISRC Codes Remaining" value="92,675" icon="music" tint="neutral" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import StatCard from '../components/ui/StatCard.vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import Sparkline from '../components/ui/Sparkline.vue'
import Btn from '../components/ui/Btn.vue'
import { qcTeam, qcTeamToday, qcTeamTarget, type QcTeamMember } from '../data/mockQc'

// Quality-weighted rank: output × accuracy, so rubber-stamping passes to climb
// the board is penalised by the audit accuracy term.
const score = (m: QcTeamMember) => m.reviewedToday * (m.accuracyPct / 100)

const ranked = computed(() => [...qcTeam].sort((a, b) => score(b) - score(a)))

const belowTarget = (m: QcTeamMember) =>
  m.perHour < qcTeamTarget.perHour || m.accuracyPct < qcTeamTarget.accuracyPct
</script>
