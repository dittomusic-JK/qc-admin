import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import QcReviewView from '../views/qc/QcReviewView.vue'
import ReviewerProfileView from '../views/qc/ReviewerProfileView.vue'
import LyricsQcView from '../views/qc/LyricsQcView.vue'
import LyricsQcPlusView from '../views/qc/LyricsQcPlusView.vue'
import IngestionQueueView from '../views/qc/IngestionQueueView.vue'
import IngestionQueuePlusView from '../views/qc/IngestionQueuePlusView.vue'
import QcLicensingView from '../views/qc/QcLicensingView.vue'
import QcLicensingRlsView from '../views/qc/QcLicensingRlsView.vue'
import PublishingWorksView from '../views/publishing/PublishingWorksView.vue'
import PublishingNameUpdateView from '../views/publishing/PublishingNameUpdateView.vue'
import PublishingIpiUpdateView from '../views/publishing/PublishingIpiUpdateView.vue'
import ReleasesView from '../views/ReleasesView.vue'
import ReleaseDetailView from '../views/ReleaseDetailView.vue'
import CannedResponsesView from '../views/CannedResponsesView.vue'

// Content QC only. Accounts, orders, payouts, products, Vevo/video and sync
// stay in the legacy admin — see data/legacy.ts for the outbound links.
const routes: RouteRecordRaw[] = [
  { path: '/', component: DashboardView, meta: { title: 'Dashboard' } },

  // Release QC
  { path: '/qc/review', component: QcReviewView, meta: { title: 'QC Review' } },
  { path: '/qc/team/:id', component: ReviewerProfileView, meta: { title: 'Reviewer' } },
  { path: '/qc/ingestion-queue', component: IngestionQueueView, meta: { title: 'Ingestion Queue' } },
  { path: '/qc/ingestion-ditto-plus', component: IngestionQueuePlusView, meta: { title: 'Ditto+ Ingestion Queue' } },
  { path: '/qc/lyrics', component: LyricsQcView, meta: { title: 'Lyrics QC' } },
  { path: '/qc/lyrics-ditto-plus', component: LyricsQcPlusView, meta: { title: 'Ditto+ Lyrics QC' } },
  { path: '/qc/licensing', component: QcLicensingView, meta: { title: 'Licensing' } },
  { path: '/qc/licensing-rls', component: QcLicensingRlsView, meta: { title: 'Licensing Ditto+ RLS' } },

  // Publishing / QC
  { path: '/publishing/works', component: PublishingWorksView, meta: { title: 'All Works' } },
  { path: '/publishing/name-update', component: PublishingNameUpdateView, meta: { title: 'Name Update' } },
  { path: '/publishing/ipi-cae-update', component: PublishingIpiUpdateView, meta: { title: 'IPI/CAE Numbers Update' } },

  // Releases (QC needs to open and look up releases)
  { path: '/releases', component: ReleasesView, meta: { title: 'Find a release' } },
  { path: '/releases/:id', component: ReleaseDetailView, meta: { title: 'Release', detail: 'El camión de las cinco' } },
  { path: '/canned-responses', component: CannedResponsesView, meta: { title: 'Canned Responses' } },

  // Out-of-scope legacy bookmarks land back on the QC dashboard
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
