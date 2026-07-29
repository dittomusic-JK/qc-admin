// Mock data for the accounts / finance admin views. All names and emails are
// invented — shaped to match what the real admin displays, never copied from it.

// ---------------------------------------------------------------- Credits

export interface CreditRow {
  id: number
  user: string
  creditedBy: string
  credited: string
  redeemed: string | null
  available: string
  status: 'Active' | 'Redeemed' | 'Disabled'
  disabledBy: string | null
  date: string
}

export const credits: CreditRow[] = [
  { id: 90211, user: 'Maya Linden', creditedBy: 'Fatima Benmouhoub', credited: '€50.00', redeemed: null, available: '€50.00 (EUR)', status: 'Active', disabledBy: null, date: 'July 24th, 2026' },
  { id: 90212, user: 'Tom Okafor', creditedBy: 'Oleksandr Iliushyn', credited: '£25.00', redeemed: '£25.00', available: '£0.00 (GBP)', status: 'Redeemed', disabledBy: null, date: 'July 21st, 2026' },
  { id: 90213, user: 'Sofia Reyes', creditedBy: 'Anastasiia Horbanova', credited: '$100.00', redeemed: null, available: '$100.00 (USD)', status: 'Active', disabledBy: null, date: 'July 19th, 2026' },
  { id: 90214, user: 'Daniel Krause', creditedBy: 'Fatima Benmouhoub', credited: '€19.00', redeemed: '€19.00', available: '€0.00 (EUR)', status: 'Redeemed', disabledBy: null, date: 'July 15th, 2026' },
  { id: 90215, user: 'Priya Nair', creditedBy: 'Serhii Borovychenko', credited: '₹2,000.00', redeemed: null, available: '₹0.00 (INR)', status: 'Disabled', disabledBy: 'Alina Melashchenko', date: 'July 12th, 2026' },
  { id: 90216, user: 'Jesse Whitfield', creditedBy: 'Alina Melashchenko', credited: '$45.00', redeemed: null, available: '$45.00 (USD)', status: 'Active', disabledBy: null, date: 'July 9th, 2026' },
  { id: 90217, user: 'Elif Kaya', creditedBy: 'Oleksandr Iliushyn', credited: '£19.00', redeemed: null, available: '£19.00 (GBP)', status: 'Active', disabledBy: null, date: 'July 5th, 2026' },
  { id: 90218, user: 'Marco Bellini', creditedBy: 'Fatima Benmouhoub', credited: '€75.00', redeemed: '€40.00', available: '€35.00 (EUR)', status: 'Active', disabledBy: null, date: 'June 30th, 2026' },
  { id: 90219, user: 'Louis Moreau', creditedBy: 'Anastasiia Horbanova', credited: '€25.00', redeemed: '€25.00', available: '€0.00 (EUR)', status: 'Redeemed', disabledBy: null, date: 'June 26th, 2026' },
  { id: 90220, user: 'Hana Sato', creditedBy: 'Serhii Borovychenko', credited: '$30.00', redeemed: null, available: '$30.00 (USD)', status: 'Active', disabledBy: null, date: 'June 22nd, 2026' },
  { id: 90221, user: 'Gabriel Ortiz', creditedBy: 'Alina Melashchenko', credited: '$120.00', redeemed: null, available: '$0.00 (USD)', status: 'Disabled', disabledBy: 'Fatima Benmouhoub', date: 'June 18th, 2026' },
  { id: 90222, user: 'Kofi Mensah', creditedBy: 'Oleksandr Iliushyn', credited: '£50.00', redeemed: null, available: '£50.00 (GBP)', status: 'Active', disabledBy: null, date: 'June 14th, 2026' },
  { id: 90223, user: 'Ravi Shankar Rao', creditedBy: 'Serhii Borovychenko', credited: '₹1,500.00', redeemed: '₹1,500.00', available: '₹0.00 (INR)', status: 'Redeemed', disabledBy: null, date: 'June 10th, 2026' },
  { id: 90224, user: 'Emma Lindqvist', creditedBy: 'Fatima Benmouhoub', credited: '€60.00', redeemed: null, available: '€60.00 (EUR)', status: 'Active', disabledBy: null, date: 'June 5th, 2026' },
]

