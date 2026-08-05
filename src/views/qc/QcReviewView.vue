<template>
  <div>
    <!-- Session header -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div class="min-w-0">
        <h1 class="text-h1 font-satoshi text-ink">QC Review</h1>
        <p class="text-[13px] text-subtext mt-0.5">
          Ingestion queue ·
          <span v-if="!done" class="tabular-nums">release {{ position }} of {{ queue.length }} · {{ remaining }} remaining</span>
          <span v-else>queue clear</span>
        </p>
      </div>

      <!-- Shift stats strip -->
      <div class="flex items-stretch bg-white border border-hairline rounded-card shadow-card divide-x divide-hairline">
        <div v-for="s in sessionStats" :key="s.label" class="px-4 py-2 min-w-[92px]">
          <p class="text-2xs uppercase text-prompt">{{ s.label }}</p>
          <p class="text-[15px] font-bold text-ink tabular-nums leading-5 mt-0.5">
            {{ s.value }}<span v-if="s.unit" class="text-xs font-medium text-subtext ml-0.5">{{ s.unit }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Queue progress -->
    <div class="h-1 rounded-full bg-lavender overflow-hidden mb-5">
      <div class="h-full bg-accent transition-[width] duration-300" :style="{ width: `${progress * 100}%` }"></div>
    </div>

    <!-- Session complete -->
    <div v-if="done" class="bg-white border border-hairline rounded-card shadow-card max-w-2xl mx-auto">
      <div class="px-6 py-8 text-center border-b border-hairline">
        <span class="w-12 h-12 rounded-full bg-success/10 text-success-ink inline-flex items-center justify-center mb-3">
          <Icon name="check" :size="22" />
        </span>
        <h2 class="text-h2 text-ink">Queue clear</h2>
        <p class="text-[13px] text-subtext mt-1">Every release in this session has been processed.</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 divide-x divide-hairline border-b border-hairline">
        <div v-for="s in summaryStats" :key="s.label" class="px-4 py-3 text-center">
          <p class="text-2xs uppercase text-prompt">{{ s.label }}</p>
          <p class="text-lg font-bold text-ink tabular-nums mt-0.5">{{ s.value }}</p>
        </div>
      </div>
      <div v-if="reasonBreakdown.length" class="px-6 py-4 border-b border-hairline">
        <p class="text-2xs uppercase text-prompt mb-2">Flag reasons this session</p>
        <div class="space-y-1.5">
          <div v-for="r in reasonBreakdown" :key="r.label" class="flex items-center justify-between text-[13px]">
            <span class="text-ink">{{ r.label }}</span>
            <span class="text-subtext tabular-nums">{{ r.count }}</span>
          </div>
        </div>
      </div>
      <div class="px-6 py-4 flex items-center justify-center gap-2">
        <Btn variant="primary" icon="inbox" @click="$router.push('/qc/ingestion-queue')">Back to Ingestion Queue</Btn>
        <Btn icon="refresh" @click="undo" v-if="decisions.length">Undo last decision</Btn>
      </div>
    </div>

    <!-- Review workspace -->
    <Transition v-else name="qc-item" mode="out-in">
      <div :key="current.id" class="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-4 items-start">
        <!-- Left: artwork + release facts -->
        <div class="space-y-4">
          <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div :class="['aspect-square bg-gradient-to-br relative', current.art]">
              <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p class="text-white/95 font-satoshi font-bold text-lg leading-tight drop-shadow">{{ current.title }}</p>
                <p class="text-white/75 text-xs mt-1 drop-shadow">{{ current.artist }}</p>
              </div>
              <span class="absolute bottom-2 right-2 text-[10px] font-medium text-white/80 bg-black/25 rounded px-1.5 py-0.5">Artwork preview</span>
            </div>
            <div class="px-3.5 py-2.5 flex items-center justify-between">
              <p class="text-xs text-subtext">Compare against metadata →</p>
              <Btn size="sm" variant="ghost" icon="download">Full size</Btn>
            </div>
          </div>

          <div class="bg-white border border-hairline rounded-card shadow-card p-4">
            <h2 class="text-h3 text-ink mb-2.5">Release</h2>
            <dl class="space-y-1.5 text-[13px]">
              <div v-for="f in releaseFacts" :key="f.label" class="flex items-baseline justify-between gap-3">
                <dt class="text-subtext flex-shrink-0">{{ f.label }}</dt>
                <dd class="text-ink font-medium text-right truncate" :class="f.muted ? 'text-prompt font-normal' : ''">{{ f.value }}</dd>
              </div>
            </dl>
          </div>

          <div class="bg-white border border-hairline rounded-card shadow-card p-4">
            <h2 class="text-h3 text-ink mb-2.5">Owner</h2>
            <a :href="`mailto:${current.user}`" class="text-[13px] text-info-ink hover:underline break-all">{{ current.user }}</a>
            <div class="flex items-center gap-2 mt-2">
              <StatusBadge variant="info" :label="current.plan" />
              <StatusBadge
                :variant="current.priorFlags > 1 ? 'warning' : 'neutral'"
                :label="`${current.priorFlags} prior ${current.priorFlags === 1 ? 'flag' : 'flags'}`"
              />
            </div>
            <p class="text-xs text-subtext mt-2">Member since {{ current.memberSince }}</p>
            <div class="flex items-center gap-2 mt-3">
              <Btn size="sm" icon="user" @click="$router.push(`/users/${current.userId}`)">View user</Btn>
              <Btn size="sm" icon="external" @click="$router.push(`/releases/${current.id}`)">Full release</Btn>
            </div>
          </div>
        </div>

        <!-- Centre: checks + tracks -->
        <div class="space-y-4 min-w-0">
          <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div class="flex items-center justify-between px-4 py-3 border-b border-hairline">
              <h2 class="text-h3 text-ink">Automated checks</h2>
              <StatusBadge :variant="checkSummary.variant" :label="checkSummary.label" />
            </div>
            <div class="divide-y divide-hairline">
              <div v-for="c in current.autoChecks" :key="c.label" class="flex items-center gap-3 px-4 py-2.5">
                <span :class="['w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0', checkTint[c.status]]">
                  <Icon :name="checkIcon[c.status]" :size="12" />
                </span>
                <p class="text-[13px] font-medium text-ink w-44 flex-shrink-0">{{ c.label }}</p>
                <p class="text-[13px] min-w-0 truncate" :class="c.status === 'pass' ? 'text-subtext' : c.status === 'warn' ? 'text-warning-ink' : 'text-danger-ink'">{{ c.detail }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div class="flex items-center justify-between px-4 py-3 border-b border-hairline">
              <h2 class="text-h3 text-ink">Tracks <span class="text-subtext font-normal">· {{ current.tracks.length }}</span></h2>
              <p class="text-xs text-prompt hidden sm:block">↑↓ select · space to play</p>
            </div>
            <div class="divide-y divide-hairline">
              <div
                v-for="(t, i) in current.tracks"
                :key="t.isrc"
                @click="trackIdx = i"
                :class="[
                  'flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors',
                  trackIdx === i ? 'bg-accent-soft/60' : 'hover:bg-lavender-soft/60'
                ]"
              >
                <button
                  @click.stop="toggleTrack(i)"
                  :aria-label="playingTrack === i && isPlaying ? `Pause ${t.title}` : `Play ${t.title}`"
                  :class="[
                    'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors',
                    playingTrack === i ? 'bg-accent text-white' : 'bg-white text-ink border border-hairline-strong hover:border-prompt'
                  ]"
                >
                  <Icon :name="playingTrack === i && isPlaying ? 'pause' : 'play'" :size="11" />
                </button>
                <div class="min-w-0 flex-1">
                  <p class="text-[13px] font-medium text-ink truncate">{{ t.number }}. {{ t.title }}</p>
                  <p class="text-xs" :class="t.aiLanguageMatch ? 'text-subtext' : 'text-warning-ink'">
                    {{ t.isrc }} · {{ t.language }}{{ t.aiLanguageMatch ? '' : ' — AI: audio may not match language' }}
                  </p>
                </div>
                <StatusBadge
                  v-if="t.explicit !== 'Not Explicit'"
                  :variant="t.explicit === 'Explicit' ? 'warning' : 'neutral'"
                  :label="t.explicit"
                />
                <span class="text-xs text-subtext tabular-nums flex-shrink-0">{{ formatDuration(t.duration) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: decision rail -->
        <div class="space-y-4 xl:sticky xl:top-[72px]">
          <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div class="px-4 py-3 border-b border-hairline">
              <h2 class="text-h3 text-ink">Flag reasons</h2>
              <p class="text-xs text-subtext mt-0.5">Toggle with keys 1–9. Selected reasons are emailed to the customer.</p>
            </div>
            <div class="py-1">
              <label
                v-for="r in flagReasons"
                :key="r.id"
                :class="[
                  'flex items-start gap-2.5 px-4 py-1.5 cursor-pointer transition-colors',
                  selectedReasons.has(r.id) ? 'bg-danger/5' : 'hover:bg-lavender-soft/60'
                ]"
              >
                <input
                  type="checkbox"
                  class="mt-0.5 accent-[#5f1fff] w-3.5 h-3.5 flex-shrink-0"
                  :checked="selectedReasons.has(r.id)"
                  @change="toggleReason(r.id)"
                />
                <span class="min-w-0">
                  <span class="text-[13px] leading-snug block" :class="selectedReasons.has(r.id) ? 'text-danger-ink font-medium' : 'text-ink'">{{ r.label }}</span>
                  <span class="text-[10px] uppercase tracking-wide text-prompt">{{ r.id }} · {{ r.category }}</span>
                </span>
              </label>
            </div>
            <div class="px-4 pb-3 pt-1">
              <TextAreaField v-model="note" placeholder="Optional note to customer / QC log…" :rows="2" />
            </div>
          </div>

          <div class="bg-white border border-hairline rounded-card shadow-card p-3 space-y-2">
            <button
              @click="decide('pass')"
              class="w-full h-11 rounded-control bg-success-ink text-white font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-success-ink/90 transition-colors focus-visible:ring-2 focus-visible:ring-success/50"
            >
              <Icon name="check" :size="16" /> Pass release
              <kbd class="ml-1 text-[10px] font-medium border border-white/30 rounded px-1.5 py-px">P</kbd>
            </button>
            <button
              @click="decide('flag')"
              :disabled="!selectedReasons.size"
              :class="[
                'w-full h-11 rounded-control font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-danger/50',
                selectedReasons.size ? 'bg-danger text-white hover:bg-danger/90' : 'bg-lavender text-prompt cursor-not-allowed'
              ]"
            >
              <Icon name="flag" :size="15" /> Flag release
              <kbd class="ml-1 text-[10px] font-medium rounded px-1.5 py-px border" :class="selectedReasons.size ? 'border-white/30' : 'border-prompt/40'">F</kbd>
            </button>
            <div class="flex items-center gap-2">
              <button
                @click="decide('skip')"
                class="flex-1 h-8 rounded-control text-[13px] font-medium text-subtext hover:text-ink hover:bg-lavender-soft transition-colors flex items-center justify-center gap-1.5"
              >
                Skip <kbd class="text-[10px] border border-hairline-strong rounded px-1 py-px">S</kbd>
              </button>
              <button
                @click="undo"
                :disabled="!decisions.length"
                :class="[
                  'flex-1 h-8 rounded-control text-[13px] font-medium transition-colors flex items-center justify-center gap-1.5',
                  decisions.length ? 'text-subtext hover:text-ink hover:bg-lavender-soft' : 'text-prompt cursor-not-allowed'
                ]"
              >
                Undo <kbd class="text-[10px] border border-hairline-strong rounded px-1 py-px">U</kbd>
              </button>
            </div>
            <p v-if="!selectedReasons.size" class="text-xs text-prompt text-center">Flagging requires at least one reason.</p>
          </div>
        </div>
      </div>
    </Transition>

    <div v-if="activeTrack" class="h-20"></div>
    <PlayerBar
      ref="playerRef"
      :track="activeTrack"
      @close="playingTrack = null"
      @playing="isPlaying = $event"
      @previous="stepPlaying(-1)"
      @next="stepPlaying(1)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Btn from '../../components/ui/Btn.vue'
