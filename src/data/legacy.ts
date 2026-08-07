// Anything outside content QC lives in the legacy admin. QC links out to it
// rather than reimplementing accounts, orders, payouts or fraud screens.
//
// NOTE FOR DEV: confirm these paths against the live legacy admin before
// release — they are the only outbound URLs in the app, all in this one file.
const LEGACY_ADMIN = 'https://dashboard.dittomusic.com/admin'

export const legacyAdmin = {
  root: LEGACY_ADMIN,
  user: (id: number | string) => `${LEGACY_ADMIN}/user/view/${id}`,
  release: (id: number | string) => `${LEGACY_ADMIN}/music/view/${id}`,
  fraudFlag: (id: number | string) => `${LEGACY_ADMIN}/user/flag-fraud/${id}`,
}