// ---------------------------------------------------------------- Labels

export interface LabelRow {
  id: number
  name: string
  owner: string
  type: 'Basic Label' | 'Beatport Label'
}

export const labels: LabelRow[] = [
  { id: 40311, name: 'Night Parade Records', owner: 'Tom Okafor', type: 'Basic Label' },
  { id: 40312, name: 'Faded Lines', owner: 'Daniel Krause', type: 'Beatport Label' },
  { id: 40313, name: 'Latin Dreams', owner: 'Maya Linden', type: 'Basic Label' },
  { id: 40314, name: 'Dusk Audio', owner: 'Viktor Petrov', type: 'Beatport Label' },
  { id: 40315, name: 'Beat Supply Co', owner: '', type: 'Basic Label' },
  { id: 40316, name: 'Bellini Records', owner: 'Marco Bellini', type: 'Basic Label' },
  { id: 40317, name: 'Polar Nights', owner: 'Emma Lindqvist', type: 'Beatport Label' },
  { id: 40318, name: 'Accra Waves', owner: 'Kofi Mensah', type: 'Basic Label' },
  { id: 40319, name: 'Nuit Blanche', owner: '', type: 'Basic Label' },
  { id: 40320, name: 'Ortiz Media', owner: 'Gabriel Ortiz', type: 'Basic Label' },
  { id: 40321, name: 'Chennai Beats', owner: 'Ravi Shankar Rao', type: 'Beatport Label' },
  { id: 40322, name: 'Tokyo Glow', owner: 'Hana Sato', type: 'Basic Label' },
]

// ---------------------------------------------------------------- KYC

export type KycStatus = 'Review Needed' | 'Approved' | 'Rejected'

export interface KycRow {
  id: number
  name: string
  email: string
  kycStatus: KycStatus
}

export interface KycLinkedRow extends KycRow {
  linkedAccounts: number
  dateDetected: string
}

export const kycUsers: KycRow[] = [
  { id: 71001, name: 'Sofia Reyes', email: 'sofia.reyes.audio@outlook.com', kycStatus: 'Review Needed' },
  { id: 71002, name: 'Jesse Whitfield', email: 'jwhitfield.beats@gmail.com', kycStatus: 'Review Needed' },
  { id: 71003, name: 'Amara Diallo', email: 'amaradiallo@yahoo.com', kycStatus: 'Approved' },
  { id: 71004, name: 'Louis Moreau', email: 'lmoreau@hotmail.fr', kycStatus: 'Rejected' },
  { id: 71005, name: 'Elif Kaya', email: 'elif.kaya.music@gmail.com', kycStatus: 'Review Needed' },
  { id: 71006, name: 'Chloe Bennett', email: 'chloebennettmusic@gmail.com', kycStatus: 'Approved' },
]

export const kycLinkedUsers: KycLinkedRow[] = [
  { id: 72001, name: 'Andre Baptiste', email: 'andrebaptiste.kompa@gmail.com', kycStatus: 'Review Needed', linkedAccounts: 3, dateDetected: 'July 27th, 2026' },
  { id: 72002, name: 'Nina Vasquez', email: 'ninavmusic@icloud.com', kycStatus: 'Rejected', linkedAccounts: 2, dateDetected: 'July 22nd, 2026' },
  { id: 72003, name: 'Viktor Petrov', email: 'v.petrov@duskaudio.bg', kycStatus: 'Review Needed', linkedAccounts: 4, dateDetected: 'July 18th, 2026' },
  { id: 72004, name: 'Priya Nair', email: 'priya.nair.songs@gmail.com', kycStatus: 'Rejected', linkedAccounts: 2, dateDetected: 'July 11th, 2026' },
  { id: 72005, name: 'Kofi Mensah', email: 'kofimensah.gh@gmail.com', kycStatus: 'Approved', linkedAccounts: 2, dateDetected: 'July 3rd, 2026' },
  { id: 72006, name: 'Marco Bellini', email: 'marco@bellinirecords.it', kycStatus: 'Review Needed', linkedAccounts: 5, dateDetected: 'June 28th, 2026' },
]

// ---------------------------------------------------------------- Ban log