import Icon from '../../components/ui/Icon.vue'
import StatusBadge from '../../components/ui/StatusBadge.vue'
import TextAreaField from '../../components/ui/TextAreaField.vue'
import PlayerBar, { type PlayerTrack } from '../../components/ui/PlayerBar.vue'
import { qcReviewQueue, flagReasons, qcShift, type CheckStatus } from '../../data/mockQc'

type Action = 'pass' | 'flag' | 'skip'

interface Decision {
  id: number
  action: Action
  reasons: number[]
}

const queue = qcReviewQueue
const idx = ref(0)
const decisions = ref<Decision[]>([])
const selectedReasons = ref(new Set<number>())
const note = ref('')

const done = computed(() => idx.value >= queue.length)
const current = computed(() => queue[Math.min(idx.value, queue.length - 1)])
const position = computed(() => Math.min(idx.value + 1, queue.length))
const remaining = computed(() => queue.length - idx.value - 1)
const progress = computed(() => idx.value / queue.length)

// ── Session analytics ────────────────────────────────────────────────────────
// Shift baseline (since 09:00) + everything decided in this live session.

const sessionPassed = computed(() => decisions.value.filter(d => d.action === 'pass').length)
const sessionFlagged = computed(() => decisions.value.filter(d => d.action === 'flag').length)
const sessionReviewed = computed(() => sessionPassed.value + sessionFlagged.value)

