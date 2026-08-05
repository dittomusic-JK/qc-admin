// Mock data for the QC / VEVO / Publishing queue views. Names, emails and
// identifiers are invented — shaped to match what the real admin displays,
// never copied from it.

// ── Release QC queues ────────────────────────────────────────────────────────

export interface QcReleaseRow {
  id: number
  user: string
  releaseDate: string
  uploadedDate: string
}

export const lyricsQcQueue: QcReleaseRow[] = [
  { id: 6733412, user: 'maya.linden@gmail.com', releaseDate: 'August 14th, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733385, user: 'tomokafor.music@gmail.com', releaseDate: 'August 21st, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733361, user: 'sofia.reyes.audio@outlook.com', releaseDate: 'September 4th, 2026', uploadedDate: 'July 26th, 2026' },
  { id: 6733340, user: 'dkrause@fadedlines.de', releaseDate: 'August 28th, 2026', uploadedDate: 'July 26th, 2026' },
  { id: 6733318, user: 'jwhitfield.beats@gmail.com', releaseDate: 'August 7th, 2026', uploadedDate: 'July 25th, 2026' },
  { id: 6733294, user: 'elif.kaya.music@gmail.com', releaseDate: 'September 11th, 2026', uploadedDate: 'July 25th, 2026' },
  { id: 6733271, user: 'marco@bellinirecords.it', releaseDate: 'August 14th, 2026', uploadedDate: 'July 24th, 2026' },
  { id: 6733255, user: 'lmoreau@hotmail.fr', releaseDate: 'August 21st, 2026', uploadedDate: 'July 24th, 2026' },
]

export const lyricsQcPlusQueue: QcReleaseRow[] = [
  { id: 6733420, user: 'emma.lindqvist@gmail.com', releaseDate: 'August 14th, 2026', uploadedDate: 'July 28th, 2026' },
  { id: 6733398, user: 'v.petrov@duskaudio.bg', releaseDate: 'August 28th, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733374, user: 'gortiz.production@gmail.com', releaseDate: 'September 4th, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733352, user: 'hana.sato.tokyo@gmail.com', releaseDate: 'August 21st, 2026', uploadedDate: 'July 26th, 2026' },
  { id: 6733329, user: 'kofimensah.gh@gmail.com', releaseDate: 'September 18th, 2026', uploadedDate: 'July 25th, 2026' },
  { id: 6733301, user: 'chloebennettmusic@gmail.com', releaseDate: 'August 14th, 2026', uploadedDate: 'July 24th, 2026' },
]

export const ingestionQueue: QcReleaseRow[] = [
  { id: 6733441, user: 'andrebaptiste.kompa@gmail.com', releaseDate: 'August 14th, 2026', uploadedDate: 'July 28th, 2026' },
  { id: 6733436, user: 'ninavmusic@icloud.com', releaseDate: 'August 21st, 2026', uploadedDate: 'July 28th, 2026' },
  { id: 6733414, user: 'isafontaine@gmail.com', releaseDate: 'September 4th, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733391, user: 'amaradiallo@yahoo.com', releaseDate: 'August 28th, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733368, user: 'ravirao.audio@gmail.com', releaseDate: 'August 7th, 2026', uploadedDate: 'July 26th, 2026' },
  { id: 6733347, user: 'maya.linden@gmail.com', releaseDate: 'September 11th, 2026', uploadedDate: 'July 26th, 2026' },
  { id: 6733325, user: 'tomokafor.music@gmail.com', releaseDate: 'August 21st, 2026', uploadedDate: 'July 25th, 2026' },
  { id: 6733303, user: 'jwhitfield.beats@gmail.com', releaseDate: 'August 14th, 2026', uploadedDate: 'July 24th, 2026' },
]

