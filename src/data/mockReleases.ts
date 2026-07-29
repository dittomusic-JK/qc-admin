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

export interface ItunesExpressRow {
  id: number
  userEmail: string
  assignee: string
  releaseTitle: string
  artistName: string
  releaseDate: string
  completed: boolean
  paid: 'Paid' | 'Unpaid'
  created: string
}

export const itunesExpressRows: ItunesExpressRow[] = [
  { id: 90311, userEmail: 'kaidabloom.music@gmail.com', assignee: 'Rosa Delgado', releaseTitle: 'Neon Rivers', artistName: 'Kaida Bloom', releaseDate: 'August 7th, 2026', completed: false, paid: 'Paid', created: 'July 27th, 2026' },
  { id: 90309, userEmail: 'femialade.music@gmail.com', assignee: '', releaseTitle: 'Ochre Skies', artistName: 'Femi Alade', releaseDate: 'August 21st, 2026', completed: false, paid: 'Unpaid', created: 'July 26th, 2026' },
  { id: 90304, userEmail: 'sablepointband@gmail.com', assignee: 'Milo Fenwick', releaseTitle: 'Midnight Argument', artistName: 'Sable Point', releaseDate: 'July 31st, 2026', completed: true, paid: 'Paid', created: 'July 22nd, 2026' },
  { id: 90298, userEmail: '', assignee: '', releaseTitle: 'Cinder Lane', artistName: 'Petra Holm', releaseDate: 'August 28th, 2026', completed: false, paid: 'Unpaid', created: 'July 21st, 2026' },
  { id: 90291, userEmail: 'ivycallowaymusic@outlook.com', assignee: 'Rosa Delgado', releaseTitle: 'Paper Planes at Dawn', artistName: 'Ivy Calloway', releaseDate: 'August 4th, 2026', completed: true, paid: 'Paid', created: 'July 18th, 2026' },
  { id: 90287, userEmail: 'coltandwren@gmail.com', assignee: 'Tessa Marchetti', releaseTitle: 'Last Train to Meridian', artistName: 'Colt & Wren', releaseDate: 'September 4th, 2026', completed: false, paid: 'Paid', created: 'July 16th, 2026' },
  { id: 90280, userEmail: 'mira9.official@gmail.com', assignee: '', releaseTitle: 'Hologram Heart', artistName: 'MIRA-9', releaseDate: 'August 11th, 2026', completed: false, paid: 'Unpaid', created: 'July 14th, 2026' },
  { id: 90274, userEmail: 'camiladuarte.songs@gmail.com', assignee: 'Milo Fenwick', releaseTitle: 'Lluvia de Abril', artistName: 'Camila Duarte', releaseDate: 'August 18th, 2026', completed: true, paid: 'Paid', created: 'July 11th, 2026' },
  { id: 90266, userEmail: 'velvetantenna@icloud.com', assignee: 'Tessa Marchetti', releaseTitle: 'Static Bloom', artistName: 'Velvet Antenna', releaseDate: 'July 30th, 2026', completed: true, paid: 'Paid', created: 'July 8th, 2026' },
  { id: 90259, userEmail: 'harlanbrosband@gmail.com', assignee: '', releaseTitle: 'Gravel & Gold', artistName: 'The Harlan Brothers', releaseDate: 'September 11th, 2026', completed: false, paid: 'Unpaid', created: 'July 5th, 2026' },
]

export interface BeatportRow {
  id: number
  userEmail: string
  labelName: string
  labelStatus: 'Active' | 'Inactive'
  beatportStatus: 'Awaiting Payment' | 'Pending Approval' | 'Live'
}

export const beatportRows: BeatportRow[] = [
  { id: 4401, userEmail: 'kaidabloom.music@gmail.com', labelName: 'Bloom Frequency', labelStatus: 'Active', beatportStatus: 'Live' },
  { id: 4402, userEmail: 'mira9.official@gmail.com', labelName: 'Nine Volt Recordings', labelStatus: 'Active', beatportStatus: 'Pending Approval' },
  { id: 4403, userEmail: 'velvetantenna@icloud.com', labelName: 'Antenna Sounds', labelStatus: 'Inactive', beatportStatus: 'Awaiting Payment' },
  { id: 4404, userEmail: 'dario.klein@pulsetheory.de', labelName: 'Pulse Theory', labelStatus: 'Active', beatportStatus: 'Live' },
  { id: 4405, userEmail: 'anouk.visser.dj@gmail.com', labelName: 'Canal Deep', labelStatus: 'Active', beatportStatus: 'Pending Approval' },
  { id: 4406, userEmail: 'santiago.tech@outlook.com', labelName: 'Meridiano Club', labelStatus: 'Inactive', beatportStatus: 'Awaiting Payment' },
  { id: 4407, userEmail: 'lena.brandt.music@gmail.com', labelName: 'Nachtfalter', labelStatus: 'Active', beatportStatus: 'Live' },
  { id: 4408, userEmail: 'obi.duke.house@gmail.com', labelName: 'Duke House Ltd', labelStatus: 'Active', beatportStatus: 'Awaiting Payment' },
  { id: 4409, userEmail: 'freya.lund.audio@gmail.com', labelName: 'Fjord Circuit', labelStatus: 'Active', beatportStatus: 'Pending Approval' },
  { id: 4410, userEmail: 'marcelo.groove@gmail.com', labelName: 'Groove Estadio', labelStatus: 'Inactive', beatportStatus: 'Live' },
]

