# OptiZenqor Restaurant Dashboard

Production-style admin dashboard scaffold for a single restaurant brand with multiple branches.

## Folder Structure

```text
.
├── app
│   ├── (dashboard)
│   │   ├── branches
│   │   │   ├── [branchId]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── customers
│   │   │   ├── [customerId]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── kitchen
│   │   │   └── page.tsx
│   │   ├── menu
│   │   │   ├── items
│   │   │   │   └── [itemId]
│   │   │   │       └── page.tsx
│   │   │   └── page.tsx
│   │   ├── notifications
│   │   │   └── page.tsx
│   │   ├── offers
│   │   │   └── page.tsx
│   │   ├── orders
│   │   │   ├── [orderId]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── reports
│   │   │   └── page.tsx
│   │   ├── reviews
│   │   │   └── page.tsx
│   │   ├── settings
│   │   │   └── page.tsx
│   │   ├── staff
│   │   │   └── page.tsx
│   │   ├── support
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── login
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── (dashboard)
├── components
│   ├── charts
│   │   ├── bar-chart.tsx
│   │   └── line-chart.tsx
│   ├── layout
│   │   ├── dashboard-shell.tsx
│   │   ├── sidebar.tsx
│   │   └── topbar.tsx
│   ├── providers
│   │   └── dashboard-provider.tsx
│   └── ui
│       ├── confirm-dialog.tsx
│       ├── data-table.tsx
│       ├── empty-state.tsx
│       ├── error-state.tsx
│       ├── filters-bar.tsx
│       ├── loading-skeleton.tsx
│       ├── panel.tsx
│       ├── section-heading.tsx
│       ├── side-drawer.tsx
│       ├── stat-card.tsx
│       └── status-badge.tsx
├── data
│   └── mock-dashboard.ts
├── hooks
│   └── use-dashboard-state.ts
├── lib
│   └── utils.ts
├── services
│   └── dashboard-service.ts
├── types
│   └── dashboard.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Setup

1. Install dependencies with `npm install`
2. Start the app with `npm run dev`
3. Open `http://localhost:3000/login`
