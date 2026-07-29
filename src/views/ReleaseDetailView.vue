<template>
  <div>
    <!-- Release header -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
      <div class="flex items-center gap-3.5 min-w-0">
        <span class="w-11 h-11 rounded-md bg-lavender flex items-center justify-center flex-shrink-0">
          <Icon name="music" :size="18" class="text-subtext" />
        </span>
        <div class="min-w-0">
          <div class="flex items-center gap-2.5 flex-wrap">
            <h1 class="text-h1 font-satoshi text-ink">{{ release.title }}</h1>
            <StatusBadge variant="warning" label="Incomplete" />
            <StatusBadge variant="danger" label="Not Cleared" />
            <StatusBadge variant="warning" label="QC Not Passed" />
          </div>
          <p class="text-[13px] text-subtext mt-0.5">{{ release.artist }} · {{ release.barcode }} · ID {{ release.id }}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <Btn icon="copy">Duplicate release</Btn>
        <Btn variant="danger" icon="flag">Flag account</Btn>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-4 items-start">
      <!-- Section nav -->
      <nav class="bg-white border border-hairline rounded-card shadow-card p-2 space-y-2 lg:sticky lg:top-[72px]">
        <div v-for="group in sectionGroups" :key="group.label">
          <p class="text-2xs uppercase text-prompt px-2.5 pt-1.5 pb-1">{{ group.label }}</p>
          <button
            v-for="s in group.items"
            :key="s.id"
            @click="section = s.id"
            :class="[
              'w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-[13px] text-left transition-colors',
              section === s.id ? 'bg-accent-soft text-accent font-medium' : 'text-subtext hover:bg-lavender-soft hover:text-ink'
            ]"
          >
            {{ s.label }}
            <span v-if="s.count !== undefined" class="text-xs tabular-nums" :class="section === s.id ? 'text-accent/60' : 'text-prompt'">{{ s.count }}</span>
          </button>
        </div>
      </nav>

      <!-- Section content -->
      <div class="min-w-0">
        <!-- RELEASE DETAILS -->
        <div v-if="section === 'details'" class="space-y-4">
          <LiquidTabs :tabs="detailTabs" :active="detailTab" @select="detailTab = $event" />

          <div v-if="detailTab === 'main'" class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
            <div class="space-y-4 min-w-0">
              <DetailList title="Release">
                <DetailRow label="Title" :value="release.title" />
                <DetailRow label="Artist" :value="release.artist" />
                <DetailRow label="Label" :value="release.label" />
                <DetailRow label="Primary genre" :value="release.primaryGenre" />
                <DetailRow label="Secondary genre" :value="release.secondaryGenre" />
                <DetailRow label="Copyright year" :value="release.copyrightYear" />
                <DetailRow label="Production year" :value="release.productionYear" />
                <DetailRow label="Price band" :value="release.priceBand" />
                <DetailRow label="UPC/EAN" :value="release.barcode" />
                <DetailRow label="Release date" :value="release.releaseDate" />
                <DetailRow label="Explicit">
                  <StatusBadge variant="neutral" label="No" />
                </DetailRow>
              </DetailList>

              <DetailList title="Delivery & QC">
                <DetailRow label="IDOL status">
                  <StatusBadge variant="warning" label="Undelivered" />
                  <Btn size="sm">Select action</Btn>
                </DetailRow>
                <DetailRow label="QC pass">
                  <StatusBadge variant="warning" label="Not Passed" />
                  <Btn size="sm">Mark as urgent</Btn>
                </DetailRow>
                <DetailRow label="License status">
                  <StatusBadge variant="danger" label="Not Cleared" />
                </DetailRow>
                <DetailRow label="Covers">
                  <StatusBadge variant="success" label="No Covers" />
                </DetailRow>
                <DetailRow label="Created via">
                  <StatusBadge variant="info" label="Mobile app" />
                </DetailRow>
                <DetailRow label="Streaming only">
                  <StatusBadge variant="neutral" label="No" />
                  <Btn size="sm" variant="ghost">Change</Btn>
                </DetailRow>
                <DetailRow label="AI generated">
                  <StatusBadge variant="neutral" label="No" />
                  <Btn size="sm" variant="ghost">Change</Btn>
                </DetailRow>
              </DetailList>
            </div>

            <!-- Right rail -->
            <div class="space-y-4">
              <div class="bg-white border border-hairline rounded-card shadow-card p-4 space-y-2">
                <h2 class="text-h3 text-ink mb-1">Quick actions</h2>
                <Btn size="sm" block icon="upload">Upload artwork</Btn>
                <Btn size="sm" block>Assign next barcode</Btn>
                <Btn size="sm" block variant="danger">Unassign barcode</Btn>
                <Btn size="sm" block icon="download">Export metadata CSV</Btn>
                <Btn size="sm" block icon="download">Download artwork</Btn>
              </div>

              <div class="bg-white border border-hairline rounded-card shadow-card p-4 space-y-2">
                <h2 class="text-h3 text-ink mb-1">Quick deselect</h2>
                <CheckField v-for="(v, k) in deselects" :key="k" :label="k" :model-value="v" @update:model-value="deselects[k] = $event" />
                <div class="pt-1">
                  <Btn size="sm" variant="primary">Update</Btn>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="bg-white border border-hairline rounded-card shadow-card">
            <EmptyState
              icon="file-text"
              :title="`${detailTabs.find(t => t.id === detailTab)?.label} — not in this prototype`"
              hint="This tab keeps its current fields; only the styling changes in the rebuild."
            />
          </div>
        </div>

        <!-- Other sections: honest, quiet empty states -->
        <div v-else class="bg-white border border-hairline rounded-card shadow-card">
          <EmptyState
            :icon="currentSection?.emptyIcon ?? 'inbox'"
            :title="currentSection?.emptyTitle ?? 'Nothing here yet'"
            :hint="currentSection?.emptyHint"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import Btn from '../components/ui/Btn.vue'
