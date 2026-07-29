// Mock data for Sync Opportunities (Dashboard2 pages). All invented.

export interface SyncOpportunity {
  id: number
  name: string
  deadline: string
  applications: number
}

export const syncOpportunities: SyncOpportunity[] = [
  { id: 250, name: 'Fun & Chaotic Pop Anthems for Comedy Trailer', deadline: 'August 4th, 2026', applications: 103 },
  { id: 249, name: 'Reimagined Classical Instrumentals for Advert', deadline: 'August 4th, 2026', applications: 71 },
  { id: 248, name: 'Global & Genre-Blending Tracks for Sports Campaign', deadline: 'August 4th, 2026', applications: 136 },
  { id: 247, name: 'Atmospheric Electronic Tracks for Tech Ad', deadline: 'July 20th, 2026', applications: 192 },
  { id: 246, name: 'Dark, Minimal UK Rap & Grime Tracks for Fashion Film', deadline: 'July 20th, 2026', applications: 123 },
  { id: 245, name: 'Cool, Modern Pop Instrumentals for Gaming Campaign', deadline: 'July 20th, 2026', applications: 156 },
  { id: 244, name: 'Feel Good Vintage & Upbeat Classics for Advert', deadline: 'July 7th, 2026', applications: 181 },
  { id: 243, name: 'Positive & Empowering Music for Charity Campaign', deadline: 'July 7th, 2026', applications: 192 },
  { id: 242, name: 'Earworm Pop-Punk & Indie Tracks for Confectionery Campaign', deadline: 'July 7th, 2026', applications: 167 },
  { id: 241, name: 'Global Genre-Blending Tracks for World Cup Campaign', deadline: 'June 22nd, 2026', applications: 193 },
  { id: 240, name: 'Nostalgic Club Classics for Sports Campaign', deadline: 'June 22nd, 2026', applications: 104 },
  { id: 239, name: 'Fun & Chaotic Pop Anthems for Film Trailer', deadline: 'June 22nd, 2026', applications: 137 },
  { id: 238, name: 'Driven Hip-Hop & Electronic Tracks for World Cup Campaign', deadline: 'June 9th, 2026', applications: 157 },
]

export interface SyncApplicant {
  id: number
  name: string
  email: string
  trackName: string
  isrc: string
  upc: string
  language: string
  license: 'Cleared' | 'Not Cleared'
  streams: number
  pitch: string
}

export const syncApplicants: SyncApplicant[] = [
  { id: 1, name: 'Tara Formosa', email: 'hello@taraformosa.example', trackName: 'Let You In', isrc: 'AUBEC2418939', upc: '5063413982061', language: 'English', license: 'Cleared', streams: 320, pitch: 'This fun, bouncy girly track fits the description and genre required — fun, energetic, appeals to a young audience and is pop at its core.' },
  { id: 2, name: 'Mario Esteves', email: 'estevesmario@example.com', trackName: 'Batotar', isrc: 'GXLF32636635', upc: '5064021813921', language: 'Portuguese', license: 'Not Cleared', streams: 0, pitch: 'Genre: Afro Beat. Style: about beautiful love — a very sweet track that people enjoy very much. Love.' },
  { id: 3, name: 'Frozen Lean Collective', email: 'flmanagement@example.com', trackName: 'Frozen Lean', isrc: 'GBLFP2156508', upc: '5059580943837', language: 'English', license: 'Cleared', streams: 1122, pitch: 'Fun, dance, pop-culture enjoyment song that fits the trailer brief fantastically.' },
  { id: 4, name: 'Jay Fletcher', email: 'fletcherjay83@example.com', trackName: 'Pump It Up', isrc: 'DOAOX2200073', upc: '5063654213238', language: 'English', license: 'Cleared', streams: 162, pitch: 'Caribbean meets Amapiano and dancehall to get everyone on the dance floor.' },
  { id: 5, name: 'Third Eye Views', email: 'thirdeyeviews@example.com', trackName: 'Lmtm', isrc: 'GX53U2473702', upc: '5063616543977', language: 'English', license: 'Not Cleared', streams: 975, pitch: 'Nu style of fun. Love!!!' },
  { id: 6, name: 'Jermaine Liburd', email: 'jermaineliburd@example.com', trackName: 'Hallelujah', isrc: 'GXHG92691121', upc: '5064020043756', language: 'English', license: 'Not Cleared', streams: 114, pitch: 'An uplifting commercial house-pop track with a recognisable drop and beat — very suitable for the brief.' },
  { id: 7, name: 'The Marlowe Band', email: 'marlowebandmusic@example.com', trackName: 'Sugar Rush', isrc: 'GBXY42210981', upc: '5063920014452', language: 'English', license: 'Cleared', streams: 284, pitch: 'A fun, upbeat track — we also have an acoustic version and a full band version available.' },
  { id: 8, name: 'Keiko Tan', email: 'keikotanmusic@example.com', trackName: 'Bubblegum Riot', isrc: 'JPKS22047761', upc: '5063881120945', language: 'Japanese', license: 'Cleared', streams: 5730, pitch: 'Hyper-pop energy with a chaotic middle-eight that lands perfectly for comedic cuts.' },
]

export const keywordSuggestions = ['Pop', 'Upbeat', 'Comedy', 'Instrumental', 'Electronic', 'Hip-Hop', 'Classical', 'Indie', 'Vintage', 'Energetic']
