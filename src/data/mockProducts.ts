// Mock data for the Products / Stores / Royalties area of the redesign prototype.
// All names, emails and figures are invented — shaped to match what the real
// admin displays, never copied from it.

// ── Stores ────────────────────────────────────────────────────────────────────

export interface StoreRow {
  id: number
  code: string
  name: string
  description: string
  status: 'Live' | 'Pending' | 'Discontinued'
}

export const stores: StoreRow[] = [
  { id: 1, code: 'SPOT', name: 'Spotify', description: 'Global streaming delivery including Spotify Free and Premium tiers, canvas and clips support.', status: 'Live' },
  { id: 2, code: 'APPL', name: 'Apple Music', description: 'Streaming and download delivery to Apple Music and the iTunes Store across all territories.', status: 'Live' },
  { id: 3, code: 'TIDL', name: 'TIDAL', description: 'Lossless and hi-res streaming delivery with artist-first payout structure.', status: 'Live' },
  { id: 4, code: 'DEEZ', name: 'Deezer', description: 'Streaming delivery to Deezer including Flow personalisation and lyrics display.', status: 'Live' },
  { id: 5, code: 'AMZN', name: 'Amazon Music', description: 'Streaming and purchase delivery covering Amazon Music Unlimited, Prime and HD tiers.', status: 'Live' },
  { id: 6, code: 'YTMU', name: 'YouTube Music', description: 'Audio streaming delivery to YouTube Music including art tracks and official audio.', status: 'Live' },
  { id: 7, code: 'BEAT', name: 'Beatport', description: 'Specialist electronic music store for DJ downloads, charts and hype picks.', status: 'Live' },
  { id: 8, code: 'BOOM', name: 'Boomplay', description: 'Leading African streaming platform delivery across Nigeria, Ghana, Kenya and beyond.', status: 'Pending' },
  { id: 9, code: 'TIKT', name: 'TikTok', description: 'Short-form video sound library delivery including TikTok and CapCut commercial libraries.', status: 'Live' },
  { id: 10, code: 'INST', name: 'Instagram', description: 'Music delivery for Instagram and Facebook Reels, Stories and profile song features.', status: 'Live' },
  { id: 11, code: 'PNDR', name: 'Pandora', description: 'US radio-style streaming delivery including Pandora Premium on-demand tier.', status: 'Live' },
  { id: 12, code: '7DIG', name: '7digital', description: 'Legacy download storefront and B2B catalogue feed, no longer accepting new deliveries.', status: 'Discontinued' },
]

// ── Pending services ──────────────────────────────────────────────────────────

export type PendingServiceName = 'Claim YouTube Royalties' | 'Name Your Label' | 'Charts Registration'

export interface PendingServiceRow {
  id: number
  releaseName: string
  serviceName: PendingServiceName
  releaseDate: string
  created: string
}

export const pendingServices: PendingServiceRow[] = [
  { id: 90211, releaseName: 'Midnight Harbour', serviceName: 'Claim YouTube Royalties', releaseDate: 'August 14th, 2026', created: 'July 28th, 2026' },
  { id: 90212, releaseName: 'Golden Hour (Deluxe)', serviceName: 'Charts Registration', releaseDate: 'August 7th, 2026', created: 'July 27th, 2026' },
  { id: 90213, releaseName: 'Paper Planes EP', serviceName: 'Name Your Label', releaseDate: 'July 31st, 2026', created: 'July 26th, 2026' },
  { id: 90214, releaseName: 'Sueños de Verano', serviceName: 'Claim YouTube Royalties', releaseDate: 'August 21st, 2026', created: 'July 25th, 2026' },
  { id: 90215, releaseName: 'Static Bloom', serviceName: 'Charts Registration', releaseDate: 'August 28th, 2026', created: 'July 24th, 2026' },
  { id: 90216, releaseName: 'Northern Lights, Vol. 2', serviceName: 'Name Your Label', releaseDate: 'September 4th, 2026', created: 'July 22nd, 2026' },
  { id: 90217, releaseName: 'Velvet Underpass', serviceName: 'Claim YouTube Royalties', releaseDate: 'August 14th, 2026', created: 'July 21st, 2026' },
  { id: 90218, releaseName: 'Kigali Nights', serviceName: 'Charts Registration', releaseDate: 'August 7th, 2026', created: 'July 19th, 2026' },
  { id: 90219, releaseName: 'Last Train Home', serviceName: 'Claim YouTube Royalties', releaseDate: 'July 24th, 2026', created: 'July 17th, 2026' },
  { id: 90220, releaseName: 'Ceramic Hearts', serviceName: 'Name Your Label', releaseDate: 'August 28th, 2026', created: 'July 15th, 2026' },
]

