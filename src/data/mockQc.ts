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