export const ingestionPlusQueue: QcReleaseRow[] = [
  { id: 6733452, user: 'emma.lindqvist@gmail.com', releaseDate: 'August 14th, 2026', uploadedDate: 'July 28th, 2026' },
  { id: 6733448, user: 'v.petrov@duskaudio.bg', releaseDate: 'August 21st, 2026', uploadedDate: 'July 28th, 2026' },
  { id: 6733431, user: 'marco@bellinirecords.it', releaseDate: 'September 4th, 2026', uploadedDate: 'July 28th, 2026' },
  { id: 6733419, user: 'gortiz.production@gmail.com', releaseDate: 'August 28th, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733402, user: 'hana.sato.tokyo@gmail.com', releaseDate: 'September 11th, 2026', uploadedDate: 'July 27th, 2026' },
  { id: 6733387, user: 'sofia.reyes.audio@outlook.com', releaseDate: 'August 7th, 2026', uploadedDate: 'July 26th, 2026' },
  { id: 6733370, user: 'dkrause@fadedlines.de', releaseDate: 'August 14th, 2026', uploadedDate: 'July 26th, 2026' },
  { id: 6733356, user: 'elif.kaya.music@gmail.com', releaseDate: 'September 18th, 2026', uploadedDate: 'July 25th, 2026' },
  { id: 6733338, user: 'kofimensah.gh@gmail.com', releaseDate: 'August 28th, 2026', uploadedDate: 'July 25th, 2026' },
  { id: 6733317, user: 'lmoreau@hotmail.fr', releaseDate: 'August 21st, 2026', uploadedDate: 'July 24th, 2026' },
]

// ── QC Review workspace ──────────────────────────────────────────────────────
// One-screen review items for the keyboard-driven QC session flow. Everything a
// reviewer needs to pass/flag without leaving the screen.

export type CheckStatus = 'pass' | 'warn' | 'fail'

export interface QcAutoCheck {
  label: string
  status: CheckStatus
  detail: string
}

export interface QcReviewTrack {
  number: number
  title: string
  isrc: string
  duration: number
  explicit: 'Not Explicit' | 'Explicit' | 'Clean'
  language: string
  aiLanguageMatch: boolean
}

export interface QcPriorityMeta {
  highProfile: boolean
  newUser: boolean
  earnings12m: number
  daysToRelease: number
  daysToPitch: number | null
  daysInQueue: number
}

export interface QcReviewItem {
  id: number
  title: string
  artist: string
  label: string
  user: string
  userId: number
  plan: 'Starter' | 'Pro' | 'Label'
  releaseType: 'Single' | 'EP' | 'Album'
  genre: string
  language: string
  barcode: string
  releaseDate: string
  uploadedDate: string
  priorFlags: number
  memberSince: string
  art: string
  priority: QcPriorityMeta
  autoChecks: QcAutoCheck[]
  tracks: QcReviewTrack[]
}

// Queue priority: the feed works highest score first, so reviewers never
// hand-pick from a spreadsheet. Weights are prototype values for the algorithm
// agreed with the QC team.
export const priorityScore = (item: QcReviewItem): number => {
  const p = item.priority
  let s = 0
  if (p.highProfile) s += 40
  if (p.daysToPitch !== null) s += Math.max(30 - p.daysToPitch * 2, 0)
  s += Math.max(25 - p.daysToRelease, 0)
  if (p.newUser) s += 15
  s += p.earnings12m >= 10_000 ? 20 : p.earnings12m >= 1_000 ? 10 : 0
  s += item.plan === 'Label' ? 10 : item.plan === 'Pro' ? 5 : 0
  // Completed well ahead of release date typically signals a good release.
  s += Math.min(Math.round(p.daysInQueue * 1.5), 12)
  return Math.round(s)
}

export const priorityFactors = (item: QcReviewItem): string[] => {
  const p = item.priority
  const f: string[] = []
  if (p.highProfile) f.push('High-profile artist')
  if (p.daysToPitch !== null && p.daysToPitch <= 14) f.push(`Pitch in ${p.daysToPitch}d`)
  if (p.daysToRelease <= 21) f.push(`Release in ${p.daysToRelease}d`)
  if (p.newUser) f.push('New user')
  if (p.earnings12m >= 10_000) f.push('High-earning user')
  if (item.plan !== 'Starter') f.push(`${item.plan} plan`)
  if (p.daysInQueue >= 7) f.push(`${p.daysInQueue}d in queue`)
  return f
}

export interface FlagReason {
  id: number
  category: 'Artwork' | 'Audio' | 'Metadata' | 'Licensing'
  label: string
}

export const flagReasons: FlagReason[] = [
  { id: 1, category: 'Artwork', label: 'Artwork text does not match metadata' },
  { id: 2, category: 'Artwork', label: 'Artwork quality / resolution below spec' },
  { id: 3, category: 'Audio', label: 'Audio quality below minimum standard' },
  { id: 4, category: 'Audio', label: 'Possible third-party content — license required' },
  { id: 5, category: 'Metadata', label: 'Title formatting breaks store rules' },
  { id: 6, category: 'Metadata', label: 'Artist name mismatch across fields' },
  { id: 7, category: 'Metadata', label: 'Explicit content not labelled' },
  { id: 8, category: 'Licensing', label: 'Copyright documents missing / uncorroborated' },
  { id: 9, category: 'Licensing', label: 'Suspected fraud — escalate to fraud team' },
]

export const qcReviewQueue: QcReviewItem[] = [
  {
    id: 6733441, title: 'Port-au-Prince Nights', artist: 'André Baptiste', label: 'Kompa Direct',
    user: 'andrebaptiste.kompa@gmail.com', userId: 1545789, plan: 'Pro', releaseType: 'Single',
    genre: 'Kompa', language: 'French', barcode: '5063721995421', releaseDate: 'August 14th, 2026',
    uploadedDate: 'July 28th, 2026', priorFlags: 0, memberSince: 'March 2024',
    art: 'from-[#5f1fff] to-[#287ef7]',
    priority: { highProfile: false, newUser: false, earnings12m: 3400, daysToRelease: 9, daysToPitch: 4, daysInQueue: 8 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'pass', detail: '3000 × 3000 px, no borders detected' },
      { label: 'Artwork text scan', status: 'pass', detail: 'Title and artist match metadata' },
      { label: 'Audio quality', status: 'pass', detail: 'WAV 16-bit / 44.1 kHz on all tracks' },
      { label: 'Content ID match', status: 'pass', detail: 'No matches against reference library' },
      { label: 'Language detection', status: 'pass', detail: 'Audio matches declared language' },
    ],
    tracks: [
      { number: 1, title: 'Port-au-Prince Nights', isrc: 'GXLF32651201', duration: 214, explicit: 'Not Explicit', language: 'French', aiLanguageMatch: true },
    ],
  },
  {
    id: 6733436, title: 'Glasshouse', artist: 'Nina V', label: 'Self-released',
    user: 'ninavmusic@icloud.com', userId: 1545811, plan: 'Starter', releaseType: 'EP',
    genre: 'Alt Pop', language: 'English', barcode: '5063721995445', releaseDate: 'August 21st, 2026',
    uploadedDate: 'July 28th, 2026', priorFlags: 2, memberSince: 'January 2026',
    art: 'from-[#ee404c] to-[#ffb100]',
    priority: { highProfile: false, newUser: true, earnings12m: 120, daysToRelease: 16, daysToPitch: null, daysInQueue: 8 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'pass', detail: '3000 × 3000 px' },
      { label: 'Artwork text scan', status: 'warn', detail: 'Detected extra text: "OUT NOW" — likely promotional' },
      { label: 'Audio quality', status: 'pass', detail: 'WAV 24-bit / 48 kHz on all tracks' },
      { label: 'Content ID match', status: 'pass', detail: 'No matches against reference library' },
      { label: 'Language detection', status: 'warn', detail: 'Track 3 audio may not match declared language' },
    ],
    tracks: [
      { number: 1, title: 'Glasshouse', isrc: 'GXLF32651210', duration: 198, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
      { number: 2, title: 'Porcelain', isrc: 'GXLF32651211', duration: 176, explicit: 'Explicit', language: 'English', aiLanguageMatch: true },
      { number: 3, title: 'Aftertaste', isrc: 'GXLF32651212', duration: 221, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: false },
      { number: 4, title: 'Glasshouse (Stripped)', isrc: 'GXLF32651213', duration: 189, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
    ],
  },
  {
    id: 6733414, title: 'Jardin Secret', artist: 'Isa Fontaine', label: 'Fontaine Records',
    user: 'isafontaine@gmail.com', userId: 1545822, plan: 'Pro', releaseType: 'Single',
    genre: 'Chanson', language: 'French', barcode: '5063721995469', releaseDate: 'September 4th, 2026',
    uploadedDate: 'July 27th, 2026', priorFlags: 0, memberSince: 'August 2023',
    art: 'from-[#00d346] to-[#287ef7]',
    priority: { highProfile: false, newUser: false, earnings12m: 12800, daysToRelease: 30, daysToPitch: 12, daysInQueue: 9 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'pass', detail: '4000 × 4000 px' },
      { label: 'Artwork text scan', status: 'pass', detail: 'Title and artist match metadata' },
      { label: 'Audio quality', status: 'fail', detail: 'Track 2 appears upsampled from MP3 source' },
      { label: 'Content ID match', status: 'pass', detail: 'No matches against reference library' },
      { label: 'Language detection', status: 'pass', detail: 'Audio matches declared language' },
    ],
    tracks: [
      { number: 1, title: 'Jardin Secret', isrc: 'GXLF32651220', duration: 203, explicit: 'Not Explicit', language: 'French', aiLanguageMatch: true },
      { number: 2, title: 'Jardin Secret (Acoustique)', isrc: 'GXLF32651221', duration: 197, explicit: 'Not Explicit', language: 'French', aiLanguageMatch: true },
    ],
  },
  {
    id: 6733391, title: 'Dakar Express', artist: 'Amara Diallo', label: 'Teranga Beats',
    user: 'amaradiallo@yahoo.com', userId: 1545474, plan: 'Label', releaseType: 'Album',
    genre: 'Afrobeats', language: 'English', barcode: '5063721995483', releaseDate: 'August 28th, 2026',
    uploadedDate: 'July 27th, 2026', priorFlags: 1, memberSince: 'June 2022',
    art: 'from-[#ffb100] to-[#ee404c]',
    priority: { highProfile: true, newUser: false, earnings12m: 22000, daysToRelease: 23, daysToPitch: 9, daysInQueue: 9 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'pass', detail: '3000 × 3000 px' },
      { label: 'Artwork text scan', status: 'pass', detail: 'Title and artist match metadata' },
      { label: 'Audio quality', status: 'pass', detail: 'WAV 16-bit / 44.1 kHz on all tracks' },
      { label: 'Content ID match', status: 'warn', detail: 'Track 5 shows partial melodic match (62%) — review' },
      { label: 'Language detection', status: 'pass', detail: 'Audio matches declared language' },
    ],
    tracks: [
      { number: 1, title: 'Dakar Express', isrc: 'GXLF32651230', duration: 245, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
      { number: 2, title: 'Médina Moon', isrc: 'GXLF32651231', duration: 232, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
      { number: 3, title: 'Sandaga Market', isrc: 'GXLF32651232', duration: 198, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
      { number: 4, title: 'Teranga', isrc: 'GXLF32651233', duration: 267, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
      { number: 5, title: 'Ocean Road', isrc: 'GXLF32651234', duration: 213, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
    ],
  },
  {
    id: 6733368, title: 'Monsoon Sessions', artist: 'Ravi Rao', label: 'Self-released',
    user: 'ravirao.audio@gmail.com', userId: 1545833, plan: 'Starter', releaseType: 'EP',
    genre: 'Indian Classical Fusion', language: 'Hindi', barcode: '', releaseDate: 'August 7th, 2026',
    uploadedDate: 'July 26th, 2026', priorFlags: 0, memberSince: 'May 2026',
    art: 'from-[#287ef7] to-[#00d346]',
    priority: { highProfile: false, newUser: true, earnings12m: 0, daysToRelease: 2, daysToPitch: null, daysInQueue: 10 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'warn', detail: '1400 × 1400 px — below 3000 px recommendation' },
      { label: 'Artwork text scan', status: 'pass', detail: 'Title and artist match metadata' },
      { label: 'Audio quality', status: 'pass', detail: 'FLAC 24-bit / 96 kHz on all tracks' },
      { label: 'Content ID match', status: 'pass', detail: 'No matches against reference library' },
      { label: 'Language detection', status: 'pass', detail: 'Audio matches declared language' },
    ],
    tracks: [
      { number: 1, title: 'Monsoon I (Arrival)', isrc: 'GXLF32651240', duration: 312, explicit: 'Not Explicit', language: 'Hindi', aiLanguageMatch: true },
      { number: 2, title: 'Monsoon II (Downpour)', isrc: 'GXLF32651241', duration: 287, explicit: 'Not Explicit', language: 'Hindi', aiLanguageMatch: true },
      { number: 3, title: 'Monsoon III (Petrichor)', isrc: 'GXLF32651242', duration: 334, explicit: 'Not Explicit', language: 'Hindi', aiLanguageMatch: true },
    ],
  },
  {
    id: 6733347, title: 'Golden Hour (Remixes)', artist: 'Maya Linden', label: 'Linden Sound',
    user: 'maya.linden@gmail.com', userId: 1545390, plan: 'Pro', releaseType: 'EP',
    genre: 'Electronic', language: 'English', barcode: '5063721995512', releaseDate: 'September 11th, 2026',
    uploadedDate: 'July 26th, 2026', priorFlags: 0, memberSince: 'February 2023',
    art: 'from-[#f6c443] to-[#955fff]',
    priority: { highProfile: true, newUser: false, earnings12m: 8200, daysToRelease: 37, daysToPitch: 6, daysInQueue: 10 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'pass', detail: '3000 × 3000 px' },
      { label: 'Artwork text scan', status: 'fail', detail: 'Remixer names on artwork missing from metadata' },
      { label: 'Audio quality', status: 'pass', detail: 'WAV 16-bit / 44.1 kHz on all tracks' },
      { label: 'Content ID match', status: 'pass', detail: 'No matches against reference library' },
      { label: 'Language detection', status: 'pass', detail: 'Audio matches declared language' },
    ],
    tracks: [
      { number: 1, title: 'Golden Hour (Dusk Audio Remix)', isrc: 'GXLF32651250', duration: 256, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
      { number: 2, title: 'Golden Hour (MIRA-9 Rework)', isrc: 'GXLF32651251', duration: 241, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
      { number: 3, title: 'Golden Hour (Club Edit)', isrc: 'GXLF32651252', duration: 198, explicit: 'Not Explicit', language: 'English', aiLanguageMatch: true },
    ],
  },
  {
    id: 6733325, title: 'Streetlight Confessions', artist: 'Night Parade', label: 'Parade Recordings',
    user: 'tomokafor.music@gmail.com', userId: 1545411, plan: 'Label', releaseType: 'Single',
    genre: 'Indie Rock', language: 'English', barcode: '5063721995536', releaseDate: 'August 21st, 2026',
    uploadedDate: 'July 25th, 2026', priorFlags: 3, memberSince: 'November 2021',
    art: 'from-[#101f3c] to-[#5f1fff]',
    priority: { highProfile: false, newUser: false, earnings12m: 15400, daysToRelease: 16, daysToPitch: null, daysInQueue: 11 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'pass', detail: '3000 × 3000 px' },
      { label: 'Artwork text scan', status: 'pass', detail: 'Title and artist match metadata' },
      { label: 'Audio quality', status: 'pass', detail: 'WAV 24-bit / 44.1 kHz on all tracks' },
      { label: 'Content ID match', status: 'pass', detail: 'No matches against reference library' },
      { label: 'Language detection', status: 'pass', detail: 'Audio matches declared language' },
    ],
    tracks: [
      { number: 1, title: 'Streetlight Confessions', isrc: 'GXLF32651260', duration: 227, explicit: 'Explicit', language: 'English', aiLanguageMatch: true },
      { number: 2, title: 'Streetlight Confessions (Clean)', isrc: 'GXLF32651261', duration: 227, explicit: 'Clean', language: 'English', aiLanguageMatch: true },
    ],
  },
  {
    id: 6733303, title: 'Late Shift II', artist: 'Jesse Whitfield', label: 'Whitfield Beats',
    user: 'jwhitfield.beats@gmail.com', userId: 1545495, plan: 'Pro', releaseType: 'Single',
    genre: 'Hip Hop', language: 'English', barcode: '5063721995550', releaseDate: 'August 14th, 2026',
    uploadedDate: 'July 24th, 2026', priorFlags: 1, memberSince: 'September 2024',
    art: 'from-[#955fff] to-[#ee404c]',
    priority: { highProfile: false, newUser: false, earnings12m: 5100, daysToRelease: 9, daysToPitch: 3, daysInQueue: 12 },
    autoChecks: [
      { label: 'Artwork resolution', status: 'pass', detail: '3000 × 3000 px' },
      { label: 'Artwork text scan', status: 'pass', detail: 'Title and artist match metadata' },
      { label: 'Audio quality', status: 'pass', detail: 'WAV 16-bit / 44.1 kHz' },
      { label: 'Content ID match', status: 'fail', detail: 'Sample match: "Night Drive" (Universal) 4:1 confidence' },
      { label: 'Language detection', status: 'pass', detail: 'Audio matches declared language' },
    ],
    tracks: [
      { number: 1, title: 'Late Shift II', isrc: 'GXLF32651270', duration: 189, explicit: 'Explicit', language: 'English', aiLanguageMatch: true },
    ],
  },
]

// ── QC session + team analytics ──────────────────────────────────────────────
// Shift baseline for the signed-in reviewer. Live session actions add on top.

// In-progress shift baseline for the signed-in reviewer (active hours only —
// paused time never accrues). Live session actions add on top.
export const qcShift = {
  activeHours: 4.0,
  reviewed: 52,
  approved: 45,
  flagged: 7,
}

export type QcPeriod = 'day' | 'week' | 'month' | 'quarter' | 'year'

export interface QcPeriodStats {
  reviewed: number
  perHour: number
  approvedPct: number
}

export interface QcTeamMember {
  id: string
  name: string
  initials: string
  role: string
  you?: boolean
  online: boolean
  stats: Record<QcPeriod, QcPeriodStats>
}

// Rate bands (releases/hour): green at/above 12.5, amber 10–12.5, red below 10.
export const qcRateBands = { green: 12.5, amber: 10 }

export const qcQueueRemaining = 48

// Approximate QC-active hours per period, used to derive reviewed volumes.
const periodHours: Record<QcPeriod, number> = { day: 7.5, week: 37, month: 160, quarter: 470, year: 1880 }

// drift shifts the longer-period averages so history differs from today.
const buildStats = (perHour: number, approvedPct: number, drift: number): Record<QcPeriod, QcPeriodStats> => {
  const out = {} as Record<QcPeriod, QcPeriodStats>
  ;(Object.keys(periodHours) as QcPeriod[]).forEach((p, i) => {
    const rate = Math.max(+(perHour + drift * i).toFixed(1), 1)
    out[p] = {
      reviewed: Math.round(rate * periodHours[p]),
      perHour: rate,
      approvedPct: Math.min(Math.round(approvedPct + (i % 2 ? -i : i) * 0.5), 99),
    }
  })
  return out
}

export const qcTeam: QcTeamMember[] = [
  { id: 'rosa-delgado', name: 'Rosa Delgado', initials: 'RD', role: 'Senior QC Agent', online: true, stats: buildStats(14.2, 84, -0.3) },
  { id: 'priya-nair', name: 'Priya Nair', initials: 'PN', role: 'QC Agent', online: true, stats: buildStats(13.1, 88, 0.2) },
  { id: 'milo-fenwick', name: 'Milo Fenwick', initials: 'MF', role: 'QC Agent', online: true, stats: buildStats(12.7, 81, -0.2) },
  { id: 'tessa-marchetti', name: 'Tessa Marchetti', initials: 'TM', role: 'Senior QC Agent', online: true, stats: buildStats(11.8, 90, 0.3) },
  { id: 'james-keane', name: 'James Keane', initials: 'JK', role: 'QC Manager', you: true, online: true, stats: buildStats(11.2, 85, 0.1) },
  { id: 'callum-boyd', name: 'Callum Boyd', initials: 'CB', role: 'QC Agent', online: false, stats: buildStats(10.4, 92, -0.4) },
  { id: 'aisha-bello', name: 'Aisha Bello', initials: 'AB', role: 'QC Agent', online: true, stats: buildStats(9.1, 79, 0.5) },
  { id: 'jonas-weber', name: 'Jonas Weber', initials: 'JW', role: 'QC Agent', online: false, stats: buildStats(7.8, 94, 0.6) },
]

// ── Reviewer monitoring detail ───────────────────────────────────────────────
// Per-agent drill-down for the manager view: pause behaviour, decision speed,
// flag usage and the raw decision log. "Now" is pinned to 16:20 for the demo.

export const QC_NOW_MIN = 16 * 60 + 20
export const SHIFT_WINDOW = { start: 8 * 60 + 30, end: 17 * 60 + 30 }

export interface PauseEntry {
  at: string
  mins: number
}

export interface DecisionRow {
  time: string
  releaseId: number
  title: string
  artist: string
  action: 'Pass' | 'Flag'
  secs: number
  reason: string
}

// A full dated shift record — the profile view can replay any day, not just
// today. shifts[0] is today; earlier entries are prior working days.
export interface ShiftRecord {
  date: string
  today?: boolean
  clockIn: string
  clockOut: string | null
  reviewed: number
  perHour: number
  approvedPct: number
  active: string
  pausedMin: number
  pauses: PauseEntry[]
  skips: number
  undos: number
  avgDecisionSec: number
  fastestSec: number
  slowestSec: number
  flagUsage: { label: string; count: number }[]
  decisions: DecisionRow[]
}

export interface ReviewerDetail {
  shifts: ShiftRecord[]
}

const fmtClock = (mins: number) => `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, '0')}`

const decisionPool = [
  ...qcReviewQueue.map(r => ({ releaseId: r.id, title: r.title, artist: r.artist })),
  { releaseId: 6733287, title: 'Cielo Abierto (Live)', artist: 'Sofia Reyes' },
  { releaseId: 6733260, title: 'Static Bloom (Remaster)', artist: 'Velvet Antenna' },
  { releaseId: 6733244, title: 'Accra Sunrise', artist: 'Kofi Mensah' },
  { releaseId: 6733231, title: 'Polar Nights (Deluxe)', artist: 'Emma Lindqvist' },
]

const makeDecisions = (lastMin: number, gapMin: number, avgSec: number, offset: number, flagEvery: number): DecisionRow[] =>
  Array.from({ length: 8 }, (_, i) => {
    const p = decisionPool[(offset + i) % decisionPool.length]
    const flagged = (i + offset) % flagEvery === 0
    return {
      time: fmtClock(lastMin - i * gapMin),
      ...p,
      action: flagged ? 'Flag' : 'Pass',
      secs: Math.round(avgSec * (0.6 + ((i * 7 + offset) % 9) / 10)),
      reason: flagged ? flagReasons[(offset + i) % flagReasons.length].label : '',
    }
  })

const toMin = (clock: string) => {
  const [h, m] = clock.split(':').map(Number)
  return h * 60 + m
}

const shiftDates = ['Wed 5 Aug', 'Tue 4 Aug', 'Mon 3 Aug', 'Fri 31 Jul', 'Thu 30 Jul', 'Wed 29 Jul']

// Per-reviewer baseline; past days are deterministic variations of it so every
// dated shift looks genuinely different without hand-writing 48 records.
interface ReviewerShiftCfg {
  seed: number
  perHour: number
  approvedPct: number
  clockIn: string
  clockOut: string | null
  pauses: PauseEntry[]
  skips: number
  undos: number
  avgDecisionSec: number
  fastestSec: number
  slowestSec: number
  gapMin: number
  flagEvery: number
  flagUsage: { label: string; count: number }[]
}

const jitterPauses = (pauses: PauseEntry[], i: number, seed: number): PauseEntry[] =>
  pauses
    .filter((_, pi) => pauses.length === 1 || (i + seed + pi) % 5 !== 0)
    .map((p, pi) => ({
      at: fmtClock(toMin(p.at) + ((i * 9 + pi * 5 + seed) % 23) - 11),
      mins: Math.max(5, Math.round(p.mins * (0.75 + ((i + pi + seed) % 4) * 0.15))),
    }))

const makeShiftRecord = (cfg: ReviewerShiftCfg, i: number): ShiftRecord => {
  const today = i === 0
  const rate = today ? cfg.perHour : Math.max(+(cfg.perHour + (((i + cfg.seed) % 5) - 2) * 0.4).toFixed(1), 1)
  const approvedPct = today ? cfg.approvedPct : Math.min(cfg.approvedPct + (((i + cfg.seed) % 3) - 1), 99)
  const clockInMin = toMin(cfg.clockIn) + (today ? 0 : ((i * 7 + cfg.seed) % 13) - 6)
  const clockOutMin = today
    ? cfg.clockOut ? toMin(cfg.clockOut) : null
    : toMin(cfg.clockOut ?? '17:06') + ((i * 11 + cfg.seed) % 17) - 8
  const pauses = today ? cfg.pauses : jitterPauses(cfg.pauses, i, cfg.seed)
  const pausedMin = pauses.reduce((s, p) => s + p.mins, 0)
  const endMin = clockOutMin ?? QC_NOW_MIN
  const activeMin = Math.max(endMin - clockInMin - pausedMin, 60)
  const avgSec = today ? cfg.avgDecisionSec : Math.round(3600 / rate)
  const flagEvery = Math.max(3, cfg.flagEvery + ((i + cfg.seed) % 3) - 1)
  const flagUsage = today
    ? cfg.flagUsage
    : cfg.flagUsage
        .map((f, fi) => ({ label: f.label, count: Math.max(f.count + ((i + fi + cfg.seed) % 3) - 1, 0) }))
        .filter(f => f.count > 0)
  return {
    date: shiftDates[i],
    today,
    clockIn: fmtClock(clockInMin),
    clockOut: clockOutMin === null ? null : fmtClock(clockOutMin),
    reviewed: Math.round(rate * (activeMin / 60)),
    perHour: rate,
    approvedPct,
    active: fmtClock(activeMin),
    pausedMin,
    pauses,
    skips: today ? cfg.skips : Math.max(cfg.skips + ((i + cfg.seed) % 4) - 1, 0),
    undos: today ? cfg.undos : Math.max(cfg.undos + ((i + cfg.seed) % 3) - 1, 0),
    avgDecisionSec: avgSec,
    fastestSec: Math.round(cfg.fastestSec * (today ? 1 : 0.9 + ((i + cfg.seed) % 3) * 0.1)),
    slowestSec: Math.round(cfg.slowestSec * (today ? 1 : 0.85 + ((i + cfg.seed) % 4) * 0.1)),
    flagUsage,
    decisions: makeDecisions(endMin - 8 - ((i + cfg.seed) % 9), cfg.gapMin, avgSec, cfg.seed + i, flagEvery),
  }
}

const makeReviewerShifts = (cfg: ReviewerShiftCfg): ReviewerDetail => ({
  shifts: shiftDates.map((_, i) => makeShiftRecord(cfg, i)),
})

export const qcReviewerDetails: Record<string, ReviewerDetail> = {
  'rosa-delgado': makeReviewerShifts({
    seed: 0, perHour: 14.2, approvedPct: 84, clockIn: '8:54', clockOut: null,
    pauses: [{ at: '10:32', mins: 11 }, { at: '12:58', mins: 34 }],
    skips: 2, undos: 1, avgDecisionSec: 245, fastestSec: 74, slowestSec: 690, gapMin: 4, flagEvery: 6,
    flagUsage: [
      { label: 'Artwork text does not match metadata', count: 7 },
      { label: 'Audio quality below minimum standard', count: 6 },
      { label: 'Explicit content not labelled', count: 4 },
    ],
  }),
  'priya-nair': makeReviewerShifts({
    seed: 1, perHour: 13.1, approvedPct: 88, clockIn: '8:59', clockOut: null,
    pauses: [{ at: '11:05', mins: 9 }, { at: '13:02', mins: 38 }, { at: '15:11', mins: 8 }],
    skips: 1, undos: 2, avgDecisionSec: 268, fastestSec: 82, slowestSec: 745, gapMin: 5, flagEvery: 8,
    flagUsage: [
      { label: 'Title formatting breaks store rules', count: 5 },
      { label: 'Artwork quality / resolution below spec', count: 4 },
      { label: 'Possible third-party content — license required', count: 3 },
    ],
  }),
  'milo-fenwick': makeReviewerShifts({
    seed: 2, perHour: 12.7, approvedPct: 81, clockIn: '9:02', clockOut: null,
    pauses: [{ at: '12:47', mins: 31 }],
    skips: 4, undos: 0, avgDecisionSec: 276, fastestSec: 68, slowestSec: 810, gapMin: 5, flagEvery: 5,
    flagUsage: [
      { label: 'Audio quality below minimum standard', count: 8 },
      { label: 'Artwork text does not match metadata', count: 6 },
      { label: 'Copyright documents missing / uncorroborated', count: 4 },
    ],
  }),
  'tessa-marchetti': makeReviewerShifts({
    seed: 3, perHour: 11.8, approvedPct: 90, clockIn: '8:56', clockOut: null,
    pauses: [{ at: '10:15', mins: 12 }, { at: '12:30', mins: 42 }, { at: '14:50', mins: 9 }],
    skips: 3, undos: 3, avgDecisionSec: 297, fastestSec: 90, slowestSec: 880, gapMin: 5, flagEvery: 9,
    flagUsage: [
      { label: 'Artist name mismatch across fields', count: 4 },
      { label: 'Explicit content not labelled', count: 3 },
      { label: 'Artwork text does not match metadata', count: 2 },
    ],
  }),
  'james-keane': makeReviewerShifts({
    seed: 4, perHour: 11.2, approvedPct: 85, clockIn: '8:58', clockOut: null,
    pauses: [{ at: '10:40', mins: 8 }, { at: '13:05', mins: 35 }],
    skips: 1, undos: 1, avgDecisionSec: 313, fastestSec: 95, slowestSec: 920, gapMin: 6, flagEvery: 7,
    flagUsage: [
      { label: 'Artwork text does not match metadata', count: 5 },
      { label: 'Possible third-party content — license required', count: 4 },
      { label: 'Title formatting breaks store rules', count: 4 },
    ],
  }),
  'callum-boyd': makeReviewerShifts({
    seed: 5, perHour: 10.4, approvedPct: 92, clockIn: '9:12', clockOut: '15:24',
    pauses: [{ at: '10:58', mins: 17 }, { at: '12:44', mins: 39 }, { at: '14:21', mins: 12 }],
    skips: 5, undos: 2, avgDecisionSec: 337, fastestSec: 104, slowestSec: 1010, gapMin: 6, flagEvery: 11,
    flagUsage: [
      { label: 'Artwork quality / resolution below spec', count: 3 },
      { label: 'Audio quality below minimum standard', count: 2 },
      { label: 'Explicit content not labelled', count: 1 },
    ],
  }),
  'aisha-bello': makeReviewerShifts({
    seed: 6, perHour: 9.1, approvedPct: 79, clockIn: '9:06', clockOut: null,
    pauses: [{ at: '9:58', mins: 14 }, { at: '11:20', mins: 22 }, { at: '13:10', mins: 41 }, { at: '15:02', mins: 18 }],
    skips: 6, undos: 4, avgDecisionSec: 385, fastestSec: 118, slowestSec: 1240, gapMin: 7, flagEvery: 4,
    flagUsage: [
      { label: 'Audio quality below minimum standard', count: 6 },
      { label: 'Artwork text does not match metadata', count: 5 },
      { label: 'Suspected fraud — escalate to fraud team', count: 3 },
    ],
  }),
  'jonas-weber': makeReviewerShifts({
    seed: 7, perHour: 7.8, approvedPct: 94, clockIn: '9:21', clockOut: '15:47',
    pauses: [{ at: '10:05', mins: 19 }, { at: '11:32', mins: 28 }, { at: '13:20', mins: 44 }, { at: '14:55', mins: 21 }],
    skips: 8, undos: 5, avgDecisionSec: 452, fastestSec: 133, slowestSec: 1495, gapMin: 8, flagEvery: 13,
    flagUsage: [
      { label: 'Title formatting breaks store rules', count: 2 },
      { label: 'Artwork quality / resolution below spec', count: 1 },
    ],
  }),
}

// ── Licensing ────────────────────────────────────────────────────────────────

export interface LicensingRow {
  id: number
  email: string
  balance: string
}

export const unclearedUsers: LicensingRow[] = [
  { id: 1545390, email: 'maya.linden@gmail.com', balance: '$248.60' },
  { id: 1545411, email: 'tomokafor.music@gmail.com', balance: '$1,024.15' },
  { id: 1545432, email: 'sofia.reyes.audio@outlook.com', balance: '$86.40' },
  { id: 1545453, email: 'dkrause@fadedlines.de', balance: '$512.90' },
  { id: 1545474, email: 'amaradiallo@yahoo.com', balance: '$12.75' },
  { id: 1545495, email: 'jwhitfield.beats@gmail.com', balance: '$3,410.00' },
  { id: 1545516, email: 'elif.kaya.music@gmail.com', balance: '$156.25' },
  { id: 1545537, email: 'marco@bellinirecords.it', balance: '$927.80' },
  { id: 1545579, email: 'lmoreau@hotmail.fr', balance: '$64.10' },
  { id: 1545600, email: 'hana.sato.tokyo@gmail.com', balance: '$2,118.35' },
]

export const unclearedRlsUsers: LicensingRow[] = [
  { id: 1545621, email: 'gortiz.production@gmail.com', balance: '$5,204.50' },
  { id: 1545663, email: 'kofimensah.gh@gmail.com', balance: '$1,860.75' },
  { id: 1545705, email: 'v.petrov@duskaudio.bg', balance: '$740.20' },
  { id: 1545726, email: 'chloebennettmusic@gmail.com', balance: '$318.45' },
  { id: 1545768, email: 'emma.lindqvist@gmail.com', balance: '$9,102.90' },
  { id: 1545789, email: 'andrebaptiste.kompa@gmail.com', balance: '$127.60' },
]

// ── VEVO ─────────────────────────────────────────────────────────────────────

export interface VevoQcVideoRow {
  isrc: string
  user: string
  releaseDate: string
}

export const vevoAwaitingQc: VevoQcVideoRow[] = [
  { isrc: 'GBKQU2687412', user: 'maya.linden@gmail.com', releaseDate: 'August 14th, 2026' },
  { isrc: 'GBKQU2687395', user: 'jwhitfield.beats@gmail.com', releaseDate: 'August 21st, 2026' },
  { isrc: 'GBKQU2687371', user: 'sofia.reyes.audio@outlook.com', releaseDate: 'September 4th, 2026' },
  { isrc: 'GBKQU2687344', user: 'marco@bellinirecords.it', releaseDate: 'August 28th, 2026' },
  { isrc: 'GBKQU2687320', user: 'elif.kaya.music@gmail.com', releaseDate: 'August 7th, 2026' },
  { isrc: 'GBKQU2687298', user: 'lmoreau@hotmail.fr', releaseDate: 'September 11th, 2026' },
  { isrc: 'GBKQU2687271', user: 'hana.sato.tokyo@gmail.com', releaseDate: 'August 14th, 2026' },
  { isrc: 'GBKQU2687255', user: 'kofimensah.gh@gmail.com', releaseDate: 'August 21st, 2026' },
]

export interface VevoChannelActionRow {
  channel: string
  status: string
  slots: number
}

export const vevoChannelsAwaitingAction: VevoChannelActionRow[] = [
  { channel: 'MayaLindenVEVO', status: 'Pending Payment', slots: 2 },
  { channel: 'NightParadeVEVO', status: 'Pending Payment', slots: 4 },
  { channel: 'DuskAudioVEVO', status: 'Pending Payment', slots: 1 },
]

export interface VevoRejectedRow {
  isrc: string
  user: string
  releaseDate: string
  reason: string
}

export const vevoRejected: VevoRejectedRow[] = [
  { isrc: 'GBKQU2686104', user: 'tomokafor.music@gmail.com', releaseDate: 'July 17th, 2026', reason: 'Artwork mismatch' },
  { isrc: 'GBKQU2686087', user: 'amaradiallo@yahoo.com', releaseDate: 'July 10th, 2026', reason: 'Low video resolution' },
  { isrc: 'GBKQU2686061', user: 'dkrause@fadedlines.de', releaseDate: 'July 24th, 2026', reason: 'Audio clipping' },
  { isrc: 'GBKQU2686044', user: 'ninavmusic@icloud.com', releaseDate: 'July 3rd, 2026', reason: 'Metadata mismatch' },
  { isrc: 'GBKQU2686025', user: 'isafontaine@gmail.com', releaseDate: 'June 26th, 2026', reason: 'Artwork mismatch' },
  { isrc: 'GBKQU2686008', user: 'gortiz.production@gmail.com', releaseDate: 'July 17th, 2026', reason: 'Duplicate ISRC' },
  { isrc: 'GBKQU2685984', user: 'chloebennettmusic@gmail.com', releaseDate: 'July 31st, 2026', reason: 'Explicit content unflagged' },
  { isrc: 'GBKQU2685967', user: 'ravirao.audio@gmail.com', releaseDate: 'July 10th, 2026', reason: 'Low video resolution' },
]

export const vevoFailedIngestions: VevoRejectedRow[] = [
  { isrc: 'GBKQU2686121', user: 'emma.lindqvist@gmail.com', releaseDate: 'July 24th, 2026', reason: 'Encoding timeout' },
  { isrc: 'GBKQU2686098', user: 'v.petrov@duskaudio.bg', releaseDate: 'July 17th, 2026', reason: 'Corrupt source file' },
  { isrc: 'GBKQU2686073', user: 'kofimensah.gh@gmail.com', releaseDate: 'July 10th, 2026', reason: 'Delivery failed' },
  { isrc: 'GBKQU2686052', user: 'andrebaptiste.kompa@gmail.com', releaseDate: 'July 3rd, 2026', reason: 'Encoding timeout' },
]

export interface VevoChannelRow {
  id: number
  artist: string
  channel: string
  status: 'Complete' | 'Problematic' | 'Pending'
  user: string
  slots: number
  purchased: string
}

export const vevoChannels: VevoChannelRow[] = [
  { id: 30241, artist: 'Maya Linden', channel: 'MayaLindenVEVO', status: 'Complete', user: 'maya.linden@gmail.com', slots: 2, purchased: 'July 22nd, 2026' },
  { id: 30240, artist: 'Night Parade', channel: 'NightParadeVEVO', status: 'Pending', user: 'tomokafor.music@gmail.com', slots: 4, purchased: 'July 21st, 2026' },
  { id: 30239, artist: 'Sofia Reyes', channel: 'SofiaReyesVEVO', status: 'Complete', user: 'sofia.reyes.audio@outlook.com', slots: 1, purchased: 'July 19th, 2026' },
  { id: 30238, artist: 'Faded Lines', channel: 'FadedLinesVEVO', status: 'Problematic', user: 'dkrause@fadedlines.de', slots: 2, purchased: 'July 18th, 2026' },
  { id: 30237, artist: 'Jesse Whitfield', channel: 'JesseWhitfieldVEVO', status: 'Complete', user: 'jwhitfield.beats@gmail.com', slots: 3, purchased: 'July 16th, 2026' },
  { id: 30236, artist: 'Elif Kaya', channel: 'ElifKayaVEVO', status: 'Complete', user: 'elif.kaya.music@gmail.com', slots: 1, purchased: 'July 14th, 2026' },
  { id: 30235, artist: 'Bellini Records', channel: 'BelliniRecordsVEVO', status: 'Pending', user: 'marco@bellinirecords.it', slots: 6, purchased: 'July 12th, 2026' },
  { id: 30234, artist: 'Louis Moreau', channel: 'LouisMoreauVEVO', status: 'Complete', user: 'lmoreau@hotmail.fr', slots: 2, purchased: 'July 10th, 2026' },
  { id: 30233, artist: 'Hana Sato', channel: 'HanaSatoVEVO', status: 'Problematic', user: 'hana.sato.tokyo@gmail.com', slots: 1, purchased: 'July 8th, 2026' },
  { id: 30232, artist: 'Dusk Audio', channel: 'DuskAudioVEVO', status: 'Complete', user: 'v.petrov@duskaudio.bg', slots: 4, purchased: 'July 6th, 2026' },
]

export interface VevoVideoRow {
  id: number
  artist: string
  video: string
  channel: string
  status: 'Sent' | 'Processing' | 'Rejected'
}

export const vevoVideos: VevoVideoRow[] = [
  { id: 27392, artist: 'Maya Linden', video: 'Golden Hour (Official Video)', channel: 'MayaLindenVEVO', status: 'Sent' },
  { id: 27391, artist: 'Night Parade', video: 'Neon Rivers', channel: 'NightParadeVEVO', status: 'Processing' },
  { id: 27390, artist: 'Sofia Reyes', video: 'Cielo Abierto', channel: 'SofiaReyesVEVO', status: 'Sent' },
  { id: 27389, artist: 'Jesse Whitfield', video: 'Late Shift', channel: '', status: 'Rejected' },
  { id: 27388, artist: 'Elif Kaya', video: 'Istanbul Nights', channel: 'ElifKayaVEVO', status: 'Sent' },
  { id: 27387, artist: 'Louis Moreau', video: 'Nuit Blanche (Live)', channel: 'LouisMoreauVEVO', status: 'Processing' },
  { id: 27386, artist: 'Hana Sato', video: 'Paper Lanterns', channel: '', status: 'Rejected' },
  { id: 27385, artist: 'Faded Lines', video: 'Static Bloom', channel: 'FadedLinesVEVO', status: 'Sent' },
  { id: 27384, artist: 'Kofi Mensah', video: 'Accra Sunrise', channel: 'KofiMensahVEVO', status: 'Sent' },
  { id: 27383, artist: 'Emma Lindqvist', video: 'Polar Nights', channel: 'EmmaLindqvistVEVO', status: 'Processing' },
]

export interface ChannelNameUpdateRow {
  id: number
  date: string
  channelName: string
  changedBy: string
  oldValue: string
  newValue: string
}

export const vevoNameUpdates: ChannelNameUpdateRow[] = [
  { id: 9101, date: 'July 28th, 2026', channelName: 'MayaLindenVEVO', changedBy: 'maya.linden@gmail.com', oldValue: 'Maya L', newValue: 'Maya Linden' },
  { id: 9100, date: 'July 27th, 2026', channelName: 'NightParadeVEVO', changedBy: 'tomokafor.music@gmail.com', oldValue: 'Nite Parade', newValue: 'Night Parade' },
  { id: 9099, date: 'July 26th, 2026', channelName: 'SofiaReyesVEVO', changedBy: 'sofia.reyes.audio@outlook.com', oldValue: 'Sofia R.', newValue: 'Sofia Reyes' },
  { id: 9098, date: 'July 25th, 2026', channelName: 'FadedLinesVEVO', changedBy: 'dkrause@fadedlines.de', oldValue: 'Faded Lines Band', newValue: 'Faded Lines' },
  { id: 9097, date: 'July 24th, 2026', channelName: 'ElifKayaVEVO', changedBy: 'elif.kaya.music@gmail.com', oldValue: 'Elif K Music', newValue: 'Elif Kaya' },
  { id: 9096, date: 'July 23rd, 2026', channelName: 'LouisMoreauVEVO', changedBy: 'lmoreau@hotmail.fr', oldValue: 'DJ Moreau', newValue: 'Louis Moreau' },
  { id: 9095, date: 'July 22nd, 2026', channelName: 'HanaSatoVEVO', changedBy: 'hana.sato.tokyo@gmail.com', oldValue: 'Hana S.', newValue: 'Hana Sato' },
  { id: 9094, date: 'July 21st, 2026', channelName: 'KofiMensahVEVO', changedBy: 'kofimensah.gh@gmail.com', oldValue: 'Kofi M', newValue: 'Kofi Mensah' },
]

// ── Publishing ───────────────────────────────────────────────────────────────

export interface WorkRow {
  id: number
  title: string
  ownerEmail: string
  country: string
  registeredDate: string
  readyDate: string
  status: 'Registered' | 'Pending Review' | 'Rejected'
}

export const publishingWorks: WorkRow[] = [
  { id: 88410, title: 'Golden Hour', ownerEmail: 'maya.linden@gmail.com', country: 'Mexico', registeredDate: 'July 12th, 2026', readyDate: 'July 13th, 2026', status: 'Registered' },
  { id: 88409, title: 'Neon Rivers', ownerEmail: 'tomokafor.music@gmail.com', country: 'United Kingdom', registeredDate: 'July 11th, 2026', readyDate: 'July 12th, 2026', status: 'Registered' },
  { id: 88408, title: 'Cielo Abierto', ownerEmail: 'sofia.reyes.audio@outlook.com', country: 'Spain', registeredDate: 'July 10th, 2026', readyDate: 'July 11th, 2026', status: 'Pending Review' },
  { id: 88407, title: 'Static Bloom', ownerEmail: 'dkrause@fadedlines.de', country: 'Germany', registeredDate: 'July 9th, 2026', readyDate: 'July 10th, 2026', status: 'Registered' },
  { id: 88406, title: 'Late Shift', ownerEmail: 'jwhitfield.beats@gmail.com', country: 'United States', registeredDate: 'July 8th, 2026', readyDate: 'July 9th, 2026', status: 'Rejected' },
  { id: 88405, title: 'Istanbul Nights', ownerEmail: 'elif.kaya.music@gmail.com', country: 'Türkiye', registeredDate: 'July 7th, 2026', readyDate: 'July 8th, 2026', status: 'Registered' },
  { id: 88404, title: 'Nuit Blanche', ownerEmail: 'lmoreau@hotmail.fr', country: 'France', registeredDate: 'July 6th, 2026', readyDate: 'July 7th, 2026', status: 'Pending Review' },
  { id: 88403, title: 'Paper Lanterns', ownerEmail: 'hana.sato.tokyo@gmail.com', country: 'Japan', registeredDate: 'July 5th, 2026', readyDate: 'July 6th, 2026', status: 'Registered' },
  { id: 88402, title: 'Accra Sunrise', ownerEmail: 'kofimensah.gh@gmail.com', country: 'Ghana', registeredDate: 'July 4th, 2026', readyDate: 'July 5th, 2026', status: 'Registered' },
  { id: 88401, title: 'Polar Nights', ownerEmail: 'emma.lindqvist@gmail.com', country: 'Sweden', registeredDate: 'July 3rd, 2026', readyDate: 'July 4th, 2026', status: 'Rejected' },
]

export interface PublishingUpdateRow {
  id: number
  date: string
  userEmail: string
  changedBy: string
  oldValue: string
  newValue: string
}

export const publishingNameUpdates: PublishingUpdateRow[] = [
  { id: 5210, date: 'July 28th, 2026', userEmail: 'maya.linden@gmail.com', changedBy: 'maya.linden@gmail.com', oldValue: 'Maya Lindon', newValue: 'Maya Linden' },
  { id: 5209, date: 'July 27th, 2026', userEmail: 'tomokafor.music@gmail.com', changedBy: 'tomokafor.music@gmail.com', oldValue: 'Thomas Okafor', newValue: 'Tom Okafor' },
  { id: 5208, date: 'July 26th, 2026', userEmail: 'sofia.reyes.audio@outlook.com', changedBy: 'sofia.reyes.audio@outlook.com', oldValue: 'Sofía R. Morales', newValue: 'Sofia Reyes' },
  { id: 5207, date: 'July 25th, 2026', userEmail: 'dkrause@fadedlines.de', changedBy: 'dkrause@fadedlines.de', oldValue: 'D. Krause', newValue: 'Daniel Krause' },
  { id: 5206, date: 'July 24th, 2026', userEmail: 'jwhitfield.beats@gmail.com', changedBy: 'jwhitfield.beats@gmail.com', oldValue: 'Jess Whitfield', newValue: 'Jesse Whitfield' },
  { id: 5205, date: 'July 23rd, 2026', userEmail: 'elif.kaya.music@gmail.com', changedBy: 'elif.kaya.music@gmail.com', oldValue: 'Elif Kayaa', newValue: 'Elif Kaya' },
  { id: 5204, date: 'July 22nd, 2026', userEmail: 'lmoreau@hotmail.fr', changedBy: 'lmoreau@hotmail.fr', oldValue: 'Louis-Marie Moreau', newValue: 'Louis Moreau' },
  { id: 5203, date: 'July 21st, 2026', userEmail: 'hana.sato.tokyo@gmail.com', changedBy: 'hana.sato.tokyo@gmail.com', oldValue: 'Hana Satoh', newValue: 'Hana Sato' },
]

export const publishingIpiUpdates: PublishingUpdateRow[] = [
  { id: 6310, date: 'July 28th, 2026', userEmail: 'emma.lindqvist@gmail.com', changedBy: 'emma.lindqvist@gmail.com', oldValue: '', newValue: '578204916' },
  { id: 6309, date: 'July 27th, 2026', userEmail: 'gortiz.production@gmail.com', changedBy: 'gortiz.production@gmail.com', oldValue: '', newValue: '463901827' },
  { id: 6308, date: 'July 26th, 2026', userEmail: 'kofimensah.gh@gmail.com', changedBy: 'kofimensah.gh@gmail.com', oldValue: '', newValue: '719305482' },
  { id: 6307, date: 'July 25th, 2026', userEmail: 'v.petrov@duskaudio.bg', changedBy: 'v.petrov@duskaudio.bg', oldValue: '', newValue: '850612943' },
  { id: 6306, date: 'July 24th, 2026', userEmail: 'chloebennettmusic@gmail.com', changedBy: 'chloebennettmusic@gmail.com', oldValue: '', newValue: '294817605' },
  { id: 6305, date: 'July 23rd, 2026', userEmail: 'andrebaptiste.kompa@gmail.com', changedBy: 'andrebaptiste.kompa@gmail.com', oldValue: '', newValue: '638140279' },
]
