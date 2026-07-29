# Ditto Admin

Aesthetic rebuild of the Ditto Music admin dashboard (dashboard.dittomusic.com/admin) — same information architecture and features as the legacy admin, redesigned on the Ditto design system from `ditto-trends`, skewed professional / tight / clean. UI prototype with mock data (no API wiring).

## Run

```bash
npm install
npm run dev   # http://localhost:5174
```

## Design language

- **Type**: Satoshi everywhere; 22px bold page titles, 13–14px body, `tabular-nums` tables
- **Color**: one accent (Ditto purple `#5f1fff`), ink `#101f3c`, surface `#f7f7fc`, hairline borders
- **Status system** (`StatusBadge`): success = positive/cleared/active · warning = pending/awaiting · danger = blocked/rejected/banned · info = informational · neutral = inactive · accent = plan/brand
- **Buttons** (`Btn`): primary = purple solid (one per page), secondary = quiet outline, danger = red outline for destructive, ghost = tertiary

## Structure

- `src/components/ui/` — the kit: `DataTable` (sort/hover/pagination, `#cell-<key>` slots), `FilterCard`, `StatusBadge`, `Btn`, `TextInput`/`SelectField`/`CheckField`, `LiquidTabs` (ported from ditto-trends), `DetailList`/`DetailRow`, `EmptyState`, `Accordion`, `StatCard`, `Icon`
- `src/components/layout/` — `SideNav` (legacy IA 1:1), `TopBar` (breadcrumb + legacy links), `PageHeader`
- `src/data/nav.ts` — the sidebar tree; `src/data/mock*.ts` — invented mock data
- `src/views/` — one view per legacy admin URL (see `src/router/index.ts` for the full map)

Reference screenshots of the legacy admin live in `~/Documents/Dashboard admin Screenshots/`.