import Icon from '../components/ui/Icon.vue'
import LiquidTabs from '../components/ui/LiquidTabs.vue'
import DetailList from '../components/ui/DetailList.vue'
import DetailRow from '../components/ui/DetailRow.vue'
import CheckField from '../components/ui/CheckField.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import { releaseDetail as release } from '../data/mockReleases'

const section = ref('details')
const detailTab = ref('main')

const detailTabs = [
  { id: 'main', label: 'Main Details' },
  { id: 'artists', label: 'Artists' },
  { id: 'territories', label: 'Territories' },
  { id: 'canned', label: 'Canned Responses' },
]

const deselects = reactive<Record<string, boolean>>({
  'AI generated (low effort)': false,
  'Content ID': false,
  'ASMR / nature sounds': false,
  'Cover song': false,
  'Cover song license': false,
})

interface SectionDef {
  id: string
  label: string
  count?: number
  emptyIcon?: string
  emptyTitle?: string
  emptyHint?: string
}

const sectionGroups: { label: string; items: SectionDef[] }[] = [
  {
    label: 'Release',
    items: [{ id: 'details', label: 'Release Details' }],
  },
  {
    label: 'Content',
    items: [
      { id: 'tracks', label: 'Tracks', count: 12, emptyIcon: 'music', emptyTitle: 'Tracks — not in this prototype', emptyHint: 'The track listing keeps its current fields; only the styling changes in the rebuild.' },
      { id: 'stores', label: 'Stores', emptyIcon: 'store', emptyTitle: 'Stores — not in this prototype', emptyHint: 'Store selection and delivery status will appear here.' },
      { id: 'services', label: 'Services', emptyIcon: 'gear', emptyTitle: 'Services — not in this prototype' },
    ],
  },
  {
    label: 'Money',
    items: [
      { id: 'sales', label: 'Sales', emptyIcon: 'banknote', emptyTitle: 'Sales — not in this prototype' },
    ],
  },
  {
    label: 'Logs',
    items: [
      { id: 'idol-log', label: 'Idol Ingestion Log', emptyIcon: 'clock', emptyTitle: 'No ingestion events', emptyHint: 'This release has not been delivered to IDOL yet.' },
      { id: 'qc-log', label: 'QC Log', emptyIcon: 'clipboard-check', emptyTitle: 'No QC checks logged', emptyHint: 'QC decisions on this release will appear here.' },
      { id: 'status-history', label: 'Status History', emptyIcon: 'refresh', emptyTitle: 'Status History — not in this prototype' },
      { id: 'notes', label: 'Release Notes', count: 0, emptyIcon: 'file-text', emptyTitle: 'No notes', emptyHint: 'Notes added by staff will appear here.' },
      { id: 'copyright-docs', label: 'Copyright Documents', count: 0, emptyIcon: 'shield-check', emptyTitle: 'No copyright documents', emptyHint: 'Uploaded licenses and clearance documents will appear here.' },
    ],
  },
]

const currentSection = computed<SectionDef | undefined>(() =>
  sectionGroups.flatMap(g => g.items).find(s => s.id === section.value)
)
</script>
