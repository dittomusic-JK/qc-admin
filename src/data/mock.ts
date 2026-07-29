// Mock data for the redesign prototype. Names/emails are invented — shaped to
// match what the real admin displays, never copied from it.

export interface UserRow {
  id: number
  name: string
  email: string
  organization: string
  userType: string
  status: 'Active' | 'Inactive' | 'Banned' | 'Deleted'
}

export const users: UserRow[] = [
  { id: 1545390, name: 'Maya Linden', email: 'maya.linden@gmail.com', organization: 'Latin Dreams', userType: 'Artist', status: 'Active' },
  { id: 1545411, name: 'Tom Okafor', email: 'tomokafor.music@gmail.com', organization: 'Night Parade', userType: 'Label', status: 'Active' },
  { id: 1545432, name: 'Sofia Reyes', email: 'sofia.reyes.audio@outlook.com', organization: '', userType: 'Artist', status: 'Active' },
  { id: 1545453, name: 'Daniel Krause', email: 'dkrause@fadedlines.de', organization: 'Faded Lines', userType: 'Label', status: 'Active' },
  { id: 1545474, name: 'Amara Diallo', email: 'amaradiallo@yahoo.com', organization: '', userType: 'Artist', status: 'Inactive' },
  { id: 1545495, name: 'Jesse Whitfield', email: 'jwhitfield.beats@gmail.com', organization: 'Beat Supply Co', userType: 'Artist', status: 'Active' },
  { id: 1545516, name: 'Elif Kaya', email: 'elif.kaya.music@gmail.com', organization: '', userType: 'Artist', status: 'Active' },
  { id: 1545537, name: 'Marco Bellini', email: 'marco@bellinirecords.it', organization: 'Bellini Records', userType: 'Label', status: 'Active' },
  { id: 1545558, name: 'Priya Nair', email: 'priya.nair.songs@gmail.com', organization: '', userType: 'Artist', status: 'Banned' },
  { id: 1545579, name: 'Louis Moreau', email: 'lmoreau@hotmail.fr', organization: 'Nuit Blanche', userType: 'Artist', status: 'Active' },
  { id: 1545600, name: 'Hana Sato', email: 'hana.sato.tokyo@gmail.com', organization: '', userType: 'Artist', status: 'Active' },
  { id: 1545621, name: 'Gabriel Ortiz', email: 'gortiz.production@gmail.com', organization: 'Ortiz Media', userType: 'Label', status: 'Active' },
  { id: 1545642, name: 'Nina Vasquez', email: 'ninavmusic@icloud.com', organization: '', userType: 'Artist', status: 'Inactive' },
  { id: 1545663, name: 'Kofi Mensah', email: 'kofimensah.gh@gmail.com', organization: 'Accra Waves', userType: 'Artist', status: 'Active' },
  { id: 1545684, name: 'Isabelle Fontaine', email: 'isafontaine@gmail.com', organization: '', userType: 'Artist', status: 'Active' },
  { id: 1545705, name: 'Viktor Petrov', email: 'v.petrov@duskaudio.bg', organization: 'Dusk Audio', userType: 'Label', status: 'Active' },
  { id: 1545726, name: 'Chloe Bennett', email: 'chloebennettmusic@gmail.com', organization: '', userType: 'Artist', status: 'Active' },
  { id: 1545747, name: 'Ravi Shankar Rao', email: 'ravirao.audio@gmail.com', organization: 'Chennai Beats', userType: 'Artist', status: 'Deleted' },
  { id: 1545768, name: 'Emma Lindqvist', email: 'emma.lindqvist@gmail.com', organization: 'Polar Nights', userType: 'Label', status: 'Active' },
  { id: 1545789, name: 'Andre Baptiste', email: 'andrebaptiste.kompa@gmail.com', organization: '', userType: 'Artist', status: 'Active' },
]

export interface ReleaseRow {
  id: number
  title: string
  artist: string
  barcode: string
  genres: string
  status: 'Active' | 'Incomplete' | 'Requested Takedown'
  commission: string
  license: 'Cleared' | 'Not Cleared'
  claim: 'Claimed' | 'Not Claimed'
  sales: 'Frozen' | 'Unfrozen'
}

export const userReleases: ReleaseRow[] = [
  { id: 6142660, title: 'El camión de las cinco', artist: 'Juan Gomez', barcode: '5063721994127', genres: 'Latin, Regional Mexicano', status: 'Active', commission: 'Default', license: 'Not Cleared', claim: 'Not Claimed', sales: 'Unfrozen' },
  { id: 6142661, title: 'Medianoche en la Plaza', artist: 'Juan Gomez', barcode: '5063721994134', genres: 'Latin', status: 'Active', commission: 'Default', license: 'Cleared', claim: 'Not Claimed', sales: 'Unfrozen' },
  { id: 6142662, title: 'Corazón de Oro', artist: 'Los Vientos', barcode: '5063721994141', genres: 'Latin, Pop', status: 'Requested Takedown', commission: 'Default', license: 'Not Cleared', claim: 'Claimed', sales: 'Frozen' },
  { id: 6142663, title: 'Amanecer', artist: 'Juan Gomez', barcode: '', genres: 'Latin', status: 'Incomplete', commission: 'Default', license: 'Not Cleared', claim: 'Not Claimed', sales: 'Unfrozen' },
]

export const userDetail = {
  id: 1545390,
  forename: 'Maya',
  surname: 'Linden',
  email: 'maya.linden@gmail.com',
  organization: 'Latin Dreams',
  userType: 'Artist',
  emailStatus: 'Verified',
  access: 'Customer',
  subscription: { plan: 'Ditto Plus – RLS', status: 'Active', renews: 'April 26th, 2027' },
  notifications: 'Allowed',
  country: 'Mexico',
  region: 'LATAM',
  currency: 'USD',
  creditBalance: '$0.00',
  commissionRate: '10%',
  advanceBalance: '$0.00',
  signedBy: 'Ditto LATAM',
  accountManager: 'Fatima Benmouhoub',
  suspectedFraud: false,
  important: false,
  salesStatus: 'Unlocked',
  payoutsWithoutSub: 'No',
  storeRestrictions: ['Apple Music', 'YouTube Content ID'],
  skipUploadLimit: 'No',
  skipUploadLimit10Days: 'No',
  created: 'March 3rd, 2021, 2:14 PM',
  modified: 'July 12th, 2026, 9:41 AM',
}