export interface YoutubeOacRow {
  id: number
  userEmail: string
  artistName: string
  channelId: string
  topicChannelId: string
  createdAt: string
  status: 'Pending' | 'Submitted' | 'Rejected'
}

export const youtubeOacPending: YoutubeOacRow[] = [
  { id: 7811, userEmail: 'kaidabloom.music@gmail.com', artistName: 'Kaida Bloom', channelId: 'UCq3vN8xWfLm2KpZr9dTeH1A', topicChannelId: 'UCz7bMw4RqXsN0jVc6yPkL2B', createdAt: 'July 28th, 2026', status: 'Pending' },
  { id: 7808, userEmail: 'femialade.music@gmail.com', artistName: 'Femi Alade', channelId: 'UCd5tRw2YnBv8XqLm3sJfK4C', topicChannelId: 'UCe9xPz6TvWq1NmRb4cHgJ7D', createdAt: 'July 26th, 2026', status: 'Pending' },
  { id: 7804, userEmail: 'sablepointband@gmail.com', artistName: 'Sable Point', channelId: 'UCf2mKx9ZwQt7VnRj5bLdP8E', topicChannelId: 'UCg6yTv3XsNp0WqMc8dJfR1F', createdAt: 'July 24th, 2026', status: 'Pending' },
  { id: 7799, userEmail: 'ivycallowaymusic@outlook.com', artistName: 'Ivy Calloway', channelId: 'UCh8nLz4WtRv2XpKm6cQgS9G', topicChannelId: 'UCj1wMx7YuTq5NnSb3dKhV2H', createdAt: 'July 21st, 2026', status: 'Pending' },
  { id: 7795, userEmail: 'mira9.official@gmail.com', artistName: 'MIRA-9', channelId: 'UCk4pNw8ZvSt1WqLc9bMjX5I', topicChannelId: 'UCl7yQz2XwUr4VmTd6cNkY8J', createdAt: 'July 19th, 2026', status: 'Pending' },
  { id: 7790, userEmail: 'coltandwren@gmail.com', artistName: 'Colt & Wren', channelId: 'UCm9rPx5YtVw3XnKb7dQlZ1K', topicChannelId: 'UCn2sQy8ZuWt6WoLc4eRmA5L', createdAt: 'July 16th, 2026', status: 'Pending' },
  { id: 7786, userEmail: 'petraholm.music@gmail.com', artistName: 'Petra Holm', channelId: 'UCo5tRz1XvXx9YpMd8fSnB7M', topicChannelId: 'UCp8uSw4YwYq2ZqNe5gToC0N', createdAt: 'July 13th, 2026', status: 'Pending' },
  { id: 7781, userEmail: 'camiladuarte.songs@gmail.com', artistName: 'Camila Duarte', channelId: 'UCq1vTx7ZxZr5WrOf9hUpD3O', topicChannelId: 'UCr4wUy0XyAs8XsPg6jVqE6P', createdAt: 'July 10th, 2026', status: 'Pending' },
]

export const youtubeOacResolved: YoutubeOacRow[] = [
  { id: 7776, userEmail: 'velvetantenna@icloud.com', artistName: 'Velvet Antenna', channelId: 'UCs7xVz3YzBt1YtQh2kWrF9Q', topicChannelId: 'UCt0yWw6XaCu4ZuRj8lXsG2R', createdAt: 'July 7th, 2026', status: 'Submitted' },
  { id: 7771, userEmail: 'harlanbrosband@gmail.com', artistName: 'The Harlan Brothers', channelId: 'UCu3zXx9ZbDv7WvSk5mYtH5S', topicChannelId: 'UCv6aYy2XcEw0XwTl1nZuJ8T', createdAt: 'July 4th, 2026', status: 'Rejected' },
  { id: 7765, userEmail: 'losvientosbanda@gmail.com', artistName: 'Los Vientos', channelId: 'UCw9bZz5YdFx3YxUm7oAvK1U', topicChannelId: 'UCx2cAw8ZeGy6ZyVn4pBwL4V', createdAt: 'July 1st, 2026', status: 'Submitted' },
  { id: 7758, userEmail: 'maya.linden@gmail.com', artistName: 'Juan Gomez', channelId: 'UCy5dBx1XfHz9WzWo0qCxM7W', topicChannelId: 'UCz8eCy4YgJa2XaXp6rDyN0X', createdAt: 'June 28th, 2026', status: 'Submitted' },
  { id: 7752, userEmail: 'tomokafor.music@gmail.com', artistName: 'Night Parade', channelId: 'UCa1fDz7ZhKb5YbYq3sEzP3Y', topicChannelId: 'UCb4gEw0XjLc8ZcZr9tFaQ6Z', createdAt: 'June 24th, 2026', status: 'Rejected' },
  { id: 7747, userEmail: 'elif.kaya.music@gmail.com', artistName: 'Elif Kaya', channelId: 'UCc7hFx3YkMd1WdAs5uGbR9A', topicChannelId: 'UCd0jGy6XlNe4XeBt2vHcS2B', createdAt: 'June 21st, 2026', status: 'Submitted' },
  { id: 7741, userEmail: 'kofimensah.gh@gmail.com', artistName: 'Kofi Mensah', channelId: 'UCe3kHz9ZmPf7YfCu8wJdT5C', topicChannelId: 'UCf6lJw2XnQg0ZgDv4xKeU8D', createdAt: 'June 17th, 2026', status: 'Submitted' },
  { id: 7736, userEmail: 'chloebennettmusic@gmail.com', artistName: 'Chloe Bennett', channelId: 'UCg9mKx5YoRh3WhEw0yLfV1E', topicChannelId: 'UCh2nLy8ZpSj6XjFx7zMgW4F', createdAt: 'June 14th, 2026', status: 'Rejected' },
]

