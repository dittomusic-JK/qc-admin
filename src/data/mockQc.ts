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
  autoChecks: QcAutoCheck[]
  tracks: QcReviewTrack[]
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

export const qcShift = {
  hoursElapsed: 4.5,
  reviewed: 34,
  approved: 29,
  flagged: 5,
}

export interface QcTeamMember {
  name: string
  initials: string
  you?: boolean
  online: boolean
  reviewedToday: number
  perHour: number
  approvedPct: number
  accuracyPct: number
  week: number[]
}

// Team target: 7 releases/hour at ≥97% audit accuracy.
export const qcTeamTarget = { perHour: 7, accuracyPct: 97 }

export const qcTeam: QcTeamMember[] = [
  { name: 'Rosa Delgado', initials: 'RD', online: true, reviewedToday: 61, perHour: 9.4, approvedPct: 84, accuracyPct: 99.1, week: [52, 58, 49, 61, 55, 63, 61] },
  { name: 'Priya Nair', initials: 'PN', online: true, reviewedToday: 57, perHour: 8.8, approvedPct: 88, accuracyPct: 98.6, week: [44, 51, 55, 48, 57, 54, 57] },
  { name: 'Milo Fenwick', initials: 'MF', online: true, reviewedToday: 52, perHour: 8.0, approvedPct: 81, accuracyPct: 99.4, week: [47, 45, 50, 52, 49, 51, 52] },
  { name: 'James Keane', initials: 'JK', you: true, online: true, reviewedToday: 34, perHour: 7.6, approvedPct: 85, accuracyPct: 98.2, week: [38, 41, 36, 44, 40, 37, 34] },
  { name: 'Tessa Marchetti', initials: 'TM', online: true, reviewedToday: 41, perHour: 6.3, approvedPct: 90, accuracyPct: 97.8, week: [45, 42, 39, 41, 44, 40, 41] },
  { name: 'Callum Boyd', initials: 'CB', online: false, reviewedToday: 28, perHour: 5.6, approvedPct: 92, accuracyPct: 96.4, week: [31, 29, 33, 27, 30, 26, 28] },
  { name: 'Aisha Bello', initials: 'AB', online: true, reviewedToday: 24, perHour: 4.9, approvedPct: 79, accuracyPct: 98.9, week: [28, 25, 22, 26, 23, 27, 24] },
  { name: 'Jonas Weber', initials: 'JW', online: false, reviewedToday: 17, perHour: 4.1, approvedPct: 94, accuracyPct: 95.2, week: [22, 19, 24, 18, 21, 16, 17] },
]

export const qcTeamToday = {
  reviewed: 314,
  avgPerHour: 6.8,
  approvedPct: 86,
  queueRemaining: 48,
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