const shiftReviewed = computed(() => qcShift.reviewed + sessionReviewed.value)
const shiftApproved = computed(() => qcShift.approved + sessionPassed.value)

const mountedAt = Date.now()
const hoursOnShift = () => qcShift.hoursElapsed + (Date.now() - mountedAt) / 3_600_000

const perHour = computed(() => (shiftReviewed.value / hoursOnShift()).toFixed(1))
const approvedPct = computed(() =>
  shiftReviewed.value ? Math.round((shiftApproved.value / shiftReviewed.value) * 100) : 0
)

const sessionStats = computed(() => [
  { label: 'Shift output', value: String(shiftReviewed.value), unit: '' },
  { label: 'Per hour', value: perHour.value, unit: '/hr' },
  { label: 'Approved', value: String(approvedPct.value), unit: '%' },
  { label: 'This session', value: String(sessionReviewed.value), unit: '' },
])

const summaryStats = computed(() => [
  { label: 'Reviewed', value: String(sessionReviewed.value) },
  { label: 'Passed', value: String(sessionPassed.value) },
  { label: 'Flagged', value: String(sessionFlagged.value) },
  { label: 'Shift rate', value: `${perHour.value}/hr` },
])

const reasonBreakdown = computed(() => {
  const counts = new Map<number, number>()
  for (const d of decisions.value) {
    for (const r of d.reasons) counts.set(r, (counts.get(r) ?? 0) + 1)
  }
  return [...counts.entries()]
    .map(([id, count]) => ({ label: flagReasons.find(r => r.id === id)?.label ?? '', count }))
    .sort((a, b) => b.count - a.count)
})

