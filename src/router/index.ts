import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import UsersView from '../views/UsersView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import CreditsView from '../views/CreditsView.vue'
import LabelsView from '../views/LabelsView.vue'
import KycStatusView from '../views/KycStatusView.vue'
import BanLogView from '../views/BanLogView.vue'
import SuspectedFraudView from '../views/SuspectedFraudView.vue'
import OrdersView from '../views/OrdersView.vue'
import PaypalPaymentsView from '../views/PaypalPaymentsView.vue'
import SubscriptionsView from '../views/SubscriptionsView.vue'
import CommissionsView from '../views/CommissionsView.vue'
import ApprovalQueueView from '../views/ApprovalQueueView.vue'
import LyricsQcView from '../views/qc/LyricsQcView.vue'
import LyricsQcPlusView from '../views/qc/LyricsQcPlusView.vue'
import IngestionQueueView from '../views/qc/IngestionQueueView.vue'
import IngestionQueuePlusView from '../views/qc/IngestionQueuePlusView.vue'
import QcLicensingView from '../views/qc/QcLicensingView.vue'
import QcLicensingRlsView from '../views/qc/QcLicensingRlsView.vue'
import VevoIngestionView from '../views/vevo/VevoIngestionView.vue'
import VevoRejectedView from '../views/vevo/VevoRejectedView.vue'
import VevoChannelsView from '../views/vevo/VevoChannelsView.vue'
import VevoVideosView from '../views/vevo/VevoVideosView.vue'
import VevoNameUpdateView from '../views/vevo/VevoNameUpdateView.vue'
import PublishingWorksView from '../views/publishing/PublishingWorksView.vue'
import PublishingNameUpdateView from '../views/publishing/PublishingNameUpdateView.vue'
import PublishingIpiUpdateView from '../views/publishing/PublishingIpiUpdateView.vue'
import ReleasesView from '../views/ReleasesView.vue'
import ReleaseDetailView from '../views/ReleaseDetailView.vue'
import ItunesExpressView from '../views/ItunesExpressView.vue'
import BeatportView from '../views/BeatportView.vue'
import YoutubeOacView from '../views/YoutubeOacView.vue'
import TakedownsView from '../views/TakedownsView.vue'
import SpotifyArtistNamesView from '../views/SpotifyArtistNamesView.vue'
import CannedResponsesView from '../views/CannedResponsesView.vue'
import StoresView from '../views/StoresView.vue'
import PendingServicesView from '../views/PendingServicesView.vue'
import PromoPurchasesView from '../views/PromoPurchasesView.vue'
import DiscountsView from '../views/DiscountsView.vue'
import YoutubeSalesView from '../views/YoutubeSalesView.vue'
import StoreRoyaltiesView from '../views/StoreRoyaltiesView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: DashboardView, meta: { title: 'Dashboard' } },

  // Customers & Staff
  { path: '/users', component: UsersView, meta: { title: 'Users' } },
  { path: '/users/:id', component: UserDetailView, meta: { title: 'User', detail: 'Maya Linden' } },
  { path: '/credits', component: CreditsView, meta: { title: 'Credits' } },
  { path: '/labels', component: LabelsView, meta: { title: 'Labels' } },
  { path: '/kyc-status', component: KycStatusView, meta: { title: 'KYC Status' } },
  { path: '/ban-log', component: BanLogView, meta: { title: 'Ban Log' } },
  { path: '/suspected-fraud', component: SuspectedFraudView, meta: { title: 'Suspected Fraud' } },

  // Orders & Payments
  { path: '/orders', component: OrdersView, meta: { title: 'Orders' } },
  { path: '/paypal-payments', component: PaypalPaymentsView, meta: { title: 'PayPal Payments' } },
  { path: '/subscriptions', component: SubscriptionsView, meta: { title: 'Subscriptions' } },

  // Payouts
  { path: '/commissions', component: CommissionsView, meta: { title: 'Commissions' } },
  { path: '/approval-queue', component: ApprovalQueueView, meta: { title: 'Approval Queue' } },

  // Idol / QC
  { path: '/qc/lyrics', component: LyricsQcView, meta: { title: 'Lyrics QC' } },
  { path: '/qc/lyrics-ditto-plus', component: LyricsQcPlusView, meta: { title: 'Ditto+ Lyrics QC' } },
  { path: '/qc/ingestion-queue', component: IngestionQueueView, meta: { title: 'Ingestion Queue' } },
  { path: '/qc/ingestion-ditto-plus', component: IngestionQueuePlusView, meta: { title: 'Ditto+ Ingestion Queue' } },
  { path: '/qc/licensing', component: QcLicensingView, meta: { title: 'Licensing' } },
  { path: '/qc/licensing-rls', component: QcLicensingRlsView, meta: { title: 'Licensing Ditto+ RLS' } },

  // Vevo / QC
  { path: '/vevo/ingestion-queue', component: VevoIngestionView, meta: { title: 'VEVO Ingestion Queue' } },
  { path: '/vevo/rejected-queue', component: VevoRejectedView, meta: { title: 'VEVO Rejected Queue' } },
  { path: '/vevo/channels', component: VevoChannelsView, meta: { title: 'VEVO Channels' } },
  { path: '/vevo/videos', component: VevoVideosView, meta: { title: 'VEVO Videos' } },
  { path: '/vevo/channel-name-update', component: VevoNameUpdateView, meta: { title: 'Channel Name Update' } },

  // Publishing / QC
  { path: '/publishing/works', component: PublishingWorksView, meta: { title: 'All Works' } },
  { path: '/publishing/name-update', component: PublishingNameUpdateView, meta: { title: 'Name Update' } },
  { path: '/publishing/ipi-cae-update', component: PublishingIpiUpdateView, meta: { title: 'IPI/CAE Numbers Update' } },

  // Music Releases
  { path: '/releases', component: ReleasesView, meta: { title: 'Music Releases' } },
  { path: '/releases/:id', component: ReleaseDetailView, meta: { title: 'Release', detail: 'El camión de las cinco' } },
  { path: '/itunes-express', component: ItunesExpressView, meta: { title: 'iTunes Express' } },
  { path: '/beatport', component: BeatportView, meta: { title: 'Beatport' } },
  { path: '/youtube-oac', component: YoutubeOacView, meta: { title: 'YouTube Official Artist Channel' } },
  { path: '/takedowns', component: TakedownsView, meta: { title: 'Takedowns' } },
  { path: '/spotify-artist-names', component: SpotifyArtistNamesView, meta: { title: 'Spotify Artist Names' } },
  { path: '/canned-responses', component: CannedResponsesView, meta: { title: 'Canned Responses' } },

  // Products & Services
  { path: '/stores', component: StoresView, meta: { title: 'Stores' } },
  { path: '/pending-services', component: PendingServicesView, meta: { title: 'Pending Services' } },
  { path: '/promo-purchases', component: PromoPurchasesView, meta: { title: 'Promo Purchases' } },
  { path: '/discounts', component: DiscountsView, meta: { title: 'Discounts' } },
  { path: '/youtube-sales', component: YoutubeSalesView, meta: { title: 'YouTube Sales' } },
  { path: '/store-royalties', component: StoreRoyaltiesView, meta: { title: 'Store Royalties' } },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
