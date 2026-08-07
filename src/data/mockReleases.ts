// Mock data for the releases area of the redesign prototype. All names, emails,
// titles and identifiers are invented — shaped like the real admin, never copied.

export interface ReleaseListRow {
  id: number
  title: string
  artist: string
  barcode: string
  genre: string
  userEmail: string
  status: 'Active' | 'Incomplete' | 'Takedown'
}

export const releases: ReleaseListRow[] = [
  { id: 6142660, title: 'El camión de las cinco', artist: 'Juan Gomez', barcode: '5063721994127', genre: 'Regional Mexicano', userEmail: 'maya.linden@gmail.com', status: 'Incomplete' },
  { id: 6142655, title: 'Neon Rivers', artist: 'Kaida Bloom', barcode: '5063721994103', genre: 'Electronic', userEmail: 'kaidabloom.music@gmail.com', status: 'Active' },
  { id: 6142648, title: 'Sombras del Sur', artist: 'Los Vientos', barcode: '5063721994080', genre: 'Latin', userEmail: 'losvientosbanda@gmail.com', status: 'Active' },
  { id: 6142640, title: 'Paper Planes at Dawn', artist: 'Ivy Calloway', barcode: '5063721994059', genre: 'Indie Pop', userEmail: 'ivycallowaymusic@outlook.com', status: 'Active' },
  { id: 6142633, title: 'Gravel & Gold', artist: 'The Harlan Brothers', barcode: '5063721994028', genre: 'Country', userEmail: 'harlanbrosband@gmail.com', status: 'Takedown' },
  { id: 6142621, title: 'Midnight Argument', artist: 'Sable Point', barcode: '5063721993991', genre: 'Alternative Rock', userEmail: 'sablepointband@gmail.com', status: 'Active' },
  { id: 6142615, title: 'Lluvia de Abril', artist: 'Camila Duarte', barcode: '', genre: 'Latin Pop', userEmail: 'camiladuarte.songs@gmail.com', status: 'Incomplete' },
  { id: 6142608, title: 'Static Bloom', artist: 'Velvet Antenna', barcode: '5063721993946', genre: 'Shoegaze', userEmail: 'velvetantenna@icloud.com', status: 'Active' },
  { id: 6142597, title: 'Ochre Skies', artist: 'Femi Alade', barcode: '5063721993915', genre: 'Afrobeats', userEmail: 'femialade.music@gmail.com', status: 'Active' },
  { id: 6142590, title: 'Last Train to Meridian', artist: 'Colt & Wren', barcode: '5063721993892', genre: 'Folk', userEmail: 'coltandwren@gmail.com', status: 'Active' },
  { id: 6142584, title: 'Hologram Heart', artist: 'MIRA-9', barcode: '5063721993861', genre: 'Synthwave', userEmail: 'mira9.official@gmail.com', status: 'Takedown' },
  { id: 6142577, title: 'Cinder Lane', artist: 'Petra Holm', barcode: '5063721993830', genre: 'Singer-Songwriter', userEmail: 'petraholm.music@gmail.com', status: 'Active' },
]

export const releaseDetail = {
  id: 6142660,
  title: 'El camión de las cinco',
  artist: 'Juan Gomez',
  barcode: '5063721994127',
  label: 'Latin Dreams',
  primaryGenre: 'Regional Mexicano',
  secondaryGenre: 'Latin',
  copyrightYear: '2026',
  productionYear: '2026',
  priceBand: 'Mid',
  releaseDate: 'August 14th, 2026',
  trackCount: 12,
}

export interface CannedResponse {
  id: number
  category: 'Artwork' | 'Audio' | 'Metadata' | 'Lyrics'
  title: string
  en: string
  es: string
}

export const cannedResponses: CannedResponse[] = [
  {
    id: 1,
    category: 'Artwork',
    title: 'Artwork guidelines',
    en: 'Your artwork does not meet store requirements. Please upload a square image of at least 3000 x 3000 pixels with no blurred edges, URLs, social handles or pricing information visible anywhere on the cover.',
    es: 'La portada no cumple los requisitos de las tiendas. Sube una imagen cuadrada de al menos 3000 x 3000 pixeles, sin bordes borrosos y sin URLs, redes sociales o precios visibles en ninguna parte de la portada.',
  },
  {
    id: 2,
    category: 'Audio',
    title: 'Audio quality below minimum',
    en: 'One or more tracks were uploaded below the minimum accepted quality. Please re-upload your audio as WAV or FLAC at 16-bit / 44.1 kHz or higher. MP3 sources upsampled to WAV will still be rejected by stores.',
    es: 'Una o mas pistas se subieron por debajo de la calidad minima aceptada. Vuelve a subir el audio en WAV o FLAC a 16 bits / 44.1 kHz o superior. Los MP3 convertidos a WAV seguiran siendo rechazados por las tiendas.',
  },
  {
    id: 3,
    category: 'Metadata',
    title: 'Title formatting corrections',
    en: 'Your release or track titles do not follow store formatting rules. Please use standard capitalisation, avoid all-caps words, and only include version information in brackets, for example (Acoustic) or (Live).',
    es: 'Los titulos del lanzamiento o de las pistas no siguen las reglas de formato de las tiendas. Usa mayusculas estandar, evita palabras totalmente en mayusculas e incluye la version solo entre parentesis, por ejemplo (Acoustic) o (Live).',
  },
  {
    id: 4,
    category: 'Lyrics',
    title: 'Explicit content mislabelled',
    en: 'Your release contains explicit lyrics but was not marked as explicit. Please update the explicit flag on the affected tracks before we can deliver to stores, or upload a clean version if one exists.',
    es: 'El lanzamiento contiene letras explicitas pero no se marco como explicito. Actualiza la marca de contenido explicito en las pistas afectadas antes de la entrega a tiendas, o sube una version limpia si existe.',
  },
]

