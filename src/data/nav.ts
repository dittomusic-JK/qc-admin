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

// Scope: content QC only (agreed with Shaun, DOP — Aug 2026). Users, orders,
// payouts, products and Vevo/video are deliberately NOT here; they stay in the
// legacy admin and are reached via legacyAdmin() links. This supersedes the
// original "mirror the legacy IA exactly" rule for this repo.
export const nav: NavEntry[] = [
  { label: 'Dashboard', icon: 'dashboard', path: '/' },
  {
    label: 'Release QC',
    icon: 'clipboard-check',
    items: [
      { label: 'QC Review', path: '/qc/review' },
      { label: 'Ingestion Queue', path: '/qc/ingestion-queue' },
      { label: 'Ditto+ Ingestion Queue', path: '/qc/ingestion-ditto-plus' },
      { label: 'Lyrics QC', path: '/qc/lyrics' },
      { label: 'Ditto+ Lyrics QC', path: '/qc/lyrics-ditto-plus' },
      { label: 'Licensing', path: '/qc/licensing' },
      { label: 'Licensing Ditto+ RLS', path: '/qc/licensing-rls' },
    ],
  },
  {
    label: 'Publishing / QC',
    icon: 'pen',
    items: [
      { label: 'All Works', path: '/publishing/works' },
      { label: 'Name Update', path: '/publishing/name-update' },
      { label: 'IPI/CAE Numbers Update', path: '/publishing/ipi-cae-update' },
    ],
  },
  {
    label: 'Releases',
    icon: 'music',
    items: [
      { label: 'Find a release', path: '/releases' },
      { label: 'Canned Responses', path: '/canned-responses' },
    ],
  },
]
