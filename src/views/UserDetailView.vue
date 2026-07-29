<template>
  <div>
    <!-- User header -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
      <div class="flex items-center gap-3.5 min-w-0">
        <span class="w-11 h-11 rounded-full bg-accent-soft text-accent font-bold text-[15px] flex items-center justify-center flex-shrink-0">
          {{ initials }}
        </span>
        <div class="min-w-0">
          <div class="flex items-center gap-2.5 flex-wrap">
            <h1 class="text-h1 font-satoshi text-ink">{{ user.forename }} {{ user.surname }}</h1>
            <PlanBadge :plan="user.subscription.plan" />
            <StatusBadge variant="success" :label="user.subscription.status" />
          </div>
          <p class="text-[13px] text-subtext mt-0.5">{{ user.email }} · ID {{ user.id }}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <Btn icon="tag">Generate ISRC</Btn>
        <Btn variant="danger" icon="logout">Login as user</Btn>
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
        <!-- ACCOUNT -->
        <div v-if="section === 'account'" class="space-y-4">
          <LiquidTabs :tabs="accountTabs" :active="accountTab" @select="accountTab = $event" />

          <template v-if="accountTab === 'view'">
            <DetailList title="Account">
              <DetailRow label="Forename" :value="user.forename" />
              <DetailRow label="Surname" :value="user.surname" />
              <DetailRow label="Email address">
                <a :href="`mailto:${user.email}`" class="text-info-ink hover:underline">{{ user.email }}</a>
                <Btn size="sm" icon="mail">Email user</Btn>
              </DetailRow>
              <DetailRow label="Organization" :value="user.organization" />
              <DetailRow label="User type" :value="user.userType" />
              <DetailRow label="Email status">
                <StatusBadge variant="success" :label="user.emailStatus" />
              </DetailRow>
              <DetailRow label="Access" :value="user.access" />
              <DetailRow label="Subscription">
                <PlanBadge :plan="user.subscription.plan" />
                <StatusBadge variant="success" :label="user.subscription.status" />
                <span class="text-subtext">Renews {{ user.subscription.renews }}</span>
                <Btn size="sm">View subscription</Btn>
                <Btn size="sm">Manage subscriptions</Btn>
              </DetailRow>
              <DetailRow label="Notifications" :value="user.notifications" />
              <DetailRow label="Country" :value="user.country" />
              <DetailRow label="Region" :value="user.region" />
              <DetailRow label="Sales UI currency" :value="user.currency" />
            </DetailList>

            <DetailList title="Finance & Ownership">
              <DetailRow label="Credit balance" :value="user.creditBalance" />
              <DetailRow label="Ditto commission rate">
                <span class="tabular-nums">{{ user.commissionRate }}</span>
                <Btn size="sm" icon="pen">Edit</Btn>
              </DetailRow>
              <DetailRow label="Advance balance" :value="user.advanceBalance" />
              <DetailRow label="Signed by" :value="user.signedBy" />
              <DetailRow label="Account manager">
                {{ user.accountManager }}
                <Btn size="sm" icon="pen">Edit</Btn>
              </DetailRow>
            </DetailList>

            <DetailList title="Controls & Flags">
              <DetailRow label="Suspected fraud">
                <StatusBadge variant="neutral" label="Not flagged" />
                <Btn size="sm" variant="danger" icon="flag">Flag account</Btn>
              </DetailRow>
              <DetailRow label="Important account">
                <StatusBadge variant="neutral" label="No" />
                <Btn size="sm">Mark as important</Btn>
              </DetailRow>
              <DetailRow label="Sales status">
                <StatusBadge variant="success" :label="user.salesStatus" />
              </DetailRow>
              <DetailRow label="Payouts without active subscription">
                <StatusBadge variant="danger" :label="user.payoutsWithoutSub" />
                <Btn size="sm" variant="ghost">Change</Btn>
              </DetailRow>
              <DetailRow label="Release store restrictions">
                <StatusBadge v-for="s in user.storeRestrictions" :key="s" variant="warning" :label="s" />
                <Btn size="sm">Update</Btn>
              </DetailRow>
              <DetailRow label="Skip release upload limit">
                <StatusBadge variant="neutral" :label="user.skipUploadLimit" />
              </DetailRow>
              <DetailRow label="Skip upload limit (10 days)">
                <StatusBadge variant="neutral" :label="user.skipUploadLimit10Days" />
              </DetailRow>
              <DetailRow label="Created" :value="user.created" />
              <DetailRow label="Modified" :value="user.modified" />
            </DetailList>
          </template>

          <div v-else class="bg-white border border-hairline rounded-card shadow-card">
            <EmptyState
              icon="file-text"
              :title="`${accountTabs.find(t => t.id === accountTab)?.label} — not in this prototype`"
              hint="This tab keeps its current fields; only the styling changes in the rebuild."
            />
          </div>
        </div>

        <!-- RELEASES -->
        <div v-else-if="section === 'releases'" class="space-y-4">
          <DataTable :columns="releaseColumns" :rows="userReleases" row-key="id" title="Releases" subtitle="4 releases on this account">
            <template #toolbar>
              <Btn size="sm" icon="download">Export releases</Btn>
              <Btn size="sm" variant="danger">Clear all licensing</Btn>
            </template>
            <template #cell-release="{ row }">
              <div class="flex items-center gap-3 min-w-0">
                <span class="w-9 h-9 rounded-md bg-lavender flex items-center justify-center flex-shrink-0">
                  <Icon name="music" :size="15" class="text-subtext" />
                </span>
                <div class="min-w-0">
                  <router-link :to="`/releases/${row.id}`" class="font-medium text-ink hover:text-accent transition-colors block truncate">
                    {{ row.title }}
                  </router-link>
                  <p class="text-xs text-subtext truncate">{{ row.artist }} · {{ row.barcode || 'No barcode' }}</p>
                </div>
              </div>
            </template>
            <template #cell-status="{ row }">
              <StatusBadge :variant="releaseStatusTone[row.status]" :label="row.status" />
            </template>
            <template #cell-license="{ row }">
              <StatusBadge :variant="row.license === 'Cleared' ? 'success' : 'danger'" :label="row.license" />
            </template>
            <template #cell-claim="{ row }">
              <StatusBadge :variant="row.claim === 'Claimed' ? 'info' : 'neutral'" :label="row.claim" />
            </template>
            <template #cell-sales="{ row }">
              <StatusBadge :variant="row.sales === 'Frozen' ? 'warning' : 'success'" :label="row.sales" />
            </template>
            <template #cell-actions="{ row }">
              <div class="flex justify-end">
                <Btn size="sm" icon="eye" @click="$router.push(`/releases/${row.id}`)">View</Btn>
              </div>
            </template>
          </DataTable>
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
import { ref, computed } from 'vue'
import StatusBadge from '../components/ui/StatusBadge.vue'
import PlanBadge from '../components/ui/PlanBadge.vue'
import Btn from '../components/ui/Btn.vue'
import Icon from '../components/ui/Icon.vue'
import LiquidTabs from '../components/ui/LiquidTabs.vue'
import DetailList from '../components/ui/DetailList.vue'
import DetailRow from '../components/ui/DetailRow.vue'
import DataTable, { type Column } from '../components/ui/DataTable.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import { userDetail as user, userReleases } from '../data/mock'