export interface BanRow {
  id: number
  user: string
  status: 'Banned'
  reasonCode: string
  reasonText: string
  actionedBy: string
  date: string
}

export const banLog: BanRow[] = [
  { id: 61001, user: 'Priya Nair', status: 'Banned', reasonCode: 'suspicious_streaming', reasonText: 'Artificial streaming on Spotify — earnings dropped after warning', actionedBy: 'Fatima Benmouhoub', date: 'July 26th, 2026' },
  { id: 61002, user: 'Gabriel Ortiz', status: 'Banned', reasonCode: 'copyright_infringement', reasonText: 'Uploaded a compilation of unlicensed remixes flagged by three labels', actionedBy: 'Oleksandr Iliushyn', date: 'July 23rd, 2026' },
  { id: 61003, user: 'Nina Vasquez', status: 'Banned', reasonCode: 'chargeback_abuse', reasonText: 'Four subscription chargebacks in two months', actionedBy: 'Alina Melashchenko', date: 'July 20th, 2026' },
  { id: 61004, user: 'Louis Moreau', status: 'Banned', reasonCode: 'copyright_infringement', reasonText: 'Repeated infringement notices from Believe on catalogue content', actionedBy: 'Serhii Borovychenko', date: 'July 15th, 2026' },
  { id: 61005, user: 'Ravi Shankar Rao', status: 'Banned', reasonCode: 'suspicious_streaming', reasonText: 'Bot-farm playlist activity detected across two releases', actionedBy: 'Anastasiia Horbanova', date: 'July 10th, 2026' },
  { id: 61006, user: 'Andre Baptiste', status: 'Banned', reasonCode: 'identity_fraud', reasonText: 'ID document shared with two previously banned accounts', actionedBy: 'Fatima Benmouhoub', date: 'July 6th, 2026' },
  { id: 61007, user: 'Viktor Petrov', status: 'Banned', reasonCode: 'suspicious_streaming', reasonText: 'Stream spikes concentrated in a single data-centre IP range', actionedBy: 'Oleksandr Iliushyn', date: 'June 29th, 2026' },
  { id: 61008, user: 'Amara Diallo', status: 'Banned', reasonCode: 'payment_fraud', reasonText: 'Stolen card used for annual subscription — issuer confirmed', actionedBy: 'Alina Melashchenko', date: 'June 24th, 2026' },
  { id: 61009, user: 'Jesse Whitfield', status: 'Banned', reasonCode: 'copyright_infringement', reasonText: 'Sample clearance never provided after takedown warning', actionedBy: 'Serhii Borovychenko', date: 'June 17th, 2026' },
  { id: 61010, user: 'Elif Kaya', status: 'Banned', reasonCode: 'tos_violation', reasonText: 'Reselling artist accounts through a third-party marketplace', actionedBy: 'Anastasiia Horbanova', date: 'June 9th, 2026' },
]

// ---------------------------------------------------------------- Fraud

export interface FraudRow {
  id: number
  name: string
  email: string
}

export const suspectedFraudUsers: FraudRow[] = [
  { id: 81001, name: 'Maya Linden', email: 'maya.linden@gmail.com' },
  { id: 81002, name: 'Tom Okafor', email: 'tomokafor.music@gmail.com' },
  { id: 81003, name: 'Sofia Reyes', email: 'sofia.reyes.audio@outlook.com' },
  { id: 81004, name: 'Daniel Krause', email: 'dkrause@fadedlines.de' },
  { id: 81005, name: 'Amara Diallo', email: 'amaradiallo@yahoo.com' },
  { id: 81006, name: 'Jesse Whitfield', email: 'jwhitfield.beats@gmail.com' },
  { id: 81007, name: 'Elif Kaya', email: 'elif.kaya.music@gmail.com' },
  { id: 81008, name: 'Marco Bellini', email: 'marco@bellinirecords.it' },
  { id: 81009, name: 'Louis Moreau', email: 'lmoreau@hotmail.fr' },
  { id: 81010, name: 'Hana Sato', email: 'hana.sato.tokyo@gmail.com' },
]

