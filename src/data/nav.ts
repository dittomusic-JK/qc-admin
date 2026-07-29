export interface NavItem {
  label: string
  path: string
}

export interface NavEntry {
  label: string
  icon: string
  path?: string
  items?: NavItem[]
}

// Mirrors the legacy admin sidebar 1:1 — no IA changes, aesthetic rebuild only.
export const nav: NavEntry[] = [
  { label: 'Dashboard', icon: 'dashboard', path: '/' },
  {
    label: 'Customers & Staff',
    icon: 'users',
    items: [
      { label: 'Users', path: '/users' },
      { label: 'Credits', path: '/credits' },
      { label: 'Labels', path: '/labels' },
      { label: 'KYC Status', path: '/kyc-status' },
      { label: 'Ban Log', path: '/ban-log' },
      { label: 'Suspected Fraud', path: '/suspected-fraud' },
    ],
  },
  {
    label: 'Orders & Payments',
    icon: 'cart',
    items: [
      { label: 'Orders', path: '/orders' },
      { label: 'PayPal Payments', path: '/paypal-payments' },
      { label: 'Subscriptions', path: '/subscriptions' },
    ],
  },
  {
    label: 'Payouts',
    icon: 'banknote',
    items: [
      { label: 'Commissions', path: '/commissions' },
      { label: 'Approval Queue', path: '/approval-queue' },
    ],
  },
  {
    label: 'Idol / QC',
    icon: 'clipboard-check',
    items: [
      { label: 'Lyrics QC', path: '/qc/lyrics' },
      { label: 'Ditto+ Lyrics QC', path: '/qc/lyrics-ditto-plus' },
      { label: 'Ingestion Queue', path: '/qc/ingestion-queue' },
      { label: 'Ditto+ Ingestion Queue', path: '/qc/ingestion-ditto-plus' },
      { label: 'Licensing', path: '/qc/licensing' },
      { label: 'Licensing Ditto+ RLS', path: '/qc/licensing-rls' },
    ],
  },
  {
    label: 'Vevo / QC',
    icon: 'video',
    items: [
      { label: 'VEVO Ingestion Queue', path: '/vevo/ingestion-queue' },
      { label: 'VEVO Rejected Queue', path: '/vevo/rejected-queue' },
      { label: 'VEVO Channels', path: '/vevo/channels' },
      { label: 'VEVO Videos', path: '/vevo/videos' },
      { label: 'Channel Name Update', path: '/vevo/channel-name-update' },
    ],
  },
  {
    label: 'Publishing / QC',
    icon: 'pen',
    items: [
      { label: 'All Works', path: '/publishing/works' },
      { label: 'Name Update', path: '/publishing/name-update' },
      { label: 'IPI/CAE Numbers Update', path: '/publishing/ipi-cae-update' },
      { label: 'Sync Opportunities', path: '/sync-opportunities' },
    ],
  },
  {
    label: 'Music Releases',
    icon: 'music',
    items: [
      { label: 'Music Releases', path: '/releases' },
      { label: 'iTunes Express', path: '/itunes-express' },
      { label: 'Beatport', path: '/beatport' },
      { label: 'YouTube Official Artist Channel', path: '/youtube-oac' },
      { label: 'Takedowns', path: '/takedowns' },
      { label: 'Spotify Artist Names', path: '/spotify-artist-names' },
      { label: 'Canned Responses', path: '/canned-responses' },
    ],
  },
  {
    label: 'Products & Services',
    icon: 'gift',
    items: [
      { label: 'Stores', path: '/stores' },
      { label: 'Pending Services', path: '/pending-services' },
      { label: 'Promo Purchases', path: '/promo-purchases' },
      { label: 'Discounts', path: '/discounts' },
      { label: 'YouTube Sales', path: '/youtube-sales' },
      { label: 'Store Royalties', path: '/store-royalties' },
    ],
  },
]