// ── Promo purchases ───────────────────────────────────────────────────────────

export interface PromoPurchaseRow {
  id: number
  package: string
  payment: string
  customer: string
  email: string
  status: 'Completed' | 'Pushed by staff' | 'Succeeded'
  date: string
}

export const promoPurchases: PromoPurchaseRow[] = [
  { id: 44120, package: 'Press & Social Media', payment: '£199.00', customer: 'Maya Linden', email: 'maya.linden@gmail.com', status: 'Completed', date: 'July 28th, 2026' },
  { id: 44119, package: 'Press & Social Media', payment: '$249.00', customer: 'Jesse Whitfield', email: 'jwhitfield.beats@gmail.com', status: 'Succeeded', date: 'July 27th, 2026' },
  { id: 44118, package: 'Press & Social Media', payment: '€219.00', customer: 'Marco Bellini', email: 'marco@bellinirecords.it', status: 'Completed', date: 'July 26th, 2026' },
  { id: 44117, package: 'Press & Social Media', payment: '₹18,499.00', customer: 'Priya Nair', email: 'priya.nair.songs@gmail.com', status: 'Pushed by staff', date: 'July 24th, 2026' },
  { id: 44116, package: 'Press & Social Media', payment: 'R3,899.00', customer: 'Kofi Mensah', email: 'kofimensah.gh@gmail.com', status: 'Completed', date: 'July 22nd, 2026' },
  { id: 44115, package: 'Press & Social Media', payment: '£199.00', customer: 'Chloe Bennett', email: 'chloebennettmusic@gmail.com', status: 'Succeeded', date: 'July 20th, 2026' },
  { id: 44114, package: 'Press & Social Media', payment: '$249.00', customer: 'Gabriel Ortiz', email: 'gortiz.production@gmail.com', status: 'Completed', date: 'July 18th, 2026' },
  { id: 44113, package: 'Press & Social Media', payment: '€219.00', customer: 'Isabelle Fontaine', email: 'isafontaine@gmail.com', status: 'Pushed by staff', date: 'July 15th, 2026' },
  { id: 44112, package: 'Press & Social Media', payment: '£199.00', customer: 'Tom Okafor', email: 'tomokafor.music@gmail.com', status: 'Completed', date: 'July 12th, 2026' },
  { id: 44111, package: 'Press & Social Media', payment: '$249.00', customer: 'Nina Vasquez', email: 'ninavmusic@icloud.com', status: 'Succeeded', date: 'July 9th, 2026' },
]

// ── Discounts ─────────────────────────────────────────────────────────────────

export interface DiscountRow {
  id: number
  code: string
  /** Display value: percentage like "20.00%" or fixed amount like "£19.00". */
  type: string
  started: string
  /** Display date, or null when the discount never expires. */
  expires: string | null
  /** ISO date used to derive Expired status, or null when no expiry. */
  expiresIso: string | null
  redeemed: number
  limit: number
}