export const suspendedUsers: FraudRow[] = [
  { id: 82001, name: 'Gabriel Ortiz', email: 'gortiz.production@gmail.com' },
  { id: 82002, name: 'Nina Vasquez', email: 'ninavmusic@icloud.com' },
  { id: 82003, name: 'Kofi Mensah', email: 'kofimensah.gh@gmail.com' },
  { id: 82004, name: 'Isabelle Fontaine', email: 'isafontaine@gmail.com' },
  { id: 82005, name: 'Viktor Petrov', email: 'v.petrov@duskaudio.bg' },
  { id: 82006, name: 'Chloe Bennett', email: 'chloebennettmusic@gmail.com' },
  { id: 82007, name: 'Ravi Shankar Rao', email: 'ravirao.audio@gmail.com' },
  { id: 82008, name: 'Emma Lindqvist', email: 'emma.lindqvist@gmail.com' },
  { id: 82009, name: 'Andre Baptiste', email: 'andrebaptiste.kompa@gmail.com' },
  { id: 82010, name: 'Priya Nair', email: 'priya.nair.songs@gmail.com' },
]

// ---------------------------------------------------------------- Orders

export interface OrderRow {
  id: number
  email: string
  amount: string
  status: 'Completed' | 'No Payment'
  paid: string | null
  type: 'New'
}

export const orders: OrderRow[] = [
  { id: 933101, email: 'maya.linden@gmail.com', amount: '£19.00', status: 'Completed', paid: 'July 28th, 2026', type: 'New' },
  { id: 933102, email: 'tomokafor.music@gmail.com', amount: 'Free (USD)', status: 'No Payment', paid: null, type: 'New' },
  { id: 933103, email: 'sofia.reyes.audio@outlook.com', amount: '$25.00', status: 'Completed', paid: 'July 28th, 2026', type: 'New' },
  { id: 933104, email: 'dkrause@fadedlines.de', amount: '€19.00', status: 'Completed', paid: 'July 27th, 2026', type: 'New' },
  { id: 933105, email: 'amaradiallo@yahoo.com', amount: 'Free (USD)', status: 'No Payment', paid: null, type: 'New' },
  { id: 933106, email: 'jwhitfield.beats@gmail.com', amount: '$69.00', status: 'Completed', paid: 'July 27th, 2026', type: 'New' },
  { id: 933107, email: 'elif.kaya.music@gmail.com', amount: '£19.00', status: 'Completed', paid: 'July 26th, 2026', type: 'New' },
  { id: 933108, email: 'marco@bellinirecords.it', amount: '€99.00', status: 'Completed', paid: 'July 26th, 2026', type: 'New' },
  { id: 933109, email: 'priya.nair.songs@gmail.com', amount: 'Free (USD)', status: 'No Payment', paid: null, type: 'New' },
  { id: 933110, email: 'lmoreau@hotmail.fr', amount: '€19.00', status: 'Completed', paid: 'July 25th, 2026', type: 'New' },
  { id: 933111, email: 'hana.sato.tokyo@gmail.com', amount: '$25.00', status: 'Completed', paid: 'July 25th, 2026', type: 'New' },
  { id: 933112, email: 'gortiz.production@gmail.com', amount: 'Free (USD)', status: 'No Payment', paid: null, type: 'New' },
  { id: 933113, email: 'ninavmusic@icloud.com', amount: '£45.00', status: 'Completed', paid: 'July 24th, 2026', type: 'New' },
  { id: 933114, email: 'kofimensah.gh@gmail.com', amount: '£19.00', status: 'Completed', paid: 'July 24th, 2026', type: 'New' },
  { id: 933115, email: 'emma.lindqvist@gmail.com', amount: '€69.00', status: 'Completed', paid: 'July 23rd, 2026', type: 'New' },
]

// ---------------------------------------------------------------- PayPal payments

export interface PaypalPaymentRow {
  id: number
  orderId: number
  email: string
  amount: string
  reference: string
}

