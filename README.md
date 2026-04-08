# Finance Tracker — Personal Finance Dashboard

A clean, responsive, client-side personal finance dashboard to track income, expenses, savings, and spending insights — built with vanilla HTML, CSS, and JavaScript.

---

## 🗂 Project Structure

```
zorvyn/
├── index.html   ← Page structure & semantic markup
├── style.css    ← All visual styling & design tokens
├── script.js    ← All data, logic, charts, and interactions
└── README.md    ← This file
```

---

## 🚀 Setup & Usage

No build tools, Node.js, or npm needed. This is a fully client-side project.

### Option A — Open directly in browser
1. Clone or download this repository
2. Double-click `index.html` to open it in your browser

### Option B — Serve locally (recommended for full feature support)
Use any static file server:

```bash
# Python (built-in)
python -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
Install the "Live Server" extension, right-click index.html → Open with Live Server
```

Then open `http://localhost:8080` in your browser.

> **Note:** LocalStorage (used for data persistence) works correctly in both options. No backend or database is required.

---

## 🧭 Approach Overview

### Architecture
The project deliberately avoids frameworks, bundlers, and dependencies beyond Chart.js. The goal is a lightweight, maintainable codebase that works out-of-the-box.

| Concern       | File        | Approach                             |
|---------------|-------------|--------------------------------------|
| Structure     | index.html  | Semantic HTML5, ARIA-friendly        |
| Styling       | style.css   | CSS custom properties (tokens), responsive grid |
| Logic         | script.js   | Vanilla JS modules with clear sections |
| Charts        | script.js   | Chart.js 4 (loaded via CDN)          |
| Persistence   | script.js   | localStorage — no server required    |

### Design System
`style.css` uses **CSS custom properties** (variables) as design tokens, defined on `:root` and overridden with `[data-theme="dark"]`. This means:
- Full dark/light mode with a single attribute flip
- Consistent color, shadow, radius, and spacing throughout
- Easy to theme or extend

### Data Flow
```
SEED data (script.js)
    ↓ loaded once on first visit
localStorage ("sw_txs")
    ↓ read on every page load
txs[] (in-memory array)
    ↓ filtered / sorted by UI state
Rendered DOM (tables, charts, cards)
```

---

## ✨ Features

### 📊 Overview Dashboard
- **4 stat cards** — Total Balance, Monthly Income, Monthly Expenses, Savings Rate
- Each card shows the current value plus a percentage change vs the previous month
- **Balance Trend Chart** — Line chart of cumulative net balance (6 or 12 months)
- **Category Donut Chart** — Top 6 expense categories with a color-coded legend
- **Recent Transactions** — Last 6 entries, with quick "See all" navigation

### 💳 Transactions Page
- **Full transaction table** with Date, Description, Category, Type, and Amount columns
- **Search** — filter by description or category name in real time
- **Filters** — dropdown filters for type (income/expense), category, and month
- **Sorting** — click any column header to sort ascending/descending; active column is highlighted
- **Pagination** — 10 rows per page with smart ellipsis for large datasets
- **Add Transaction** (Admin only) — modal form with type, amount, description, category, and date
- **Edit / Delete** (Admin only) — inline row actions
- **CSV Export** — downloads the current filtered view as a `.csv` file

### 📈 Insights Page
- **Top Spending Category** — highest-spend category all-time
- **Month-on-Month Expenses** — % change between the last two months with a side-by-side comparison
- **Overall Savings Rate** — with an animated progress bar and feedback (Excellent / Good / Needs work)
- **Income vs Expenses Bar Chart** — grouped bar chart for the last 6 months
- **Spending Breakdown** — animated horizontal bars for the top 8 expense categories

### 🌙 Dark / Light Mode
- Persistent across sessions via `localStorage`
- Toggled from the sidebar (desktop) or the mobile header
- Charts re-render automatically to match the active theme

### 🔐 Role System
- **Admin** — can add, edit, and delete transactions
- **Viewer** — read-only mode; action buttons are hidden, a "View-only mode" notice appears
- Switch roles instantly from the sidebar selector

### 📱 Responsive & Mobile-Friendly
- Desktop: fixed sidebar (240 px) + full content area
- Tablet (≤1024 px): two-column stat cards, stacked section grids
- Mobile (≤768 px): sidebar slides in from the left, sticky mobile header, bottom navigation bar with a floating "Add" button
- Extra-small (≤480 px): single-column layouts, compact padding

### 💾 Data Persistence
- All transactions are saved to **localStorage** under the key `sw_txs`
- On first load, 60 months of realistic Indian rupee transactions are seeded automatically
- Edits, additions, and deletions are persisted immediately; clearing site data resets to seed data

---

## 📦 External Dependencies

| Library  | Version | Purpose                  | CDN |
|----------|---------|--------------------------|-----|
| Chart.js | 4.4.1   | Balance trend, donut, and bar charts | `cdnjs.cloudflare.com` |
| Google Fonts | — | Fraunces (display/numbers) + Plus Jakarta Sans (UI) | `fonts.googleapis.com` |

No npm packages, no build step.

---

## 🛠 Customisation Tips

- **Add a new category:** Add an entry to `CAT_COLORS` and `CAT_EMOJIS` in `script.js`, then add it to `EXP_CATS` or `INC_CATS`.
- **Change the colour scheme:** Edit the CSS custom properties in the `:root` block of `style.css`.
- **Add more seed data:** Push objects to the `SEED` array in `script.js` following the existing shape: `{ id, date, desc, cat, type, amount }`.
- **Change currency:** Replace `₹` and `en-IN` locale strings in the `fmtINR` / `fmtK` helpers in `script.js`.

---

## 🖼 Screenshots

Open `index.html` in your browser to see the full UI. The dashboard adapts automatically to light/dark mode and all screen sizes.

---

## 📄 License

MIT — free to use, modify, and distribute.