const section = ref('account')
const accountTab = ref('view')

const accountTabs = [
  { id: 'view', label: 'View' },
  { id: 'edit', label: 'Edit' },
  { id: 'region', label: 'Change Region' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'kyc', label: 'KYC' },
  { id: 'payout', label: 'Payout Details' },
  { id: 'security', label: 'Security Questions' },
]

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
    label: 'Account',
    items: [{ id: 'account', label: 'Account' }],
  },
  {
    label: 'Content',
    items: [
      { id: 'releases', label: 'Releases', count: 4 },
      { id: 'artists', label: 'Artists', count: 2, emptyIcon: 'users', emptyTitle: 'Artists — not in this prototype' },
      { id: 'videos', label: 'Videos', count: 0, emptyIcon: 'video', emptyTitle: 'No videos', emptyHint: 'This user has not created any video releases.' },
      { id: 'channels', label: 'Channels', count: 1, emptyIcon: 'video', emptyTitle: 'Channels — not in this prototype' },
      { id: 'labels', label: 'Labels', count: 1, emptyIcon: 'tag', emptyTitle: 'Labels — not in this prototype' },
    ],
  },
  {
    label: 'Money',
    items: [
      { id: 'orders', label: 'Orders', emptyIcon: 'cart', emptyTitle: 'Orders — not in this prototype' },
      { id: 'subscriptions', label: 'Previous Subscriptions', emptyIcon: 'refresh', emptyTitle: 'Previous Subscriptions — not in this prototype' },
      { id: 'paypal', label: 'PayPal Billing', emptyIcon: 'banknote', emptyTitle: 'No PayPal subscriptions', emptyHint: 'This user has no PayPal billing agreements.' },
      { id: 'revenue', label: 'User Revenue', emptyIcon: 'banknote', emptyTitle: 'User Revenue — not in this prototype' },
      { id: 'sales', label: 'Sales', emptyIcon: 'banknote', emptyTitle: 'Sales — not in this prototype' },
      { id: 'discounts', label: 'Discounts', emptyIcon: 'percent', emptyTitle: 'No discounts assigned', emptyHint: 'Global discounts may still apply to this account.' },
    ],
  },
  {
    label: 'Compliance',
    items: [
      { id: 'publishing', label: 'Publishing', emptyIcon: 'pen', emptyTitle: 'No publishing works', emptyHint: 'This user has no registered works as owner or collaborator.' },
      { id: 'licensing', label: 'Licensing', emptyIcon: 'shield-check', emptyTitle: 'Licensing — not in this prototype' },
      { id: 'banlog', label: 'Ban Log', emptyIcon: 'ban', emptyTitle: 'Never banned', emptyHint: 'This user has no ban history.' },
      { id: 'suspendlog', label: 'Suspend Log', emptyIcon: 'ban', emptyTitle: 'Never suspended', emptyHint: 'This user has no suspension history.' },
    ],
  },
  {
    label: 'History',
    items: [
      { id: 'notes', label: 'Notes', count: 0, emptyIcon: 'file-text', emptyTitle: 'No notes', emptyHint: 'Notes added by staff will appear here.' },
      { id: 'changehistory', label: 'Account Change History', emptyIcon: 'clock', emptyTitle: 'Account Change History — not in this prototype' },
      { id: 'downloadlog', label: 'Download Log', emptyIcon: 'download', emptyTitle: 'No downloads logged' },
    ],
  },
]

const currentSection = computed<SectionDef | undefined>(() =>
  sectionGroups.flatMap(g => g.items).find(s => s.id === section.value)
)

const initials = computed(() => `${user.forename[0]}${user.surname[0]}`)

const releaseColumns: Column[] = [
  { key: 'release', label: 'Release' },
  { key: 'genres', label: 'Genres' },
  { key: 'status', label: 'Status' },
  { key: 'commission', label: 'Commission' },
  { key: 'license', label: 'License' },
  { key: 'claim', label: 'Copyright' },
  { key: 'sales', label: 'Sales' },
  { key: 'actions', label: '', align: 'right', width: 'w-20' },
]

const releaseStatusTone: Record<string, 'success' | 'warning' | 'danger' | 'neutral'> = {
  'Active': 'success',
  'Incomplete': 'warning',
  'Requested Takedown': 'danger',
}
</script>