export const paypalPayments: PaypalPaymentRow[] = [
  { id: 597792, orderId: 933101, email: 'maya.linden@gmail.com', amount: '£19.00', reference: '4KX82190JD330852M' },
  { id: 597793, orderId: 933048, email: 'sofia.reyes.audio@outlook.com', amount: '$25.00', reference: '8HT01522WB449102K' },
  { id: 597794, orderId: 932994, email: 'dkrause@fadedlines.de', amount: '€19.00', reference: '2PL55307VF781245A' },
  { id: 597795, orderId: 932951, email: 'jwhitfield.beats@gmail.com', amount: '$69.00', reference: '9WC33871QK205519D' },
  { id: 597796, orderId: 932910, email: 'marco@bellinirecords.it', amount: '€99.00', reference: '5RM10476BX664208J' },
  { id: 597797, orderId: 932877, email: 'elif.kaya.music@gmail.com', amount: '£19.00', reference: '1VG74059NS118332P' },
  { id: 597798, orderId: 932820, email: 'lmoreau@hotmail.fr', amount: '€19.00', reference: '7QD26183TW550941E' },
  { id: 597799, orderId: 932785, email: 'ravirao.audio@gmail.com', amount: '₹1,499.00', reference: '3JB90715HL072486R' },
  { id: 597800, orderId: 932741, email: 'hana.sato.tokyo@gmail.com', amount: '$25.00', reference: '6NF48302UM937160B' },
  { id: 597801, orderId: 932698, email: 'emma.lindqvist@gmail.com', amount: '€69.00', reference: '0YS61924EA284073W' },
  { id: 597802, orderId: 932655, email: 'kofimensah.gh@gmail.com', amount: '£19.00', reference: '4TA35108CJ709521G' },
  { id: 597803, orderId: 932601, email: 'chloebennettmusic@gmail.com', amount: '£45.00', reference: '8ZK07463RD152890V' },
]

// ---------------------------------------------------------------- Subscriptions

export interface SubscriptionRow {
  id: number
  email: string
  amount: string
  status: 'Scheduled' | 'Incomplete' | 'Cancelled'
  method: 'Automatic' | 'Manual'
  processor: 'Stripe' | 'PayPal' | 'Mobile App'
  dueDate: string
  renewableItems: string
}

export const subscriptions: SubscriptionRow[] = [
  { id: 550101, email: 'maya.linden@gmail.com', amount: '£19.00', status: 'Scheduled', method: 'Automatic', processor: 'Stripe', dueDate: 'August 12th, 2026', renewableItems: '1 Item' },
  { id: 550102, email: 'tomokafor.music@gmail.com', amount: '$69.00', status: 'Scheduled', method: 'Automatic', processor: 'PayPal', dueDate: 'August 9th, 2026', renewableItems: '2 Items' },
  { id: 550103, email: 'sofia.reyes.audio@outlook.com', amount: '$25.00', status: 'Incomplete', method: 'Manual', processor: 'Stripe', dueDate: 'August 3rd, 2026', renewableItems: '0 Items' },
  { id: 550104, email: 'dkrause@fadedlines.de', amount: '€19.00', status: 'Scheduled', method: 'Automatic', processor: 'Stripe', dueDate: 'August 21st, 2026', renewableItems: '1 Item' },
  { id: 550105, email: 'amaradiallo@yahoo.com', amount: '$25.00', status: 'Cancelled', method: 'Manual', processor: 'PayPal', dueDate: 'July 30th, 2026', renewableItems: '0 Items' },
  { id: 550106, email: 'jwhitfield.beats@gmail.com', amount: '$69.00', status: 'Scheduled', method: 'Automatic', processor: 'Mobile App', dueDate: 'September 1st, 2026', renewableItems: '1 Item' },
  { id: 550107, email: 'elif.kaya.music@gmail.com', amount: '£19.00', status: 'Incomplete', method: 'Automatic', processor: 'Stripe', dueDate: 'August 6th, 2026', renewableItems: '0 Items' },
  { id: 550108, email: 'marco@bellinirecords.it', amount: '€99.00', status: 'Scheduled', method: 'Automatic', processor: 'PayPal', dueDate: 'August 27th, 2026', renewableItems: '3 Items' },
  { id: 550109, email: 'ninavmusic@icloud.com', amount: '£45.00', status: 'Cancelled', method: 'Manual', processor: 'Stripe', dueDate: 'August 2nd, 2026', renewableItems: '0 Items' },
  { id: 550110, email: 'hana.sato.tokyo@gmail.com', amount: '$25.00', status: 'Scheduled', method: 'Automatic', processor: 'Mobile App', dueDate: 'August 16th, 2026', renewableItems: '1 Item' },
  { id: 550111, email: 'kofimensah.gh@gmail.com', amount: '£19.00', status: 'Scheduled', method: 'Automatic', processor: 'Stripe', dueDate: 'September 4th, 2026', renewableItems: '1 Item' },
  { id: 550112, email: 'emma.lindqvist@gmail.com', amount: '€69.00', status: 'Incomplete', method: 'Manual', processor: 'PayPal', dueDate: 'August 8th, 2026', renewableItems: '0 Items' },
]