export interface TakedownRow {
  id: number
  title: string
  artist: string
  barcode: string
  status: 'Pending' | 'Completed'
  requestDate: string
}

export const takedownRows: TakedownRow[] = [
  { id: 6142633, title: 'Gravel & Gold', artist: 'The Harlan Brothers', barcode: '5063721994028', status: 'Pending', requestDate: 'July 28th, 2026' },
  { id: 6142584, title: 'Hologram Heart', artist: 'MIRA-9', barcode: '5063721993861', status: 'Pending', requestDate: 'July 26th, 2026' },
  { id: 6141902, title: 'Verano Sin Fin', artist: 'Camila Duarte', barcode: '5063721991812', status: 'Pending', requestDate: 'July 24th, 2026' },
  { id: 6141477, title: 'Wolf Hour', artist: 'Sable Point', barcode: '5063721990518', status: 'Completed', requestDate: 'July 20th, 2026' },
  { id: 6141213, title: 'Sugar Static', artist: 'Velvet Antenna', barcode: '5063721989734', status: 'Pending', requestDate: 'July 17th, 2026' },
  { id: 6140988, title: 'Harbour Lights', artist: 'Petra Holm', barcode: '5063721989055', status: 'Completed', requestDate: 'July 14th, 2026' },
  { id: 6140742, title: 'Kilimanjaro Sunrise', artist: 'Femi Alade', barcode: '5063721988317', status: 'Completed', requestDate: 'July 10th, 2026' },
  { id: 6140519, title: 'Dust on the Radio', artist: 'Colt & Wren', barcode: '5063721987648', status: 'Pending', requestDate: 'July 7th, 2026' },
  { id: 6140301, title: 'Cien Promesas', artist: 'Los Vientos', barcode: '5063721986993', status: 'Completed', requestDate: 'July 3rd, 2026' },
  { id: 6140087, title: 'Glass Orchard', artist: 'Ivy Calloway', barcode: '5063721986351', status: 'Completed', requestDate: 'June 29th, 2026' },
]

export interface SpotifyArtistNameRow {
  id: number
  artistName: string
  normalisedName: string
  created: string
}

export const spotifyArtistNames: SpotifyArtistNameRow[] = [
  { id: 30211, artistName: 'Black Country / New Road', normalisedName: 'black country new road', created: 'July 27th, 2026' },
  { id: 30208, artistName: 'MIRA-9', normalisedName: 'mira 9', created: 'July 25th, 2026' },
  { id: 30204, artistName: "D'Arcy & The Filaments", normalisedName: 'darcy and the filaments', created: 'July 22nd, 2026' },
  { id: 30199, artistName: 'Colt & Wren', normalisedName: 'colt and wren', created: 'July 19th, 2026' },
  { id: 30195, artistName: 'St. Aurelia', normalisedName: 'st aurelia', created: 'July 16th, 2026' },
  { id: 30190, artistName: 'Señora Cactus', normalisedName: 'senora cactus', created: 'July 13th, 2026' },
  { id: 30186, artistName: 'The Harlan Brothers', normalisedName: 'the harlan brothers', created: 'July 9th, 2026' },
  { id: 30181, artistName: 'K!netic Youth', normalisedName: 'kinetic youth', created: 'July 6th, 2026' },
  { id: 30177, artistName: 'Ivy Calloway', normalisedName: 'ivy calloway', created: 'July 2nd, 2026' },
  { id: 30172, artistName: 'Löwenzahn (feat. örjan)', normalisedName: 'lowenzahn feat orjan', created: 'June 28th, 2026' },
]

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
