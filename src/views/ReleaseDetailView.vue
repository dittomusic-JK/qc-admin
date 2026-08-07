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
            <StatusBadge variant="danger" label="QC Not Passed" />
          </div>
          <p class="text-[13px] text-subtext mt-0.5">{{ release.artist }} · {{ release.barcode }} · ID {{ release.id }}</p>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <Btn icon="clipboard-check">Check Idol validation</Btn>
        <Btn icon="upload">Save &amp; update Idol</Btn>
        <Btn icon="copy">Duplicate release</Btn>
        <Btn variant="danger" icon="flag" :href="legacyAdmin.fraudFlag(1545390)">Flag account</Btn>
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

          <!-- Main Details -->
          <div v-if="detailTab === 'main'" class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start">
            <div class="space-y-4 min-w-0">
              <DetailList title="Release">
                <DetailRow label="Release type" value="Single" />
                <DetailRow label="Title" :value="release.title" />
                <DetailRow label="Artist" :value="release.artist" />
                <DetailRow label="Label" :value="release.label" />
                <DetailRow label="Primary genre" :value="release.primaryGenre" />
                <DetailRow label="Secondary genre" :value="release.secondaryGenre" />
                <DetailRow label="Beatport genres">
                  <span class="text-prompt">Not selected</span>
                </DetailRow>
                <DetailRow label="Language" value="English" />
                <DetailRow label="Copyright holder" :value="release.artist" />
                <DetailRow label="Copyright year" :value="release.copyrightYear" />
                <DetailRow label="Production" :value="release.artist" />
                <DetailRow label="Production year" :value="release.productionYear" />
                <DetailRow label="Various artists" value="This release is not a compilation" />
                <DetailRow label="Price band" :value="release.priceBand" />
                <DetailRow label="UPC/EAN" :value="release.barcode" />
                <DetailRow label="Release date" :value="release.releaseDate" />
                <DetailRow label="Release time">
                  <span class="text-prompt">Not selected</span>
                </DetailRow>
                <DetailRow label="Pre-order date">
                  <span class="text-prompt">—</span>
                  <span class="text-xs text-subtext">Pre-release option is not selected</span>
                </DetailRow>
                <DetailRow label="Original release date">
                  <span class="text-prompt">—</span>
                </DetailRow>
                <DetailRow label="Explicit">
                  <StatusBadge variant="neutral" label="No" />
                </DetailRow>
              </DetailList>

              <DetailList title="Delivery & QC">
                <DetailRow label="QC pass">
                  <StatusBadge variant="danger" label="Not Passed" />
                  <Btn size="sm">Mark as urgent</Btn>
                </DetailRow>
                <DetailRow label="IDOL status">
                  <StatusBadge variant="warning" label="Undelivered" />
                </DetailRow>
                <DetailRow label="IDOL actions">
                  <div class="w-52">
                    <SelectField :options="idolActions" model-value="Please select action" />
                  </div>
                </DetailRow>
                <DetailRow label="License status">
                  <StatusBadge variant="danger" label="Not Cleared" />
                  <span class="text-xs text-subtext">0 uncorroborated copyright docs</span>
                </DetailRow>
                <DetailRow label="Contains covers">
                  <StatusBadge variant="success" label="No Covers" />
                  <Btn size="sm" variant="ghost">Change</Btn>
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
                <DetailRow label="Change status">
                  <div class="w-52">
                    <SelectField :options="releaseStatuses" v-model="releaseStatus" />
                  </div>
                </DetailRow>
              </DetailList>

              <DetailList title="Owner">
                <DetailRow label="User">
                  <a href="mailto:khiba.mood@example.com" class="text-info-ink hover:underline">khiba.mood@example.com</a>
                  <Btn size="sm" icon="external" :href="legacyAdmin.user(1545390)">View account</Btn>
                </DetailRow>
                <DetailRow label="Important release">
                  <StatusBadge variant="neutral" label="No" />
                  <Btn size="sm">Mark as important</Btn>
                </DetailRow>
                <DetailRow label="Suspected fraud">
                  <StatusBadge variant="neutral" label="Not flagged" />
                  <Btn size="sm" variant="danger" icon="flag" :href="legacyAdmin.fraudFlag(1545390)">Flag account</Btn>
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
                <Btn size="sm" block variant="danger">Unassign barcode &amp; mark used</Btn>
                <Btn size="sm" block icon="download">Export metadata CSV</Btn>
                <Btn size="sm" block icon="download">Download artwork</Btn>
                <Btn size="sm" block variant="danger" icon="ban">Blacklist all tracks</Btn>
              </div>

              <div class="bg-white border border-hairline rounded-card shadow-card p-4 space-y-2">
                <h2 class="text-h3 text-ink mb-1">Quick deselect</h2>
                <CheckField v-for="(v, k) in deselects" :key="k" :label="k" :model-value="v" @update:model-value="deselects[k] = $event" />
                <div class="pt-1">
                  <Btn size="sm" variant="primary">Update</Btn>
                </div>
                <p class="text-xs text-subtext pt-1">Updating regional restriction statuses takes time to process.</p>
              </div>
            </div>
          </div>

          <!-- Artist(s) -->
          <div v-else-if="detailTab === 'artists'" class="bg-white border border-hairline rounded-card shadow-card">
            <div class="px-4 py-3 border-b border-hairline">
              <h2 class="text-h3 text-ink">Release Artists</h2>
            </div>
            <div class="divide-y divide-hairline">
              <div v-for="a in releaseArtists" :key="a.name" class="flex items-center justify-between px-4 py-3">
                <span class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full bg-accent-soft text-accent text-xs font-bold flex items-center justify-center">{{ a.name[0] }}</span>
                  <a href="#" class="text-[13px] font-medium text-ink hover:text-accent transition-colors">{{ a.name }}</a>
                </span>
                <StatusBadge :variant="a.type === 'Primary' ? 'accent' : 'neutral'" :label="a.type" />
              </div>
            </div>
            <div class="px-4 py-3 border-t border-hairline flex items-center gap-3">
              <p class="text-xs text-subtext">Need to amend the artists listed on this release?</p>
              <Btn size="sm" icon="external">Repair in customer's dashboard</Btn>
            </div>
          </div>

          <!-- Territories -->
          <div v-else-if="detailTab === 'territories'" class="bg-white border border-hairline rounded-card shadow-card p-5">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 class="text-h3 text-ink">Territories</h2>
                <p class="text-[13px] text-subtext mt-0.5">Currently selected: <span class="font-medium text-ink">All territories</span></p>
              </div>
              <Btn icon="filter">Select territories</Btn>
            </div>
            <div class="flex items-center gap-5 mt-4 pt-4 border-t border-hairline">
              <span class="flex items-center gap-2 text-xs text-subtext">
                <span class="w-3 h-3 rounded-sm bg-accent"></span> Included · 241
              </span>
              <span class="flex items-center gap-2 text-xs text-subtext">
                <span class="w-3 h-3 rounded-sm bg-lavender border border-hairline-strong"></span> Excluded · 0
              </span>
            </div>
          </div>

          <!-- Label -->
          <div v-else-if="detailTab === 'label'" class="max-w-lg">
            <DetailList title="Label">
              <DetailRow label="Name" :value="release.label" />
              <DetailRow label="Artwork">
                <span class="w-10 h-10 rounded-md bg-lavender flex items-center justify-center">
                  <Icon name="tag" :size="14" class="text-subtext" />
                </span>
              </DetailRow>
              <DetailRow label="Beatport primary genre">
                <div class="w-52"><SelectField :options="['— Select Beatport genre —', 'House', 'Techno', 'Trance']" model-value="— Select Beatport genre —" /></div>
              </DetailRow>
              <DetailRow label="Beatport secondary genre">
                <div class="w-52"><SelectField :options="['— Select Beatport genre —', 'House', 'Techno', 'Trance']" model-value="— Select Beatport genre —" /></div>
              </DetailRow>
            </DetailList>
            <div class="mt-3">
              <Btn variant="primary">Update label details</Btn>
            </div>
          </div>

          <!-- Canned Responses -->
          <div v-else-if="detailTab === 'canned'" class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <p class="text-[13px] text-subtext">Select all that apply, then send as one email to the customer.</p>
              <Btn size="sm" icon="mail" @click="$router.push('/canned-responses')">Open canned response management</Btn>
            </div>
            <div v-for="cat in cannedCategories" :key="cat.name" class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
              <div class="px-4 py-3 border-b border-hairline">
                <h2 class="text-h3 text-ink">{{ cat.name }}</h2>
              </div>
              <div class="divide-y divide-hairline">
                <label v-for="(r, i) in cat.responses" :key="i" class="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-lavender-soft/60 transition-colors">
                  <input type="checkbox" v-model="r.selected" class="mt-0.5 accent-[#5f1fff] w-4 h-4" />
                  <span class="text-[13px] text-ink leading-relaxed">{{ r.text }}</span>
                </label>
              </div>
            </div>
            <Btn variant="primary" icon="mail">Send email</Btn>
          </div>
        </div>

        <!-- TRACKS -->
        <div v-else-if="section === 'tracks'" class="space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h2 class="text-h2 text-ink">Tracks</h2>
            <div class="flex items-center gap-2">
              <Btn size="sm" icon="plus">Add tracks</Btn>
              <Btn size="sm" variant="danger" icon="minus">Remove tracks</Btn>
            </div>
          </div>

          <div v-for="t in releaseTracks" :key="t.number" class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-hairline">
              <div class="flex items-center gap-3 min-w-0">
                <span class="w-7 h-7 rounded-md bg-lavender text-subtext text-xs font-bold flex items-center justify-center flex-shrink-0 tabular-nums">{{ t.number }}</span>
                <div class="min-w-0">
                  <p class="text-[13px] font-bold text-ink truncate">
                    {{ t.title }}
                    <span v-if="t.mixVersion" class="font-normal text-subtext">({{ t.mixVersion }})</span>
                  </p>
                  <p class="text-xs text-subtext">ISRC {{ t.isrc }} · {{ t.streams.toLocaleString() }} streams</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="toggleTrack(t.number)"
                  :aria-label="playingTrack === t.number && isPlaying ? `Pause ${t.title}` : `Play ${t.title}`"
                  :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
                    playingTrack === t.number
                      ? 'bg-accent text-white'
                      : 'bg-white text-ink border border-hairline-strong hover:bg-lavender-soft hover:border-prompt'
                  ]"
                >
                  <Icon :name="playingTrack === t.number && isPlaying ? 'pause' : 'play'" :size="12" />
                </button>
                <Btn size="sm" icon="download">Download file</Btn>
                <Btn size="sm" icon="upload">Replace file</Btn>
                <Btn size="sm" variant="primary">Save changes</Btn>
                <Btn size="sm" variant="danger" icon="ban">Blacklist</Btn>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
              <div class="px-4 py-2.5">
                <p class="text-2xs uppercase text-prompt">Explicit</p>
                <StatusBadge :variant="t.explicit === 'Explicit' ? 'warning' : 'neutral'" :label="t.explicit" class="mt-1" />
              </div>
              <div class="px-4 py-2.5">
                <p class="text-2xs uppercase text-prompt">Language</p>
                <p class="text-[13px] text-ink mt-1">{{ t.language }}</p>
                <p :class="['text-xs mt-0.5', t.aiLanguageMatch ? 'text-success-ink' : 'text-warning-ink']">
                  {{ t.aiLanguageMatch ? 'AI: audio matches the chosen language' : 'AI: audio may not match the chosen language' }}
                </p>
              </div>
              <div class="px-4 py-2.5">
                <p class="text-2xs uppercase text-prompt">AI generated</p>
                <StatusBadge variant="neutral" :label="t.aiGenerated ? 'Yes' : 'No'" class="mt-1" />
              </div>
              <div class="px-4 py-2.5">
                <p class="text-2xs uppercase text-prompt">Delivery</p>
                <p class="text-[13px] text-ink mt-1">All stores</p>
                <p class="text-xs text-subtext mt-0.5 truncate">{{ t.file }}</p>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <Btn size="sm" icon="pen">Edit other details</Btn>
            <Btn size="sm" icon="upload">Save meta to Idol</Btn>
          </div>
        </div>

        <!-- STORES -->
        <div v-else-if="section === 'stores'" class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
          <div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-hairline">
            <h2 class="text-h3 text-ink">Selected stores <span class="text-subtext font-normal">· {{ releaseSelectedStores.length }}</span></h2>
            <div class="flex items-center gap-2">
              <Btn size="sm" icon="plus">Add stores</Btn>
              <Btn size="sm" variant="danger" icon="minus">Remove stores</Btn>
            </div>
          </div>
          <div class="divide-y divide-hairline">
            <label v-for="s in releaseSelectedStores" :key="s" class="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-lavender-soft/60 transition-colors">
              <input type="checkbox" class="accent-[#5f1fff] w-4 h-4" />
              <span class="w-8 h-8 rounded-md bg-lavender text-subtext text-xs font-bold flex items-center justify-center">{{ s[0] }}</span>
              <span class="text-[13px] font-medium text-ink flex-1">{{ s }}</span>
              <Btn size="sm" variant="ghost" icon="gear"><span class="sr-only">Store settings</span></Btn>
            </label>
          </div>
        </div>

        <!-- SERVICES -->
        <div v-else-if="section === 'services'" class="bg-white border border-hairline rounded-card shadow-card">
          <EmptyState icon="gear" title="No services on this release" hint="Chart registration, YouTube claims and other add-ons will appear here.">
            <Btn size="sm" variant="primary" icon="plus">Add services</Btn>
          </EmptyState>
        </div>

        <!-- SALES -->
        <div v-else-if="section === 'sales'">
          <DataTable :columns="salesColumns" :rows="releaseSales" title="Sales summary" subtitle="Lifetime totals by store">
            <template #cell-streams="{ row }">
              <span class="tabular-nums">{{ row.streams.toLocaleString() }}</span>
            </template>
            <template #cell-downloads="{ row }">
              <span class="tabular-nums">{{ row.downloads.toLocaleString() }}</span>
            </template>
          </DataTable>
        </div>

        <!-- DELIVERIES -->
        <div v-else-if="section === 'deliveries'" class="space-y-4">
          <div v-for="d in releaseDeliveries" :key="d.store" class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div class="flex items-center gap-3 px-4 py-3 border-b border-hairline">
              <span class="w-8 h-8 rounded-md bg-lavender text-subtext text-xs font-bold flex items-center justify-center">{{ d.store[0] }}</span>
              <h2 class="text-h3 text-ink flex-1">{{ d.store }}</h2>
              <StatusBadge :variant="d.online ? 'success' : 'danger'" :label="d.online ? 'Online' : 'Offline'" />
            </div>
            <table class="w-full text-table">
              <thead>
                <tr class="border-b border-hairline">
                  <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Type</th>
                  <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Status</th>
                  <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Created at</th>
                  <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Sent at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2.5 text-ink">{{ d.type }}</td>
                  <td class="px-4 py-2.5">
                    <StatusBadge :variant="deliveryTone[d.status]" :label="d.status" />
                  </td>
                  <td class="px-4 py-2.5 text-ink">{{ d.createdAt }}</td>
                  <td class="px-4 py-2.5" :class="d.sentAt ? 'text-ink' : 'text-prompt'">{{ d.sentAt || '—' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- IDOL INGESTION LOG -->
        <div v-else-if="section === 'idol-log'">
          <DataTable :columns="ingestionColumns" :rows="ingestionLog" title="IDOL Ingestion Log">
            <template #cell-status="{ row }">
              <StatusBadge :variant="row.status === 'success' ? 'success' : 'danger'" :label="row.status" />
            </template>
          </DataTable>
        </div>

        <!-- QC LOG -->
        <div v-else-if="section === 'qc-log'">
          <DataTable :columns="qcLogColumns" :rows="qcLog" title="QC Logs">
            <template #cell-status="{ row }">
              <StatusBadge :variant="row.status.includes('Pass') ? 'success' : 'danger'" :label="row.status" />
            </template>
          </DataTable>
        </div>

        <!-- IDOL ACTION STATUS LOG -->
        <div v-else-if="section === 'idol-action-log'" class="bg-white border border-hairline rounded-card shadow-card">
          <EmptyState icon="clock" title="No IDOL action status logs" hint="IDOL delivery actions and their outcomes will appear here." />
        </div>

        <!-- STATUS HISTORY -->
        <div v-else-if="section === 'status-history'">
          <DataTable :columns="statusHistoryColumns" :rows="statusHistory" title="Status History">
            <template #cell-status="{ row }">
              <StatusBadge :variant="statusTone[row.status] ?? 'neutral'" :label="row.status" />
            </template>
          </DataTable>
        </div>

        <!-- COPYRIGHT DOCUMENTS -->
        <div v-else-if="section === 'copyright-docs'" class="bg-white border border-hairline rounded-card shadow-card">
          <EmptyState icon="shield-check" title="No copyright documents" hint="Uploaded licenses and clearance documents will appear here.">
            <Btn size="sm" icon="upload">Upload document</Btn>
          </EmptyState>
        </div>

        <!-- DITTO PLUS – RLS -->
        <div v-else-if="section === 'rls'" class="space-y-4">
          <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div class="flex items-center justify-between px-4 py-3 border-b border-hairline">
              <div>
                <h2 class="text-h3 text-ink">Release commission rate</h2>
                <p class="text-xs text-subtext mt-0.5">An end date is optional and can be left blank.</p>
              </div>
              <Btn size="sm" variant="primary" icon="plus">Add rate</Btn>
            </div>
            <table class="w-full text-table">
              <thead>
                <tr class="border-b border-hairline">
                  <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Rate (%)</th>
                  <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Starts at</th>
                  <th class="px-4 py-2 text-2xs uppercase text-subtext text-left">Ends at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3"><EmptyState title="No commission rates set" hint="This release inherits the account's default commission." /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
            <div class="flex items-center justify-between px-4 py-3 border-b border-hairline">
              <h2 class="text-h3 text-ink">Release advance balance</h2>
              <Btn size="sm" variant="primary" icon="plus">Add advance</Btn>
            </div>
            <EmptyState title="No advances on this release" hint="Release-level advances and their recoupment will appear here." />
          </div>
        </div>

        <!-- RELEASE NOTES -->
        <div v-else-if="section === 'notes'" class="space-y-4">
          <div class="bg-white border border-hairline rounded-card shadow-card p-4 space-y-3">
            <h2 class="text-h3 text-ink">Add a note</h2>
            <TextAreaField v-model="noteDraft" placeholder="Internal note about this release…" :rows="3" />
            <Btn size="sm" variant="primary" icon="plus">Add note</Btn>
          </div>
          <div class="bg-white border border-hairline rounded-card shadow-card">
            <EmptyState icon="file-text" title="No notes found for this release" hint="Notes added by staff will appear here with author and time." />
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTrack" class="h-20"></div>
    <PlayerBar
      ref="playerRef"
      :track="activeTrack"
      @close="playingTrack = null"
      @playing="isPlaying = $event"
      @previous="stepTrack(-1)"
      @next="stepTrack(1)"
    />
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
import SelectField from '../components/ui/SelectField.vue'
import TextAreaField from '../components/ui/TextAreaField.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import PlayerBar, { type PlayerTrack } from '../components/ui/PlayerBar.vue'
import { legacyAdmin } from '../data/legacy'
import {
  releaseDetail as release,
  releaseTracks,
  releaseArtists,
  releaseDeliveries,
  releaseSelectedStores,
  releaseSales,
  ingestionLog,
  qcLog,
  statusHistory,
} from '../data/mockReleases'

const section = ref('details')
const detailTab = ref('main')
const noteDraft = ref('')

const detailTabs = [
  { id: 'main', label: 'Main Details' },
  { id: 'artists', label: 'Artists' },
  { id: 'territories', label: 'Territories' },
  { id: 'label', label: 'Label' },
  { id: 'canned', label: 'Canned Responses' },
]

// Full IDOL action set observed on the live admin
const idolActions = [
  'Please select action',
  'Awaiting Ingestion',
  'Update Full Release',
  'Take Down',
  'Required redelivery',
]

// Full legacy status set from the live admin's Change Status dropdown
const releaseStatuses = [
  'Partially Completed',
  'Processing',
  'Sent to Stores',
  'Requested Takedown',
  'Removed',
  'Inactive',
  'Active',
  'Incomplete',
  'Approved',
  'Requires Repair',
  'External',
]
const releaseStatus = ref('Incomplete')

const statusTone: Record<string, 'success' | 'warning' | 'danger' | 'info' | 'neutral'> = {
  'Active': 'success',
  'Approved': 'success',
  'Sent to Stores': 'success',
  'Processing': 'info',
  'Partially Completed': 'warning',
  'Incomplete': 'warning',
  'Requires Repair': 'warning',
  'Requested Takedown': 'danger',
  'Removed': 'danger',
  'Inactive': 'neutral',
  'External': 'neutral',
}

const deliveryTone: Record<string, 'success' | 'warning' | 'danger'> = {
  sent: 'success',
  waiting: 'warning',
  failed: 'danger',
}

const deselects = reactive<Record<string, boolean>>({
  'AI generated (low effort)': false,
  'Content ID': false,
  'ASMR / nature sounds': false,
  'Cover song': false,
  'Cover song license': false,
})

const cannedCategories = reactive([
  {
    name: 'Artwork',
    responses: [
      { selected: false, text: 'Your release artwork contains additional or redundant text, which is not allowed by digital music platforms. Artwork text should only include the release title, artist names and/or label name, and these must exactly match your metadata.' },
      { selected: false, text: 'The release title, artist name(s) and/or label name on your artwork does not match your metadata. These must match exactly, as mismatches can lead to rejection by some platforms.' },
      { selected: false, text: 'The artist name(s) on your artwork do not match the artists listed in your release metadata.' },
    ],
  },
  {
    name: 'Audio',
    responses: [
      { selected: false, text: 'One or more tracks appear to contain third-party content that requires a license. Please upload proof of license under Copyright Documents.' },
      { selected: false, text: 'The audio quality of one or more tracks is below the minimum delivery standard. Please replace the files with masters of at least 16-bit / 44.1 kHz.' },
    ],
  },
])

// Sales
const salesColumns: Column[] = [
  { key: 'store', label: 'Store' },
  { key: 'streams', label: 'Streams', align: 'right' },
  { key: 'downloads', label: 'Downloads', align: 'right' },
  { key: 'revenue', label: 'Revenue', align: 'right' },
]

// Logs
const ingestionColumns: Column[] = [
  { key: 'status', label: 'Status', width: 'w-32' },
  { key: 'message', label: 'Message' },
  { key: 'time', label: 'Time', width: 'w-56' },
]
const qcLogColumns: Column[] = [
  { key: 'user', label: 'User' },
  { key: 'status', label: 'Status' },
  { key: 'track', label: 'Track Title' },
  { key: 'date', label: 'Date' },
]
const statusHistoryColumns: Column[] = [
  { key: 'status', label: 'Status' },
  { key: 'by', label: 'Changed by' },
  { key: 'date', label: 'Date' },
]

// Track preview via the shared PlayerBar
const playingTrack = ref<number | null>(null)
const isPlaying = ref(false)
const playerRef = ref<InstanceType<typeof PlayerBar> | null>(null)

const activeTrack = computed<PlayerTrack | null>(() => {
  const t = releaseTracks.find(x => x.number === playingTrack.value)
  if (!t) return null
  return { title: t.title, artist: release.artist, duration: t.duration }
})

const toggleTrack = (num: number) => {
  if (playingTrack.value !== num) {
    playingTrack.value = num
  } else if (isPlaying.value) {
    playerRef.value?.pause()
  } else {
    playerRef.value?.play()
  }
}

const stepTrack = (dir: 1 | -1) => {
  const i = releaseTracks.findIndex(t => t.number === playingTrack.value)
  if (i === -1) return
  const next = releaseTracks[(i + dir + releaseTracks.length) % releaseTracks.length]
  playingTrack.value = next.number
}

interface SectionDef {
  id: string
  label: string
  count?: number
}

const sectionGroups: { label: string; items: SectionDef[] }[] = [
  {
    label: 'Release',
    items: [
      { id: 'details', label: 'Release Details' },
      { id: 'rls', label: 'Ditto Plus – RLS' },
    ],
  },
  {
    label: 'Content',
    items: [
      { id: 'tracks', label: 'Tracks', count: releaseTracks.length },
      { id: 'stores', label: 'Stores', count: releaseSelectedStores.length },
      { id: 'services', label: 'Services', count: 0 },
      { id: 'deliveries', label: 'Deliveries' },
    ],
  },
  {
    label: 'Money',
    items: [
      { id: 'sales', label: 'Sales' },
    ],
  },
  {
    label: 'Logs',
    items: [
      { id: 'idol-log', label: 'Idol Ingestion Log' },
      { id: 'qc-log', label: 'QC Log' },
      { id: 'idol-action-log', label: 'Idol Action Status Log' },
      { id: 'status-history', label: 'Status History' },
      { id: 'notes', label: 'Release Notes', count: 0 },
      { id: 'copyright-docs', label: 'Copyright Documents', count: 0 },
    ],
  },
]
</script>