// ---------------------------------------------------------------- Approval queue

export interface ApprovalRow {
  id: number
  email: string
  amount: string
  type: 'PayPal' | 'Bank Transfer' | 'Payoneer'
  balance: string
  requested: string
}

export const approvalQueue: ApprovalRow[] = [
  { id: 30101, email: 'maya.linden@gmail.com', amount: '£2,037.10 (GBP)', type: 'PayPal', balance: '£2,105.44', requested: 'July 29th, 2026' },
  { id: 30102, email: 'marco@bellinirecords.it', amount: '£7,412.88 (GBP)', type: 'Bank Transfer', balance: '£7,590.12', requested: 'July 28th, 2026' },
  { id: 30103, email: 'tomokafor.music@gmail.com', amount: '£2,884.50 (GBP)', type: 'PayPal', balance: '£2,901.75', requested: 'July 28th, 2026' },
  { id: 30104, email: 'emma.lindqvist@gmail.com', amount: '£11,206.34 (GBP)', type: 'Bank Transfer', balance: '£11,480.02', requested: 'July 27th, 2026' },
  { id: 30105, email: 'jwhitfield.beats@gmail.com', amount: '£3,150.00 (GBP)', type: 'Payoneer', balance: '£3,312.66', requested: 'July 27th, 2026' },
  { id: 30106, email: 'dkrause@fadedlines.de', amount: '£5,067.21 (GBP)', type: 'Bank Transfer', balance: '£5,120.90', requested: 'July 26th, 2026' },
  { id: 30107, email: 'sofia.reyes.audio@outlook.com', amount: '£2,215.63 (GBP)', type: 'PayPal', balance: '£2,300.18', requested: 'July 25th, 2026' },
  { id: 30108, email: 'v.petrov@duskaudio.bg', amount: '£9,873.45 (GBP)', type: 'Bank Transfer', balance: '£10,004.31', requested: 'July 24th, 2026' },
  { id: 30109, email: 'hana.sato.tokyo@gmail.com', amount: '£2,540.72 (GBP)', type: 'Payoneer', balance: '£2,618.09', requested: 'July 23rd, 2026' },
  { id: 30110, email: 'kofimensah.gh@gmail.com', amount: '£4,725.90 (GBP)', type: 'PayPal', balance: '£4,802.55', requested: 'July 22nd, 2026' },
  { id: 30111, email: 'gortiz.production@gmail.com', amount: '£6,318.27 (GBP)', type: 'Bank Transfer', balance: '£6,455.84', requested: 'July 21st, 2026' },
  { id: 30112, email: 'chloebennettmusic@gmail.com', amount: '£2,092.15 (GBP)', type: 'PayPal', balance: '£2,144.31', requested: 'July 20th, 2026' },
  { id: 30113, email: 'lmoreau@hotmail.fr', amount: '£8,440.66 (GBP)', type: 'Bank Transfer', balance: '£8,517.29', requested: 'July 19th, 2026' },
  { id: 30114, email: 'isafontaine@gmail.com', amount: '£3,905.38 (GBP)', type: 'Payoneer', balance: '£4,010.77', requested: 'July 18th, 2026' },
  { id: 30115, email: 'elif.kaya.music@gmail.com', amount: '£2,760.49 (GBP)', type: 'PayPal', balance: '£2,835.20', requested: 'July 17th, 2026' },
]

// ---------------------------------------------------------------- Staff (for filter selects)

export const accountManagers = [
  'All Account Managers',
  'Fatima Benmouhoub',
  'Oleksandr Iliushyn',
  'Anastasiia Horbanova',
  'Serhii Borovychenko',
  'Alina Melashchenko',
]