// --- Release detail sub-sections (mirrors the live admin's view_music sections) ---

export interface ReleaseTrack {
  number: number
  title: string
  mixVersion: string
  isrc: string
  language: string
  explicit: 'Not Explicit' | 'Explicit' | 'Clean'
  aiLanguageMatch: boolean
  aiGenerated: boolean
  file: string
  streams: number
  duration: number
}

export const releaseTracks: ReleaseTrack[] = [
  { number: 1, title: 'El camión de las cinco', mixVersion: '', isrc: 'GXLF32651134', language: 'Spanish', explicit: 'Not Explicit', aiLanguageMatch: true, aiGenerated: false, file: 'tracks/juan-gomez-el-camion-2026-07-30.mp3', streams: 123, duration: 194 },
  { number: 2, title: 'Camino de Vuelta', mixVersion: 'Radio Edit', isrc: 'GXLF32651135', language: 'Spanish', explicit: 'Not Explicit', aiLanguageMatch: true, aiGenerated: false, file: 'tracks/juan-gomez-camino-de-vuelta-2026-07-30.mp3', streams: 87, duration: 211 },
  { number: 3, title: 'Luna de Barrio', mixVersion: '', isrc: 'GXLF32651136', language: 'Spanish', explicit: 'Explicit', aiLanguageMatch: false, aiGenerated: false, file: 'tracks/juan-gomez-luna-de-barrio-2026-07-30.mp3', streams: 45, duration: 176 },
]

export const releaseArtists = [
  { name: 'Juan Gomez', type: 'Primary' },
  { name: 'Los Vientos', type: 'Featuring' },
]

export interface StoreDelivery {
  store: string
  online: boolean
  type: string
  status: 'waiting' | 'sent' | 'failed'
  createdAt: string
  sentAt: string
}

export const releaseDeliveries: StoreDelivery[] = [
  { store: 'iTunes', online: false, type: 'delivery', status: 'waiting', createdAt: 'Thu, Jul 30th 2026, 09:20', sentAt: '' },
  { store: 'Spotify', online: false, type: 'delivery', status: 'waiting', createdAt: 'Thu, Jul 30th 2026, 09:20', sentAt: '' },
  { store: 'Amazon', online: true, type: 'delivery', status: 'sent', createdAt: 'Thu, Jul 30th 2026, 09:20', sentAt: 'Thu, Jul 30th 2026, 11:42' },
  { store: 'Audible Magic', online: false, type: 'delivery', status: 'waiting', createdAt: 'Thu, Jul 30th 2026, 09:21', sentAt: '' },
  { store: '7digital', online: false, type: 'delivery', status: 'waiting', createdAt: 'Thu, Jul 30th 2026, 09:21', sentAt: '' },
]

export const releaseSelectedStores = [
  'iTunes', 'Spotify', 'Amazon', 'Audible Magic', '7digital', 'I Heart Radio', 'Ayoba', 'Deezer', 'LiveOne', 'TIDAL', 'Boomplay', 'TikTok',
]

export const releaseSales = [
  { store: 'Spotify', streams: 12480, downloads: 0, revenue: '£31.72' },
  { store: 'Apple Music', streams: 3211, downloads: 14, revenue: '£18.44' },
  { store: 'Amazon Music', streams: 902, downloads: 3, revenue: '£4.87' },
  { store: 'Deezer', streams: 344, downloads: 0, revenue: '£0.91' },
]

export const ingestionLog = [
  { status: 'success', message: 'Ingestion Succeeded', time: 'Thu, Jul 30th 2026, 09:20' },
]

export const qcLog = [
  { user: 'System User', status: 'Pass Release', track: '', date: 'July 30th, 2026, 09:16' },
]

export const statusHistory = [
  { status: 'Incomplete', by: 'System', date: 'July 28th, 2026, 14:02' },
  { status: 'Processing', by: 'daisy.ditto@dittomusic.com', date: 'July 30th, 2026, 09:15' },
]
