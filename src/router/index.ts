import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PlaceholderView from '../views/PlaceholderView.vue'

// Every legacy admin URL has a route here from day one; screens graduate from
// PlaceholderView to a real view as they are rebuilt.
const placeholder = (path: string, title: string): RouteRecordRaw => ({
  path,
  component: PlaceholderView,
  meta: { title },
})

const routes: RouteRecordRaw[] = [
  { path: '/', component: DashboardView, meta: { title: 'Dashboard' } },

  // Customers & Staff
  placeholder('/users', 'Users'),
  placeholder('/users/:id', 'User'),
  placeholder('/credits', 'Credits'),
  placeholder('/labels', 'Labels'),
  placeholder('/kyc-status', 'KYC Status'),
  placeholder('/ban-log', 'Ban Log'),
  placeholder('/suspected-fraud', 'Suspected Fraud'),

  // Orders & Payments
  placeholder('/orders', 'Orders'),
  placeholder('/paypal-payments', 'PayPal Payments'),
  placeholder('/subscriptions', 'Subscriptions'),

  // Payouts
  placeholder('/commissions', 'Commissions'),
  placeholder('/approval-queue', 'Approval Queue'),

  // Idol / QC
  placeholder('/qc/lyrics', 'Lyrics QC'),
  placeholder('/qc/lyrics-ditto-plus', 'Ditto+ Lyrics QC'),
  placeholder('/qc/ingestion-queue', 'Ingestion Queue'),
  placeholder('/qc/ingestion-ditto-plus', 'Ditto+ Ingestion Queue'),
  placeholder('/qc/licensing', 'Licensing'),
  placeholder('/qc/licensing-rls', 'Licensing Ditto+ RLS'),

  // Vevo / QC
  placeholder('/vevo/ingestion-queue', 'VEVO Ingestion Queue'),
  placeholder('/vevo/rejected-queue', 'VEVO Rejected Queue'),
  placeholder('/vevo/channels', 'VEVO Channels'),
  placeholder('/vevo/videos', 'VEVO Videos'),
  placeholder('/vevo/channel-name-update', 'Channel Name Update'),

  // Publishing / QC
  placeholder('/publishing/works', 'All Works'),
  placeholder('/publishing/name-update', 'Name Update'),
  placeholder('/publishing/ipi-cae-update', 'IPI/CAE Numbers Update'),

  // Music Releases
  placeholder('/releases', 'Music Releases'),
  placeholder('/releases/:id', 'Release'),
  placeholder('/itunes-express', 'iTunes Express'),
  placeholder('/beatport', 'Beatport'),
  placeholder('/youtube-oac', 'YouTube Official Artist Channel'),
  placeholder('/takedowns', 'Takedowns'),
  placeholder('/spotify-artist-names', 'Spotify Artist Names'),
  placeholder('/canned-responses', 'Canned Responses'),

  // Products & Services
  placeholder('/stores', 'Stores'),
  placeholder('/pending-services', 'Pending Services'),
  placeholder('/promo-purchases', 'Promo Purchases'),
  placeholder('/discounts', 'Discounts'),
  placeholder('/youtube-sales', 'YouTube Sales'),
  placeholder('/store-royalties', 'Store Royalties'),
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