// ── Check + fact display ─────────────────────────────────────────────────────

const checkTint: Record<CheckStatus, string> = {
  pass: 'bg-success/10 text-success-ink',
  warn: 'bg-warning/10 text-warning-ink',
  fail: 'bg-danger/10 text-danger-ink',
}
const checkIcon: Record<CheckStatus, string> = {
  pass: 'check',
  warn: 'alert',
  fail: 'x',
}

const checkSummary = computed<{ variant: 'success' | 'warning' | 'danger'; label: string }>(() => {
  const fails = current.value.autoChecks.filter(c => c.status === 'fail').length
  const warns = current.value.autoChecks.filter(c => c.status === 'warn').length
  if (fails) return { variant: 'danger', label: `${fails} failed` }
  if (warns) return { variant: 'warning', label: `${warns} to review` }
  return { variant: 'success', label: 'All clear' }
})

const releaseFacts = computed(() => [
  { label: 'Type', value: current.value.releaseType },
  { label: 'Label', value: current.value.label },
  { label: 'Genre', value: current.value.genre },
  { label: 'Language', value: current.value.language },
  { label: 'UPC/EAN', value: current.value.barcode || 'Not assigned', muted: !current.value.barcode },
  { label: 'Release date', value: current.value.releaseDate },
  { label: 'Uploaded', value: current.value.uploadedDate },
  { label: 'Release ID', value: String(current.value.id) },
])