export const discounts: DiscountRow[] = [
  { id: 701, code: 'WEEKEND202', type: '20.00%', started: 'July 24th, 2026', expires: 'August 3rd, 2026', expiresIso: '2026-08-03', redeemed: 341, limit: 1000 },
  { id: 702, code: 'NEWCUSTOMER', type: '15.00%', started: 'January 1st, 2026', expires: null, expiresIso: null, redeemed: 4182, limit: 10000 },
  { id: 703, code: 'INSTAGRAM', type: '£19.00', started: 'June 10th, 2026', expires: 'September 30th, 2026', expiresIso: '2026-09-30', redeemed: 88, limit: 500 },
  { id: 704, code: 'SUMMER26', type: '25.00%', started: 'June 1st, 2026', expires: 'August 31st, 2026', expiresIso: '2026-08-31', redeemed: 762, limit: 2000 },
  { id: 705, code: 'PODCAST10', type: '10.00%', started: 'March 3rd, 2026', expires: null, expiresIso: null, redeemed: 129, limit: 5000 },
  { id: 706, code: 'SPRINGFLASH', type: '30.00%', started: 'April 10th, 2026', expires: 'April 13th, 2026', expiresIso: '2026-04-13', redeemed: 486, limit: 1500 },
  { id: 707, code: 'LABELUP', type: '£49.00', started: 'February 14th, 2026', expires: 'December 31st, 2026', expiresIso: '2026-12-31', redeemed: 54, limit: 250 },
  { id: 708, code: 'BLACKFRI25', type: '40.00%', started: 'November 24th, 2025', expires: 'December 1st, 2025', expiresIso: '2025-12-01', redeemed: 2914, limit: 5000 },
  { id: 709, code: 'STUDENT', type: '15.00%', started: 'September 1st, 2025', expires: null, expiresIso: null, redeemed: 1046, limit: 20000 },
  { id: 710, code: 'RADIOWAVE', type: '£9.00', started: 'May 5th, 2026', expires: 'July 5th, 2026', expiresIso: '2026-07-05', redeemed: 200, limit: 200 },
  { id: 711, code: 'COMEBACK', type: '20.00%', started: 'July 1st, 2026', expires: 'October 1st, 2026', expiresIso: '2026-10-01', redeemed: 100, limit: 100 },
  { id: 712, code: 'PARTNERVIP', type: '50.00%', started: 'January 15th, 2026', expires: null, expiresIso: null, redeemed: 3, limit: 100 },
]

export interface DiscountGroupRow {
  id: number
  name: string
  discounts: number
  created: string
}

export const discountGroups: DiscountGroupRow[] = [
  { id: 31, name: 'Seasonal Campaigns', discounts: 6, created: 'January 8th, 2026' },
  { id: 32, name: 'Influencer Codes', discounts: 14, created: 'March 19th, 2026' },
  { id: 33, name: 'Retention Offers', discounts: 4, created: 'May 2nd, 2026' },
  { id: 34, name: 'Partner Programme', discounts: 9, created: 'June 27th, 2026' },
]

// ── Royalties (monthly figures in GBP, January → December) ────────────────────

export interface RoyaltyYear {
  year: number
  /** 12 entries, Jan → Dec. 0 means no data yet (future months). */
  months: number[]
}

export const youtubeMusicRoyalties: RoyaltyYear[] = [
  { year: 2026, months: [171240.18, 165887.42, 182304.77, 176092.35, 189440.12, 194873.66, 201511.09, 0, 0, 0, 0, 0] },
  { year: 2025, months: [141220.54, 138905.11, 149877.63, 146201.98, 152340.27, 158114.72, 161092.45, 163887.19, 159442.86, 166320.41, 172208.94, 181336.55] },
  { year: 2024, months: [112480.36, 109912.84, 118653.27, 116004.51, 121877.09, 125340.66, 128991.13, 130256.78, 127118.42, 132664.9, 138021.37, 144290.12] },
  { year: 2023, months: [90312.45, 88104.92, 94886.31, 92450.77, 97218.4, 99873.15, 102340.88, 103991.26, 101228.63, 105874.02, 110236.49, 115482.9] },
  { year: 2022, months: [71204.83, 69887.15, 74921.6, 73305.48, 76840.22, 78912.37, 81034.55, 82446.91, 80217.34, 83891.06, 87204.48, 91337.72] },
  { year: 2021, months: [52410.27, 51126.84, 55873.19, 54204.63, 57118.95, 58840.31, 60272.48, 61390.85, 59684.12, 62447.29, 65031.76, 68229.44] },
]

export const youtubeContentIdRoyalties: RoyaltyYear[] = [
  { year: 2026, months: [438204.91, 421887.35, 462340.18, 449012.77, 476883.24, 491240.6, 508114.37, 0, 0, 0, 0, 0] },
  { year: 2025, months: [361204.48, 352887.92, 378440.15, 369211.63, 386024.77, 397882.31, 405240.86, 411873.29, 402118.54, 417336.9, 431204.27, 452880.66] },
  { year: 2024, months: [288440.19, 281204.55, 302887.72, 295336.4, 308914.83, 317240.28, 324882.61, 329104.97, 321440.35, 333887.16, 344212.58, 361930.44] },
  { year: 2023, months: [230114.72, 224887.39, 241336.85, 235204.12, 246882.57, 253440.9, 259212.36, 262887.74, 256104.28, 266330.61, 275448.19, 288214.5] },
  { year: 2022, months: [181204.36, 176887.81, 190240.27, 185336.64, 194212.9, 199887.35, 204440.78, 207212.14, 201887.53, 209930.88, 217204.32, 227448.7] },
  { year: 2021, months: [140212.84, 136887.29, 147440.65, 143204.92, 150336.28, 154887.61, 158212.05, 160440.39, 156204.87, 162887.24, 168930.58, 176448.96] },
]