// ── Decisions ────────────────────────────────────────────────────────────────

const resetItemState = () => {
  selectedReasons.value = new Set()
  note.value = ''
  trackIdx.value = 0
  playingTrack.value = null
}

const decide = (action: Action) => {
  if (done.value) return
  if (action === 'flag' && !selectedReasons.value.size) return
  decisions.value.push({
    id: current.value.id,
    action,
    reasons: action === 'flag' ? [...selectedReasons.value] : [],
  })
  resetItemState()
  idx.value++
}

const undo = () => {
  const last = decisions.value.pop()
  if (!last) return
  resetItemState()
  idx.value = Math.max(idx.value - 1, 0)
}

const toggleReason = (id: number) => {
  const next = new Set(selectedReasons.value)
  next.has(id) ? next.delete(id) : next.add(id)
  selectedReasons.value = next
}

// ── Track preview ────────────────────────────────────────────────────────────

const trackIdx = ref(0)
const playingTrack = ref<number | null>(null)
const isPlaying = ref(false)
const playerRef = ref<InstanceType<typeof PlayerBar> | null>(null)

const activeTrack = computed<PlayerTrack | null>(() => {
  if (done.value || playingTrack.value === null) return null
  const t = current.value.tracks[playingTrack.value]
  if (!t) return null
  return { title: t.title, artist: current.value.artist, duration: t.duration }
})

const toggleTrack = (i: number) => {
  trackIdx.value = i
  if (playingTrack.value !== i) {
    playingTrack.value = i
  } else if (isPlaying.value) {
    playerRef.value?.pause()
  } else {
    playerRef.value?.play()
  }
}

const stepPlaying = (dir: 1 | -1) => {
  if (playingTrack.value === null) return
  const n = current.value.tracks.length
  playingTrack.value = (playingTrack.value + dir + n) % n
  trackIdx.value = playingTrack.value
}

const formatDuration = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

// ── Keyboard ─────────────────────────────────────────────────────────────────

const onKeydown = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement
  if (e.metaKey || e.ctrlKey || e.altKey) return
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return

  if (done.value) {
    if (e.key.toLowerCase() === 'u') { e.preventDefault(); undo() }
    return
  }

  const key = e.key.toLowerCase()
  if (key >= '1' && key <= '9') {
    e.preventDefault()
    toggleReason(Number(key))
  } else if (key === 'p') {
    e.preventDefault()
    decide('pass')
  } else if (key === 'f') {
    e.preventDefault()
    decide('flag')
  } else if (key === 's') {
    e.preventDefault()
    decide('skip')
  } else if (key === 'u') {
    e.preventDefault()
    undo()
  } else if (key === ' ') {
    e.preventDefault()
    toggleTrack(trackIdx.value)
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    trackIdx.value = Math.min(trackIdx.value + 1, current.value.tracks.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    trackIdx.value = Math.max(trackIdx.value - 1, 0)
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.qc-item-enter-active,
.qc-item-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.qc-item-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.qc-item-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