export const youtubeMcnRoyalties: RoyaltyYear[] = [
  { year: 2026, months: [58204.42, 55887.19, 61340.86, 59212.34, 63104.71, 65440.28, 67882.95, 0, 0, 0, 0, 0] },
  { year: 2025, months: [47204.63, 45887.28, 49930.74, 48336.11, 51204.48, 52887.92, 54212.35, 55440.79, 53887.16, 56330.52, 58448.97, 61930.4] },
  { year: 2024, months: [37440.27, 36204.81, 39887.16, 38336.53, 40912.98, 42204.34, 43440.7, 44212.15, 42887.59, 44930.94, 46882.38, 49448.75] },
  { year: 2023, months: [29887.14, 28912.69, 31440.25, 30336.82, 32204.17, 33440.53, 34212.98, 34887.34, 33912.71, 35330.06, 36882.42, 38930.87] },
  { year: 2022, months: [23440.58, 22887.13, 24930.49, 24104.86, 25440.21, 26212.67, 26887.02, 27440.48, 26612.83, 27930.29, 29104.64, 30882.9] },
  { year: 2021, months: [18204.31, 17887.76, 19440.12, 18930.58, 19887.93, 20440.39, 20930.84, 21336.2, 20730.65, 21887.01, 22740.46, 24104.82] },
]

export const spotifyRoyalties: RoyaltyYear[] = [
  { year: 2026, months: [612441.23, 588102.77, 654880.15, 671239.48, 702563.91, 731904.56, 769983.78, 0, 0, 0, 0, 0] },
  { year: 2025, months: [521204.36, 508887.91, 546330.27, 534212.64, 559887.9, 574440.35, 586204.78, 594887.14, 581336.59, 601204.95, 622448.38, 651930.74] },
  { year: 2024, months: [421336.48, 411204.93, 441887.29, 431930.66, 452204.12, 464887.57, 474440.91, 481204.37, 470336.82, 486212.18, 502887.63, 526448.99] },
  { year: 2023, months: [336204.75, 328440.21, 352887.66, 344930.13, 361204.58, 371336.94, 379212.39, 384887.75, 376104.2, 388930.56, 402440.02, 421887.47] },
  { year: 2022, months: [264440.82, 258204.27, 277887.73, 271336.19, 284212.55, 292440.9, 298887.36, 303204.71, 296330.27, 306448.62, 317212.08, 332887.53] },
  { year: 2021, months: [204212.96, 199440.41, 214887.87, 209336.24, 219204.69, 225440.15, 230887.5, 234212.86, 228930.31, 236887.77, 245448.22, 257440.68] },
]

export const appleMusicRoyalties: RoyaltyYear[] = [
  { year: 2026, months: [291204.57, 281887.12, 306440.68, 298912.05, 312204.41, 322887.86, 334440.32, 0, 0, 0, 0, 0] },
  { year: 2025, months: [244887.74, 238204.29, 254930.65, 249336.02, 259887.47, 266212.93, 271887.38, 276440.84, 269930.29, 278212.66, 287440.11, 300887.56] },
  { year: 2024, months: [197440.83, 192204.38, 205887.74, 200930.21, 209440.66, 214887.02, 219212.47, 222440.93, 217336.38, 224930.74, 232204.2, 243887.65] },
  { year: 2023, months: [157887.92, 153440.47, 164204.83, 160336.3, 167212.75, 171887.21, 175440.66, 178204.02, 173930.47, 179887.83, 186212.29, 195440.74] },
  { year: 2022, months: [124212.51, 120887.06, 129440.42, 126330.89, 131887.34, 135440.7, 138212.16, 140440.51, 136930.97, 141887.33, 146882.78, 154212.24] },
  { year: 2021, months: [96440.68, 93887.23, 100440.59, 98104.06, 102336.42, 105212.87, 107440.33, 109212.69, 106440.14, 110336.5, 114212.95, 119887.41] },
]
